"use client";

import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, Clock, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingModifySheet } from "@/components/BookingModifySheet";
import { PaymentSheet } from "@/components/PaymentSheet";
import { Button } from "./ui/button";
import { formatLocation2 } from "@/lib/utils";
import { DownloadInvoiceButton } from "./DownloadInvoiceButton";
import { Booking, Payment, TourPackage, TourPackageOption, Tourist, Location } from "@prisma/client";

type ActiveBookingProps = {
    booking: Booking & {
        payments?: Payment[];
        tourPackage?: TourPackage & { location: Location };
        selectedOption?: TourPackageOption;
        bookingTourists?: { tourist: Tourist }[];
    };
};

export function ActiveBooking({ booking }: ActiveBookingProps) {
    const tourPackage = booking?.tourPackage;
    const amountRemaining = booking?.totalPrice - (booking?.amountPaid || 0);

    if (!booking || !tourPackage) {
        return <div>No active booking found.</div>;
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Active Booking</h2>
                <Button variant="outline" size="sm" asChild>
                    <Link href={`/client/booking-detail/${booking.tnr}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                    </Link>
                </Button>
            </div>

            <Card className="!shadow-none">
                <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <Image
                                src={tourPackage.cover || "/placeholder.svg"}
                                alt={tourPackage.name || "Tour Package"}
                                width={200}
                                height={120}
                                className="rounded-md object-cover w-full md:w-[200px] h-[120px]"
                            />
                            <div>
                                <CardTitle>{tourPackage.name}</CardTitle>
                                <CardDescription className="mt-1">{formatLocation2(tourPackage?.location)}</CardDescription>

                                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>
                                            {booking.selectedOption?.startDate &&
                                                format(new Date(booking.selectedOption.startDate), "MMM dd, yyyy")}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>Duration: {booking.selectedOption?.durationDays} days</span>
                                    </div>
                                </div>

                                <div className="mt-2 flex items-center gap-2">
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${booking.status === "Reserved"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : booking.status === "Completed"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : booking.status === "Approved"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                    <span className="text-sm">Amount Paid:</span>{" "}
                                    <span className="text-sm text-green-600 font-bold">${booking.amountPaid.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-xl font-bold text-primary">${booking.totalPrice.toLocaleString()}</div>
                            {/* {tourPackage.category === "Private" && <BookingModifySheet booking={booking} />} */}
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    {booking.status === "Reserved" && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 flex items-center gap-2 text-sm text-yellow-800">
                            <div className="h-5 w-5 rounded-full bg-yellow-200 flex items-center justify-center">
                                <span className="text-yellow-800">!</span>
                            </div>
                            <span>Your booking has been reserved till full payment is made.</span>
                        </div>
                    )}

                    {booking.status === "Approved" && (
                        <div className="bg-green-50 border border-green-200 rounded-md p-3 flex items-center gap-2 text-sm text-green-800">
                            <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center">
                                <span className="text-green-800">✔</span>
                            </div>
                            <span>Your booking has been approved. Have a wonderful Trip!</span>
                        </div>
                    )}

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
                            <PaymentSheet booking={booking} />
                            <Button variant="outline">Pay remaining balance (${amountRemaining.toLocaleString()})</Button>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex-col items-start border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Recent Payments</h3>
                    <div className="w-full overflow-auto">
                        <table className="w-full min-w-[600px] text-sm">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-3 text-left font-medium text-muted-foreground">Transaction ID</th>
                                    <th className="py-3 text-left font-medium text-muted-foreground">Date</th>
                                    <th className="py-3 text-left font-medium text-muted-foreground">Amount</th>
                                    <th className="py-3 text-left font-medium text-muted-foreground">Installment</th>
                                    <th className="py-3 text-right font-medium text-muted-foreground">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {booking.payments?.slice(0, 3).map((payment) => (
                                    <tr key={payment.id}>
                                        <td className="py-3">{payment.transactionId}</td>
                                        <td className="py-3">{format(new Date(payment.createdAt), "MMM dd, yyyy")}</td>
                                        <td className="py-3">${payment.amount.toLocaleString()}</td>
                                        <td className="py-3">{payment.installmentNumber || 1}</td>
                                        <td className="py-3 text-right">
                                            <DownloadInvoiceButton bookingId={booking.tnr} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}