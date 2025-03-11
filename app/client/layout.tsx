import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./../globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarNav } from "@/components/SidebarNav"
import { ThemeProvider } from "@/components/themeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Bonvas Tours - Client Dashboard",
    description: "Bonvas Tours Client dashboard",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                <SidebarProvider>
                    <div className="flex min-h-screen w-full">
                        <SidebarNav />

                    <div className="flex flex-1 flex-col min-h-screen">
                        <main className="flex-1 bg-muted/40">{children}</main>
                    </div>
                </div>
                </SidebarProvider>
                </ThemeProvider>
    )
}