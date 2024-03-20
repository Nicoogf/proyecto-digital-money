"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import logoOff from "../../../public/logo-off.png"
import logoOn from "../../../public/logo-on.png"
import profile from "../../../public/profile.jpg"

import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from 'next/link';

const NavbarComponent = () => {
  const isLogued = true
  const [menuProfile, setMenuProfile] = useState(false)

  const toggleMenu = () => {
    setMenuProfile(!menuProfile)
  }

  return (

    <header className="bg-grey-user">

      <nav className='max-w-[1280px] mx-auto py-2 flex flex-row justify-between'>

        <Image src={logoOn}
          width={50}
          height={50}
          alt='Logo Digital Money'
          className='ml-5 w-10 h-10 object-contain xl:ml-0 animate-pulse'
        />

        {/*  Menu Usuario Logueado */}
        {isLogued ?
          (
            <div className={` ${menuProfile ? "rounded-b-none" : "rounded-b-lg"} relative flex flex-row mr-5 items-center gap-x-2 px-3 rounded-lg bg-grey-dark cursor-pointer z-0`}
              onClick={toggleMenu}>
              <Image src={profile}
                width={50}
                height={50}
                alt='Logo Digital Money'
                className='w-10 h-10 rounded-full object-contain p-1'
              />

              <h6 className='text-xs'> Nfalabella</h6>

              <div
                className={`${menuProfile ? "opacity-100 visible" : "opacity-0 top-[20px] invisible"} absolute z-50 top-[40px] right-[0.1px] w-full transition-all duration-200 flex-col bg-grey-dark rounded-b-lg`}
              >
                <Link href="/">
                  <h6 className='py-3 ml-4'> Perfil </h6>
                </Link>
                <Link href="/">
                  <h6 className='py-3 ml-4'> Movimientos </h6>
                </Link>
                <Link href="/">
                  <h6 className='py-3 ml-4'> Cerrar Sesion </h6>
                </Link>
              </div>

              <MdOutlineArrowDropDown />

            </div>
          )
          :
          (
            <div className='flex flex-row items-center gap-x-2 mr-2 sm:gap-x-4 sm:mr-5'>
              <Link href={""}>
                <h6 className='text-sm bg-grey-user border-2 border-green-lime text-green-lime px-3 py-1 rounded-lg font-semibold hover:bg-green-lime hover:text-grey-dark transition-all duration-200'> Ingresar</h6>
              </Link>
              <Link href={""}>
                <h6 className='text-gray-400 text-sm border-2 border-gray-400  px-3 py-1 rounded-lg font-semibold hover:bg-gray-100 hover:text-grey-dark transition-all duration-200'> Registrarse</h6>
              </Link>

            </div>
          )
        }

      </nav>

    </header>
  )
}

export default NavbarComponent