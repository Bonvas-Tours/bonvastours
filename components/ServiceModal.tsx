"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    description: string
    icon: LucideIcon
}

export default function ServiceModal({ isOpen, onClose, title, description, icon: Icon }: ServiceModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="flex flex-row items-center gap-2">
                    <Icon className="h-6 w-6 text-orange-600" />
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-base text-foreground">{description}</DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

