import React from 'react'
import bannerImg from "../../assets/players-italy.png";

export default function Banner() {
  return (
    <div className='relative lg:h-screen flex bg-gradient-to-r from-indigo-900 to-slate-900'>
        <div className="h-full w-full absolute bottom-0 left-0 bg-hero-pattern bg-cover"></div>
        <div className='relative container mx-auto flex flex-col lg:flex-row lg:justify-between justify-end px-4 md:px-0'>
            <div className="lg:basis-2/5 text-gray-50 flex flex-col items-center justify-center mt-24 mb-6 lg:my-0">
                <h2 className='font-extrabold text-5xl md:text-6xl text-center lg:text-left mt-6 md:mt-3'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-tl from-white to-gray-400'>
                        Atlético FC
                    </span>
                </h2>
                <p className='font-extralight md:text-lg text-center text-pretty text-gray-200 my-8'>
                    Consequat ad exercitation culpa veniam tempor incididunt consectetur Lorem reprehenderit proident eu voluptate consequat.
                </p>
                <button type='button' className='bg-gradient-to-r from-violet-600 to-blue-500 px-3 py-2 md:px-6 md:py-2 rounded-md border-none outline-none hover:from-violet-800 hover:to-blue-700'>
                    Conocer más
                </button>

                <div className="absolute lg:relative bottom-3 left-0 w-full md:w-auto mt-10">
                    <div className="bg-gradient-to-tl from-slate-400/50 via-slate-400/50 to-indigo-400/50 hover:from-slate-400/60 hover:via-salte-400/60 hover:to-indigo-400/60 backdrop-blur-sm rounded-md mx-10 md:mx-0 md:px-6 py-2">
                        <div className='text-center text-gray-200 text-xs md:text-sm'>
                            Siguiente partido VS Sporting FC
                        </div>
                        <div className="text-blue-900 flex justify-center items-center font-extrabold text-2xl md:text-3xl gap-x-1">
                            <div className='px-2 flex items-center gap-x-1 py-2'>
                                <div className='p-1 md:p-2 bg-gray-300/80 shadow-lg rounded-md'>10</div>
                                <div className='text-gray-300/80 shadow-lg'>-</div>
                                <div className='p-1 md:p-2 bg-gray-300/80 rounded-md shadow-lg'>05</div>
                                <div className='text-gray-300/80 shadow-lg'>-</div>
                                <div className='p-1 md:p-2 bg-gray-300/80 rounded-md shadow-lg'>24</div>
                            </div>
                            <div className='px-2 flex items-center gap-x-1 py-2 '>
                                <div className='p-1 md:p-2 bg-gray-300/80 rounded-md shadow-lg'>17</div>
                                <div className='text-gray-300/80 shadow-lg'>:</div>
                                <div className='p-1 md:p-2 bg-gray-300/80 rounded-md shadow-lg'>00</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="lg:basis-3/5 flex items-end justify-center">
                <img src={bannerImg} className="object-cover dw-2/3 md:w-3/5 lg:w-full"  alt="Jugadores de portada"/>
            </div>
        </div>
    </div>
  )
}
