import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { galleryItems } from "@/content/gallery"

export const metadata = {
    title: "Gallery Detail - Bonvas Tours",
    description: "Browse through our collection of memories from this amazing experience",
}


export default async function GalleryDetailPage({ params }: { params: { slug: string } }) {
    const slug = params?.slug


    // Find the images corresponding to the gallery (filter by gallery ID)
    const galleryImages = (galleryItems.filter(item => item.slug === slug))[0]?.gallery

    console.log(galleryImages)
    // If no matching tour is found, return a message
    if (!galleryImages) {
        return <div>Image not found</div>;
    }
    return (
        <div className="container mx-auto px-4 py-12">
            <Button asChild variant="ghost" className="mb-8">
                <Link href="/gallery" className="flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Back to Gallery
                </Link>
            </Button>

            <div className="grid gap-8">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize">
                        {slug.replace(/-/g, " ")}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Browse through our collection of memories from this amazing experience
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages?.map((images, i) => (
                        <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                            <Image
                                src={`/gallery/${images}`}
                                alt={`Gallery image ${i + 1}`}
                                className="object-cover"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

