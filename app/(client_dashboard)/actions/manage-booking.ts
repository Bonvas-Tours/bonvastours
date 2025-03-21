"use server";

import { z } from "zod";
import { Prisma } from "@/lib/prisma";
import { setSession } from "@/lib/session";

// Zod schema for input validation
const bookingSchema = z.object({
  tnr: z.string().min(6, { message: "TNR must be at least 6 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
});

export async function findBooking(formData: FormData) {
  const validatedFields = bookingSchema.safeParse({
    tnr: formData.get("tnr"),
    lastName: formData.get("lastName"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      booking: null,
    };
  }

  const { tnr, lastName } = validatedFields.data;

  try {
    const booking = await Prisma.booking.findUnique({
      where: { tnr: tnr.toUpperCase() },
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
        booking: null,
      };
    }

    const matchingTourists = booking.bookingTourists
      .map((bt) => bt.tourist)
      .filter((tourist) => tourist.lastname.toLowerCase() === lastName.toLowerCase());

    if (matchingTourists.length === 0) {
      return {
        success: false,
        message: "No tourist found with this last name for the provided TNR",
        booking: null,
      };
    }

    console.log("Booking:", booking)
    // Store booking and tourists in cookies
    await setSession("booking", booking); 

    if (matchingTourists.length > 1) {
      return {
        success: true,
        hasDuplicates: true,
        booking,
        tourists: matchingTourists,
      };
    } else {
      await setSession("selectedTourist", matchingTourists[0]);
      return {
        success: true,
        hasDuplicates: false,
        booking,
        tourists: matchingTourists,
      };
    }
  } catch (error) {
    console.error("Error fetching booking:", error);
    return {
      success: false,
      message: "Failed to fetch booking information",
      booking: null,
    };
  }
}
