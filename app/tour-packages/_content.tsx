'use client'

import { useState } from "react"
import { TourCard } from "@/components/TourCard"
import { TourSearch } from "@/components/tour-search"
import { TourFilters } from "@/components/tour-filters"
import { Button } from "@/components/ui/button"
import type { TourFiltersProps as TourFiltersType } from "@/type"
import { MOCK_TOURS } from "@/content/tours"

// Constants
const TOURS_PER_PAGE = 6



export function TourPackagesContent() {
    const [filters, setFilters] = useState<TourFiltersType>({})
    const [visibleTours, setVisibleTours] = useState(TOURS_PER_PAGE)

    // Filter tours based on search and filters
    const filteredTours = MOCK_TOURS.filter((tour) => {
        if (filters.search && !tour.title.toLowerCase().includes(filters.search.toLowerCase())) {
            return false
        }
        if (filters.destination && !tour.location.toLowerCase().includes(filters.destination.toLowerCase())) {
            return false
        }
        if (filters.month) {
            const tourMonth = new Date(tour.startDate).toLocaleString('default', { month: 'long' }).toLowerCase()
            if (tourMonth !== filters.month.toLowerCase()) {
                return false
            }
        }
        return true
    })

    const displayedTours = filteredTours.slice(0, visibleTours)
    const hasMore = visibleTours < filteredTours.length

    return (
        <div className="container pb-12 pt-4">
            <div className="mb-4">
                <p className="text-muted-foreground">
                    {filteredTours.length} results found
                </p>
            </div>
            <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <TourFilters
                    onFilterMonth={(month) => setFilters((prev) => ({ ...prev, month }))}
                    onFilterDestination={(destination) => setFilters((prev) => ({ ...prev, destination }))}
                />
                <TourSearch
                    onSearch={(search) => setFilters((prev) => ({ ...prev, search }))}
                />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayedTours.map((tour) => (
                    <TourCard
                        key={tour.id}
                        slug={tour.slug}
                        title={tour.title}
                        location={`${tour.location}, ${tour.region}`}
                        price={tour.price}
                        date={tour.startDate}
                        duration={tour.duration}
                        imageUrls={tour.gallery.slice(0, 4)}

                    />
                ))}
            </div>

            {hasMore && (
                <div className="mt-8 flex justify-center">
                    <Button
                        variant="outline"
                        onClick={() => setVisibleTours((prev) => prev + TOURS_PER_PAGE)}
                    >
                        Load More
                    </Button>
                </div>
            )}
        </div>
    )
}
