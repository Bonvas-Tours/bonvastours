"use client"
import { useState } from 'react';
import { SERVICES } from '@/content'
import { ServiceCard } from './ServiceCard'
import ServiceBannerSlider from './ServiceBannerSlider'
import { Button } from './ui/button';


export function Services() {
    const [showAll, setShowAll] = useState(false);
    const visibleServices = showAll ? SERVICES : SERVICES.slice(0, 5);

    return (
        <>
            <ServiceBannerSlider />
            <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-4 mb-12 flex justify-center flex-col">
                        <h2 className="text-4xl font-bold">Our Services</h2>
                        <p className="text-neutral-700 text-lg">
                            Comprehensive Travel Solutions—From Flight Bookings to Guided Tours, Study
                            Abroad Programs, and Year-Round Adventures
                        </p>
                    </div>
                    {visibleServices.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.desc}
                            icon={service.icon}
                            href={service.title}
                            variant={service.variant}
                        />
                    ))}
                </div>
                {!showAll && (
                    <div className="mt-8 text-center">
                        <Button
                            className="px-6 py-3 text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-md"
                            onClick={() => setShowAll(true)}
                        >
                            Show More
                        </Button>
                    </div>
                )}
            </section>
        </>
    )
}
