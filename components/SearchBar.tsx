'use client'

import { useRouter } from 'next/navigation'
import { SearchForm } from './SearchForm'

export default function SearchBar() {
    const router = useRouter()

    function handleSearch(destination: string, dateRange?: { from?: Date; to?: Date }) {
        const searchParams = new URLSearchParams()
        if (destination) searchParams.append('destination', destination)
        if (dateRange?.from) searchParams.append('startDate', dateRange.from.toISOString())
        if (dateRange?.to) searchParams.append('endDate', dateRange.to.toISOString())

        router.push(`/tour-packages?${searchParams.toString()}`)
    }

    return (
        <div>
            <SearchForm onSubmit={handleSearch} />
        </div>
    )
}
