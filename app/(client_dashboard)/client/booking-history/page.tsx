
import { Suspense } from "react";
import { BookingHistoryList } from "@/components/BookingHistoryList";
import { BookingHistoryFilters } from "@/components/BookingHistoryFilters";
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getSession } from "@/lib/session";
import { getBookingHistory } from "../../actions/get-booking-history";


export default async function BookingHistory() {
    const session = await getSession();
    const selectedTourist = session.selectedTourist;

    if (!selectedTourist) {
        return <div>No tourist selected</div>;
    }

    const bookings = await getBookingHistory(selectedTourist.id);

    return (
        <>
            <header className="h-16 border-b flex items-center px-4 md:px-6 bg-background">
                <div className="flex items-center">
                    <SidebarTrigger className="md:hidden mr-2" />
                    <h1 className="text-2xl font-semibold">Booking History</h1>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <span className="text-sm font-medium md:inline-block">{`${selectedTourist.firstname} ${selectedTourist.lastname}`}</span>
                </div>
            </header>

            <div className="p-4 md:p-6 space-y-6">
                <BookingHistoryFilters />

                <Suspense fallback={<BookingHistorySkeleton />}>
                    <BookingHistoryList bookings={bookings} />
                </Suspense>
            </div>
        </>
    );
}

function BookingHistorySkeleton() {
    return (
        <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                ))}
            </div>
        </div>
    );
}