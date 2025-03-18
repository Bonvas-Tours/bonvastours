import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatLocation2 } from "@/lib/utils";
import { Booking, TourPackage, TourPackageOption, Tourist } from "@prisma/client";

interface BookingDetailInfoProps {
  booking: Booking & {
    tourPackage?: TourPackage & { location: Location };
    selectedOption?: TourPackageOption;
    tourists?: Tourist[];
  };
}

export function BookingDetailInfo({ booking }: BookingDetailInfoProps) {
  if (!booking) {
    return null;
  }

  const tourPackage = booking.tourPackage;

  return (
    <div className="space-y-4">
      <Card className="!shadow-none">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Booking Info</CardTitle>
              <div
                className={`mt-1 inline-block px-2 py-1 rounded-md text-xs ${booking.status === "Reserved"
                    ? "bg-yellow-100 text-yellow-800"
                    : booking.status === "Completed"
                      ? "bg-blue-100 text-blue-800"
                      : booking.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                  }`}
              >
                {booking.status} Booking
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div>
            <h3 className="font-medium">TNR: {booking.tnr}</h3>
            <p className="text-sm text-muted-foreground">
              {format(new Date(booking.createdAt), "MMM dd, yyyy, h:mm a")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div>
                <div className="text-sm text-muted-foreground">Tour Package</div>
                <div>{tourPackage?.name}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Tour Type</div>
                <div>Public</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total Price</div>
                <div>${booking.totalPrice.toLocaleString()}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div>
                <div className="text-sm text-muted-foreground">Tourists</div>
                <div>
                  {booking.numberOfAdults} Adult, {booking.numberOfChildren} Children
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Selected Package Option</div>
                <div>{booking.selectedOption?.durationDays}-day package</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Amount Paid</div>
                <div>${booking.amountPaid.toLocaleString()}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div>
                <div className="text-sm text-muted-foreground">Trip Start Date</div>
                <div>
                  {booking.selectedOption?.startDate &&
                    format(new Date(booking.selectedOption.startDate), "MMM dd, yyyy")}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Trip End Date</div>
                <div>
                  {booking.selectedOption?.endDate &&
                    format(new Date(booking.selectedOption.endDate), "MMM dd, yyyy")}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Departure Point</div>
                <div>{booking?.departurePoint}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div>
                <div className="text-sm text-muted-foreground">Contact Person</div>
                <div>
                  {booking.tourists?.[0]?.firstname} {booking.tourists?.[0]?.lastname}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Adult (Ages 16+)</div>
                <div>
                  {booking.numberOfAdults}x ${booking.selectedOption?.adultPrice.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Couple/Double (Ages 16+)</div>
                <div>
                  {booking.numberOfCouples}x ${booking.selectedOption?.couplePrice.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div>
                <div className="text-sm text-muted-foreground">Children (Ages 2 - 15)</div>
                <div>
                  {booking.numberOfChildren}x ${booking.selectedOption?.childrenPrice.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="!shadow-none">
        <div className="py-4 flex justify-between items-center px-6 ">
          <h1 className="font-bold ">Tour Package</h1>
          <Button variant="outline" size="sm" asChild>
            <Link href={`/tour-packages/${booking.tourPackage?.slug}`}>View Detail</Link>
          </Button>
        </div>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <Image
              src={tourPackage?.cover || "/placeholder.svg"}
              alt={tourPackage?.name || "Tour Package"}
              width={200}
              height={120}
              className="rounded-md object-cover w-full md:w-[200px] h-[120px]"
            />
            <div>
              <h3 className="font-medium">{tourPackage?.name}</h3>
              <CardDescription className="mt-1">{formatLocation2(tourPackage?.location)}</CardDescription>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {booking.selectedOption?.startDate &&
                      format(new Date(booking.selectedOption.startDate), "MMM dd, yyyy")}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Duration: {booking.selectedOption?.durationDays} days</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}