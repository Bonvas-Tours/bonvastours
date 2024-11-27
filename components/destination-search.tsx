"use client"

import * as React from "react"
import { MapPin } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

// This would typically come from your API
const destinations = [
    { id: 1, name: "Paris, France" },
    { id: 2, name: "London, UK" },
    { id: 3, name: "Rome, Italy" },
    { id: 4, name: "Tokyo, Japan" },
    { id: 5, name: "New York, USA" },
]

interface DestinationSearchProps extends React.HTMLAttributes<HTMLDivElement> {
    destination: string
    onDestinationChange: (value: string) => void
}

export function DestinationSearch({
    destination,
    onDestinationChange,
    className,
}: DestinationSearchProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-start text-left font-normal"
                    >
                        <MapPin className="h-4 w-4" />
                        {destination || "Where is your next destination?"}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0">
                    <Command>
                        <CommandInput placeholder="Search destinations..." />
                        <CommandList>
                            <CommandEmpty>No destination found.</CommandEmpty>
                            <CommandGroup>
                                {destinations.map((dest) => (
                                    <CommandItem
                                        key={dest.id}
                                        value={dest.name}
                                        onSelect={(value) => {
                                            onDestinationChange(value)
                                            setOpen(false)
                                        }}
                                    >
                                        <MapPin className="mr-2 h-4 w-4" />
                                        {dest.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}

