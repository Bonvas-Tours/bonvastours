import { getReviews } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { format } from "date-fns"

export async function ReviewsList() {
  const reviews = await getReviews()

  if (reviews.length === 0) {
    return (
      <div className="bg-white rounded-md border p-6 text-center">
        <h2 className="text-lg font-medium mb-2">No Reviews Yet</h2>
        <p className="text-muted-foreground mb-4">You haven't submitted any reviews yet.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{review.tourPackage?.name}</CardTitle>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        index < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{format(new Date(review.createdAt), "MMM dd, yyyy")}</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{review.comment}</p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

