// "use client"

import HeroSlider from "@/components/Hero";
import OurStory from "@/components/our-story";
import { Services } from "@/components/Services";
import TestimonialsSection from "@/components/Testimonial";
import TourPackages from "@/components/TourPackages";
import TrustedPartners from "@/components/TrustedPartners";

import { UpcomingEvents } from "@/components/UpcomingEvent";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { MOCK_TOURS } from "@/content/tours";
import React, { Suspense } from 'react';


export default function Home() {
  const homeTourPackages = MOCK_TOURS.slice(0, 3);
  console.log(homeTourPackages);
  return (
    <>
      <HeroSlider />
      <div className="px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <OurStory />
      </div>

      <div className="section_container">
        <Services />
      </div>

      {/* <section className="section_container">
        <Suspense fallback={<div>Loading tour packages...</div>}>
          <TourPackages tours={homeTourPackages} />
        </Suspense>
      </section> */}

      <section className="section_container">
        <UpcomingEvents />
      </section>

      <TestimonialsSection />

      <section className="section_container">
        <YouTubeEmbed videoId="m4lQfYDVx-Q?si=KOMuBercD2s_Ro9Y" />
      </section>

      <TrustedPartners />

    </>
  );
}
