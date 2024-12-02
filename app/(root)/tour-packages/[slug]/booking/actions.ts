'use server'

import { TourOptionWithQuantityProp } from "@/type";




export async function submitBooking(
    formValues: { name: string; email: string; phone: string; address: string },

    title?: string,
    parsedTourOption?: TourOptionWithQuantityProp,
    total?: number
) {
  console.log(formValues, title, parsedTourOption, total);
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Here you would typically:
  // 1. Save the booking to your database
  // 2. Send confirmation emails
  // 3. Process payment
  // 4. Update inventory/availability

  // For now, we'll just return a success response
  return {
    success: true,
    bookingId: Math.random().toString(36).substring(7),
  }
}

