"use client"
import { HelpFAQ } from "@/components/HelpFaq"
import { HelpContactForm } from "@/components/HelpContactForm"

export default function HelpSupport() {
    return (
            <div className="p-4 md:p-6 space-y-6">
                <h1 className="text-2xl font-semibold">Help & Support</h1>

                <div className="grid md:grid-cols-2 gap-6">
                    <HelpFAQ />
                    <HelpContactForm />
                </div>
            </div>
    )
}

