import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plane } from 'lucide-react'

export default function NotFound() {
    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center bg-background relative px-4">
            {/* Main content */}
            <div className="text-center space-y-6 relative">
                <h1 className="text-[12rem] font-bold leading-none tracking-tight lg:text-[14rem]">
                    404
                </h1>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                    PAGE NOT FOUND
                </h2>
                <p className="max-w-[42rem] leading-normal sm:text-lg sm:leading-7">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <Button
                    asChild
                    size="lg"
                    className="bg-[#D84A1B] hover:bg-[#D84A1B]/90 text-white"
                >
                    <Link href="/">
                        Back To Home
                    </Link>
                </Button>
            </div>
        </main>
    )
}

