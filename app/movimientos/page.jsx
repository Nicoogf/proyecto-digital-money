
'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaRegEye, FaUserAlt } from "react-icons/fa";
import { RiSendPlaneFill } from 'react-icons/ri';
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import profiledos from "../../public/profiledos.png"
import Link from 'next/link';
import TitleSeccion from '../Components/TitleSeccion/TitleSeccion';

const Loguin = () => {

    const [menuCbu , setMenuCbu] =  useState(false)
    const toggleMenuCbu = () =>{
        setMenuCbu(!menuCbu)
    }


    return (
        <section className={`relative grid col-span-12 sm:col-span-11 lg:col-span-8 xl:col-span-7 bg-green-400 rounded-lg`}>

            <TitleSeccion titleComponent="Estado de cuenta"/>

            <article className=' bg-gray-800 w-[95%] mx-auto text-white mt-24'>                

                <div className='flex flex-row justify-between w-[90%] mx-auto items-center'>
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

                <div className='flex flex-row w-[80%] mx-auto justify-center gap-x-4 mt-6'>

                    <Link href="/ingresar" className='flex flex-col gap-y-2 items-center cursor-pointer bg-gray-700 p-2 rounded-lg'>
                        <RiSendPlaneFill className='bg-gray-400 text-5xl rounded-xl p-2' />
                        <h6 className='text-sm'> Ingresar </h6>
                    </Link>

                    <Link href="/enviar" className='flex flex-col gap-y-2 items-center cursor-pointer bg-gray-700 p-2 rounded-lg'>
                        <RiSendPlaneFill className='bg-gray-400 text-5xl rounded-xl p-2' />
                        <h6 className='text-sm'> Enviar </h6>
                    </Link>


                    <article className='flex flex-col gap-y-2 items-center cursor-pointer bg-gray-700 p-2 rounded-lg' onClick={toggleMenuCbu}>
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

            <section className={` ${menuCbu ? " absolute w-full top-0 bottom-0 bg-gray-950/95 rounded-lg opacity-100 flex items-center justify-center" : "hidden"}`}>
                <div className='text-white'>
                    <div className='flex flex-row justify-between items-center'>
                     <h3> Hola , Nicolas</h3>
                     <IoCloseCircleOutline className='text-3xl cursor-pointer' onClick={toggleMenuCbu}/>

                    </div>
                  
                    <h4>
                        Tu cvu de identificacion personal es :
                    </h4>
                    <h4>
                        0000000000000000000000000
                    </h4>
                </div>
            </section>
        </section>
    )
}

export default Loguin