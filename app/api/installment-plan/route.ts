import { NextResponse } from 'next/server';
import { addWeeks, addDays } from 'date-fns';
import { Prisma } from '@/lib/prisma';

interface CreateInstallmentPlanInput {
    tnr: string;
    tourPackageType: 'International' | 'Local';
    tripStartDate: string; 
    totalPrice: number;
    downPayment: number;
    totalInstallments: number;
}

function calculateDueDates(startDate: Date, endDate: Date, numberOfInstallments: number): Date[] {
    const dueDates: Date[] = [];
    const timeDifference = endDate.getTime() - startDate.getTime();
    const interval = timeDifference / numberOfInstallments;

    // Generate due dates starting from the first interval after the start date
    for (let i = 1; i <= numberOfInstallments; i++) {
        const dueDate = new Date(startDate.getTime() + interval * i);
        dueDates.push(dueDate);
    }

    return dueDates;
}

function calculateExpectedPayments(totalPrice: number, downPayment: number, totalInstallments: number): number[] {
    const remainingAmount = totalPrice - downPayment;
    const installmentAmount = remainingAmount / totalInstallments;
    const expectedPayments: number[] = [];

    for (let i = 0; i < totalInstallments; i++) {
        expectedPayments.push(installmentAmount);
    }

    return expectedPayments;
}

export async function POST(request: Request) {
    const body: CreateInstallmentPlanInput = await request.json();

    const { tnr, tourPackageType, tripStartDate, totalPrice, downPayment, totalInstallments } = body;

    const endDate = tourPackageType === 'International'
        ? addWeeks(new Date(tripStartDate), -2) // 2 weeks before trip start date
        : addDays(new Date(tripStartDate), -7); // 1 week before trip start date

    // Calculate due dates
    const dueDates = calculateDueDates(new Date(), endDate, totalInstallments);

    // Calculate expected payments
    const expectedPayments = calculateExpectedPayments(totalPrice, downPayment, totalInstallments);

    try {
        // Create the installment plan
        const installmentPlan = await Prisma.installmentPlan.create({
            data: {
                tnr,
                startDate: new Date(), // Start date is the current date
                endDate,
                totalInstallments,
                nextInstallmentNumber: 1, // Start with the first installment
                nextPaymentDueDate: dueDates[0], // First due date
                dueDates: JSON.stringify(dueDates), // Store due dates as JSON
                expectedPayments: JSON.stringify(expectedPayments), // Store expected payments as JSON
            },
        });

        // Record the down payment
        await Prisma.payment.create({
            data: {
                amount: downPayment,
                installmentNumber: 0, // 0 indicates down payment
                status: 'Paid',
                transactionId: `dp-${Date.now()}-${Math.random().toString(36).substring(2, 8)}-${tnr}`,
                tnr,
            },
        });

        // Update the booking amountPaid
        await Prisma.booking.update({
            where: { tnr },
            data: {
                amountPaid: downPayment, 
            },
        });

        return NextResponse.json({ success: true, data: installmentPlan });
    } catch (error) {
        console.error('Error creating installment plan:', error);
        return NextResponse.json({ success: false, error: 'Failed to create installment plan' }, { status: 500 });
    }
}