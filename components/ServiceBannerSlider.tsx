'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SERVICES } from '@/content'

export default function ServiceBannerSlider() {
  return (
    <section className="container mx-auto px-4 py-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="rounded-xl overflow-hidden"
      >
        {SERVICES.map(({ id, image, title }) => (
          <SwiperSlide key={id}>
            <div className="relative aspect-[16/5] w-full">
              <Image
                src={image}
                alt={`${title} banner`}
                fill
                className="object-cover"
                priority={id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
