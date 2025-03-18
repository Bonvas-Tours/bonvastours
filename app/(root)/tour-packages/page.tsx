import { getTourPackages } from '../actions/packages';
import { TourPackagesContent } from './_content';


type SearchParamsProps = {
    destination?: string;
    month?: string;
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
    const month = params.month;
    const startDate = params.startDate ? new Date(params.startDate) : undefined;
    const endDate = params.endDate ? new Date(params.endDate) : undefined;

    const tourPackages = await getTourPackages({
      searchOptions: { destination, month, startDate, endDate },
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
                <TourPackagesContent initialTours={tourPackages} />
            </section>
        </main>
    );
}
