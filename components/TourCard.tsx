import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe, Calendar, Clock } from "lucide-react";
import { TourPackageProps } from "@/type";
import { calculateDuration, formatLocation } from "@/lib/utils";

export function TourCard({
    slug,
    name,
    location,
    startDate,
    endDate,
    cover,
    isSold,
}: Partial<TourPackageProps>) {
    return (
        <Card className="overflow-hidden group p-4 !shadow-none">
            <Link href={`/tour-packages/${slug}`}>
                <div className="relative h-64 overflow-hidden rounded-lg">
                    {cover ? (
                        <Image
                            src={cover}
                            alt={name!}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-200">
                            <span className="text-gray-500">No Image Available</span>
                        </div>
                    )}
                       {isSold && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-md">
                            Sold Out
                        </div>
                    )}
                </div>
                <CardHeader>
                    <h3 className="text-2xl font-bold">{name}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Globe className="w-4 h-4" />
                            <span>{formatLocation(location!)}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{startDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{`${calculateDuration(startDate!, endDate!)} day${calculateDuration(startDate!, endDate!) > 1 ? "s" : ""
                                }`}</span>
                        </div>
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}
