import Image from "next/image"
import { Shield, Award, Scale } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <main className="min-h-screen">

            <section className="section_container md:py-24 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            At Bonvas Tours Limited, we redefine travel with a seamless blend of technology, sustainability, and exceptional service. Founded in 2018 by passionate professionals in hospitality and tourism, we are a Ghanaian tour operator with a mission to connect travelers - whether locals, the diaspora, or international explorers to the wonders of Ghana and beyond.
                        </p>
                        <h2 className="text-2xl font-bold">Our Reach</h2>
                        <p className="text-gray-700">
                            Headquartered in the heart of Ghana, Bonvas Tours operates from Ayigya, Kumasi behind Victory Baptist Church. Whether you&apos;re venturing across Africa&apos;s vibrant sub-regions or embarking on global adventures, we&apos;re your trusted partner every step of the way.
                        </p>
                        <h2 className="text-2xl font-bold">What Sets Us Apart</h2>
                        <p className="text-gray-700">
                            Our team is available around the clock, combining 24/7 customer support with innovative solutions to make your travel smooth and memorable. With a well-structured organization comprising six key departments: Tour Management, Sales and Marketing, Accounts and Finance, Outbound Travel, IT & Innovation, and Operations. We ensure every detail of your journey is managed with precision and care.
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
                            <p className="text-gray-700">
                                With the Vision to become the front-runner in Africa&apos;s tourism sector, a company reputed for reliability amongst customers and partners alike.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Mission</h2>
                            <p className="text-gray-700 ">
                                Bonvas Tours has for its Mission to offer our customers the best, most unforgettable travel experience of their lives.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Values</h2>
                            <p className="text-gray-700">
                                We are guided by our values to make our customers an extension of our family and to support them in all aspects, ensuring their comfort, safety, and happiness. Our employees are provided with a safe and pleasant working environment in which they can grow and feel valued for their contributions.
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
                            <p className="text-gray-700">
                                We safeguard your information with utmost care and discretion
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <Award className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Professionalism</h3>
                            <p className="text-gray-700 ">
                                We maintain a high level of competence in all interactions and endeavor
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <Scale className="w-12 h-12 text-primary" />
                            <h3 className="text-xl font-bold">Integrity</h3>
                            <p className="text-gray-700 ">
                                We uphold honesty and ethical standards in every aspect of our work
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Brand Story Section */}
            <section className="bg-gray-50">
                <div className="container px-4 py-12 md:py-24">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl font-bold text-center">Brand Story</h2>
                        <div className="space-y-4 text-gray-500 dark:text-gray-400">
                            <p>
                                At Bonvas Tours, we believe travel is more than just a journey. It&apos;s an opportunity to connect with culture, history, and the soul of a destination. Founded in 2018, our vision is to offer transformative travel experiences that immerse you in the rich landscapes and vibrant traditions of Ghana and beyond.
                            </p>
                            <p>
                                With a team of passionate travel experts, we specialize in crafting personalized tours, hassle-free bookings, and unforgettable adventures, ensuring every trip leaves you with memories that will last a lifetime.
                            </p>
                            <p>
                                At Bonvas Tours, we don&apos;t just show you places, we share stories; your story, our story, and the stories of the places you&apos;ll visit. Your next adventure starts here!
                            </p>
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

