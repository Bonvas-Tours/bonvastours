
import { notFound } from "next/navigation";
import { getSession } from "@/lib/session";
import { BookingDetailHeader } from "@/components/BookingDetailHeader";
import { BookingDetailSidebar } from "@/components/BookingDetailSidebar";
import { BookingDetailInfo } from "@/components/BookingDetailInfo";
import { BookingDetailPayments } from "@/components/BookingDetailPayments";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default async function BookingDetail({ params }: { params: Promise<{ tnr: string }> }) {
    const param = await params;
   

    const session = await getSession();
    const booking = session.booking;
    const selectedTourist = session.selectedTourist;

    // If the booking is not found or the tnr does not match or there is no selected tourist
    if (!booking || booking.tnr !== param.tnr || !selectedTourist) {
        notFound();
    }
    return (
        <div className="p-4 md:p-6 space-y-6">
            <BookingDetailHeader />

            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
                <Suspense fallback={<Skeleton className="h-[500px] w-full" />}>
                    <BookingDetailSidebar booking={booking} primaryTourist={selectedTourist} />
                </Suspense>

                <div className="space-y-6">
                    <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                        <BookingDetailInfo booking={booking} />
                    </Suspense>

                    <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                        <BookingDetailPayments booking={booking} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}