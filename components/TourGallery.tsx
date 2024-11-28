'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

interface TourGalleryProps {
    images: string[]
    title: string
}

export function TourGallery({ images, title }: TourGalleryProps) {
    const [showDialog, setShowDialog] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const mainImage = images[0]
    const thumbnails = images.slice(1)

    // Handle image navigation
    const handlePrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <>
            {/* Main Image Grid */}
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 relative aspect-[4/4]">
                    <Image
                        src={mainImage}
                        alt={title}
                        fill
                        className="object-cover rounded-lg"
                    />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70"
                        onClick={() => setShowDialog(true)}
                    >
                        <Expand className="md:h-10 h-5 md:w-10 text-white" />
                    </Button>
                </div>
                <div className="grid grid-rows-2 gap-2">
                    {thumbnails.slice(0, 2).map((image, index) => (
                        <div key={index} className="relative aspect-square">
                            <Image
                                src={image}
                                alt={`${title} ${index + 2}`}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dialog Lightbox */}
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent className="max-w-3xl">
                    {/* Visually hidden DialogTitle for screen readers */}
                    <DialogTitle>
                        <VisuallyHidden>{title} - Image Gallery</VisuallyHidden>
                    </DialogTitle>

                    <div className="relative aspect-video">
                        {/* Main Image Display */}
                        <Image
                            src={images[currentImageIndex]}
                            alt={`${title} ${currentImageIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                        {/* Image Navigation Buttons */}
                        <Button
                            size="icon"
                            variant="ghost"
                            className="absolute left-2 top-1/2 -translate-y-1/2"
                            onClick={handlePrevious}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                            onClick={handleNext}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                        {/* Image Progress */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold bg-black/50 px-4 py-2 rounded-lg">
                            {currentImageIndex + 1} of {images.length}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
