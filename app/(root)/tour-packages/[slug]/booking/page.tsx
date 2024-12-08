
import { Metadata } from "next"
import { Calendar, ChevronLeft } from 'lucide-react'

import { BookingForm } from "./booking-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { calculateDuration, formatDate, formatPrice } from "@/lib/utils"

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

    let parsedTourOptionWithQuantity = null
    try {
        parsedTourOptionWithQuantity = tourOption ? JSON.parse(tourOption) : null
    } catch (error) {
        console.error("Failed to parse tour option:", error)
    }

    const startDate = parsedTourOptionWithQuantity?.startDate
    const endDate = parsedTourOptionWithQuantity?.endDate
    const quantities = parsedTourOptionWithQuantity?.quantities
    const adultPrice = parsedTourOptionWithQuantity?.prices?.adult
    const couplePrice = parsedTourOptionWithQuantity?.prices?.couple

    const duration = startDate && endDate ? calculateDuration(startDate, endDate) : null
    const calculatedTotal = total
        ? Number(total)
        : (Number(adultPrice || 0) * (quantities?.adult || 0)) +
        (Number(couplePrice || 0) * (quantities?.couple || 0))

    const formattedTotal = formatPrice(calculatedTotal || 0);

    return (
        <section className="section_container">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-8">
                    <Link href={`/tour-packages/${param.slug}`} className="text-muted-foreground flex items-center gap-2 hover:text-black">
                        <ChevronLeft className="h-6 w-6" />
                        <span className="font-medium">Back to Package Details</span>
                    </Link>
                </div>

                <h1 className="text-3xl font-bold mb-16 text-center">Complete Your Booking</h1>

                <div className="flex gap-16 flex-col md:flex-row">
                    <Card className="shadow-lg flex-1 h-fit">
                        <CardHeader>
                            <CardTitle className="text-2xl">Booking Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <h1 className="text-center text-xl text-primary font-bold">
                                {title || "Unknown"} Tour Package
                            </h1>
                            <div className="flex gap-4 justify-between bg-white-100 p-6 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-6 w-6" />
                                    <div>
                                        <span>Start Date</span>
                                        <h2 className="font-bold">{formatDate(startDate)}</h2>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-6 w-6" />
                                    <div>
                                        <span>End Date</span>
                                        <h2 className="font-bold">{formatDate(endDate)}</h2>
                                    </div>
                                </div>
                            </div>
                            {duration && (
                                <div className="text-center font-semibold text-lg">
                                    {duration}-Day Package
                                </div>
                            )}
                            <Separator />
                            <div className="space-y-2">
                                {quantities?.adult > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">
                                            Adults ({quantities.adult})
                                        </span>
                                        <span>${formatPrice(adultPrice * quantities.adult)}</span>
                                    </div>
                                )}
                                {quantities?.couple > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600s">
                                            Couples ({quantities.couple})
                                        </span>
                                        <span>${formatPrice(couplePrice * quantities.couple)}</span>
                                    </div>
                                )}
                                <Separator />
                                <div className="flex justify-between font-semibold">
                                    <span>Total Amount</span>
                                    <span>${formattedTotal}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex-1">
                        <BookingForm
                            tourSlug={param.slug}
                            title={title}
                            parsedTourOption={parsedTourOptionWithQuantity}
                            total={calculatedTotal}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
