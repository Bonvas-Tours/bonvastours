"use server";

import { Prisma } from "@/lib/prisma";
import { z } from "zod";

// Zod schema for input validation
const touristIdSchema = z.string().min(1, { message: "Tourist ID is required" });

export async function getReviewsByTouristId(touristId: string) {
  // Validate the touristId input
  const validatedFields = touristIdSchema.safeParse(touristId);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      reviews: null,
    };
  }

  try {
    // Fetch reviews for the specified touristId
   const reviews = await Prisma.review.findMany({
  where: { touristId },
  select: {
    id: true,
    rating: true,
    comment: true,
    createdAt: true,
    tourPackage: {
      select: {
        name: true,
      },
    },
  },
});

    return {
      success: true,
      reviews,
    };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return {
      success: false,
      message: "Failed to fetch reviews. Please try again.",
      reviews: null,
    };
  }
}