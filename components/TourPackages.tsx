import { TourCard } from "@/components/TourCard";
import { calculateDuration, formatDate, formatLocation } from "@/lib/utils";

interface TourPackagesProps {
    tours: Array<{
        id: string;
        slug: string;
        title: string;
        location: {
            country: string;
            city: string;
            region: string;
        };
        price: number;
        currency: string;
        rating: number;
        reviews: number;
        gallery: string[];
        startDate: string;
        endDate: string;
        status: string;
    }>;
}
export default function TourPackages({ tours }: TourPackagesProps) {
    return (
        <>
            <div className="space-y-4 mb-12">
                <h2 className="text-4xl font-bold">Upcoming Tour Packages</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tours.map((tour: any) => {
                    return (
                        <TourCard
                            key={tour.id}
                            slug={tour.slug}
                            title={tour.title}
                            location={`${formatLocation(tour.location)}, ${tour.location.region}`}
                            price={tour.price}
                            date={formatDate(tour.startDate)}
                            duration={calculateDuration(tour.startDate, tour.endDate)}
                            imageUrls={tour.gallery.slice(0, 4)}
                        />
                    );
                })}
            </div>
        </>
    );
}

