import Link from "next/link"
import { format } from "date-fns"
import { Calendar, Clock, Eye } from "lucide-react"
import { Booking } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReviewSheet } from "@/components/ReviewSheet"
import { Payment, Tourist, TourPackage, TourPackageOption } from "@prisma/client"

interface BookingProps {
    booking: Booking & {
        payments?: Payment[];
        tourPackage?: TourPackage & { location: Location };
        selectedOption?: TourPackageOption;
        bookingTourists?: { tourist: Tourist }[];
    };
};

export function CompletedBookings({ booking }: BookingProps) {

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Completed Bookings</h2>
        <Button variant="outline" size="sm" asChild>
          <Link href="/client/booking-history">View All</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <Card key={booking.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                <CardTitle className="text-base">{booking?.tourPackage?.name}</CardTitle>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
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
                  <span className={`text-xs px-2 py-1 rounded-full ${booking.status === "Reserved"
                      ? "bg-yellow-100 text-yellow-800"
                      : booking.status === "Completed"
                        ? "bg-blue-100 text-blue-800"
                        : booking.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "Cancelled"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                      }`}>
                    {booking.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/client/booking-detail/${booking.tnr}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                  {/* <ReviewSheet /> */}
                </div>
              </CardContent>
            </Card>

      </div>
    </div>
  )
}
