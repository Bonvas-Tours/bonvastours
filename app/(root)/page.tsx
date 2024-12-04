
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import { Services } from "@/components/Services";
import TestimonialsSection from "@/components/Testimonial";
import TourPackages from "@/components/TourPackages";
import tourPackages from '@/content/tourPackage.json'

import YouTubeEmbed from "@/components/YouTubeEmbed";

import { Suspense } from "react";

export default function Home() {
  const homeTourPackages = tourPackages?.slice(0, 3);
  // console.log(homeTourPackages)
  return (
    <>
      <Hero />
      <div className="px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <OurStory />
      </div>

      <div className="section_container">
        <Services />
      </div>
      {/* Upcoming Tour Packages Section */}
      <section className="section_container">
        <Suspense fallback={<div>Loading tour packages...</div>}>
          <TourPackages tours={homeTourPackages} />
        </Suspense>
      </section>


      {/* <section className="section_container">
        <UpcomingEvents />
      </section> */}

      <TestimonialsSection />

      <section className="section_container">
        <YouTubeEmbed videoId="m4lQfYDVx-Q?si=KOMuBercD2s_Ro9Y" />
      </section>



      {/* <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Trusted Partners</h1>
          <div className="flex items-center">
            <img
              src="/partner/asu.png"
              alt="Arizona State University Logo"
              className="mx-auto w-full max-w-[150px] md:max-w-[200px]"
            />
            <img
              src="/partner/usaid.png"
              alt="USAID Logo"
              className="mx-auto w-full max-w-[150px] md:max-w-[200px]"
            />
            <img
              src="/partner/knust.png"
              alt="Kwame Nkrumah University of Science and Technology Logo"
              className="mx-auto w-full max-w-[150px] md:max-w-[200px]"
            />
          </div>
        </div>
      </section> */}
    </>
  );
}
