import { Clapperboard } from 'lucide-react'
import React from 'react'

const ResultCard = () => {
    return (
        <>

            <div className="bg-card rounded-md grid grid-cols-7 ">

                {/* icon */}
                <div className="col-span-1 border-r-2">
                    <Clapperboard />
                </div>
                {/* desc */}

                {/* time */}
                <div className="col-span-2">

                </div>
                {/* name */}
                <div className=" col-span-2">
                    name
                </div>
                {/* price and button */}
                <div className=" col-span-2">
                    price and button
                </div>

            </div>
        </>
    )
}

export default ResultCard
