import { Prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface PayInstallmentInput {
    tnr: string;
    amount: number;
    email: string; // User's email for Paystack
}

export async function POST(request: Request) {
    const body: PayInstallmentInput = await request.json();

    const { tnr, amount, email } = body;
    console.log(body)
    try {
        // Fetch the installment plan
        const installmentPlan = await Prisma.installmentPlan.findUnique({
            where: { tnr },
        });

        if (!installmentPlan) {
            return NextResponse.json({ success: false, error: 'Installment plan not found' }, { status: 404 });
        }

        // Check if the installment plan has expired
        const currentDate = new Date();
        if (currentDate > new Date(installmentPlan.endDate)) {
            return NextResponse.json({ success: false, error: 'Installment plan has expired' }, { status: 400 });
        }

        // Fetch the next installment number
        const nextInstallmentNumber = installmentPlan.nextInstallmentNumber;

        // Initialize payment with Paystack
        const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            },
            body: JSON.stringify({
                email,
                amount: amount * 100, // Convert amount to kobo
                reference: `in-${Date.now()}-${Math.random().toString(36).substring(2, 8)}-${tnr}-${nextInstallmentNumber}`,
            }),

        });

        const paystackData = await paystackResponse.json();

        if (!paystackResponse.ok || paystackData.status !== true) {
            console.error('Paystack initialization failed:', paystackData.message);
            return NextResponse.json({ success: false, error: 'Payment initialization failed' }, { status: 400 });
        }

        // Return the Paystack authorization URL to the client
        return NextResponse.json({
            success: true,
            data: {
                authorization_url: paystackData.data.authorization_url,
                reference: paystackData.data.reference,
            },
        });
    } catch (error) {
        console.error('Error processing installment payment:', error);
        return NextResponse.json({ success: false, error: 'Failed to process installment payment' }, { status: 500 });
    }
}