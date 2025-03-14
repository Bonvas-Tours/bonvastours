import { Suspense } from "react"
import { ActiveBooking } from "@/components/ActiveBooking"
import { CompletedBookings } from "@/components/CompletedBookings"
import { Skeleton } from "@/components/ui/skeleton"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { getActiveBooking, getCompletedBookings } from "@/lib/api"
import Link from "next/link"

export default async function Dashboard() {
    const completedBookings = await getCompletedBookings() 
    const activeBooking = await getActiveBooking()
    // console.log(completedBookings, activeBooking)
 
    return (
        <>
            <header className="h-16 border-b flex items-center px-4 md:px-6 bg-background">
                <div className="flex items-center">
                    <SidebarTrigger className="md:hidden mr-2" />
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <span className="text-sm font-medium md:inline-block">Divine Kwatsenu</span>
                </div>
            </header>

            {!activeBooking && completedBookings.length === 0 ? (
                <div className="bg-white rounded-md border p-6 text-center mx-10 my-5">
                    <h2 className="text-lg font-medium mb-2">No Active Bookings</h2>
                    <p className="text-muted-foreground mb-4">You don't have any active bookings at the moment.</p>
                    <Button asChild>
                        <Link href="/tour-packages">Browse Tour Packages</Link>
                    </Button>
                </div>
            ): (           
            <div className="p-4 md:p-6 space-y-6">
                <div className="space-y-6">
                    <Suspense fallback={<BookingSkeleton />}>
                        {activeBooking && <ActiveBooking booking={activeBooking} />}
                    </Suspense>

                    
                        <Suspense fallback={<BookingSkeleton />}>
                            <CompletedBookings bookings={completedBookings} />
                        </Suspense>
                    
                </div>
            </div>
            ) }
        </>
    )
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
    )
}
