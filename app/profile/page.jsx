import Image from 'next/image'
import React from 'react'
import profile from "../../public/profile.jpg"

const Profile = () => {
    return (
        <section className='relative col-span-12 sm:col-span-11 md:col-span-10 lg:col-span-7 rounded-lg bg-gray-900/80'>

            <div className='bg-gray-700 rounded-lg flex flex-row items-center justify-between w-[90%] mx-auto p-4 mt-6'>
                <div className='flex flex-row items-center gap-x-2'>
                    <Image src={profile} alt="Profile" className='w-10 h-10 rounded-full object-cover' />
                    <div className='text-white'>
                        <h4>nfalabella</h4>
                        <h5 className='text-gray-300 text-xs'>Nicolas</h5>
                    </div>
                </div>
                <button className='bg-green-lime px-2 py-1 text-grey-dark rounded-lg text-sm'> Cambiar foto </button>
            </div>

            <section className='w-[90%] mx-auto flex flex-col gap-y-2'>

                <div className='flex flex-row text-white'>
                    <h4> Nombre : </h4>
                    <h4> Nicolas </h4>
                </div>
                <div className='flex flex-row text-white'>
                    <h4> Apellido : </h4>
                    <h4> Falabella </h4>
                </div>
                <div className='flex flex-row text-white'>
                    <h4> Nacimiento  : </h4>
                    <h4> 05/03/1969 </h4>
                </div>
                <div className='flex flex-row text-white'>
                    <h4> email : </h4>
                    <h4> nicolas@falabella.com </h4>
                </div>
                <div className='flex flex-row text-white'>
                    <h4> Domicilio : </h4>
                    <h4>  1 2 3 calle siempre viva </h4>
                </div>
                <div className='flex flex-row text-white'>
                    <h4> Genero : </h4>
                    <h4>  Masculino  </h4>
                </div>

                <button className='bg-green-lime px-2 py-1 text-grey-dark rounded-lg text-sm max-w-[100px]'> Editar Perfil </button>


            </section>

        </section>
    )
}

export default Profile