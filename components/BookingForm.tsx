"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User } from "lucide-react"
import BookingSelectionModal from "./BookingSelectionModal"
import { findBooking } from "@/app/(root)/actions/booking-action"

export default function BookingForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string, string[]>>({})
    const [showModal, setShowModal] = useState(false)
    const [bookings, setBookings] = useState<any[]>([])
    const [errorMessage, setErrorMessage] = useState("")

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        setErrors({})
        setErrorMessage("")

        try {
            const result = await findBooking(formData)

            if (!result.success) {
                if (result.errors) {
                    setErrors(result.errors)
                } else {
                    setErrorMessage(result.message || "No booking found with these details")
                }
                return
            }

            if (result.hasDuplicates) {
                setBookings(result.bookings)
                setShowModal(true)
            } else {
                // Navigate to booking details page with the single booking
                router.push(`/booking/${result.bookings[0].id}`)
            }
        } catch (error) {
            setErrorMessage("An unexpected error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    function handleSelectBooking(bookingId: number) {
        setShowModal(false)
        router.push(`/booking/${bookingId}`)
    }

    return (
        <>
            <form action={handleSubmit} className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row md:items-center md:gap-2 w-full">
                    <div className="flex-1">
                        <Input name="bookingCode" placeholder="eg. TNR3HD" className="h-12 bg-white" disabled={isLoading} />
                        {errors.bookingCode && <p className="text-red-500 text-sm mt-1">{errors.bookingCode[0]}</p>}
                    </div>
                    <div className="relative flex-1">
                        <Input
                            name="lastName"
                            placeholder="eg. Martey Jamel"
                            className="h-12 bg-white pl-10"
                            disabled={isLoading}
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName[0]}</p>}
                    </div>
                    <Button
                        type="submit"
                        className="bg-orange-600 hover:bg-orange-700 h-12 w-full md:w-auto md:self-end px-8"
                        disabled={isLoading}
                    >
                        {isLoading ? "Searching..." : "Continue"}
                    </Button>
                </div>

                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            
            </form>

            <BookingSelectionModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                bookings={bookings}
                onSelect={handleSelectBooking}
            />
        </>
    )
}

