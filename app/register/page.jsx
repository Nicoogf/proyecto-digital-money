'use client'

import { cambiarSesion } from '@/redux/features/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import React from 'react'

const Loguin = () => {
    const estaOnline = useAppSelector(state => state.userReducer.online)
    const dispatch = useAppDispatch()

    return (
        <section className='col-span-12 bg-gray-900/10 rounded-lg flex justify-center items-center '>
            <div className='bg-gray-900/50  w-[90%] mx-auto max-w-[678px] py-6 px-4 rounded-lg'>
                <h3 className='text-white text-center'> Crear cuenta</h3>
                <form className='flex flex-col gap-y-4 '>
                    <div className='grid grid-cols-6 gap-2'>
                        <input
                            placeholder='Nombre'
                            className=' col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <input
                            placeholder='Apellido'
                            className=' col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <input placeholder='Dni'
                            className=' col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <input placeholder='Correo Electronico'
                            className=' col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                    </div>
                    <div className='grid grid-cols-6 gap-2'>
                        <input placeholder='Contraseña' className='col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <input placeholder='Confirmar Contraseña' className=' col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <input placeholder='Telefono'
                            className='col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <Link href={"/"}
                            onClick={() => dispatch(cambiarSesion())}
                            className='col-span-6 md:col-span-3 py-2 bg-green-lime text-grey-dark rounded-lg text-sm font-semibold'> Crear Cuenta </Link>
                    </div>


                </form>
            </div>
        </section>
    )
}

export default Loguin