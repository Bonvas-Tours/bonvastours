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
                {tours.map((tour) => {
                    return (
                      <TourCard
                        key={tour.id}
                        slug={tour.slug}
                        name={tour.name}
                        location={tour.location}
                        startDate={new Date(
                          tour.tourPackageOptions[0].startDate,
                        ).toLocaleDateString()}
                        endDate={new Date(
                          tour.tourPackageOptions[0].endDate,
                        ).toLocaleDateString()}
                        cover={tour.cover}
                      />
                    );
                })}
            </div>
        </>
    );
}

