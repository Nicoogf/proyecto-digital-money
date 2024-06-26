"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import profile from "../../public/profile.jpg"
import { MdExitToApp } from "react-icons/md";

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { cambiarSesion } from '@/redux/features/userSlice'

const Loguin = () => {

  const [email, setEmail] = useState("")
  const [inPass, setInPass] = useState(false)
  const dispatch = useAppDispatch()

  const estaOnline = useAppSelector(state => state.userReducer.online)

  const handleChange = ({ target }) => {
    setEmail(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }



  const backEmail = () => {
    setInPass(!inPass)
  }

  return (
    <section className={`${estaOnline ? "invisible" : "grid"} text-white col-span-12  bg-gray-900/10 rounded-lg justify-center items-center`}>

      <div className={`${!inPass ? "flex" : "opacity-0 hidden "} relative opacity-1 pb-16  max-w-[450px] bg-gray-600/20 rounded-lg flex flex-col transition-all duration-300 px-16`}>
        <h2 className='text-center font-bold py-4 text-lg'> ¡Hola! Ingresa tu E-mail</h2>
        <form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>

          <input type='text'
            placeholder='Ingesar tu Email'
            className='w-[85%] py-2 px-3 mx-auto  rounded-t-lg placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm'
            value={email}
            onChange={handleChange} />

          <div className='flex flex-col items-center gap-y-3'>

            <button className='text-sm bg-transparent font-semibold text-green-lime border border-green-lime py-2 px-3 rounded-lg w-[85%] hover:bg-green-lime hover:text-grey-dark transition-all duration-300'
              onClick={backEmail}>
              Continuar
            </button>

            <Link href={"/register"} className='w-[85%] text-center'>
              <h6 className='text-sm bg-transparent  text-gray-300 border border-gray-300 font-semibold py-2 px-3 rounded-lg hover:bg-gray-300 hover:text-grey-dark transition-all duration-300'>
                Crear Cuenta
              </h6>
            </Link>
          </div>

        </form>

        <h6 className='absolute bottom-0 left-0 text-center w-full mt-4 text-sm bg-red-500/70 py-1 rounded-b-lg'>
          Usuario inexistente. Vuelve a intentarlo
        </h6>

      </div>

      <div className={`${!inPass ? "opacity-0 hidden" : " opacity-1 flex"} text-white relative pb-16 w-[97%] max-w-[440px] bg-gray-600/20 rounded-lg flex flex-col`}>
        <h2 className='text-center font-bold py-4 text-lg'> Ingresar Contraseña</h2>

        <div className='flex flex-row items-center w-full gap-x-4 bg-gray-900/50  py-3  mb-6 px-16'>
          <Image src={profile} className='w-12 h-12 rounded-full object-cover' />
          <div className='w-[80%]'>
            <h3 className='text-xs text-gray-200 py-2 font-semibold'> {email} </h3>
            <button
              onClick={backEmail}
              className='w-full text-[10px] bg-gray-900 rounded-lg text-green-lime py-2 px-4 cursor-pointer flex flex-row items-center gap-x-2 hover:bg-green-lime hover:text-grey-dark transition-all duration-300 border border-green-lime justify-center'>
              Cambiar Usuario
              <MdExitToApp />
            </button>
          </div>

        </div>

        <form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>

          <input type='password'
            placeholder='Ingesar tu contraseña'
            className='w-[65%] py-2 px-3 mx-auto  placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm' />

          <div className='flex flex-col items-center gap-y-3'>

            <Link
              href="/movimientos"
              onClick={() => dispatch(cambiarSesion())}
              className='text-sm bg-transparent font-semibold text-green-lime border border-green-lime py-2 px-3 rounded-lg w-[65%] hover:bg-green-lime hover:text-grey-dark transition-all duration-300'>
              Ingresar
            </Link>

          </div>

        </form>

        <h6 className='absolute bottom-0 text-center w-full mt-4 text-sm bg-red-500/70 py-1 rounded-b-lg'>
          Usuario inexistente. Vuelve a intentarlo
        </h6>

      </div>


    </section>
  )
}

export default Loguin