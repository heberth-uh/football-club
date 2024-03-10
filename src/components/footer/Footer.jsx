import { useContext } from 'react'
import IconTeam from '../../assets/f-icon.png'
import { Context } from '../../context/Context'
import { AiFillInstagram, AiFillFacebook, AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai'

export default function Footer() {

    const { footer } = useContext(Context)

    return (
        <div className='bg-gradient-to-tl from-slate-900 to-blue-900/95'>
            <div className='container mx-auto px-5 md:px-0 pt-8 pb-4'>
                <div className='flex items-center justify-center'>
                    <img src={IconTeam} className='max-h-9 mr-3' />
                    <h4 className='text-gray-100 font-extrabold text-lg'>Atlético FC</h4>
                </div>

                <hr className='bg-slate-600 h-[1px] my-3 border-none' />

                <div className='flex justify-between flex-wrap gap-y-3'>

                    <div className='flex mt-5 w-full md:w-[50%] justify-between'>
                        {footer.map(group => (
                            <div key={group.id}>
                                <p className='font-semibold text-gray-300'>{group.group_name}</p>
                                <ul className='my-2'>
                                    {group.group_items.map(item => (
                                        <li key={item.id} className='mb-2'>
                                            <a src={item.url} className='font-light text-sm md:text-base text-slate-400 hover:text-slate-100 cursor-pointer'>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='my-5'>
                        <p className='font-semibold text-gray-300'>Social</p>
                        <ul className='flex gap-3 my-3'>
                            <li className='mb-2'>
                                <a className='cursor-pointer text-gray-300 hover:text-gray-100 text-2xl' title='Instagram' src='#' target='_blank'>
                                    <AiFillInstagram />
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a className='cursor-pointer text-gray-300 hover:text-gray-100 text-2xl' title='Facebook' src='#' target='_blank'>
                                    <AiFillFacebook />
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a className='cursor-pointer text-gray-300 hover:text-gray-100 text-2xl' title='Twitter' src='#' target='_blank'>
                                    <AiFillTwitterCircle />
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a className='cursor-pointer text-gray-300 hover:text-gray-100 text-2xl' title='YouTube' src='#' target='_blank'>
                                    <AiFillYoutube />
                                </a>
                            </li>
                        </ul>
                        <ul className='text-sm md:text-base'>
                            <li className='mb-2'>
                                <a src='#' className='font-light text-slate-400 hover:text-slate-100 cursor-pointer'>
                                    Contáctanos
                                </a>
                            </li>
                            <li>
                                <a src='#' className='font-light text-slate-400 hover:text-slate-100 cursor-pointer'>
                                    Términos y condiciones
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <hr className='bg-slate-600 h-[1px] my-3 border-none' />

                <div className='text-center text-sm text-gray-400'>
                    <p>Developed by Heberth Uh - 2023 </p>
                </div>
            </div>
        </div>
    )
}
