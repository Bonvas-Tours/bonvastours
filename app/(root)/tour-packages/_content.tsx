'use client'

import { useEffect, useState } from "react"
import { TourCard } from "@/components/TourCard"
import { TourSearch } from "@/components/TourSearch"
import { TourFilters } from "@/components/TourFilters"
import { Button } from "@/components/ui/button"
import type { TourFiltersProps as TourFiltersType, TourPackageDetailsProps } from "@/type"
import { formatLocation } from "@/lib/utils"
import { useParams, useRouter, useSearchParams } from "next/navigation"

const TOURS_PER_PAGE = 6

interface TourPackagesContentProps {
    initialTours: TourPackageDetailsProps[]
}

export function TourPackagesContent({ initialTours }: TourPackagesContentProps) {
    const [filters, setFilters] = useState<TourFiltersType>({})
    const [searchQuery, setSearchQuery] = useState("")
    const [visibleTours, setVisibleTours] = useState(TOURS_PER_PAGE)

    const router  = useRouter()
    const params  = useSearchParams()

    const [displayedTours, setDisplayedTours]= useState(initialTours)
    const hasMore = visibleTours < initialTours.length

    const handleDestinationFilter = (destination: string) => {
      const newParams = new URLSearchParams(params);

      newParams.set("destination", destination);

      router.push(`/tour-packages?${newParams.toString()}`);
    };

    const handleMonthFilter = (month: string) => {
      const newParams = new URLSearchParams(params);

      newParams.set("month", month);
      newParams.delete("startDate");
      newParams.delete("endDate");

      router.push(`/tour-packages?${newParams.toString()}`);
    };


        useEffect(() => {
        let filteredTours = initialTours

        if (searchQuery) {
            const searchTerm = searchQuery.toLowerCase()
            filteredTours = filteredTours.filter(tour =>
                tour.name.toLowerCase().includes(searchTerm)
            )
        }

        setDisplayedTours(filteredTours)
    }, [searchQuery, initialTours])

    return (
        <div className="container pb-12 pt-4">
            <div className="mb-4">
                <p className="text-muted-foreground">
                    {initialTours.length} results found
                </p>
            </div>
            <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <TourFilters
                    onFilterMonth={handleMonthFilter}
                    onFilterDestination={handleDestinationFilter}
                />
                <TourSearch
                     onSearch={(search) => setSearchQuery(search)}
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

