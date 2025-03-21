import { getSession } from "@/lib/session";

import { ReviewsList } from "@/components/ReviewsList";
import { getReviewsByTouristId } from "../../actions/get-review-by-tourist-id";
import { Result } from "postcss";

export default async function Reviews() {
    const session = await getSession();
    const selectedTourist = session.selectedTourist;

    if (!selectedTourist) {
        return (
            <div className="p-4 md:p-6 space-y-6">
                <h1 className="text-2xl font-semibold">Reviews</h1>
                <div className="bg-white rounded-md border p-6 text-center">
                    <h2 className="text-lg font-medium mb-2">No Tourist Selected</h2>
                    <p className="text-muted-foreground mb-4">Please select a tourist to view reviews.</p>
                </div>
            </div>
        );
    }

    const result = await getReviewsByTouristId(selectedTourist.id);

    const reviews = result.reviews || []; 
    
    return (
        <div className="p-4 md:p-6 space-y-6">
            <h1 className="text-2xl font-semibold">Reviews</h1>
            <ReviewsList reviews={reviews} />
        </div>
    );
}
