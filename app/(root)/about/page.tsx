import Image from "next/image"
import { Shield, Award, Scale } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="section_container md:py-24 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
                    <div className="space-y-4">
                        <p className="text-gray-500 dark:text-gray-400">
                            <strong>Bonvas Tours Ltd.</strong> is a technology-driven, sustainable tour operating company based in Ghana, Africa. Established in 2018, we are committed to promoting tourism in Africa, bringing travelers closer to the rich heritage, vibrant culture, and breathtaking landscapes of Africa. As a proud subsidiary of Bonvas Group Global, we leverage extensive experience in the tourism, travel, and hospitality industry to provide premier travel services to individuals, groups, and institutions traveling within Ghana, Africa, and beyond.
                            <br />
                            <br />   Located on Ecocent Road, Ayigya, Kumasi, Bonvas Tours operates with a streamlined structure, supported by six core departments: Administration, Sales & Marketing, Accounts & Finance, Outbound Services, IT & Innovation, and Operations. Each department plays an integral role in delivering seamless, high-quality travel experiences, while our centralized administration ensures efficient coordination and customer satisfaction at every step. Our offices are open Monday through Friday, 9:00 AM to 5:00 PM, with a dedicated 24/7 customer service center for support and inquiries.
                        </p>
                    </div>
                </div>
                <div className="relative h-[400px] lg:h-[600px]">
                    <Image
                        src="/testimonial/1.jpg"
                        alt="Bonvas Tours Experience"
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
            </section>

            {/* Vision, Mission, Values Section */}
            <section className="section_container bg-gray-50">
                <div className="container px-4 py-12 md:py-24 grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[400px]">
                        <Image
                            src="/testimonial/4.jpg"
                            alt="Company Vision"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Our Vision</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                To lead Africa’s tourism sector by setting the standard for quality, reliability, and innovation, making Bonvas Tours Ltd. a name trusted by travelers and partners alike.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Mission</h2 >
                            <p className="text-gray-500 dark:text-gray-400">
                                To provide our customers with the most unforgettable travel experiences of their lives, inspiring lifelong memories and connections to the people, places, and cultures of Ghana and Africa.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold"> Our Values</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                At Bonvas Tours, we regard our customers as family. Guided by values of respect, safety, and service excellence, we are committed to creating a safe, inclusive environment that fosters comfort, joy, and well-being. Our employees enjoy a positive, growth-oriented work environment where their contributions are recognized and valued, further empowering our commitment to exceptional service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="section_container">
                <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <Shield className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Trust</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We safeguard your information with utmost care and discretion.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <Award className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Professionalism</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We maintain a high level of competence in all interactions and endeavor.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <Scale className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Integrity</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We uphold honesty and ethical standards in every aspect of our work..
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Brand Story Section */}
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="container px-4 py-12 md:py-24">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl font-bold text-center">Brand Story</h2>
                        <div className="space-y-4 text-gray-500 dark:text-gray-400">
                            <p>
                                Once upon a time, in the bustling heart of Ghana, a dream was born—a dream to bridge the gap between the vibrant cultures of West Africa and the rest of the world. Bonvas Tours Ltd., rooted in the warm traditions of Ghanaian hospitality, started its journey with a singular vision: to create unforgettable travel experiences that celebrate Africa’s beauty, history, and people.
                            </p>

                            <p>
                                Founded with a deep passion for exploration and connection, Bonvas Tours began as a small initiative, catering to domestic travelers eager to rediscover their homeland. Over the years, it has grown into a trusted name in the travel and tourism industry, crafting personalized journeys for adventurers, cultural enthusiasts, and business travelers alike.
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-8">
                            <h2 className="text-3xl font-bold text-center">The Journey So Far </h2>
                            <div className="space-y-4 text-gray-500 dark:text-gray-400">
                                <p> Our story is one of resilience and innovation. From humble beginnings, we’ve become a key player in the West African travel market, earning the trust of both local and international clients. As a proud member of Amadeus, we’ve leveraged cutting-edge technology and global partnerships to enhance our services. This evolution is a testament to our unwavering commitment to excellence.</p>

                                <p>Along the way, we’ve celebrated milestones like expanding our services to include comprehensive travel management solutions, from visa assistance and flight bookings to event organization and tailored tour packages. Each milestone is a reflection of our dedication to staying at the forefront of the industry while preserving the authenticity of the Ghanaian experience.</p>
                            </div>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-8">
                            <h2 className="text-3xl font-bold text-center">The Heart of Bonvas Tours </h2>
                            <div className="space-y-4 text-gray-500 dark:text-gray-400">
                                <p> What sets us apart is our people—the passionate team members who pour their hearts into ensuring every journey is seamless and unforgettable. Guided by our founders’ vision, we strive to create a work environment that reflects the same warmth and hospitality we extend to our clients. Together, we are more than a company; we are a family united by a shared purpose.</p>
                            </div>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-8">
                            <h2 className="text-3xl font-bold text-center">A Vision for the Future </h2>
                            <div className="space-y-4 text-gray-500 dark:text-gray-400">
                                <p> As we look ahead, we are driven by the desire to make Ghana a top travel destination globally. Through sustainable tourism practices, community engagement, and innovative travel experiences, we aim to inspire the world to discover the magic of our homeland.</p>
                                <p> The Bonvas Tours story is still being written, and every traveler who embarks on a journey with us becomes a part of it. So come along—whether you’re seeking adventure, connection, or relaxation, we promise to make your story as extraordinary as ours.</p>
                                <p> <strong> Bonvas Tours: </strong> The Joy of Tourism </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-center"> Bonvas Tours: The Joy Of Tourism!</h2>
                        </div>
                        <div className="relative h-[400px] mt-8">
                            <Image
                                src="/testimonial/5.jpg"
                                alt="Bonvas Tours Experience"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

