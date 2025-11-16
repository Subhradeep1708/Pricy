"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

export function ComboBox({
    options=[],
    label,
    value,
    onChange,
}: {
    options?: string[];
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
}) {
    const [open, setOpen] = React.useState(false)
    // const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild className="">
                <Button
                    variant="ghost"
                    role="combobox"
                    aria-expanded={open}
                    className=" justify-between bg-transparent! font-normal w-full "
                >
                    {value
                        ? options.find((options) => options === value)
                        : `Select ${label}`}
                    <ChevronsUpDownIcon className=" ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
                <Command>
                    <CommandInput placeholder={`Select ${label}`} />
                    <CommandList>
                        <CommandEmpty>No {label} found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((item) => (
                                <CommandItem
                                    key={item}
                                    value={item}
                                    onSelect={(currentValue) => {
                                        onChange?.(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === item ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {item}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}