
import { Star } from 'lucide-react'

import { TourPricing } from '@/components/TourPricing'
import { TourItinerary } from '@/components/TourItinerary'
import type { TourPackageDetailsProps } from '@/type'
import { MOCK_TOURS } from '@/content/tours'
import { TourGallery } from '@/components/TourGallery'

// This would typically come from an API
export default async function TourDetailsPage({ params }: { params: { slug: string } }) {

    // Use the slug from params to find the corresponding tour
    const tour_package = MOCK_TOURS.find(tour => tour.slug === params.slug);

    // If no matching tour is found, return a message
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
                        <div className="text-muted-foreground">
                            {tour_package.location}, {tour_package.region}
                        </div>
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <TourGallery images={tour_package.gallery} title={tour_package.title} />

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Package Description</h2>
                            <p className="text-muted-foreground">{tour_package.description}</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Inclusions and Exclusions</h2>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-medium mb-4">What's included:</h3>
                                    <ul className="space-y-2">
                                        {tour_package.inclusions.map((item, index) => (
                                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                                <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                                                    ✓
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-4">What's not included:</h3>
                                    <ul className="space-y-2">
                                        {tour_package.exclusions.map((item, index) => (
                                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                                <span className="w-4 h-4 rounded-full bg-destructive/20 flex items-center justify-center">
                                                    ✗
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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

                    <div>
                        <TourPricing
                            pricing={tour_package.pricing}
                            startDate={tour_package.startDate}
                            endDate={tour_package.endDate}
                            slug={params.slug}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
