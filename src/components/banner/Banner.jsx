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
                <p className='font-extralight md:text-lg text-center text-zinc-300 my-8'>
                    Consequat ad exercitation culpa veniam tempor incididunt consectetur Lorem reprehenderit proident eu voluptate consequat.
                </p>
                <button type='button' className='bg-gradient-to-r from-violet-600 to-blue-500 px-3 py-2 md:px-5 md:py-4 rounded-full border-none outline-none hover:from-violet-800 hover:to-blue-700'>Conocer más</button>
            </div>
            <div className="lg:basis-3/5 flex items-end justify-center">
                <img src={bannerImg} className="object-cover dw-2/3 md:w-3/5 lg:w-full"  alt="Jugadores de portada"/>
            </div>
        </div>
    </div>
  )
}
