"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarCheck2, User } from "lucide-react";
import BookingSelectionModal from "./BookingSelectionModal";
import { findBooking } from "@/app/(client_dashboard)/actions/manage-booking";
import { toast } from "sonner";
import { setSelectedTouristSession } from "@/app/(client_dashboard)/actions/set-selected-tourist-session";




export default function BookingForm() {
    const router = useRouter();
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const [showModal, setShowModal] = useState(false);
    const [fetchedTourists, setFetchedTourists] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [isSelectingTourist, setIsSelectingTourist] = useState(false); 

    async function handleSubmit(formData: FormData) {
        setErrors({});
        setIsLoading(true); 

        try {
            const result = await findBooking(formData);

            if (!result.success) {
                if (result.errors) {
                    setErrors(result.errors);
                } else {
                    toast.error(result.message || "No booking found with these details");
                }
            } else if (result.hasDuplicates) {
                setFetchedTourists(result.tourists || []);
                setShowModal(true);
            } else {
                toast.success("Booking found! Redirecting...");
                router.push("/client/dashboard");
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false); 
        }
    }

    async function handleSelectTourist(touristId: string) {
        setIsSelectingTourist(true);

        try {
            // Find the selected tourist from the fetchedTourists array
            const selectedTourist = fetchedTourists.find((tourist) => tourist.id === touristId);
            console.log("Selected Tourist: ", selectedTourist)
            if (!selectedTourist) {
                toast.error("Invalid tourist selection");
                return;
            }

            // Call server action to set the selected tourist in the session
            const result = await setSelectedTouristSession(selectedTourist);
            if (result.success) {
                toast.success("Tourist selected! Redirecting...");
                router.push("/client/dashboard");
            } else {
                toast.error("Failed to select tourist. Please try again.");
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsSelectingTourist(false);
            setShowModal(false);
        }
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    handleSubmit(formData);
                }}
                className="flex flex-col gap-4 w-full"
            >
                <div className="flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row md:items-center md:gap-2 w-full">
                    <div className="relative flex-1">
                        <CalendarCheck2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            name="tnr"
                            placeholder="eg. TNR3HD"
                            className="h-12 bg-white pl-10"
                            disabled={isLoading} // Disable input while loading
                        />
                        {errors.tnr && <p className="text-red-500 text-sm mt-1">{errors.tnr[0]}</p>}
                    </div>
                    <div className="relative flex-1">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            name="lastName"
                            placeholder="eg. Naya"
                            className="h-12 bg-white pl-10"
                            disabled={isLoading} // Disable input while loading
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName[0]}</p>}
                    </div>
                    <Button
                        type="submit"
                        className="bg-orange-600 hover:bg-orange-700 h-12 w-full md:w-auto md:self-end px-8"
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? "Searching..." : "Continue"} {/* Show loading text */}
                    </Button>
                </div>
            </form>

            <BookingSelectionModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                tourists={fetchedTourists}
                onSelect={handleSelectTourist}
                isLoading={isSelectingTourist} // Pass loading state to modal
            />
        </>
    );
}