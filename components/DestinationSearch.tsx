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
import { getDestinations } from "@/app/(root)/actions/packages"
import { useAtom } from "jotai"
import { packageDestinationsAtom } from "@/app/state"

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
    const [destinations, setDestinations] = useAtom(packageDestinationsAtom)

    React.useEffect(() => {
      (async () => {
        if (!destinations) {
          const currentDestinations = await getDestinations();
          setDestinations(currentDestinations);
        }
      })();
    }, []);

    return (
        <div className={cn("grid gap-2 text-neutral-500", className)}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "w-full justify-start text-left font-normal h-12",
                            destination ? "text-neutral-800" : "text-neutral-500"
                        )}
                    >
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {destinations ? (destination || "Where is your next destination?") : ("Loading...")}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0">
                    <Command>
                        <CommandInput placeholder="Search destinations..." />
                        <CommandList>
                            <CommandEmpty>No destination found.</CommandEmpty>
                            <CommandGroup>
                                {destinations?.map(({label}) => (
                                    <CommandItem
                                        key={label}
                                        value={label}
                                        onSelect={(value) => {
                                            onDestinationChange(value)
                                            setOpen(false)
                                        }}
                                    >
                                        <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                                        {label}
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
