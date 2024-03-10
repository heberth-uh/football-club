import React from 'react'
import MatchCard from "./MatchCard";
import MatchCardSmall from "./MatchCardSmall";
import TablePosition from "./TablePosition";

export default function Schedulle() {
  return (
    <div className='h-auto bg-slate-900 px-4 py-14 lg:py-18 lg:px-0' id="resultados_section">
        <div className='container mx-auto md:flex gap-6'>
          <div className='md:w-1/2 mb-3 md:mb-0'>
            <MatchCard 
              title={'Siguiente Partido'}
              competition={'Amistoso'}
              date={'28/Dic/2022'}
              hour={'17:00'}
              location={'Estadio Carlos Iturralde'}
              />
          </div>
          <div className='md:w-1/2 bg-gray-900 border border-slate-800 rounded-xl'>
            <p className='text-gray-100 font-bold text-center text-base -my-2 mt-5'>Resultado anterior</p>
            <MatchCardSmall 
              date={'19/Dic/2022'}
              competition={'Liga Premier - Jornada 13'}
              score={'3 - 1'}
            />
            
          </div>
        </div>
        
        <TablePosition/>

    </div>
  )
}
