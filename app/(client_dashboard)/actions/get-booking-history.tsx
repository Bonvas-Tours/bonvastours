// actions/booking-actions.ts
"use server";

import { Prisma } from "@/lib/prisma";

export async function getBookingHistory(touristId: string) {
    try {
        const bookings = await Prisma.booking.findMany({
            where: {
                bookingTourists: {
                    some: {
                        touristId: touristId,
                    },
                },
            },
            include: {
                payments: true,
                tourPackage: {
                    include: {
                        location: true,
                    },
                },
                selectedOption: true,
                bookingTourists: {
                    include: {
                        tourist: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return bookings;
    } catch (error) {
        console.error("Error fetching booking history:", error);
        throw new Error("Failed to fetch booking history");
    }
}