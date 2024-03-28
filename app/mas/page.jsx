
import React from 'react'
import { BsCoin } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import profile from "../../public/profile.jpg"
import Image from 'next/image';

const Beneficios = () => {



    return (
        <section className={`grid col-span-12 sm:col-span-11 lg:col-span-8 xl:col-span-7 bg-grey-dark/95 rounded-lg items-start`}>

           <div className='bg-gray-800 w-full flex flex-col text-white pb-4'>
                <div className='flex flex-row gap-x-2 w-[90%] mx-auto py-4'>
                <Image src={profile} className='w-12 h-12 object-cover rounded-full' />
                <div>
                    <h4 className='font-bold text-lg'> Nicolas Falabella </h4>
                    <div className='text-sm flex flex-row items-center cursor-pointer'> 
                        <h5> Tu perfil  </h5>  
                        <MdOutlineKeyboardArrowRight  /> 
                    </div>
                </div>
                </div>
                
               
                <div className='flex flex-row items-center justify-between gap-x-2 bg-gray-600 w-[90%] rounded-xl mx-auto py-1'> 
                        <div className='flex flex-row items-center gap-x-2 '> 
                        <BsCoin className='ml-4' />
                        <h5> Digital Crypto </h5>    
                        </div>
                    <MdArrowOutward  className='mr-4'/>                                    
                </div>
           </div> 

           <section className='w-[90%] mx-auto -mt-8 text-green-lime'>
            <article className='flex flex-row items-center gap-x-4  py-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Inicio </h6>
            </article>

            <article className='flex flex-row items-center gap-x-4  py-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Notificaciones </h6>
            </article>

            <article className='flex flex-row items-center gap-x-4  py-2 mb-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Ayuda </h6>
            </article>

            <div className='border border-gray-700 '/>

            <article className='flex flex-row items-center gap-x-4  py-2 mt-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Tu dinero </h6>
            </article>

            <article className='flex flex-row items-center gap-x-4  py-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Tarjeta </h6>
            </article>

            <article className='flex flex-row items-center gap-x-4  py-2 mb-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Acividad </h6>
            </article>

            <div className='border border-gray-700 '/>

            <article className='flex flex-row items-center gap-x-4  py-2 mt-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Prestamos</h6>
            </article>

            <article className='flex flex-row items-center gap-x-4  py-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Reservas </h6>
            </article>

            <article className='flex flex-row items-center gap-x-4  py-2 mb-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Seguros y Garantias </h6>
            </article>

            <div className='border border-gray-700 '/>

            <article className='flex flex-row items-center gap-x-4  py-2 mt-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Negocios </h6>
            </article>

            <article className='flex flex-row items-center gap-x-4  py-2'>
                <IoHomeSharp className='text-xl'/>
                <h6 className='text-base'> Cobrar </h6>
            </article>

          

           </section>   
        </section>
    )
}

export default Beneficios