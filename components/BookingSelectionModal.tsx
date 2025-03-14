"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"



interface BookingSelectionModalProps {
    isOpen: boolean
    onClose: () => void
    tourists: any[]
    onSelect: (bookingId: number) => void
}

export default function BookingSelectionModal({ isOpen, onClose, tourists, onSelect }: BookingSelectionModalProps) {
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
                        {tourists.map((tourist) => (
                            <div
                                key={tourist.id}
                                className="flex justify-between items-center p-3 border rounded-md hover:bg-muted cursor-pointer"
                                onClick={() => onSelect(tourist.id)}
                            >
                                <div>
                                    <p className="font-medium">
                                        {tourist.firstname} {tourist.lastname}
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

