import { Metadata } from "next"
import { Calendar, ChevronLeft } from 'lucide-react'

import { BookingForm } from "./booking-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

interface BookingPageProps {
    params: Promise<{
        slug: string
    }>
    searchParams: Promise<{
        title?: string
        tourOption?: string
        total?: number
    }>
}

export const metadata: Metadata = {
    title: "Book Your Tour - Bonvas Tours",
    description: "Complete your tour booking with Bonvas Tours",
}

export default async function BookingPage({ params, searchParams }: BookingPageProps) {
    const { title, tourOption, total } = await searchParams
    const param = await params

    // Parse the serialized tourOption object
    const parsedTourOptionWithQuantity = tourOption ? JSON.parse(tourOption) : null

    const startDate = parsedTourOptionWithQuantity?.startDate
    const endDate = parsedTourOptionWithQuantity?.endDate
    const quantities = parsedTourOptionWithQuantity?.quantities
    const adultPrice = parsedTourOptionWithQuantity?.prices?.adult
    const couplePrice = parsedTourOptionWithQuantity?.prices?.couple

    // Calculate total price if not passed
    const calculatedTotal = total ? total : (adultPrice * (quantities?.adult || 0)) + (couplePrice * (quantities?.couple || 0))

    return (
        <section className="section_container">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-8">
                    {/* Back Arrow */}
                    <Link href={`/tour-packages/${param.slug}`} className="text-muted-foreground flex items-center gap-2 hover:text-black">
                        <ChevronLeft className="h-6 w-6" />
                        <span className="font-medium">Back to Package Details</span>
                    </Link>
                </div>

                <h1 className="text-3xl font-bold mb-16 text-center">Complete Your Booking</h1>

                <div className="grid gap-16 md:grid-cols-2">
                    {/* Booking Summary Card */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">Booking Summary</CardTitle>

                        </CardHeader>
                        <CardContent className="space-y-6">
                            <h1 className="text-center text-2xl text-primary">{title} Tour Package</h1>
                            <div className="flex gap-4 justify-between bg-white-100 p-6 rounded-lg">
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-6 w-6" />
                                        <div>
                                            <span>Start Date</span>
                                            <h2 className="font-bold">{startDate ? new Date(startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-6 w-6" />
                                        <div>
                                            <span>End Date</span>
                                            <h2 className="font-bold">{endDate ? new Date(endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Adults ({quantities?.adult || 0})
                                    </span>
                                    <span>${adultPrice}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Couples ({quantities?.couple || 0})
                                    </span>
                                    <span>${couplePrice}</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-semibold">
                                    <span>Total Amount</span>
                                    <span>${calculatedTotal}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    {/* Booking Form */}
                    <BookingForm
                        tourSlug={param.slug}
                        title={title}
                        parsedTourOption={parsedTourOptionWithQuantity}
                        total={total} />
                </div>
            </div>
        </section>
    )
}