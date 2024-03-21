import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMoneyBillWave, FaUserFriends } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { IoHomeSharp } from 'react-icons/io5'
import { RiSendPlaneFill } from 'react-icons/ri'
import profile from "../../../public/profile.jpg"

const NavLateral = () => {
  return (
    <nav className={`bg-grey-user hidden sm:grid sm:col-span-1  xl:col-span-2 rounded-lg`}>
    <div className="flex flex-col my-4">

      <Link href="" className='text-green-lime flex flex-row items-center py-3 gap-x-4 border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
        <IoHomeSharp className="text-2xl mx-auto xl:mx-0 xl:ml-4" />
        <h6 className="hidden xl:flex text-green-lime text-sm"> Inicio </h6>
      </Link>

      <Link href="" className='text-green-lime flex flex-row items-center  py-3 gap-x-4 border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
        <FaUserFriends className="text-2xl mx-auto  xl:mx-0 xl:ml-4" />
        <h6 className="hidden xl:flex text-green-lime text-sm"> Pagar </h6>
      </Link>

      <Link href="" className='text-green-lime flex flex-row items-center  py-3 gap-x-4  border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
        <RiSendPlaneFill className="text-2xl mx-auto  xl:mx-0 xl:ml-4" />
        <h6 className="hidden xl:flex text-green-lime text-sm"> Transferir </h6>
      </Link>

      <Link href="" className='text-green-lime flex flex-row items-center  py-3 gap-x-4  border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
        <FaMoneyBillWave className="text-2xl mx-auto  xl:mx-0 xl:ml-4" />
        <h6 className="hidden xl:flex text-green-lime text-sm"> CBU </h6>
      </Link>

      <Link href="" className='text-green-lime flex flex-row items-center  py-3 gap-x-4  border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
        <GiReceiveMoney className="text-2xl mx-auto  xl:mx-0 xl:ml-4" />
        <h6 className="hidden xl:flex text-green-lime text-sm"> Movimientos </h6>
      </Link>

      <Link href="/profile" className='text-green-lime flex flex-row items-center py-3 gap-x-4 border-b-2 border-gray-900 hover:bg-grey-dark transition-all duration-200'>
        <Image src={profile} className='w-6 h-6 object-cover rounded-full mx-auto  xl:mx-0 xl:ml-4' />
        <h6 className="hidden xl:flex text-green-lime text-sm"> Perfil </h6>
      </Link>

    </div>
    </nav>
  )
}

export default NavLateral