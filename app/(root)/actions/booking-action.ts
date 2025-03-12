"use server"

import { z } from "zod"

const bookingSchema = z.object({
  bookingCode: z.string().min(5, "Booking code must be at least 5 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
})

export async function findBooking(formData: FormData) {
  const validatedFields = bookingSchema.safeParse({
    bookingCode: formData.get("bookingCode"),
    lastName: formData.get("lastName"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { bookingCode, lastName } = validatedFields.data

  try {
    const response = await fetch(`localhost:3000/api/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingCode, lastName }),
    })

    const data = await response.json()
    return data
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch booking information",
    }
  }
}

