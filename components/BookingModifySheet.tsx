"use client"

import { useState } from "react"
import { format, differenceInDays } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import type { Booking } from "@/lib/api"

interface BookingModifySheetProps {
  booking: Booking
}

export function BookingModifySheet({ booking }: BookingModifySheetProps) {
  const [open, setOpen] = useState(false)
  const [startDate, setStartDate] = useState<Date | null>(
    booking.selectedOption?.startDate ? new Date(booking.selectedOption.startDate) : null
  )
  const [endDate, setEndDate] = useState<Date | null>(
    booking.selectedOption?.endDate ? new Date(booking.selectedOption.endDate) : null
  )
  const [total, setTotal] = useState<number>(booking.totalPrice)

  const handleDateChange = (newStartDate: Date | null, newEndDate: Date | null) => {
    setStartDate(newStartDate)
    setEndDate(newEndDate)
    if (newStartDate && newEndDate) {
      const duration = differenceInDays(newEndDate, newStartDate)
      setTotal(duration * 450)
    }
  }

  const handleModify = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.")
      return
    }
    alert(`Booking modified with new dates: ${format(startDate, "MMMM dd, yyyy")} to ${format(endDate, "MMMM dd, yyyy")}, total: $${total}`)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="mt-2">
          Modify
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Modify Booking</SheetTitle>
        </SheetHeader>

        <div className="grid grid-cols-2 gap-2 mt-6">
          <div>
            <div className="text-sm text-muted-foreground">Start Date</div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate || undefined}
                  onSelect={(date) => {
                    if (date) {
                      handleDateChange(date, endDate)
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">End Date</div>
            <Popover >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal "
                >
                  <CalendarIcon className="h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate || undefined}
                  onSelect={(date) => {
                    if (date) {
                      handleDateChange(startDate, date)
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="text-xl font-bold">Total</div>
          <div className="text-xl font-bold">${total.toLocaleString()}</div>
        </div>

        <Button className="w-full mt-6" onClick={handleModify}>
          Modify
        </Button>
      </SheetContent>
    </Sheet>
  )
}