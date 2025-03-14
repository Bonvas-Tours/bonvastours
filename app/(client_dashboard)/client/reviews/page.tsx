import { Suspense } from "react"

import { ReviewsList } from "@/components/ReviewsList"
import { Skeleton } from "@/components/ui/skeleton"

export default function Reviews() {
    return (
            <div className="p-4 md:p-6 space-y-6">
                <h1 className="text-2xl font-semibold">Reviews</h1>

                <Suspense fallback={<ReviewsSkeleton />}>
                    <ReviewsList />
                </Suspense>
            </div>
    )
}

function ReviewsSkeleton() {
    return (
        <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-40 w-full" />
            ))}
        </div>
    )
}

