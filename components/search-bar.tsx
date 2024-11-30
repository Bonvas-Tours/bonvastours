"use client"

import * as React from "react"
import { useRouter } from 'next/navigation'
import { DateRange } from "react-day-picker"
import { DateRangePicker } from "@/components/date-range-picker"
import { DestinationSearch } from "@/components/destination-search"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export default function SearchBar() {
    const [destination, setDestination] = React.useState("")
    const [date, setDate] = React.useState<DateRange>()
    const router = useRouter()

    const handleSearch = () => {
        // Redirect to tour package page with search parameters as query params
        const queryParams = new URLSearchParams()

        if (destination) {
            queryParams.set('destination', destination)
        }

        if (date) {
            queryParams.set('startDate', date.from?.toISOString() || '')
            queryParams.set('endDate', date.to?.toISOString() || '')
        }

        // Redirect to the tour package page with the query params
        router.push(`/tour-packages?${queryParams.toString()}`)
    }

    return (
        <div className="mx-auto w-full max-w-6xl px-4">
            <div className="flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row md:items-center md:gap-2">
                <div className="flex-1">
                    <DestinationSearch
                        destination={destination}
                        onDestinationChange={setDestination}
                    />
                </div>
                <div className="flex-1">
                    <DateRangePicker
                        date={date}
                        onDateChange={setDate}
                    />
                </div>
                <Button
                    className="bg-orange-600 hover:bg-orange-700"
                    size="lg"
                    onClick={handleSearch}
                >
                    <Search className="h-4 w-4" />
                    Search
                </Button>
            </div>
        </div>
    )
}
