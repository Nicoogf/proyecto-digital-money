"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import profile from "../../public/profile.jpg"
import { MdExitToApp } from "react-icons/md";

import { useAppSelector } from '@/redux/hooks'

const Loguin = ({ isLogued }) => {

  const [email, setEmail] = useState("")
  const [inPass, setInPass] = useState(false)
  const [seccion, setIsLogued] = useState(isLogued)

  const estaOnline = useAppSelector( state => state.userReducer.online)

  const handleChange = ({ target }) => {
    setEmail(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const toggleSeccion = () => {
    setIsLogued(!seccion)
  }

  const backEmail = () => {
    setInPass(!inPass)
  }

  return (
    <section className={`${estaOnline ? "hidden" : ""} grid col-span-12 sm:col-span-11 lg:col-span-8 xl:col-span-7 bg-gray-900/10 rounded-lg justify-center items-center`}>

      <div className={`${!inPass ? "flex" : "opacity-0 hidden "} relative opacity-1 pb-16 w-[97%] max-w-[440px] bg-gray-600/20 rounded-lg flex flex-col transition-all duration-300`}>
        <h2 className='text-center font-bold py-4 text-lg'> ¡Hola! Ingresa tu E-mail</h2>
        <form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>

          <input type='text'
            placeholder='Ingesar tu Email'
            className='w-[65%] py-2 px-3 mx-auto  placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm'
            value={email}
            onChange={handleChange} />

          <div className='flex flex-col items-center gap-y-3'>

            <button className='text-sm bg-transparent font-semibold text-green-lime border border-green-lime py-2 px-3 rounded-lg w-[65%] hover:bg-green-lime hover:text-grey-dark transition-all duration-300'
              onClick={backEmail}>
              Continuar
            </button>

            <Link href={"/register"} className='w-[65%] text-center'>
              <h6 className='text-sm bg-transparent  text-gray-300 border border-gray-300 font-semibold py-2 px-3 rounded-lg hover:bg-gray-300 hover:text-grey-dark transition-all duration-300'>
                Crear Cuenta
              </h6>
            </Link>
          </div>

        </form>

        <h6 className='absolute bottom-0 text-center w-full mt-4 text-sm bg-red-500/70 py-1 rounded-b-lg'>
          Usuario inexistente. Vuelve a intentarlo
        </h6>

      </div>

      <div className={`${!inPass ? "opacity-0 hidden" : " opacity-1 flex"} relative pb-16 w-[97%] max-w-[440px] bg-gray-600/20 rounded-lg flex flex-col`}>
        <h2 className='text-center font-bold py-4 text-lg'> Ingresar Contraseña</h2>

        <div className='flex flex-row items-center mx-auto gap-x-4 bg-gray-900/50 px-5 py-3 rounded-lg  mb-6'>
          <Image src={profile} className='w-10 h-10 rounded-full object-cover' />
          <div>
            <h3 className='text-xs text-gray-200 py-2'> {email} </h3>
            <button
              onClick={backEmail}
              className='w-full text-xs bg-gray-900 rounded-lg text-green-lime py-2 px-4 cursor-pointer flex flex-row items-center gap-x-2 hover:bg-green-lime hover:text-grey-dark transition-all duration-300 border border-green-lime justify-center'>
              Cambiar Usuario
              <MdExitToApp />
            </button>
          </div>

        </div>

        <form className='flex flex-col gap-y-3'>

          <input type='password'
            placeholder='Ingesar tu contraseña'
            className='w-[65%] py-2 px-3 mx-auto  placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm' />

          <div className='flex flex-col items-center gap-y-3'>

            <button
              onClick={toggleSeccion}
              className='text-sm bg-transparent font-semibold text-green-lime border border-green-lime py-2 px-3 rounded-lg w-[65%] hover:bg-green-lime hover:text-grey-dark transition-all duration-300'>
              Ingresar
            </button>

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