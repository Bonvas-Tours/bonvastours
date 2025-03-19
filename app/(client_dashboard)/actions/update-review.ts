"use server";

import { z } from "zod";
import { Prisma } from "@/lib/prisma";

const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(1, { message: "Comment cannot be empty" }),
});

export async function updateReview(reviewId: string, formData: FormData) {
  const validatedFields = reviewSchema.safeParse({
    rating: Number(formData.get("rating")),
    comment: formData.get("comment"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { rating, comment } = validatedFields.data;

  try {
    const updatedReview = await Prisma.review.update({
      where: { id: reviewId },
      data: { rating, comment },
    });

    return {
      success: true,
      message: "Review updated successfully!",
      review: updatedReview,
    };
  } catch (error) {
    console.error("Error updating review:", error);
    return {
      success: false,
      message: "Failed to update review. Please try again.",
    };
  }
}