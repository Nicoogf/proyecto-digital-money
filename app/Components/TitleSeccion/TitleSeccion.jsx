import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import profile from "../../../public/profile.jpg"
import { FaArrowLeft } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import Image from 'next/image';

const TitleSeccion = (props) => {
    return (
        <nav className='absolute w-full z-50'>
            <section className='bg-grey-dark w-full rounded-t-md py-1 text-green-lime'>
                <div className='flex flex-row w-[90%] mx-auto gap-x-2 mb-2'>
                    <Image src={profile} className='w-8 h-8 object-cover rounded-full' />
                    <div className=' flex flex-row items-center gap-x-4'>
                        <h3 className='text-sm font-semibold'>Hola,  Nicolas</h3>
                        <MdArrowForwardIos />
                    </div>
                </div>

                <div className='border w-[80%] mx-auto border-gray-800' />



                <div className='flex flex-row w-[90%] mx-auto gap-x-2 justify-between items-center py-3'>
                    <FaArrowLeft className='text-xl border-gray-950 rounded-full' />
                    <h4 className='text-sm font-semibold'>{props.titleComponent}</h4>
                    <FaRegQuestionCircle />

                </div>



            </section>
        </nav>
    )
}

export default TitleSeccion;