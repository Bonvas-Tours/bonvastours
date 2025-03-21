'use client'

import { getDestinations } from "@/app/(root)/actions/packages"
import { packageDestinationsAtom } from "@/app/state"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DESTINATIONS, MONTHS } from "@/content"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"

interface TourFiltersProps {
    onFilterMonth: (month: string) => void
    onFilterDestination: (destination: string) => void
}

type Destinations = Awaited<ReturnType<typeof getDestinations>> | null;

export function TourFilters({ onFilterMonth, onFilterDestination }: TourFiltersProps) {

    const [destinations, setDestinations] = useAtom(packageDestinationsAtom)

    useEffect(() => {
      (async () => {
        if (!destinations) {
          const currentDestinations = await getDestinations();
          setDestinations(currentDestinations);
        }
      })();
    }, []);

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
                    {!destinations ? "Loading...": destinations.map(({label}) => (
                        <SelectItem key={label} value={label}>
                            {label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

