import tourPackages from '@/content/tourPackage.json';
import { TourPackagesContent } from './_content';
import { formatLocation } from '@/lib/utils';

type SearchParamsProps = {
    destination?: string;
    startDate?: string;
    endDate?: string;
};

export default async function TourPackagesPage({
    searchParams,
}: {
    searchParams: Promise<SearchParamsProps>;
}) {

    const params = await searchParams;
    const destination = params.destination;
    const startDate = params.startDate ? new Date(params.startDate) : undefined;
    const endDate = params.endDate ? new Date(params.endDate) : undefined;

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
