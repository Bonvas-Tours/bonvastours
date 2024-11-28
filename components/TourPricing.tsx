'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { capitalizeTitle } from '@/lib/utils'

interface TourPricingProps {
    pricing: {
        adult: number
        couple: number
        childWithBed: number
        childWithoutBed: number
    }
    startDate: string
    endDate: string
    slug: string
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export function TourPricing({ pricing, startDate, endDate, slug }: TourPricingProps) {
    if (!pricing) {
        return <div>Pricing information is not available.</div>;
    }

    const [quantities, setQuantities] = useState({
        adult: 1,
        couple: 0,
        childWithBed: 0,
        childWithoutBed: 0,
    })

    const handleQuantityChange = (type: keyof typeof quantities, change: number) => {
        setQuantities((prev) => ({
            ...prev,
            [type]: Math.max(0, prev[type] + change),
        }))
    }

    const totalPrice = pricing
        ? Object.entries(pricing).reduce((total, [type, price]) => {
            return total + (quantities[type as keyof typeof quantities] || 0) * price;
        }, 0)
        : 0;

    return (
        <div className="rounded-lg border p-6 space-y-6">
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

            <div className="space-y-4">
                {pricing && Object.entries(pricing).map(([type, price]) => (
                    <div key={type} className="flex items-center justify-between">
                        <div>
                            <div className="font-medium capitalize">
                                {type.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="text-sm text-muted-foreground">${price}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={() => handleQuantityChange(type as keyof typeof quantities, -1)}
                            >
                                -
                            </Button>
                            <span className="w-8 text-center">
                                {quantities[type as keyof typeof quantities]}
                            </span>
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={() => handleQuantityChange(type as keyof typeof quantities, 1)}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-lg font-bold">${totalPrice}</span>
                </div>
                <Button className="w-full" size="lg" asChild>
                    <Link
                        href={{
                            pathname: `/tour-packages/${slug}/booking`,
                            query: {
                                title: capitalizeTitle(slug),
                                startDate: startDate,
                                endDate: endDate,
                                adults: quantities.adult.toString(),
                                price: totalPrice.toString(),
                                total: totalPrice.toString(),
                            },
                        }}
                    >
                        Book now
                    </Link>
                </Button>
            </div>
        </div>
    )
}

