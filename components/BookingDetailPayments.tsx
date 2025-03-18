import { format } from "date-fns";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Booking, Payment } from "@prisma/client";

interface BookingDetailPaymentsProps {
  booking: Booking & {
    payments?: Payment[];
  };
}

export function BookingDetailPayments({ booking }: BookingDetailPaymentsProps) {
  if (!booking || !booking.payments || booking.payments.length === 0) {
    return null;
  }

  return (
    <Card className="!shadow-none">
      <CardHeader className="pb-2">
        <CardTitle>Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left font-medium text-muted-foreground">Transaction ID</th>
                <th className="px-4 py-2 text-left font-medium text-muted-foreground">Date</th>
                <th className="px-4 py-2 text-left font-medium text-muted-foreground">Amount</th>
                <th className="px-4 py-2 text-left font-medium text-muted-foreground">Installment Number</th>
                <th className="px-4 py-2 text-right font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {booking.payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-4 py-2">{payment.transactionId}</td>
                  <td className="px-4 py-2">{format(new Date(payment.createdAt), "MMM dd, yyyy")}</td>
                  <td className="px-4 py-2">${payment.amount.toLocaleString()}</td>
                  <td className="px-4 py-2">{payment.installmentNumber || 1}</td>
                  <td className="px-4 py-2 text-right">
                    <form action={`/api/invoices/${booking.tnr}`} method="GET">
                      <Button variant="ghost" size="sm" className="h-8 px-2" type="submit">
                        <Download className="h-4 w-4 mr-1" />
                        <span>Invoice</span>
                      </Button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}