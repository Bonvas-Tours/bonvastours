'use client'

import * as React from "react"
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Avatar from "./Avatar"
import { testimonials } from "@/content"
import { Testimonial } from "@/type"

export default function TestimonialsSection() {
    const [activeTestimonial, setActiveTestimonial] = React.useState<Testimonial>(testimonials[0])

    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-white-100">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-40 lg:justify-center">
                    <div className="space-y-2 text-center lg:text-left md:max-w-72">
                        <h2 className="text-sm uppercase tracking-wide text-neutral-700">TESTIMONIALS</h2>
                        <h3 className="text-3xl md:text-4xl font-bold">What our happy clients say</h3>
                    </div>
                    <Card className="p-6 bg-white shadow-sm max-w-full md:max-w-[480px] border-none">
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Avatar
                                    src={activeTestimonial.image}
                                    alt={activeTestimonial.name}
                                    size={56}
                                />
                                <div>
                                    <h4 className="font-semibold">{activeTestimonial.name}</h4>
                                    <p className="text-muted-foreground">
                                        {activeTestimonial.region || activeTestimonial.role}
                                    </p>
                                </div>
                                <div className="ml-auto flex">
                                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm md:text-lg">{activeTestimonial.review}</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Carousel Section */}
                <div className="flex justify-center mt-12">
                    <Carousel
                        className="w-full max-w-[800px]"
                        orientation="horizontal"
                        opts={{
                            align: "start",
                        }}
                    >
                        <CarouselContent className="flex gap-2">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="flex-[0_0_50%] sm:flex-[0_0_33%] md:flex-[0_0_25%]">
                                    <div className="p-2">
                                        <button
                                            onClick={() => setActiveTestimonial(testimonial)}
                                            className={`w-full transition-opacity ${activeTestimonial.id === testimonial.id
                                                ? "opacity-100"
                                                : "opacity-50 hover:opacity-75"
                                                }`}
                                        >
                                            <div className="flex flex-col items-center gap-2">
                                                <Avatar
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    size={56}
                                                />
                                                <div className="text-center">
                                                    <p className="font-medium break-words text-sm md:text-base">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-xs md:text-sm text-muted-foreground">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                                {activeTestimonial.id === testimonial.id && (
                                                    <div className="w-full h-[2px] bg-neutral-800"></div>
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious
                            className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10 md:left-0"
                        />
                        <CarouselNext
                            className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10 md:right-0"
                        />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
