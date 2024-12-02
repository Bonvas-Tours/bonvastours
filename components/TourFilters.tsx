'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DESTINATIONS, MONTHS } from "@/content"

interface TourFiltersProps {
    onFilterMonth: (month: string) => void
    onFilterDestination: (destination: string) => void
}

export function TourFilters({ onFilterMonth, onFilterDestination }: TourFiltersProps) {

    return (
        <div className="flex gap-4">
            <Select onValueChange={onFilterMonth}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by Month" />
                </SelectTrigger>
                <SelectContent>
                    {MONTHS.map((month) => (
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
                    {DESTINATIONS.map((destination) => (
                        <SelectItem key={destination} value={destination.toLowerCase()}>
                            {destination}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

