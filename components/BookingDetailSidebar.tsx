import { getBookingById } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"
import { TouristProfileSheet } from "./TouristProfileSheet"

interface BookingDetailSidebarProps {
  bookingId: string
}

export async function BookingDetailSidebar({ bookingId }: BookingDetailSidebarProps) {
  const booking = await getBookingById(bookingId)

  if (!booking || !booking.tourists || booking.tourists.length === 0) {
    return null
  }

  const primaryTourist = booking.tourists[0]
  const otherTourists = booking.tourists.slice(1)

  return (
    <div className="space-y-4">
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
          {primaryTourist.email && (
            <div className="flex items-center gap-2 text-sm">
              <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center">
                <Mail className="h-3 w-3 text-muted-foreground" />
              </div>
              <span>{primaryTourist.email}</span>
            </div>
          )}
        </CardContent>
      </Card>

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
  )
}

