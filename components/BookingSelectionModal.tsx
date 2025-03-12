"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Booking {
    id: number
    firstName: string
    lastName: string
    tourPackage: string
    date: string
}

interface BookingSelectionModalProps {
    isOpen: boolean
    onClose: () => void
    bookings: Booking[]
    onSelect: (bookingId: number) => void
}

export default function BookingSelectionModal({ isOpen, onClose, bookings, onSelect }: BookingSelectionModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Multiple tourists found</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <p className="text-sm text-muted-foreground">
                        We found multiple tourists with the same last name. Please select your name:
                    </p>
                    <div className="space-y-2">
                        {bookings.map((booking) => (
                            <div
                                key={booking.id}
                                className="flex justify-between items-center p-3 border rounded-md hover:bg-muted cursor-pointer"
                                onClick={() => onSelect(booking.id)}
                            >
                                <div>
                                    <p className="font-medium">
                                        {booking.firstName} {booking.lastName}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {booking.tourPackage} - {booking.date}
                                    </p>
                                </div>
                                <Button variant="outline" size="sm">
                                    Select
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

