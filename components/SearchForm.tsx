'use client'

import * as React from "react"
import { DateRange } from "react-day-picker"
import { DateRangePicker } from "@/components/DateRangePicker"
import { DestinationSearch } from "@/components/DestinationSearch"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

interface SearchFormProps {
    onSubmit: (destination: string, dateRange: DateRange | undefined) => void
}

export function SearchForm({ onSubmit }: SearchFormProps) {
    const [destination, setDestination] = React.useState("")
    const [date, setDate] = React.useState<DateRange>()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(destination, date)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row md:items-center md:gap-2 w-full">
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
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 h-12"
                size="lg"
            >
                <Search className="h-4 w-4 mr-2" />
                Search
            </Button>
        </form>
    )
}

