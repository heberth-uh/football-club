import React from 'react'

export default function SquadCardPlayer({ firstName, lastName, shirtNumber, img_url }) {
    return (
        <div className='mb-12'>
            <div className="bg-gradient-to-t from-slate-900 via-slate-800 to-indigo-700
            mb-2 flex flex-col justify-left items-center rounded-md p-1 drop-shadow-xl"
            >
                <div className="mb-3 flex">
                    <div className="relative">
                        <img src={img_url} className="w-72 and h-auto -w-auto -bg-center -bg-contain -bg-no-repeat" />

                        <div className="absolute top-0 left-0 bg-indigo-700 pr-2 pb-1 rounded-br-2xl">
                            <p className="text-xl md:text-2xl font-semibold text-slate-300">
                                {shirtNumber}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-1 py-1">
                    <p className="text-gray-100 text-sm md:text-lg">
                        <span>{firstName}</span> <span className="font-bold">{lastName}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
