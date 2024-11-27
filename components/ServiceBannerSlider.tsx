'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { services } from '@/content'



export default function ServiceBannerSlider() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
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
        loop={true}
        className="rounded-xl overflow-hidden"
      >
        {services.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative aspect-[16/5] w-full">
              <Image
                src={banner.image}
                alt={banner.title + "banner"}
                fill
                className="object-cover"
                priority={banner.id === 1}
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

