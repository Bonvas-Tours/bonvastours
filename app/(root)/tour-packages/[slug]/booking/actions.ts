'use server'

import BookingConfirmationEmail from "@/app/(root)/emails/BookingConfirmationEmail"
import { TourOptionWithQuantityProp } from "@/type"
import { Resend } from 'resend'


const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitBooking(
    formValues: { 
        name: string
        email: string
        phone: string
        address: string
        country: string
        city: string
        additionalInfo?: string
    },
    title?: string,
    parsedTourOption?: TourOptionWithQuantityProp,
    total?: number
) {
    console.log(formValues, title, parsedTourOption, total)

    try {
        // Send email to marketing team
        await resend.emails.send({
            from: 'Bonvas Tours <noreply@bonvastours.com>',
            to: ['snm@bonvastours.com', `${formValues.email}`],
            subject: 'New Booking Submission',
            react: BookingConfirmationEmail({
                ...formValues,
                tourTitle: title || 'N/A',
                tourOption: parsedTourOption || {
                    startDate: 'N/A',
                    endDate: 'N/A',
                    prices: { adult: 0, couple: 0 },
                    quantities: { adult: 0, couple: 0 }
                },
                total: total || 0
            })
        })

        return {
            success: true,
            bookingId: Math.random().toString(36).substring(7),
        }
    } catch (error) {
        console.error('Error submitting booking:', error)
        throw new Error('Failed to submit booking')
    }
}

