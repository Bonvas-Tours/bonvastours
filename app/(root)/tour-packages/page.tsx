import tourPackages from '@/content/tourPackage.json'
import { TourPackagesContent } from './_content'
import { formatLocation } from '@/lib/utils'

export default async function TourPackagesPage({
    params,
}: {
    params: Promise<{ [key: string]: string | string[] | undefined }>
}) {

    const searchParams = await params
    const destination = searchParams?.destination as string | undefined
    const startDate = searchParams?.startDate ? new Date(searchParams?.startDate as string) : undefined
    const endDate = searchParams?.endDate ? new Date(searchParams?.endDate as string) : undefined

    const filteredTours = tourPackages.filter((tour) => {
        // Filter by destination
        if (destination && !formatLocation(tour.location)?.toLowerCase().includes(destination.toLowerCase())) {
            return false
        }

        // Filter by date range
        if (startDate && endDate) {
            const tourStartDate = new Date(tour.startDate)
            const tourEndDate = new Date(tour.endDate)

            // Check if the tour overlaps with the specified date range
            const isOverlapping =
                (tourStartDate >= startDate && tourStartDate <= endDate) || // Tour starts within the range
                (tourEndDate >= startDate && tourEndDate <= endDate) ||    // Tour ends within the range
                (tourStartDate <= startDate && tourEndDate >= endDate)     // Tour spans the entire range

            if (!isOverlapping) {
                return false
            }
        }

        return true
    })

    return (
        <main className="min-h-screen bg-background">
            <div className="relative h-[300px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center "
                    style={{
                        backgroundImage: "url('/slides/slide2.jpg')",
                    }}
                />
            </div>
            <section className="section_container">
                <h1 className="text-4xl font-bold text-neutral-800">Tour Packages</h1>
                <TourPackagesContent initialTours={filteredTours} />
            </section>
        </main>
    )
}
