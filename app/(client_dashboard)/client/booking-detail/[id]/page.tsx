import { Suspense } from "react"
import { notFound } from "next/navigation"

import { Skeleton } from "@/components/ui/skeleton"
import { getBookingById } from "@/lib/api"
import { BookingDetailHeader } from "@/components/BookingDetailHeader"
import { BookingDetailSidebar } from "@/components/BookingDetailSidebar"
import { BookingDetailInfo } from "@/components/BookingDetailInfo"
import { BookingDetailPayments } from "@/components/BookingDetailPayments"

export default async function BookingDetail({ params }: { params: { id: string } }) {
    const booking = await getBookingById(params.id)

    if (!booking) {
        notFound()
    }

    return (
            <div className="p-4 md:p-6 space-y-6">
                <BookingDetailHeader bookingId={params.id} />

                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
                    <Suspense fallback={<Skeleton className="h-[500px] w-full" />}>
                        <BookingDetailSidebar bookingId={params.id} />
                    </Suspense>

                    <div className="space-y-6">
                        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                            <BookingDetailInfo bookingId={params.id} />
                        </Suspense>

                        <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                            <BookingDetailPayments bookingId={params?.id} />
                        </Suspense>
                    </div>
                </div>
            </div>
    )
}

