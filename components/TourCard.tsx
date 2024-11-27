import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Globe, Calendar, Clock } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

interface TourCardProps {
    title: string
    location: string
    price: number
    date: string
    duration: string
    imageUrl: string
    href: string
}

export function TourCard({
    title,
    location,
    price,
    date,
    duration,
    imageUrl,
    href,
}: TourCardProps) {
    return (
        <Card className="overflow-hidden group p-4 !shadow-none">
            <Link href={href}>
                <div className="relative h-64 overflow-hidden rounded-lg">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <CardHeader>
                    <h3 className="text-2xl font-bold">{title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Globe className="w-4 h-4" />
                            <span>{location}</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-orange-600">
                                ${price}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{duration}</span>
                        </div>
                    </div>
                </CardContent>
            </Link>
        </Card>
    )
}

