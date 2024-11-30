'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface TourFiltersProps {
    onFilterMonth: (month: string) => void
    onFilterDestination: (destination: string) => void
}

export function TourFilters({ onFilterMonth, onFilterDestination }: TourFiltersProps) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const destinations = [
        "Ghana, Takoradi", "Japan", "China", "Germany", "Rwanda", "Nepal"
    ]

    return (
        <div className="flex gap-4">
            <Select onValueChange={onFilterMonth}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by Month" />
                </SelectTrigger>
                <SelectContent>
                    {months.map((month) => (
                        <SelectItem key={month} value={month.toLowerCase()}>
                            {month}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select onValueChange={onFilterDestination}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by Destination" />
                </SelectTrigger>
                <SelectContent>
                    {destinations.map((destination) => (
                        <SelectItem key={destination} value={destination.toLowerCase()}>
                            {destination}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

