// components/BookingHistory.tsx
"use client";

import { useState, useEffect } from "react";
import { Suspense } from "react";
import { BookingHistoryList } from "@/components/BookingHistoryList";
import { BookingHistoryFilters } from "@/components/BookingHistoryFilters";
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getBookingHistory } from "@/app/(client_dashboard)/actions/get-booking-history";


interface BookingHistoryProps {
    session: {
        booking: any;
        tourists: any;
        selectedTourist: {
            id: string;
            firstname: string;
            lastname: string;
        } | null;
    };
}

export default function BookingHistory({ session }: BookingHistoryProps) {
    const selectedTourist = session.selectedTourist;

    const [statusFilter, setStatusFilter] = useState("all");
    const [dateFilter, setDateFilter] = useState("june-2025");
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (selectedTourist) {
            const fetchBookings = async () => {
                const data = await getBookingHistory(selectedTourist.id);
                setBookings(data);
                setLoading(false);
            };
            fetchBookings();
        }
    }, [selectedTourist]);

    if (!selectedTourist) {
        return <div>No tourist selected</div>;
    }

    // Filter bookings based on status and date
    const filteredBookings = bookings.filter((booking) => {
        const matchesStatus = statusFilter === "all" || booking.status.toLowerCase() === statusFilter;
        const matchesDate = booking.createdAt.includes(dateFilter); // Adjust this logic based on your date format
        return matchesStatus && matchesDate;
    });

    if (loading) {
        return <BookingHistorySkeleton />;
    }

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
                <BookingHistoryFilters onStatusChange={setStatusFilter} onDateChange={setDateFilter} />

                <Suspense fallback={<BookingHistorySkeleton />}>
                    <BookingHistoryList bookings={filteredBookings} />
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