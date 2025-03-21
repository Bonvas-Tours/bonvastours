import { NextResponse } from 'next/server';
import { Prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        // Log the raw request body for debugging
        const rawBody = await request.text();
        console.log('Raw request body:', rawBody);

        // Check if the request body is empty
        if (!rawBody) {
            return NextResponse.json({ success: false, error: 'Empty request body' }, { status: 400 });
        }

        // Parse the raw body as JSON
        let body;
        try {
            body = JSON.parse(rawBody);
        } catch (error) {
            console.error('Invalid JSON payload:', error);
            return NextResponse.json({ success: false, error: 'Invalid JSON payload' }, { status: 400 });
        }

        const { event, data } = body;

        // Handle the "charge.success" event
        if (event === 'charge.success') {
            const { reference, amount } = data;

            // Extract TNR and installment number from the reference
            const referenceParts = reference.split('-');
            const tnr = referenceParts[3]; // TNR is the 4th part of the reference
            const installmentNumber = parseInt(referenceParts[4]); // Installment number is the 5th part

            console.log("TNR:", tnr, "INSTALLMENT NUMBER:", installmentNumber);

            // Create the payment record
            await Prisma.payment.create({
                data: {
                    amount: amount / 100, // Convert back to original amount
                    installmentNumber,
                    status: 'Paid',
                    transactionId: reference,
                    tnr,
                },
            });

            // Fetch the booking and installment plan
            const booking = await Prisma.booking.findUnique({
                where: { tnr },
                include: { installmentPlan: true },
            });

            if (!booking || !booking.installmentPlan) {
                return NextResponse.json({ success: false, error: 'Booking or installment plan not found' }, { status: 404 });
            }

            // Update the booking amountPaid
            const updatedAmountPaid = booking.amountPaid + amount / 100;
            await Prisma.booking.update({
                where: { tnr },
                data: {
                    amountPaid: updatedAmountPaid,
                },
            });

           

            // Update the booking status to "Approved" if the total amount is paid
            if (updatedAmountPaid >= booking.totalPrice) {
                await Prisma.booking.update({
                    where: { tnr },
                    data: {
                        status: 'Approved',
                    },
                });
            }

            return NextResponse.json({ success: true });
        }

        // Handle other events (optional)
        return NextResponse.json({ success: false, error: 'Unsupported event' }, { status: 400 });
    } catch (error) {
        console.error('Error processing webhook:', error);
        return NextResponse.json({ success: false, error: 'Failed to process webhook' }, { status: 500 });
    }
}