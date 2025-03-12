'use client'

import { useState } from "react"
import { TourCard } from "@/components/TourCard"
import { TourSearch } from "@/components/TourSearch"
import { TourFilters } from "@/components/TourFilters"
import { Button } from "@/components/ui/button"
import type { TourFiltersProps as TourFiltersType, TourPackageDetailsProps } from "@/type"
import { formatLocation } from "@/lib/utils"

const TOURS_PER_PAGE = 6

interface TourPackagesContentProps {
    initialTours: TourPackageDetailsProps[]
}

export function TourPackagesContent({ initialTours }: TourPackagesContentProps) {
    const [filters, setFilters] = useState<TourFiltersType>({})
    const [visibleTours, setVisibleTours] = useState(TOURS_PER_PAGE)

    const displayedTours = initialTours.slice(0, visibleTours)
    const hasMore = visibleTours < initialTours.length

    return (
        <div className="container pb-12 pt-4">
            <div className="mb-4">
                <p className="text-muted-foreground">
                    {initialTours.length} results found
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
                        name={tour.name}
                        location={tour.location}
                        startDate={new Date(tour.tourPackageOptions[0].startDate).toLocaleDateString()}
                        endDate={new Date(tour.tourPackageOptions[0].endDate).toLocaleDateString()}
                        cover={tour.cover}
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

