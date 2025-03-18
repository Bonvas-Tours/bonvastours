"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

interface BookingSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    tourists: any[];
    onSelect: (touristId: string) => void;
    isLoading: boolean;
}

export default function BookingSelectionModal({ isOpen, onClose, tourists, onSelect, isLoading }: BookingSelectionModalProps) {
    const [selectedTourist, setSelectedTourist] = useState<string | null>(null);

    function handleConfirm() {
        if (selectedTourist) {
            onSelect(selectedTourist);
        }
    }

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
                    <RadioGroup
                        className="space-y-2"
                        value={selectedTourist?.toString() || ""}
                        onValueChange={(value) => setSelectedTourist(value)}
                    >
                        {tourists.map((tourist) => (
                            <label
                                key={tourist.id}
                                className="flex items-center gap-2 p-3 border rounded-md hover:bg-muted cursor-pointer"
                            >
                                <RadioGroupItem value={tourist.id.toString()} />
                                <p className="font-medium">
                                    {tourist.firstname} {tourist.lastname}
                                </p>
                            </label>
                        ))}
                    </RadioGroup>
                    <Button
                        className="w-full bg-orange-600 hover:bg-orange-700"
                        onClick={handleConfirm}
                        disabled={!selectedTourist || isLoading}
                    >
                        {isLoading ? "Confirming..." : "Confirm Selection"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}