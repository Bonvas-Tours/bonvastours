import { type NextRequest, NextResponse } from "next/server";
import { getBookingById } from "@/lib/api";
import { format } from "date-fns";
import puppeteer from "puppeteer-core";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const bookingId = params.id;

  if (!bookingId) {
    return NextResponse.json({ error: "Booking ID is required" }, { status: 400 });
  }

  try {
    const booking = await getBookingById(bookingId);

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    const invoiceNumber = Math.floor(100000 + Math.random() * 900000).toString();
    const invoiceDate = format(new Date(), "MMMM dd, yyyy");

    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Proforma Invoice - ${booking.tnr}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { text-align: center; color: #444; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Proforma Invoice</h1>
          <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
          <p><strong>Date:</strong> ${invoiceDate}</p>
          <p><strong>Booking Reference:</strong> ${booking.tnr}</p>

          <h2>Customer Information</h2>
          <p><strong>Name:</strong> ${booking.tourists?.[0].firstname} ${booking.tourists?.[0].lastname}</p>
          <p><strong>Address:</strong> ${booking.tourists?.[0].address}</p>
          <p><strong>Country:</strong> ${booking.tourists?.[0].country}</p>

          <h2>Tour Package Details</h2>
          <p><strong>Package:</strong> ${booking.tourPackage?.name}</p>
          <p><strong>Duration:</strong> ${booking.selectedOption?.durationDays} days</p>
          <p><strong>Start Date:</strong> ${format(new Date(booking.selectedOption?.startDate || ""), "MMMM dd, yyyy")}</p>
          <p><strong>End Date:</strong> ${format(new Date(booking.selectedOption?.endDate || ""), "MMMM dd, yyyy")}</p>

          <h2>Payment Details</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${booking.payments
                ?.map(
                  (payment) => `
                <tr>
                  <td>${format(new Date(payment.createdAt), "MM/dd/yyyy")}</td>
                  <td>${payment.transactionId}</td>
                  <td>$${payment.amount.toFixed(2)}</td>
                  <td>${payment.status}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>

          <h2>Summary</h2>
          <p><strong>Total Package Price:</strong> $${booking.totalPrice.toFixed(2)}</p>
          <p><strong>Amount Paid:</strong> $${booking.amountPaid.toFixed(2)}</p>
          <p><strong>Remaining Balance:</strong> $${(booking.totalPrice - booking.amountPaid).toFixed(2)}</p>

          <h2>Terms and Conditions</h2>
          <ol>
            <li>Full payment is due before the tour start date.</li>
            <li>Cancellation fees may apply as per our cancellation policy.</li>
            <li>This proforma invoice is not a receipt of payment.</li>
          </ol>

          <p style="text-align: center; margin-top: 40px;">Thank you for choosing Bonvas Tours!</p>
        </div>
      </body>
      </html>
    `;

    // Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: "new", // Use new headless mode for better performance
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      executablePath:
        process.env.NODE_ENV === "production"
          ? "/usr/bin/chromium" // Ensure this path is correct for your deployment environment
          : undefined, // Use default local Chromium for development
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });
    const pdf = await page.pdf({ format: "A4", printBackground: true });
    await browser.close();

    return new NextResponse(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="invoice-${booking.tnr}.pdf"`,
      },
    });
  } catch (error: any) {
    console.error("Error generating PDF:", error);
    return NextResponse.json({ error: "Failed to generate PDF", details: error.message }, { status: 500 });
  }
}
