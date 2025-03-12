
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import { Services } from "@/components/Services";
import TestimonialsSection from "@/components/Testimonial";
import TourPackages from "@/components/TourPackages";
import tourPackages from '@/content/tourPackage.json'

import YouTubeEmbed from "@/components/YouTubeEmbed";

import { Suspense } from "react";
import Partners from "@/components/Partners";
import { getTourPackages } from "./actions/packages";

export default async function Home() {
  const packages = await getTourPackages(3)
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
          <TourPackages tours={packages} />
        </Suspense>
      </section>


      {/* <section className="section_container">
        <UpcomingEvents />
      </section> */}

      <TestimonialsSection />

      <section className="section_container">
        <YouTubeEmbed videoId="m4lQfYDVx-Q?si=KOMuBercD2s_Ro9Y" />
      </section>

      <Partners />
    </>
  );
}
