"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Globe, Calendar, Clock } from 'lucide-react'
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { TourPackageProps } from "@/type"
import { calculateDuration, formatLocation } from "@/lib/utils"
import Image from "next/image"


export function TourCard({
    slug,
    title,
    location,
    startDate,
    endDate,
    imageUrls,
}: TourPackageProps) {
    return (
        <Card className="overflow-hidden group p-4 !shadow-none">
            <Link href={`/tour-packages/${slug}`}>
                <div className="relative h-64 overflow-hidden rounded-lg">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true, // Enable clickable pagination dots
                            type: 'bullets', // Use bullets for pagination
                        }}
                        navigation={true} // Enable navigation arrows
                        modules={[Pagination, Navigation, EffectFade]} // Import necessary modules
                        className="w-full h-full"
                    >
                        {imageUrls.map((url, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={url}
                                        alt={title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover w-full h-full"
                                    />

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <CardHeader>
                    <h3 className="text-2xl font-bold">{title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Globe className="w-4 h-4" />
                            <span>{formatLocation(location)}</span>
                        </div>

                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{startDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{`${calculateDuration(startDate, endDate)} day${calculateDuration(startDate, endDate) > 1 ? "s" : ""}`}</span>
                        </div>
                    </div>
                </CardContent>
            </Link>
        </Card>
    )
}
