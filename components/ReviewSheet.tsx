"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { updateReview } from "@/app/(client_dashboard)/actions/update-review";
import { toast } from "sonner";
import { useRouter } from "next/navigation"; // Import the router for page refresh

interface ReviewSheetProps {
  reviewId: string;
  initialRating: number;
  initialComment: string;
}

export function ReviewSheet({ reviewId, initialRating, initialComment }: ReviewSheetProps) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(initialRating);
  const [comment, setComment] = useState(initialComment);
  const [errors, setErrors] = useState<{ rating?: string[]; comment?: string[] }>({});
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter(); 

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("rating", rating.toString());
    formData.append("comment", comment);

    setLoading(true);

    try {
      const result = await updateReview(reviewId, formData);

      if (result.success) {
        router.refresh(); // Refresh the page to reflect the updated review

        // Delay the toast notification by 500ms
        setTimeout(() => {
          toast.success("Review updated successfully!");
        }, 1000);

        setOpen(false);
        setErrors({});
      } else {
        setErrors(result.errors || {});
        toast.error(result.message || "Failed to update review. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to update review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="sm">Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Review</SheetTitle>
        </SheetHeader>

        <div className="flex justify-center gap-4 mt-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} type="button" onClick={() => setRating(star)} className="text-3xl focus:outline-none">
              <Star className={`h-8 w-8 ${rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
            </button>
          ))}
        </div>
        {errors.rating && <p className="text-red-500 text-sm mt-2">{errors.rating[0]}</p>}

        <div className="mt-6">
          <div className="text-sm font-medium mb-2">Review Message</div>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="We value your opinion. Take a moment to review your experience."
            className="min-h-[120px]"
          />
          {errors.comment && <p className="text-red-500 text-sm mt-2">{errors.comment[0]}</p>}
        </div>

        <Button className="mt-6" onClick={handleSubmit} disabled={rating === 0 || loading}>
          {loading ? "Updating..." : "Edit"} {/* Show loading text when loading */}
        </Button>
      </SheetContent>
    </Sheet>
  );
}