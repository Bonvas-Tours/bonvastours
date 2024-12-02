'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface TourItineraryProps {
    itinerary: Array<{
        day: string
        title: string
        description: string
    }>
}

export function TourItinerary({ itinerary }: TourItineraryProps) {
    return (
        <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            {itinerary.map(({ day, title, description }) => (
                <AccordionItem key={day} value={`day-0${day}`}>
                    <AccordionTrigger className="flex items-center justify-between rounded-lg border-none p-4 hover:no-underline">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center rounded-full bg-black py-2 px-6 text-white">
                                {day}
                            </div>
                            <span className="font-medium">{title}</span>
                        </div>

                    </AccordionTrigger>
                    <AccordionContent className="px-12 py-4">
                        <p className="text-muted-foreground">{description}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

