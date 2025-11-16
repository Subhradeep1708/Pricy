"use client"

import * as React from "react"
import {  CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
// import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)

    return (
        <div className="flex flex-col gap-3">
            {/* <Label htmlFor="date" className="px-1">
                Date of birth
            </Label> */}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="ghost"
                        id="date"
                        className="justify-between font-xl bg-transparent! !hover:bg-transparent !active:bg-transparent !focus:bg-transparent"
                    >
                        {date ? date.toLocaleDateString() : "Select date"}
                        {/* <ChevronDownIcon /> */}
                        <CalendarDays size={19} className='text-blue-500 dark:text-white' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
