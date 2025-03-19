// components/BookingHistoryList.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';
import { format } from "date-fns";
import { BookingHistoryPagination } from "./BookingHistoryPagination";

interface Booking {
  tnr: string;
  createdAt: string;
  tourPackage?: {
    name: string;
  };
  selectedOption?: {
    durationDays: number;
  };
  numberOfAdults: number;
  numberOfCouples: number;
  numberOfChildren: number;
  totalPrice: number;
  status: string;
}

interface BookingHistoryListProps {
  bookings: Booking[];
}

export function BookingHistoryList({ bookings }: BookingHistoryListProps) {
  return (
    <div>
      <div className="bg-white rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">TNR</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Booking Date</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Tour Package</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Selected Option</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">No. of Adult</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">No. of Couple</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">No. of Children</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Total</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {bookings.map((booking) => (
                <tr key={booking.tnr}>
                  <td className="px-4 py-3">{booking.tnr}</td>
                  <td className="px-4 py-3">{format(new Date(booking.createdAt), "MMM dd, yyyy")}</td>
                  <td className="px-4 py-3">{booking.tourPackage?.name}</td>
                  <td className="px-4 py-3">{booking.selectedOption?.durationDays}-day package</td>
                  <td className="px-4 py-3">{booking.numberOfAdults}</td>
                  <td className="px-4 py-3">{booking.numberOfCouples}</td>
                  <td className="px-4 py-3">{booking.numberOfChildren}</td>
                  <td className="px-4 py-3">${booking.totalPrice.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${booking.status === "Reserved"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : booking.status === "Completed"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : booking.status === "Approved"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                            }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                      <Link href={`/client/booking-detail/${booking.tnr}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-4 py-8 text-center text-muted-foreground">
                    No booking history found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {bookings.length > 0 && <BookingHistoryPagination totalItems={bookings.length} />}
    </div>
  );
}