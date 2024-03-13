import { Context } from '../../context/Context'
import { useContext } from 'react'
import New from './New'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function NewsSection() {

    const { news } = useContext(Context)
    return (
        <section className='bg-slate-900' id="news">
            <div className='container mx-auto px-4 md:px-0 text-center py-16'>

                <div className='mb-10'>
                    <h2 className='font-extrabold text-2xl text-gray-300 uppercase'>Noticias</h2>
                    <hr className='mx-auto h-[3px] w-20 bg-gray-300 border-none my-2' />
                </div>

                <div className='flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 content-center items-center'>
                    {news.map(my_new => (
                        <New key={my_new.id}
                            content_title={my_new.title}
                            content_summary={my_new.summary}
                            date={my_new.date}
                            image_url={my_new.image_url}
                        />
                    ))}
                </div>

                <div className="text-sm text-center mt-4">
                    <a href="#" className="text-slate-300 hover:text-slate-200">
                        <span className="flex justify-center items-center">
                            Ver más noticias
                            <AiOutlineArrowRight />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}
