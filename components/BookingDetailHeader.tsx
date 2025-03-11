import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookingDetailHeaderProps {
  bookingId: string
}

export function BookingDetailHeader({ bookingId }: BookingDetailHeaderProps) {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" className="h-8 w-8" asChild>
        <Link href="/client/dashboard">
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </Button>
      <h1 className="text-2xl font-semibold">Booking Detail</h1>
    </div>
  )
}

