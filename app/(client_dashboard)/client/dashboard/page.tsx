import { getSession } from "@/lib/session";
import { Suspense } from "react";
import { ActiveBooking } from "@/components/ActiveBooking";
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default async function Dashboard() {
    const session = await getSession();
    const booking = session.booking;
    const selectedTourist = session.selectedTourist;

    console.log("Booking Data:", booking);
    console.log("Selected Tourist Data:", selectedTourist); 

    console.log(booking, selectedTourist);

    if (!booking || !selectedTourist) {
        return <div>Unauthorized access</div>;
    }

    return (
        <>
            <header className="h-16 border-b flex items-center px-4 md:px-6 bg-background">
                <div className="flex items-center">
                    <SidebarTrigger className="md:hidden mr-2" />
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <span className="text-sm font-medium md:inline-block">{`${selectedTourist?.firstname} ${selectedTourist?.lastname}`}</span>
                </div>
            </header>

            <div className="p-4 md:p-6 space-y-6">
                <div className="space-y-6">
                    <Suspense fallback={<BookingSkeleton />}>
                        <ActiveBooking booking={booking} />
                    </Suspense>
                </div>
            </div>
        </>
    );
}

function BookingSkeleton() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-9 w-24" />
            </div>
            <div className="bg-white rounded-md border p-4 space-y-4">
                <div className="flex gap-4">
                    <Skeleton className="h-24 w-40 rounded-md" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-8 w-24" />
                </div>
                <Skeleton className="h-12 w-full" />
            </div>
        </div>
    );
}