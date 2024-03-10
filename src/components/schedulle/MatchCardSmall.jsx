import React from 'react'
import DateMatch from './DateMatch';
import Team from "./Team";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function MatchCardSmall({ title, competition, date, hour, location, score }) {

  return (
    <div className='p-2 text-gray-100'>
      <p className='font-bold text-center text-base my-1'>{title}</p>
      <p className='font-normal text-center text-sm my-1'>{competition}</p>
      
      <div className='flex'>
        <Team teamImg={team2} teamName={'Sporting FC'} small={true}/>
      
        <div className='self-center mx-auto'>
          <h3 className='text-center font-bold text-md mx-6 align-middle items-center'>{score ? score : 'VS'}</h3>
        </div>

        <div className='justify-center mx-auto px-4'>
          <div className='flex justify-center my-1'>
            <img src={team1} className='w-12 sm:w-12'/>
          </div>
          <h3 className='text-center font-medium text-xs sm:text-sm'>Atlético FC</h3>
        </div> 

      </div>
      <div className='basis-full'>
        <DateMatch date={date} hour={hour} location={location} />
      </div>

      <div className='basis-full'>
        <a href="#" className="my-2 font-light text-sky-600 hover:text-sky-500">
            <span className='flex justify-center items-center'>
              Ver resultados <AiOutlineArrowRight/>
            </span>
        </a>
      </div>
    </div>
  )
}
