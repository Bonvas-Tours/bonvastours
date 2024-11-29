import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { galleryItems } from "@/content/gallery"
import { GalleryItem } from "@/type"


export default function GalleryPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Gallery</h1>
                    <p className="text-gray-500 dark:text-gray-400">Explore our tours and events through pictures</p>
                </div>

                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="tours">Tours</TabsTrigger>
                        <TabsTrigger value="events">Events</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryItems.map((item) => (
                                <GalleryCard key={item.id} item={item} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="tours" className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryItems
                                .filter((item) => item.category === "tour")
                                .map((item) => (
                                    <GalleryCard key={item.id} item={item} />
                                ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="events" className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryItems
                                .filter((item) => item.category === "event")
                                .map((item) => (
                                    <GalleryCard key={item.id} item={item} />
                                ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

function GalleryCard({ item }: { item: GalleryItem }) {
    return (
        <Link
            href={`/gallery/${item.slug}`}

            className="group relative block w-full aspect-square overflow-hidden rounded-lg">
            <Image
                src={`/gallery/${item.gallery[0]}`}
                alt={item.title}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/60" />
            <div className="absolute inset-0 p-4 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-bold text-center">{item.title}</h3>
            </div>
            <div className="absolute top-4 right-4">
                <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-white bg-primary/80 rounded">
                    {item.category}
                </span>
            </div>
        </Link>
    )
}

