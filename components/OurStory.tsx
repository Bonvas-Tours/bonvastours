import CounterCard from "@/components/CounterCard";

export default function OurStory() {

    return (
        <section className="w-full">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left Section */}
                    <div className="bg-primary p-8 text-primary-foreground">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">
                            Our Stories with Adventures
                        </h2>
                        <p>
                            We pride ourselves with delivering top-notch services with a personal touch. Our team of dedicated travel
                            enthusiasts combines local expertise with global standards to ensure that every trip is nothing short of
                            amazing. We ensure you get the best deals, flexible options, and dedicated support for a smooth travel
                            experience.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-cols-2 gap-4">
                        <CounterCard targetValue={1760} duration={2000} label="Customer Satisfactory" />
                        <CounterCard targetValue={7} duration={2000} label="Years of Experience" />
                    </div>
                </div>
            </div>
        </section>
    );
}
