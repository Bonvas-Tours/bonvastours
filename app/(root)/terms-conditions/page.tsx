import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsAndConditions() {
    const sections = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'booking-and-payment', title: '1. Booking and Payment' },
        { id: 'cancellation-and-refund-policy', title: '2. Cancellation and Refund Policy' },
        { id: 'changes-to-itinerary-or-dates', title: '3. Changes to Itinerary or Dates' },
        { id: 'travel-insurance', title: '4. Travel Insurance' },
        { id: 'force-majeure', title: '5. Force Majeure' },
        { id: 'privacy-policy-and-data-protection', title: '6. Privacy Policy and Data Protection' },
        { id: 'service-specific-terms', title: '7. Service-Specific Terms' },
        { id: 'credit-policy-for-institutional-clients', title: '8. Credit Policy for Institutional Clients' },
        { id: 'dispute-resolution', title: '9. Dispute Resolution' },
        { id: 'contact-us', title: '10. Contact Us' },
    ]

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Bonvas Tours Ltd. Terms and Conditions</h1>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Table of Contents</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5">
                        {sections.map((section) => (
                            <li key={section.id} className="mb-2">
                                <Link href={`#${section.id}`} className="text-blue-600 hover:underline">
                                    {section.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <section id="introduction" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p>
                    Welcome to Bonvas Tours Ltd. We are committed to providing you with a safe, memorable,
                    and seamless travel experience. Please read these Terms and Conditions (T&C) carefully, as
                    they outline your rights and responsibilities as our customer. By booking and participating in
                    our tours and services, you agree to abide by the terms stated here.
                </p>
            </section>

            <section id="booking-and-payment" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Booking and Payment</h2>
                <ul className="list-disc pl-5">
                    <li>Deposits: A non-refundable deposit is required at the time of booking to secure your reservation. This is generally referred to as the package registration fee.</li>
                    <li>Full Payment: The remaining balance must be paid before the tour start date, as specified in the booking confirmation.</li>
                    <li>Credit Bookings (Flight Reservations): Bonvas Tours offers flexible credit options for institutions. Credit terms are subject to eligibility and include a 30-day payment period with an interest rate applied to overdue payments.</li>
                </ul>
            </section>

            <section id="cancellation-and-refund-policy" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Cancellation and Refund Policy</h2>
                <h3 className="text-xl font-medium mb-2">Refund Scale Based on Notice Period:</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li>60+ days before the start date: 100% refund of the amount paid (minus non-refundable deposit).</li>
                    <li>30-59 days before the start date: 50% refund of the amount paid.</li>
                    <li>15-29 days before the start date: 25% refund of the amount paid.</li>
                    <li>Less than 15 days: No refund available.</li>
                </ul>
                <p><strong>No-Show Policy:</strong> No refund will be issued if the traveler fails to show up on the tour start date.</p>
                <p><strong>Processing Time:</strong> Refunds are processed within 22 business days after receiving a written cancellation request.</p>
            </section>

            <section id="changes-to-itinerary-or-dates" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Changes to Itinerary or Dates</h2>
                <ul className="list-disc pl-5">
                    <li>Modification Requests: Changes to tour dates or itineraries must be made 30-60 days before the start date and may be subject to additional fees and availability.</li>
                    <li>Late Date Change Requests: Date changes requested less than 30 days before the tour may incur a cancellation fee as per the above refund schedule.</li>
                </ul>
            </section>

            <section id="travel-insurance" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Travel Insurance</h2>
                <p>Recommendation: We highly recommend purchasing comprehensive travel insurance covering cancellations, medical emergencies, and other unforeseen events, as Bonvas Tours does not provide direct insurance services.</p>
            </section>

            <section id="force-majeure" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Force Majeure</h2>
                <p>In the event of events beyond our control (e.g., natural disasters, pandemics, or political unrest), we will make reasonable efforts to reschedule the tour. However, refunds or credits are subject to the specifics of each situation.</p>
            </section>

            <section id="privacy-policy-and-data-protection" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy and Data Protection</h2>
                <ul className="list-disc pl-5">
                    <li>Data Collection: We collect and use personal data only for the purpose of providing travel services.</li>
                    <li>Data Security: All customer data is protected under applicable data protection laws. Your information will not be shared with third parties without your consent, except as required for bookings, reservations, or legal obligations.</li>
                    <li>Data Access and Update: You can request access to or updates on your personal information at any time. For full details, refer to our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.</li>
                </ul>
            </section>

            <section id="service-specific-terms" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Service-Specific Terms</h2>
                <ul className="list-disc pl-5">
                    <li>Visa and Vaccination Support: While Bonvas Tours offers guidance, obtaining necessary travel documents such as visas and vaccinations is the responsibility of the traveler.</li>
                    <li>Airline Tickets: Airline ticket refunds are subject to individual airline policies.</li>
                    <li>Special Needs Accommodations: Bonvas Tours endeavors to cater for special requirements, including mobility support, dietary restrictions, and accessible transport. Please notify us of your specific needs upon booking.</li>
                    <li>Payment Options: We offer flexible payment options, including installments (full, 2, or 3 installments), to provide convenience and accessibility for our customers.</li>
                </ul>
            </section>

            <section id="credit-policy-for-institutional-clients" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Credit Policy for Institutional Clients</h2>
                <ul className="list-disc pl-5">
                    <li>Eligibility and Credit Limit: Credit facilities are offered exclusively to recognized institutions and require a credit assessment.</li>
                    <li>Payment Period: Payment is due within 30 days from the date of invoice. Late payments incur a 15% penalty per month.</li>
                    <li>Booking Process and Modifications: Credit clients must submit booking requests in writing, and modification fees may apply to any changes to confirmed bookings.</li>
                </ul>
            </section>

            <section id="dispute-resolution" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
                <ul className="list-disc pl-5">
                    <li>Resolution Process: Any disputes related to bookings or payments will first be resolved through negotiation. If necessary, arbitration may be pursued as outlined in our credit agreement.</li>
                    <li>Governing Law: These terms and conditions are governed by the laws of Ghana.</li>
                </ul>
            </section>

            <section id="contact-us" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                <p>
                    For any questions, clarifications, or support, please contact us via phone at +233 261
                    671 686, email at <a href="mailto:info@bonvastours.com" className="text-blue-600 hover:underline">info@bonvastours.com</a>, or through our <Link href="/contact" className="text-blue-600 hover:underline">Contact Us page</Link>.
                </p>
            </section>

            <Card>
                <CardContent>
                    <p className="text-sm text-gray-600 mt-4">
                        Note: Bonvas Tours Ltd. reserves the right to update these Terms and Conditions at any time.
                        All updates will be posted on our website, and continued use of our services indicates
                        acceptance of any revised terms.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

