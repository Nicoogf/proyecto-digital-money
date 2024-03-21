import Image from 'next/image'
import React from 'react'
import profile from "../../public/profile.jpg"

const Profile = () => {
    return (
        <section className='relative col-span-12 sm:col-span-11 md:col-span-10 lg:col-span-7 rounded-lg bg-gray-900/80'>
            <Image src={profile} alt="Img Profile" className='border-2 border-green-lime w-[100px] h-[100px] object-cover rounded-3xl mx-auto mt-4' />
            <h3 className='text-center text-lg'> nfalabella </h3>
            <div className='flex flex-col mt-6'>

                <article className='flex flex-col bg-gray-100 p-2 rounded-lg mb-2 w-[95%] mx-auto max-w-[400px]'>
                    <h6 className='text-grey-dark font-bold'> Datos Personales </h6>
                    <div className='border-b-2 border-green-lime w-10'></div>
                    <h6 className='text-sm text-gray-600'>
                        Inspecciona los datos personales que ingresaste en el registro de la cuenta
                    </h6>
                </article>

                <article className='flex flex-col bg-gray-100 p-2 rounded-lg mb-2 w-[95%] mx-auto max-w-[400px]'>
                    <h6 className='text-grey-dark font-bold'> Tarjetas </h6>
                    <div className='border-b-2 border-green-lime w-10'></div>
                    <h6 className='text-sm text-gray-600'>
                        Supervisa cuales son las tarjetas bancarizadas asociadas a tu cuenta de Digtal Money
                    </h6>
                </article>

                <article className='flex flex-col bg-gray-100 p-2 rounded-lg mb-2 w-[95%] mx-auto max-w-[400px]'>
                    <h6 className='text-grey-dark font-bold'> Soporte Tecnico </h6>
                    <div className='border-b-2 border-green-lime w-10'></div>
                    <h6 className='text-sm text-gray-600'>
                        Ponte en contacto con nuestro equipo de soporte en caso de registrar un inconveniente
                    </h6>
                </article>

            </div>
        </section>
    )
}

export default Profile