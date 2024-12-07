import { Star } from 'lucide-react'
import tourPackages from '@/content/tourPackage.json'
import { TourPricing } from '@/components/TourPricing'
import { TourItinerary } from '@/components/TourItinerary'
import { TourGallery } from '@/components/TourGallery'
import { formatLocation } from '@/lib/utils'
import ReactMarkdown from 'react-markdown'

export default async function TourDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const param = await params;
    // Use the slug to find the corresponding tour package
    const tour_package = tourPackages.find((tour) => tour.slug === param.slug);

    // If no matching tour is found, return a "Tour not found" message
    if (!tour_package) {
        return <div>Tour not found</div>;
    }

    return (
        <main className="min-h-screen bg-background">
            <section className="section_container">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{tour_package.title}</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            <Star className="w-5 h-5 fill-primary text-primary" />
                            <span className="ml-1 font-medium">{tour_package.rating}</span>
                            <span className="ml-1 text-muted-foreground">
                                ({tour_package.reviews} reviews)
                            </span>
                        </div>
                        <div>
                            {formatLocation(tour_package.location)}
                        </div>
                    </div>
                </div>

                {/* Main content layout */}
                <div className="lg:grid lg:grid-cols-3 gap-8">
                    {/* Pricing Component */}
                    <div className="order-1 lg:order-2 lg:col-span-1 mb-6 md:mb-0">
                        <TourPricing
                            tourOptions={tour_package.tourOptions}
                            startDate={tour_package.startDate}
                            endDate={tour_package.endDate}
                            slug={tour_package.slug}
                        />
                    </div>

                    {/* Main content */}
                    <div className="order-2 lg:order-1 lg:col-span-2 space-y-8">
                        <TourGallery images={tour_package.gallery} title={tour_package.title} />
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Package Description</h2>
                            <ReactMarkdown>{tour_package.description}</ReactMarkdown>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Inclusions and Exclusions</h2>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold mb-4 text-xl">What&apos;s included:</h3>
                                    <ul className="space-y-2">
                                        {tour_package.inclusions.map((inclusion, index) => (
                                            <li key={index}>
                                                <h4 className="font-bold">{inclusion.category}</h4>
                                                <ul className="ml-4">
                                                    {inclusion.items.map((item, itemIndex) => (
                                                        <li key={itemIndex} className="flex items-center gap-2 ">
                                                            <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                                                                ✓
                                                            </span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {tour_package.exclusions && tour_package.exclusions.length > 0 && (
                                    <div>
                                        <h3 className="font-medium mb-4">What&apos;s not included:</h3>
                                        <ul className="space-y-2">
                                            {tour_package.exclusions.map((item, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <span className="w-4 h-4 rounded-full bg-destructive/20 flex items-center justify-center">
                                                        ✗
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                            <TourItinerary itinerary={tour_package.itinerary} />
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Tour Map</h2>
                            <div className="aspect-video rounded-lg overflow-hidden">
                                <iframe
                                    src={tour_package.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
