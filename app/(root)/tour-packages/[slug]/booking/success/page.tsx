

import Link from "next/link"
import { CheckCircle } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookingSuccessPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <Card className="max-w-md mx-auto text-center py-8 shadow-none border-none">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="w-16 h-16 text-green-500" />
                    </div>
                    <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Thank you for booking with Bonvas Tours. We have sent a confirmation
                        email with your booking details.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button asChild>
                        <Link href="/tour-packages">Browse More Tours</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
