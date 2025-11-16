'use client'

import { PlaneLanding, PlaneTakeoff } from 'lucide-react'
import { DatePicker } from './DatePicker'
import { ComboBox } from './ComboBox'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';

const MainCard = () => {
    const [flightClass, setFlightClass] = useState("");
    const [passengers, setPassengers] = useState("");
    // const [isReturn, setIsReturn] = useState(false)
    const [from, setFrom] = useState('')
    const [dest, setDest] = useState('')
    const [depDate, setDepDate] = useState<Date | undefined>(undefined)
    const [retDate, setRetDate] = useState<Date | undefined>(undefined)

    // useEffect(() => {
    //     axios.get('https://serpapi.com/search?engine=google_flights&api_key=dcb526caaf707c95bcb09f1847fbb0eba740d43d881fc36d88fba5210a9783d0&departure_id=MAA&arrival_id=CCU&outbound_date=2025-11-15&deep_search=true&sort_by=2&type=2 ')
    //         .then(res => console.log(res));
    // }, []);

    const onButtonClick = () => {

    }

    return (
        <div>
            {/* mobile header */}
            <div className="header md:hidden p-5">
                <h2 className='text-xl font-semibold tracking-tight'>Find Your Next Adventure</h2>
                <h4 className='dark:text-white/50 text-gray-500 tracking-tight'>Search and compare the best flights.</h4>

                <div className="md:hidden dark:bg-card bg-secondary rounded-lg p-4 grid grid-cols-2 mt-6">
                    {/* TO */}
                    <div className="sm:col-span-1 col-span-2 justify-center">
                        <h4 className='font-semibold   mb-2'>From</h4>
                        <div className="flex items-center border-[1.5px] rounded-md p-2">

                            <PlaneTakeoff className='text-blue-500 dark:text-white' />
                            <input type="text"
                                className='w-full ml-2 outline-none'
                                placeholder='eg. MAA,CCU...'
                            >
                            </input>
                        </div>
                    </div>
                    {/* From */}
                    <div className="sm:col-span-1 col-span-2 justify-center ">
                        <h4 className='font-semibold   mb-2'>To</h4>
                        <div className="flex items-center border-[1.5px] rounded-md p-2">

                            <PlaneLanding className='text-blue-500 dark:text-white' />
                            <input type="text"
                                className='w-full ml-2 outline-none'
                                placeholder='eg. MAA,CCU...'
                            >
                            </input>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="col-span-2 grid grid-cols-2 gap-4 mt-4">
                        <div className="">

                            <h4 className='font-semibold mb-2'>Departure</h4>
                            <div className=" items-center border-[1.5px] rounded-md ">


                                <div className="">
                                    <DatePicker />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h4 className='font-semibold mb-2'>Return</h4>
                            <div className="border-[1.5px] rounded-md ">
                                <div className=" ">
                                    <DatePicker />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Passenger */}
                    <div className="col-span-2 grid grid-cols-2 gap-4 mt-4">
                        <div className="">

                            <h4 className='font-semibold   mb-2'>Class</h4>
                            <div className=" items-center border-[1.5px] rounded-md ">

                                <div className="">
                                    <ComboBox
                                        label="Class"
                                        options={["Economy", "Premium Economy", "Business", "First Class"]}
                                        value={flightClass}
                                        onChange={setFlightClass}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h4 className='font-semibold   mb-2'>Passenger</h4>
                            <div className="border-[1.5px] rounded-md ">
                                <div className=" ">
                                    <ComboBox
                                        label='Passenger'
                                        options={["1", "2", "3", "4", "5", "6"]}
                                        value={passengers}
                                        onChange={setPassengers}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* button */}
                    <div className="col-span-2 mt-6">
                        <button className='w-full dark:bg-button-dark bg-button-light hover:bg-button-light/90 text-white dark:hover:bg-button-dark/90 font-semibold py-2 px-4 rounded-md'

                            type='submit'
                        >
                            Search Flights
                        </button>
                    </div>
                </div>
            </div>
            {/* desktop header */}
            <div className="hidden md:block dark:bg-card rounded-lg p-6">
                <h2 className='text-2xl font-semibold'>Find Your Next Adventure</h2>
                <h4 className='dark:text-white/50 text-gray-500 tracking-tight'>Search and compare the best flights.</h4>

                <div className="grid grid-cols-4 gap-6 mt-6">
                    {/* From */}
                    <div className="">
                        <h4 className='font-semibold mb-2'>From</h4>
                        <div className="input-box">
                            <PlaneTakeoff className='text-blue-500 dark:text-white shrink-0' />
                            <input type="text"
                                className=' ml-2 outline-none'
                                placeholder='eg. MAA,CCU...'
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            >
                            </input>
                        </div>
                    </div>
                    {/* To */}
                    <div className="">

                        <h4 className='font-semibold mb-2'>Destination</h4>
                        <div className="input-box">

                            <PlaneTakeoff className='text-blue-500 dark:text-white shrink-0 items-center' />
                            <input type="text"
                                className=' ml-2 outline-none'
                                placeholder='eg. MAA,CCU...'
                                value={dest}
                                onChange={(e) => setDest(e.target.value)}
                            >
                            </input>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="col-span-2 grid grid-cols-2 gap-4 h-full">
                        <div className="">

                            <h4 className='font-semibold mb-2'>Departure</h4>
                            <div className=" input-box ">
                                <DatePicker
                                    dateValue={depDate}
                                    onDateChange={setDepDate}
                                />
                            </div>
                        </div>
                        <div className="">
                            <h4 className='font-semibold mb-2'>Return</h4>
                            <div className="input-box">
                                <DatePicker
                                    dateValue={retDate}
                                    onDateChange={setRetDate}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Passenger */}
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div className="">

                            <h4 className='font-semibold  mb-2'>Class</h4>
                            <div className=" input-box ">
                                <ComboBox
                                    label="Class"
                                    options={["Economy", "Premium Economy", "Business", "First Class"]}
                                    value={flightClass}
                                    onChange={setFlightClass}
                                />

                            </div>
                        </div>
                        <div className="">
                            <h4 className='font-semibold mb-2'>Passenger</h4>
                            <div className="input-box">

                                <ComboBox
                                    label='Passenger'
                                    options={["1", "2", "3", "4", "5", "6"]}
                                    value={passengers}
                                    onChange={setPassengers}
                                />
                            </div>
                        </div>
                    </div>
                    {/* button */}
                    <div className="col-span-2 mt-8">
                        <button
                            className='w-full dark:bg-button-dark bg-button-light hover:bg-button-light/90 text-white dark:hover:bg-button-dark/90 font-semibold py-2 px-4 rounded-md'
                            type='submit'
                        >
                            Search Flights
                        </button>
                    </div>

                </div>
            </div>
            <div className="mt-8">


                <ResultCard />
            </div>
        </div>
    )
}

export default MainCard
