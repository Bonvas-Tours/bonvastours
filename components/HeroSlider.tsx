'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const slides = [
    {
        id: 1,
        image: '/slide1.jpg',

    },
    {
        id: 2,
        image: '/slide2.jpg',

    },
    {
        id: 3,
        image: '/slide3.jpg',

    },
    {
        id: 4,
        image: '/slide4.jpg',

    },
]

export default function HeroSlider() {
    return (
        <div className="relative h-[580px] w-full md:rounded-xl overflow-hidden">
            <Swiper
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                effect="fade"
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} w-3 h-3"></span>`
                    },
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            <Image
                                src={slide.image}
                                alt={slide.image}
                                fill
                                className="object-cover"
                                priority={slide.id === 1}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="swiper-button-prev absolute left-4 top-1/2 z-10 rounded-full !w-10 !h-10 bg-white/80  text-gray-800 shadow-lg transition hover:bg-white p-2">
                <ChevronLeft color='gray' />
            </button>

            <button className="swiper-button-next absolute right-4 top-1/2 z-10 rounded-full !w-10 !h-10 bg-white/80  text-gray-800 shadow-lg transition hover:bg-white p-2">
                <ChevronRight color='gray' />
            </button>
        </div>
    )
}

