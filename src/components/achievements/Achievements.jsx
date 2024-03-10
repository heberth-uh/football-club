import { useContext } from 'react'
import { Context } from "../../context/Context";

export default function Achievements() {

  const { achievements } = useContext(Context)

  return (
    <div className='bg-hero-palmares bg-cover bg-no-repeat bg-center mx-auto'>
      <div className='bg-slate-900 w-full h-full'>
        <div className='container mx-auto text-center py-6 z-10'>
            <h4 className='text-gray-100 text-2xl md:text-3xl font-semibold mb-5'>Palmarés</h4>

            <div className='flex flex-col md:flex-row gap-2 md:gap-6 justify-around my-4'>
            
              {achievements.map(arch => (
                <div key={arch.id} className='flex md:flex-col flex-1 h-72 py-1 md:py-4 border border-dashed border-slate-400/50 md:border-none mx-4 md:mx-0'>
                  <div className='flex-1 flex justify-center items-center'>
                    <img src={arch.image_url} className="object-contain h-28 md:h-40 md:border border-dashed border-slate-400/50 px-10 py-2"  alt="Trofeo"/>
                  </div>
                  <div className='flex-1 flex justify-center items-center md:mt-2'>
                    <p className='text-gray-100 font-semibold text-lg md:border-b border-slate-400/50 px-2 md:pb-1'>
                      {arch.name}
                    </p>
                  </div>
                  <div className='flex-1 flex justify-center items-center'>
                    <p className='text-gray-100 font-light text-sm'>
                      {arch.season}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
    </div>
  )
}
