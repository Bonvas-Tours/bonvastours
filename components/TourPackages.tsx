import { TourCard } from "@/components/TourCard";

interface Tour {
    id: string;
    slug: string;
    title: string;
    location: string;
    region: string;
    price: number;
    startDate: string;
    duration: string;
    gallery: string[];
}

interface TourPackagesProps {
    tours: Tour[];
}

export default function TourPackages({ tours }: TourPackagesProps) {
    return (
        <>
            <div className="space-y-4 mb-12">
                <h2 className="text-4xl font-bold">Upcoming Tour Packages</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tours.map((tour) => {
                    const imageUrls = tour.gallery.slice(0, 2);
                    return (
                        <TourCard
                            key={tour.id}
                            slug={tour.slug}
                            title={tour.title}
                            location={`${tour.location}, ${tour.region}`}
                            price={tour.price}
                            date={tour.startDate}
                            duration={tour.duration}
                            imageUrls={imageUrls}
                        />
                    );
                })}
            </div>
        </>
    );
}

