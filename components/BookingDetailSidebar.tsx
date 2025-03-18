import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { TouristProfileSheet } from "./TouristProfileSheet";
import { Booking, Tourist } from "@prisma/client";

interface BookingDetailSidebarProps {
  booking: Booking & {
    bookingTourists?: { tourist: Tourist }[];
  };
  primaryTourist: Tourist; // The primary tourist (logged-in user)
}

export function BookingDetailSidebar({ booking, primaryTourist }: BookingDetailSidebarProps) {
  console.log(primaryTourist)
  // Ensure booking and tourists exist
  if (!booking || !booking.bookingTourists || booking.bookingTourists.length === 0) {
    return null;
  }

  // Extract tourists from bookingTourists
  const tourists = booking.bookingTourists.map((bt) => bt.tourist);

  // Filter out the primary tourist from the list of other tourists
  const otherTourists = tourists.filter((tourist) => tourist.id !== primaryTourist.id);

  return (
    <div className="space-y-4">
      {/* Primary Tourist Card */}
      <Card className="!shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">
            {primaryTourist.firstname} {primaryTourist.lastname}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center">
              <Phone className="h-3 w-3 text-muted-foreground" />
            </div>
            <span>{primaryTourist.primaryNumber}</span>
          </div>
          {primaryTourist?.email && (
            <div className="flex items-center gap-2 text-sm">
              <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center">
                <Mail className="h-3 w-3 text-muted-foreground" />
              </div>
              <span>{primaryTourist?.email}</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Personal Information Card */}
      <Card className="!shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-xs text-muted-foreground">Country</div>
            <div className="text-sm">{primaryTourist.country}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">City</div>
            <div className="text-sm">{primaryTourist.city}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Address</div>
            <div className="text-sm">{primaryTourist.address}</div>
          </div>
          {primaryTourist.specialRequirement && (
            <div>
              <div className="text-xs text-muted-foreground">Special Requirement</div>
              <div className="text-sm">{primaryTourist.specialRequirement}</div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Other Tourists */}
      {otherTourists.map((tourist) => (
        <Card key={tourist.id} className="!shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">
              {tourist.firstname} {tourist.lastname}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TouristProfileSheet tourist={tourist} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}