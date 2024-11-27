import { Calendar } from "lucide-react"; // Icon library example
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
    image: string;
    title: string;
    description: string;
    date: string;
    href?: string;
}

export function EventCard({ image, title, description, date, href }: EventCardProps) {
    return (
        <div className="rounded-lg shadow-sm bg-white overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full h-48">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                    <Link href={href || "#"}

                        className="px-4 py-2 bg-white text-sm font-semibold text-black rounded-md"
                    >
                        Read More
                    </Link>
                </div>
            </div>
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {date}
                </div>
            </div>
        </div>
    );
}
