import Image from "next/image"
import { Shield, Award, Scale, Users, Briefcase, Globe } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
    return (
        <main className="section_container">
            {/* Hero Section */}
            <section className="container px-4 py-12 md:py-24 flex flex-col lg:flex-row gap-8 items-center">
                <div className="space-y-6 lg:w-1/2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Bonvas Tours</h1>
                    <p className="text-neutral-600">
                        Established in 2018, Bonvas Tours Ltd. is a technology-driven, sustainable tour operating company based in Ghana, Africa. We are committed to promoting tourism in Africa, bringing travelers closer to the rich heritage, vibrant culture, and breathtaking landscapes of the continent.
                    </p>
                </div>
                <div className="relative w-full lg:w-1/2 h-[400px]">
                    <Image
                        src="/slides/slide3.jpg"
                        alt="Bonvas Tours Experience"
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
            </section>

            {/* Company Overview */}
            <section className="bg-white-100 py-12">
                <div className="container px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="shadow-none">
                            <CardContent className="p-6 space-y-4">
                                <Users className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Who We Are</h3>
                                <p className="text-neutral-600">
                                    A proud subsidiary of Bonvas Group Global, leveraging extensive experience in tourism, travel, and hospitality to provide premier travel services.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-none">
                            <CardContent className="p-6 space-y-4">
                                <Briefcase className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">What We Do</h3>
                                <p className="text-neutral-600">
                                    Provide seamless, high-quality travel experiences for individuals, groups, and institutions traveling within Ghana, Africa, and beyond.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-none">
                            <CardContent className="p-6 space-y-4">
                                <Globe className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Where We Are</h3>
                                <p className="text-neutral-600">
                                    Located on Ecocent Road, Ayigya, Kumasi. Open Monday through Friday, 9:00 AM to 5:00 PM, with a 24/7 customer service center.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Values Section */}
            <section className="container px-4 py-12 md:py-24">
                <Tabs defaultValue="vision" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="vision">Vision</TabsTrigger>
                        <TabsTrigger value="mission">Mission</TabsTrigger>
                        <TabsTrigger value="values">Values</TabsTrigger>
                    </TabsList>
                    <TabsContent value="vision" className="mt-8">
                        <Card className="shadow-none border-none">
                            <CardContent className="p-6 space-y-4">
                                <h2 className="text-3xl font-bold">Our Vision</h2>
                                <p className="text-neutral-600">
                                    To lead Africa&apos;s tourism sector by setting the standard for quality, reliability, and innovation, making Bonvas Tours Ltd. a name trusted by travelers and partners alike.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="mission" className="mt-8">
                        <Card className="shadow-none border-none">
                            <CardContent className="p-6 space-y-4">
                                <h2 className="text-3xl font-bold">Our Mission</h2>
                                <p className="text-neutral-600">
                                    To provide our customers with the most unforgettable travel experiences of their lives, inspiring lifelong memories and connections to the people, places, and cultures of Ghana and Africa.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="values" className="mt-8">
                        <Card className="shadow-none border-none">
                            <CardContent className="p-6 space-y-4">
                                <h2 className="text-3xl font-bold">Our Values</h2>
                                <p className="text-neutral-600">
                                    At Bonvas Tours, we regard our customers as family. Guided by values of respect, safety, and service excellence, we are committed to creating a safe, inclusive environment that fosters comfort, joy, and well-being. Our employees enjoy a positive, growth-oriented work environment where their contributions are recognized and valued, further empowering our commitment to exceptional service.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>

            {/* Core Values Section */}
            <section className="bg-white-100 py-12">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <Shield className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Trust</h3>
                                <p className="text-neutral-600">
                                    We safeguard your information with utmost care and discretion.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <Award className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Professionalism</h3>
                                <p className="text-neutral-600">
                                    We maintain a high level of competence in all interactions and endeavors.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <Scale className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Integrity</h3>
                                <p className="text-neutral-600">
                                    We uphold honesty and ethical standards in every aspect of our work.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Brand Story Section */}
            <section className="container px-4 py-12 md:py-24">
                <h2 className="text-3xl font-bold mb-6">Brand Story</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-3 text-neutral-600">
                        <p>
                            Born in the heart of Ghana, Bonvas Tours Ltd. started with a vision to bridge the gap between West African cultures and the world. From catering to domestic travelers to becoming a trusted name in international travel, our journey has been one of growth and passion.
                        </p>
                        <p>
                            Our story is one of resilience and innovation. We&apos;ve grown from humble beginnings to become a key player in the West African travel market, earning trust through our commitment to excellence and leveraging cutting-edge technology as a proud member of Amadeus.
                        </p>
                        <p>
                            Our strength lies in our people—passionate team members dedicated to creating seamless and unforgettable journeys. We foster a work environment that mirrors the warmth and hospitality we extend to our clients.
                        </p>
                        <p>
                            Looking ahead, we aim to make Ghana a top global travel destination through sustainable tourism practices, community engagement, and innovative travel experiences. Join us in writing the next chapter of our story.
                        </p>
                    </div>
                    <div className="relative h-[400px]">
                        <Image
                            src="/partner/bgg.png"
                            alt="Bonvas Tours Journey"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>

            </section>
        </main>
    )
}

