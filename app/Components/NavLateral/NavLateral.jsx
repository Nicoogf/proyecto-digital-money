'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { RiArrowUpDownLine } from "react-icons/ri";
import { GiReceiveMoney } from 'react-icons/gi'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTicketAlt } from "react-icons/fa";
import { IoHomeSharp } from 'react-icons/io5'
import { RiSendPlaneFill } from 'react-icons/ri'
import profile from "../../../public/profile.jpg"
import { FaUserAlt } from "react-icons/fa";


import { useAppSelector } from '@/redux/hooks'





const NavLateral = () => {


  const estaOnline = useAppSelector(state => state.userReducer.online)




  return (
    <nav className={`${estaOnline ? " bg-grey-user/95 hidden sm:grid sm:col-span-1 xl:col-span-2 rounded-lg" : "hidden"}  `}>


      <div className="flex flex-col my-4">

        <Link href="/" className='text-green-lime flex flex-row items-center py-3 gap-x-4 border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
          <IoHomeSharp className="text-2xl mx-auto xl:mx-0 xl:ml-4" />
          <h6 className="hidden xl:flex text-green-lime text-sm"> Inicio </h6>
        </Link>

        <Link href="/movimientos" className='text-green-lime flex flex-row items-center  py-3 gap-x-4  border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
          <RiArrowUpDownLine className="text-2xl mx-auto  xl:mx-0 xl:ml-4" />
          <h6 className="hidden xl:flex text-green-lime text-sm"> Movimientos </h6>
        </Link>

        <Link href="/beneficios" className='text-green-lime flex flex-row items-center  py-3 gap-x-4 border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
          <FaTicketAlt className="text-2xl mx-auto  xl:mx-0 xl:ml-4" />
          <h6 className="hidden xl:flex text-green-lime text-sm"> Beneficios </h6>
        </Link>

        <Link href="/mas" className='text-green-lime flex flex-row items-center  py-3 gap-x-4  border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
          <GiHamburgerMenu className="text-2xl mx-auto  xl:mx-0 xl:ml-4" />
          <h6 className="hidden xl:flex text-green-lime text-sm"> Más </h6>
        </Link>


        <Link href="/profile" className='text-green-lime flex flex-row items-center py-3 gap-x-4 border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
          {estaOnline ?
            <Image src={profile} className='w-6 h-6 object-cover rounded-full mx-auto  xl:mx-0 xl:ml-4' />
            :
            <FaUserAlt className="text-2xl mx-auto  xl:mx-0 xl:ml-4" />
          }

          <h6 className="hidden xl:flex text-green-lime text-sm"> Perfil </h6>
        </Link>

      </div>
    </nav>
  )
}

export default NavLateral