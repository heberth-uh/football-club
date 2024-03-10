import React from 'react'
import DateMatch from './DateMatch';
import Team from "./Team";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";

export default function MatchCard({ title, competition, date, hour, location, score }) {

  return (
    <div className='bg-slate-800 text-gray-100 rounded-xl p-4 -md:w-1/2'>
      <p className='font-bold text-center text-base my-2'>{title}</p>
      <p className='font-normal text-center text-sm -my-2'>{competition}</p>
      
      <div className='flex flex-wrap items-start'>
        <div className='basis-4/12'>
          <Team teamImg={team1} teamName={'Atlético FC'} />
        </div>
      
        <div className='basis-3/12 justify-center self-center mx-auto'>
          <h3 className='text-center font-bold text-md mx-6 align-middle items-center'>{score ? score : 'VS'}</h3>
        </div>

        <div className='basis-4/12'>
          <Team teamImg={team2} teamName={'Sporting FC'} />
        </div>

        <div className='basis-full'>
          <DateMatch date={date} hour={hour} location={location} />
        </div>

      </div>
    </div>
  )
}
