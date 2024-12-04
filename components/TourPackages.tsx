import { TourCard } from "@/components/TourCard";
import { TourPackageDetailsProps } from "@/type";

interface TourCardProps {
    tours: TourPackageDetailsProps[];
}
export default function TourPackages({ tours }: TourCardProps) {
    return (
        <>
            <div className="space-y-4 mb-8">
                <h2 className="text-4xl font-bold">Upcoming Tour Packages</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tours.map((tour: TourPackageDetailsProps) => {
                    console.log(tour)
                    return (
                        <TourCard
                            key={tour.id}
                            slug={tour.slug}
                            title={tour?.title}
                            location={tour?.location}
                            startDate={tour?.startDate}
                            endDate={tour?.endDate}
                            imageUrl={tour?.imageUrl}

                        />
                    );
                })}
            </div>
        </>
    );
}

