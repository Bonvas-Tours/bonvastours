import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HelpFAQ() {
  // Mock data for FAQs
  const faqs = [
    {
      question: "How do I make a booking?",
      answer:
        "You can make a booking by selecting a tour package from our website, choosing your preferred dates and package options, and following the checkout process. You'll need to create an account or log in to complete your booking.",
    },
    {
      question: "What is the payment process?",
      answer:
        "We offer flexible payment options. You can pay the full amount upfront or choose our installment plan. For installment plans, a minimum deposit is required to secure your booking, with the remaining balance due before your trip date.",
    },
    {
      question: "Can I modify my booking?",
      answer:
        "Yes, you can modify your booking through your dashboard. Changes to dates, package options, or number of travelers are subject to availability and may incur additional fees. Please make changes at least 30 days before your trip date.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy varies depending on how far in advance you cancel. Cancellations made 60+ days before the trip date receive a full refund minus a processing fee. Cancellations 30-59 days before receive a 50% refund. Cancellations less than 30 days before are non-refundable.",
    },
    {
      question: "Do I need a visa to visit Ghana?",
      answer:
        "Most visitors to Ghana require a visa. We provide visa assistance as part of our service, helping you navigate the application process. However, it's ultimately your responsibility to ensure you have the correct documentation for travel.",
    },
  ]

  return (
    <Card className="!shadow-none">
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

