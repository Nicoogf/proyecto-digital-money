'use client'

import { cambiarSesion } from '@/redux/features/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import React, { useState } from 'react'
import axios, { AxiosError } from 'axios'


const Loguin = () => {

    const [error, setError] = useState()
    const estaOnline = useAppSelector(state => state.userReducer.online)
    const dispatch = useAppDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
            const res = await axios.post("/api/auth/signup", {
                name: formData.get("name"),
                lastname: formData.get("lastname"),
                identification: formData.get("identification"),
                email: formData.get("email"),
                password: formData.get("password"),
                confirmPassword: formData.get("confirmpassword"),
                telefono: formData.get("telefono")
            })
            console.log(res)
        } catch (error) {
            console.log(error)
            if (error  instanceof AxiosError){
                setError(error.response?.data.message)
            }
        }


    }
    return (
        <section className='col-span-12 bg-gray-900/10 rounded-lg flex justify-center items-center '>
            <div className='bg-gray-900/50  w-[90%] mx-auto max-w-[678px] py-6 px-4 rounded-lg'>
                <h3 className='text-white text-center'> Crear cuenta</h3>
                <form className='flex flex-col gap-y-4 ' onSubmit={handleSubmit}>
                    {error && <div className='text-white bg-red-500 p-1'> {error} </div>}
                    <div className='grid grid-cols-6 gap-2'>
                        <input
                            name='name'
                            type="text"
                            placeholder='Nombre'
                            className=' col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <input
                            name='lastname'
                            type="text"
                            placeholder='Apellido'
                            className=' col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <input
                            name='identification'
                            type="number"
                            placeholder='Dni'
                            className=' col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <input
                            name='email'
                            type="email"
                            placeholder='Correo Electronico'
                            className=' col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                    </div>
                    <div className='grid grid-cols-6 gap-2'>
                        <input
                            name='password'
                            type="password"
                            placeholder='Contraseña' className='col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <input
                            name="confirmpassword"
                            type="password"
                            placeholder='Confirmar Contraseña' className=' col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <input
                            name="telefono"
                            type='number'
                            placeholder='Telefono'
                            className='col-span-6 md:col-span-3 rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm py-2' />
                        <button
                            type="submit"
                            className='col-span-6 md:col-span-3 py-2 bg-green-lime text-grey-dark rounded-lg text-sm font-semibold'> Crear Cuenta </button>
                    </div>


                </form>
            </div>
        </section>
    )
}

export default Loguin