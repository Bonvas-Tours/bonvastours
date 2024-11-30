import { Metadata } from "next"
import { Calendar, ChevronLeft } from 'lucide-react'

import { BookingForm } from "./booking-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

interface BookingPageProps {
    params: {
        slug: string
    }
    searchParams: {
        title?: string
        startDate?: string
        endDate?: string
        adults?: string
        price?: string
        total?: string
    }
}

export const metadata: Metadata = {
    title: "Book Your Tour - Bonvas Tours",
    description: "Complete your tour booking with Bonvas Tours",
}

export default function BookingPage({ params, searchParams }: BookingPageProps) {
    const {
        title,
        startDate,
        endDate,
        adults,
        price,
        total,
    } = searchParams

    console.log(title, startDate, endDate, adults, price, total, params.slug)

    return (
        <section className="section_container">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-8">
                    {/* Back Arrow */}
                    <Link href={`/tour-packages/${params?.slug}`} className="text-muted-foreground flex items-center gap-2 hover:text-black">
                        <ChevronLeft className="h-6 w-6" />
                        <span className="font-medium">Back to Package Details</span>
                    </Link>
                </div>

                <h1 className="text-3xl font-bold mb-16 text-center">Complete Your Booking</h1>

                <div className="grid gap-16 md:grid-cols-2">
                    {/* Booking Form */}
                    <BookingForm tourSlug={params?.slug} />
                    {/* Booking Summary Card */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">Booking Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex gap-4 justify-between bg-white-100 p-6 rounded-lg">
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-6 w-6" />
                                        <div>
                                            <span>Start Date</span>
                                            <h2 className="font-bold">{startDate}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-6 w-6" />
                                        <div>
                                            <span>End Date</span>
                                            <h2 className="font-bold">{endDate}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Adults ({adults})
                                    </span>
                                    <span>${price} per person</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-semibold">
                                    <span>Total Amount</span>
                                    <span>${total}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    )
}
