"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"


interface DownloadInvoiceButtonProps {
    bookingId: string
}

export function DownloadInvoiceButton({ bookingId }: DownloadInvoiceButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false)
    const { toast } = useToast()

    const handleDownload = async () => {
        setIsGenerating(true)
        try {
            const response = await fetch(`/api/invoices/${bookingId}`)

            if (response.headers.get("Content-Type")?.includes("application/json")) {
                // If it's JSON, it's probably an error
                const errorData = await response.json()
                throw new Error(errorData.error || "Failed to generate invoice")
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            // If we've reached here, it should be a PDF
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = url
            link.download = `invoice-${bookingId}.pdf`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            toast({
                title: "Invoice downloaded",
                description: "Your invoice has been successfully generated and downloaded.",
            })
        } catch (error) {
            console.error("Error downloading invoice:", error);

            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

            toast({
                title: "Error",
                description: `Failed to download invoice: ${errorMessage}`,
                variant: "destructive",
            })
        } finally {
            setIsGenerating(false)
        }
    }

    return (
        <Button variant="ghost" size="sm" className="h-8 px-2" onClick={handleDownload} disabled={isGenerating}>
            <Download className="h-4 w-4 mr-1" />
            <span>{isGenerating ? "Generating..." : "Invoice"}</span>
        </Button>
    )
}

