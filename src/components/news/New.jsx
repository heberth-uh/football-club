import { IoMdShare } from 'react-icons/io'

export default function New({ content_title, content_summary, image_url, date}) {

    return (
        <div className='rounded-md border border-slate-600 overflow-hidden cursor-pointer'>
            <div className='relative overflow-hidden h-60 md:h-72'>
                <img src={image_url} 
                    className={`h-full w-full overflow-hidden transition delay-75 duration-1000 ease-linear hover:scale-110 transform-none`}/>
                <div className='absolute bottom-0 left-0 bg-gradient-to-t from-gray-900/90 via-gray-700/70 pt-10 pb-2 px-2 md:px-4'>
                    <h3 className='text-gray-100 font-bold text-lg text-left drop-shadow-2xl'>
                        {content_title}
                    </h3>
                    <hr className='h-[3px] w-32 bg-sky-500 border-none my-2'/>
                </div>
            </div>
            <div className='bg-slate-800 p-2 md:p-2'>
                <p className='text-left text-base text-gray-300 hover:text-white -border-b border-gray-500'>
                    {content_summary.substring(0, 100) + '...'}
                </p>
                <hr className='h-[1px] w-full bg-slate-600 border-none my-2'/>
                <div className='flex items-center justify-between px-1'>
                    <p className='text-xs text-gray-400'>
                        {date}
                    </p>
                    <span className='text-gray-400 hover:text-gray-300 hover:scale-125 transition ease-out px-2 py-1' >
                        <IoMdShare/>
                    </span>
                </div>
            </div>
        </div>
    )
}
