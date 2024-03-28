"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import logoOn from "../../../public/logo-on.png"
import profile from "../../../public/profile.jpg"

import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from 'next/link';


import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { cambiarSesion } from '@/redux/features/userSlice';





const NavbarComponent = () => {

  const [menuProfile, setMenuProfile] = useState(false)


  const toggleMenu = () => {
    setMenuProfile(!menuProfile)
  }

  const dispatch = useAppDispatch()
  const estaOnline = useAppSelector(state => state.userReducer.online)
  console.log(estaOnline)



  return (

    <header className="bg-grey-user opacity-100 absolute top-0 w-full z-50 text-white h-[56px]">


      <nav className='max-w-[1280px] mx-auto py-2 flex flex-row justify-between'>

        <Link href="/">
          <Image src={logoOn}
            width={50}
            height={50}
            alt='Logo Digital Money'
            className='ml-5 w-10 h-10 object-contain xl:ml-0 animate-pulse'
          />
        </Link>
        {/*  Menu Usuario Logueado */}
        {estaOnline ?
          (
            <div className={` ${menuProfile ? "rounded-b-none" : "rounded-b-lg"} py-[2px] relative flex flex-row mr-5 items-center gap-x-2 px-3 rounded-lg bg-grey-dark cursor-pointer z-50`}
              onClick={toggleMenu}>
              <Image src={profile}
                width={50}
                height={50}
                alt='Logo Digital Money'
                className='w-8 h-8 rounded-full object-cover border border-gray-600'
              />

              <div className='absolute h-2 w-2 bg-green-500 rounded-full bottom-2 left-10'>

              </div>

              <h6 className='text-xs'> Nfalabella</h6>

              <div
                className={`${menuProfile ? "opacity-100 visible " : "opacity-0 invisible -right-5"} absolute z-0  top-[40px] right-[0.1px] w-full transition-all duration-200 flex-col bg-grey-dark rounded-b-lg`}
              >
                <Link href="/profile">
                  <h6 className='text-sm py-2 px-4 hover:bg-green-lime hover:text-grey-dark transition-all duration-200 border-b border-t border-gray-800'>
                    Perfil
                  </h6>
                </Link>
                <Link href="/movimientos">
                  <h6 className='text-sm  py-2 px-4 hover:bg-green-lime hover:text-grey-dark transition-all duration-200 border-b border-gray-800'>
                    Movimientos
                  </h6>
                </Link>
                <Link href="/" onClick={() => dispatch(cambiarSesion())}>
                  <h6 className='text-sm py-2 px-4 hover:bg-green-lime hover:text-grey-dark rounded-b-lg transition-all duration-200'>
                    Cerrar Sesion
                  </h6>
                </Link>
              </div>

              <MdOutlineArrowDropDown className={`${menuProfile ? "rotate-180" : ""} transition-all duration-300`} />

            </div>
          )
          :
          (
            <div className='flex flex-row items-center gap-x-2 mr-2 sm:gap-x-4 sm:mr-5 xl:mr-0'>
              <Link href={"/loguin"}>
                <h6 className='text-sm bg-grey-user border border-green-lime text-green-lime px-3 py-1 rounded-lg  hover:bg-green-lime hover:text-grey-dark transition-all duration-200 font-normal'> Ingresar</h6>
              </Link>
              <Link href={"/register"}>
                <h6 className='text-gray-400 text-sm border border-gray-400  px-3 py-1 rounded-lg hover:bg-gray-100 hover:text-grey-dark transition-all duration-200 font-normal'> Registrarse</h6>
              </Link>

            </div>
          )
        }

      </nav>

    </header>
  )
}

export default NavbarComponent