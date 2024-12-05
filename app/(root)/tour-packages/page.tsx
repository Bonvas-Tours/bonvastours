import tourPackages from '@/content/tourPackage.json';
import { TourPackagesContent } from './_content';
import { formatLocation } from '@/lib/utils';

export default async function TourPackagesPage({
    searchParams,
}: {
    searchParams: Record<string, string | undefined>;
}) {
    const destination = searchParams.destination;
    const startDate = searchParams.startDate ? new Date(searchParams.startDate) : undefined;
    const endDate = searchParams.endDate ? new Date(searchParams.endDate) : undefined;

    const filteredTours = tourPackages.filter((tour) => {
        if (destination && !formatLocation(tour.location)?.toLowerCase().includes(destination.toLowerCase())) {
            return false;
        }

        if (startDate && endDate) {
            const tourStartDate = new Date(tour.startDate);
            const tourEndDate = new Date(tour.endDate);
            const isOverlapping =
                (tourStartDate >= startDate && tourStartDate <= endDate) ||
                (tourEndDate >= startDate && tourEndDate <= endDate) ||
                (tourStartDate <= startDate && tourEndDate >= endDate);

            if (!isOverlapping) {
                return false;
            }
        }

        return true;
    });

    return (
        <main className="min-h-screen bg-background">
            <div className="relative h-[300px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center "
                    style={{ backgroundImage: "url('/slides/slide2.jpg')" }}
                />
            </div>
            <section className="section_container">
                <h1 className="text-4xl font-bold text-neutral-800">Tour Packages</h1>
                <TourPackagesContent initialTours={filteredTours} />
            </section>
        </main>
    );
}
