"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function BookingHistoryPagination() {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-sm text-muted-foreground">Showing 1-3 of 10</div>
      <div className="flex gap-1">
        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-orange-500 text-white">
          1
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          2
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          3
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          ...
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          8
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

