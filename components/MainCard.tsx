'use client'

import { PlaneLanding, PlaneTakeoff } from 'lucide-react'
import { DatePicker } from './DatePicker'
import { ComboBox } from './ComboBox'
import { useState } from 'react';

const MainCard = () => {
    const [flightClass, setFlightClass] = useState("");
    const [passengers, setPassengers] = useState("");

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
                        <div className="flex items-center border-2 rounded-md p-2">

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
                        <div className="flex items-center border-2 rounded-md p-2">

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
                            <div className=" items-center border-2 rounded-md ">


                                <div className="">
                                    <DatePicker />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h4 className='font-semibold mb-2'>Return</h4>
                            <div className="border-2 rounded-md ">
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
                            <div className=" items-center border-2 rounded-md ">

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
                            <div className="border-2 rounded-md ">
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
                {/* To */}
                <div className="flex">
                    <h4 className='font-semibold   mb-2'>From</h4>
                    <div className="flex items-center border-2 rounded-md p-2">

                        <PlaneTakeoff className='text-blue-500 dark:text-white' />
                        <input type="text"
                            className='w-full ml-2 outline-none'
                            placeholder='eg. MAA,CCU...'
                        >
                        </input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard
