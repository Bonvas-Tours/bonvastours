'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { calculateDuration, capitalizeTitle } from '@/lib/utils'

interface TourOption {
    prices: {
        adult: number;
        couple: number;
    };
    startDate: string;
    endDate: string;
}

interface TourPricingProps {
    tourOptions: TourOption[];
    slug: string;
    startDate: string;
    endDate: string;
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export function TourPricing({ tourOptions, slug }: TourPricingProps) {
    const [selectedOption, setSelectedOption] = useState<TourOption>(tourOptions[0])
    const [quantities, setQuantities] = useState({
        adult: 1,
        couple: 0,
    })

    const [startDate, setStartDate] = useState(selectedOption.startDate)
    const [endDate, setEndDate] = useState(selectedOption.endDate)

    const handleQuantityChange = (type: keyof typeof quantities, change: number) => {
        setQuantities((prev) => ({
            ...prev,
            [type]: Math.max(0, prev[type] + change),
        }))
    }

    const totalPrice = selectedOption.prices.adult * quantities.adult +
        selectedOption.prices.couple * quantities.couple

    // Serialize the selected tourOption and quantities into JSON string
    const serializedOption = JSON.stringify({
        ...selectedOption,
        quantities,
    })

    return (
        <div className="rounded-lg border p-6 space-y-6">
            <div className="flex gap-4 justify-between bg-white-100 p-6 rounded-lg">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-6 w-6" />
                        <div>
                            <span>Start Date</span>
                            <h2 className="font-bold">{formatDate(startDate)}</h2>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-6 w-6" />
                        <div>
                            <span>End Date</span>
                            <h2 className="font-bold">{formatDate(endDate)}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <Select
                    onValueChange={(value) => {
                        const selected = tourOptions.find(option => calculateDuration(option.startDate, option.endDate).toString() === value) || tourOptions[0];
                        setSelectedOption(selected);
                        setStartDate(selected.startDate);
                        setEndDate(selected.endDate);
                    }}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select tour duration" />
                    </SelectTrigger>
                    <SelectContent>
                        {tourOptions.map((option) => {
                            const duration = calculateDuration(option.startDate, option.endDate).toString();

                            return (
                                <SelectItem key={option.prices.adult} value={duration}>
                                    {`${duration}-Day Package`}
                                </SelectItem>
                            );
                        })}
                    </SelectContent>
                </Select>

                {Object.entries(selectedOption.prices).map(([type, price]) => (
                    <div key={type} className="flex items-center justify-between">
                        <div>
                            <div className="font-medium capitalize">
                                {type}
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
                                tourOption: serializedOption,  // Pass the serialized tourOption object here
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
