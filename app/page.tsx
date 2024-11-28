import { Footer } from "@/components/Footer";
import HeroSlider from "@/components/Hero";
import OurStory from "@/components/our-story";
import { Services } from "@/components/Services";
import TestimonialsSection from "@/components/Testimonial";
import { TourCard } from "@/components/TourCard";
import { UpcomingEvents } from "@/components/UpcomingEvent";
import { MOCK_TOURS } from "@/content/tours";

export default function Home() {
  const HomeTourPackages = MOCK_TOURS.slice(0, 3);
  return (
    <>
      <HeroSlider />
      <div className="px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <OurStory />
      </div>

      <div className="section_container">
        <Services />
      </div>
      {/* Upcoming Tour Packages Section */}
      <section className="section_container">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl font-bold">Upcoming Tour Packages</h2>
        </div>
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {HomeTourPackages.map((tour) => {
            const imageUrls = tour.gallery.slice(0, 2); // Corrected the variable name from 'imgageUrls' to 'imageUrls'
            return (
              <TourCard
                key={tour.id}
                slug={tour.slug}
                title={tour.title}
                location={`${tour.location}, ${tour.region}`}
                price={tour.price}
                date={tour.startDate}
                duration={tour.duration}
                imageUrls={imageUrls}
              />
            );
          })}
        </div> */}

      </section>

      <section className="section_container">
        <UpcomingEvents />
      </section>

      <TestimonialsSection />

      <section className="section_container">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/m4lQfYDVx-Q?si=KOMuBercD2s_Ro9Y"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
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
      </section>
    </>
  );
}
