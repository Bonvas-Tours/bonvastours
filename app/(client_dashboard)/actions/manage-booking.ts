"use server"

import { z } from "zod"
import { Prisma } from "@/lib/prisma"


// Define Zod schema for input validation
const bookingSchema = z.object({
  tnr: z.string().min(6, { message: "TNR must be at least 6 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
})

// Define the response type
interface FindBookingResponse {
  success: boolean
  errors?: Record<string, string[]>
  message?: string
  hasDuplicates?: boolean
  booking?: any
  tourists?: any[]
}

export async function findBooking(formData: FormData): Promise<FindBookingResponse> {
  
  // Validate input fields using Zod schema
  const validatedFields = bookingSchema.safeParse({
    tnr: formData.get("tnr") as string | null,
    lastName: formData.get("lastName") as string | null,
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { tnr, lastName } = validatedFields.data
  console.log(tnr, lastName)
  
  try {
    // Fetch the booking with proper relations
   const booking = await Prisma.booking.findUnique({
  where: { tnr },
  include: {
    payments: true,
    tourPackage: {
      include: {
        location: true,
      },
    },
    selectedOption: true,
       bookingTourists: {
          include: {
            tourist: true, 
          },
        },
     },

});


    if (!booking) {
      return {
        success: false,
        message: "No booking found with this TNR",
      }
    }

    // Extract tourists and filter by last name
    const matchingTourists = booking.bookingTourists
      .map((bt) => bt.tourist)
      .filter((tourist) => tourist.lastname.toLowerCase() === lastName.toLowerCase())

    if (matchingTourists.length === 0) {
      return {
        success: false,
        message: "No tourist found with this last name for the provided TNR",
      }
    }

    return {
      success: true,
      hasDuplicates: matchingTourists.length > 1,
      booking,
      tourists: matchingTourists,
    }
  } catch (error) {
    console.error("Error fetching booking:", error)
    return {
      success: false,
      message: "Failed to fetch booking information",
    }
  }
}
