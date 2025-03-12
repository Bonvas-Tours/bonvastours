"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import ServiceModal from "./ServiceModal"

interface ServiceCardProps {
    title: string
    description: string
    icon: LucideIcon
    href?: string
    variant?: "default" | "dark"
    isFirstCard?: boolean
}

export function ServiceCard({
    title,
    description,
    icon: Icon,
    href,
    variant = "default",
    isFirstCard = false,
}: ServiceCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Card
                className={`h-full !shadow-none transition-transform duration-300 hover:rotate-2 hover:-translate-y-2 bg-white text-gray-800 hover:bg-gray-900 hover:text-white
                    ${isFirstCard ? "rotate-0 translate-y-0 hover:rotate-0 hover:translate-y-0" : ""}
                `}
            >
                <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center space-x-4">
                        <Icon className="w-8 h-8" />
                        <h3 className="text-xl font-semibold">{title}</h3>
                    </div>
                    <p className="line-clamp-5">{description}</p>
                </CardContent>
                <CardFooter>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={`text-sm font-medium ${variant === "dark" ? "text-orange-400 hover:text-orange-300" : "text-orange-600 hover:text-orange-500"
                            }`}
                    >
                        Read More
                    </button>
                </CardFooter>
            </Card>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={title}
                description={description}
                icon={Icon}
            />
        </>
    )
}

