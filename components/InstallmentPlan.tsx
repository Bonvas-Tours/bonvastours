"use client"
import { format } from "date-fns";
import { Button } from "./ui/button";
import { Booking, Payment, Tourist, TourPackage, TourPackageOption } from "@prisma/client";
import { useState } from "react";

interface BookingProps {
    booking: Booking & {
        payments?: Payment[];
        tourPackage?: TourPackage & { location: Location };
        selectedOption?: TourPackageOption;
        bookingTourists?: { tourist: Tourist }[];
    };
};


export function InstallmentPlan({ booking }: BookingProps) {
    const [isLoading, setIsLoading] = useState(false);
    const amountRemaining = booking.totalPrice - booking.amountPaid;

    const handlePayment = async (amount: number) => {
        setIsLoading(true);
        try {
            // Call your backend API to initialize Paystack payment
            const response = await fetch("/api/pay-installment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tnr: booking.tnr, // Booking reference number
                    amount: amount, // Amount to pay
                    email: "schorlar2468@gmail.com", // User's email (replace with actual user email)
                }),
            });

            const data = await response.json();

            if (data.success) {
                // Redirect the user to Paystack's authorization URL
                window.location.href = data.data.authorization_url;
            } else {
                alert("Payment initialization failed. Please try again.");
            }
        } catch (error) {
            console.error("Error initiating payment:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!booking.isInstallment) {
        return null;
    }

    return (
        <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Installment Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <div className="text-sm text-muted-foreground">Start Date:</div>
                    <div>
                        {booking.selectedOption?.startDate &&
                            format(new Date(booking.selectedOption.startDate), "MMM dd, yyyy")}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-muted-foreground">End Date:</div>
                    <div>
                        {booking.selectedOption?.endDate &&
                            format(new Date(booking.selectedOption.endDate), "MMM dd, yyyy")}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-muted-foreground">Next Payment:</div>
                    <div>{booking.dueDate && format(new Date(booking.dueDate), "MMM dd, yyyy")}</div>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
                <Button
                    className="bg-orange-500 hover:bg-orange-600"
                    onClick={() => handlePayment(1500)} 
                    disabled={isLoading}
                >
                    {isLoading ? "Processing..." : "Pay $1,500"}
                </Button>
                <Button
                    variant="outline"
                    onClick={() => handlePayment(amountRemaining)} // Pay remaining balance
                    disabled={isLoading}
                >
                    {isLoading ? "Processing..." : `Pay remaining balance ($${amountRemaining.toLocaleString()})`}
                </Button>
            </div>
        </div>
    );
}