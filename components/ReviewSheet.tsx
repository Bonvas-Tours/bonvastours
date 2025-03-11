"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

interface ReviewSheetProps {
  bookingId: string
}

export function ReviewSheet({ bookingId }: ReviewSheetProps) {
  const [open, setOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")

  const handleSubmit = () => {
    // In a real app, this would submit the review to the server
    alert(`Review submitted with rating: ${rating}, comment: ${comment}`)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="sm">Add Review</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Review</SheetTitle>
        </SheetHeader>

        <div className="flex justify-center gap-4 mt-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} type="button" onClick={() => setRating(star)} className="text-3xl focus:outline-none">
              <Star className={`h-8 w-8 ${rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
            </button>
          ))}
        </div>

        <div className="mt-6">
          <div className="text-sm font-medium mb-2">Review Message</div>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="We value your opinion. Take a moment to review your experience."
            className="min-h-[120px]"
          />
        </div>

        <Button className="w-full mt-6" onClick={handleSubmit} disabled={rating === 0}>
          Submit Review
        </Button>
      </SheetContent>
    </Sheet>
  )
}

