'use client'

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

interface TourSearchProps {
    onSearch: (value: string) => void
}

export function TourSearch({ onSearch }: TourSearchProps) {
    return (
        <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search Tour"
                className="pl-8"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}

