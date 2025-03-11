"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { Booking } from "@/lib/api"

interface PaymentSheetProps {
  booking: Booking
}

export function PaymentSheet({ booking }: PaymentSheetProps) {
  const [open, setOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process the payment
    alert(`Payment of $1,000 processed with ${paymentMethod}`)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600">Pay $1,000</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Make a Payment</SheetTitle>
        </SheetHeader>

        <form onSubmit={handlePayment} className="space-y-6 mt-6">
          <div>
            <Label htmlFor="amount">Payment Amount</Label>
            <Input id="amount" value="$1,000.00" readOnly className="mt-1" />
          </div>

          <div>
            <Label>Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card" className="cursor-pointer">
                  Credit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="cursor-pointer">
                  PayPal
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                <Label htmlFor="bank-transfer" className="cursor-pointer">
                  Bank Transfer
                </Label>
              </div>
            </RadioGroup>
          </div>

          {paymentMethod === "credit-card" && (
            <>
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" className="mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" className="mt-1" />
                </div>
              </div>
            </>
          )}

          <Button type="submit" className="w-full">
            Process Payment
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}

