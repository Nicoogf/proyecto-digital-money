
import Image from 'next/image';
import React from 'react'
import { FaRegEye, FaUserAlt } from "react-icons/fa";
import { RiSendPlaneFill } from 'react-icons/ri';
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import profiledos from "../../public/profiledos.png"
import Link from 'next/link';

const Loguin = () => {



    return (
        <section className={`grid col-span-12 sm:col-span-11 lg:col-span-8 xl:col-span-7 bg-green-400 rounded-lg`}>
            <article className='bg-gray-900 w-[95%] mx-auto text-white'>

                <div className='flex flex-row justify-between w-[90%] mx-auto mt-8 items-center'>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <h6 className='font-thin text-2xl'> Disponible</h6>
                        <h6 className='text-xs flex flex-row gap-x-1 items-center text-green-500'>
                            <span> <IoIosArrowUp /> </span>
                            80,2 %

                        </h6>
                    </div>
                    <h6 className='font-semibold cursor-pointer text-green-lime hover:text-white transition-all duration-200'> Copiar Cbu</h6>
                </div>

                <div className='w-[90%] mx-auto flex flex-row items-center gap-x-4'>
                    <h6 className='text-4xl mt-2'> $ 59.982
                        <span> 48 </span>
                    </h6>
                    <FaRegEye className='text-2xl cursor-pointer' />
                </div>

                <div className='flex flex-row w-[80%] mx-auto justify-between mt-6'>

                    <Link href="/ingresar" className='flex flex-col gap-y-2 items-center cursor-pointer bg-gray-700 p-2 rounded-lg'>
                        <RiSendPlaneFill className='bg-gray-400 text-5xl rounded-xl p-2' />
                        <h6 className='text-sm'> Ingresar </h6>
                    </Link>

                    <article className='flex flex-col gap-y-2 items-center cursor-pointer bg-gray-700 p-2 rounded-lg'>
                        <RiSendPlaneFill className='bg-gray-400 text-5xl rounded-xl p-2' />
                        <h6 className='text-sm'> Enviar </h6>
                    </article>

                    <article className='flex flex-col gap-y-2 items-center cursor-pointer bg-gray-700 p-2 rounded-lg'>
                        <RiSendPlaneFill className='bg-gray-400 text-5xl rounded-xl p-2' />
                        <h6 className='text-sm'> Retirar </h6>
                    </article>

                    <article className='flex flex-col gap-y-2 items-center cursor-pointer bg-gray-700 p-2 rounded-lg'>
                        <RiSendPlaneFill className='bg-gray-400 text-5xl rounded-xl p-2' />
                        <h6 className='text-sm'> Tu CBU </h6>
                    </article>

                </div>

                <div className='w-[90%] mx-auto mt-12'>
                    <div className='flex flex-row justify-between mb-4'>
                        <h6> Tus ultimos movimientos</h6>
                        <h6 className='font-semibold text-green-lime'> Ver todos</h6>
                    </div>

                    <section className='flex flex-col gap-y-2'>

                        <div className='flex flex-row justify-between py-2'>
                            <div className='flex flex-row gap-x-2 items-center'>
                                <Image src={profiledos} className='w-12 h-12 rounded-full' />
                                <div>
                                    <h6 className='text-xs'> Transferencia enviada </h6>
                                    <h6 className='text-sm'> a Eduardo Gonzales</h6>
                                </div>
                            </div>

                            <div>
                                <h6 className='text-end'> -$ 4.600 , 00</h6>
                                <h6 className='text-end text-xs'> 04/05/1994  </h6>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between py-2'>
                            <div className='flex flex-row gap-x-2 items-center'>
                                <Image src={profiledos} className='w-12 h-12 rounded-full' />
                                <div>
                                    <h6 className='text-xs'> Transferencia enviada </h6>
                                    <h6 className='text-sm'> a Eduardo Gonzales</h6>
                                </div>
                            </div>

                            <div>
                                <h6 className='text-end'> -$ 4.600 , 00</h6>
                                <h6 className='text-end text-xs'> 04/05/1994  </h6>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between py-2'>
                            <div className='flex flex-row gap-x-2 items-center'>
                                <Image src={profiledos} className='w-12 h-12 rounded-full' />
                                <div>
                                    <h6 className='text-xs'> Transferencia enviada </h6>
                                    <h6 className='text-sm'> a Eduardo Gonzales</h6>
                                </div>
                            </div>

                            <div>
                                <h6 className='text-end'> -$ 4.600 , 00</h6>
                                <h6 className='text-end text-xs'> 04/05/1994  </h6>
                            </div>
                        </div>
                    </section>


                </div>

                <div className='w-[90%] flex items-center justify-center mx-auto mt-12 gap-x-2'>

                    <div className='w-full max-w-[250px] bg-green-lime text-grey-dark font-semibol rounded-lg p-2 flex flex-row items-center justify-between gap-x-2 '>
                        <div className='flex flex-row items-center gap-x-2'>
                            <MdOutlineCancel className='text-xl' />
                            <span className='text-sm'> Arrepentimiento </span>
                        </div>

                        <MdNavigateNext />
                    </div>

                    <div className='w-full max-w-[250px] bg-green-lime text-grey-dark font-semibol rounded-lg p-2 flex flex-row items-center justify-between gap-x-2 '>
                        <div className='flex flex-row items-center gap-x-2'>
                            <FaUserAlt className='text-xl' />
                            <span className='text-sm'> Cerrar Session </span>
                        </div>

                        <MdNavigateNext />
                    </div>

                </div>





            </article>
        </section>
    )
}

export default Loguin