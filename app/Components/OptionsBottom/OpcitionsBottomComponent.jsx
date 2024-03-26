'use client'

import Link from 'next/link'
import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import profile from "../../../public/profile.jpg"
import Image from 'next/image';
import { useAppSelector } from '@/redux/hooks';

const OpcitionsBottomComponent = () => {
    const estaOnline = useAppSelector(state => state.userReducer.online)
    

    return (
        <nav className={`${estaOnline ? "block" : "hidden"} bg-grey-user w-full fixed bottom-0 h-[50px] flex items-center sm:hidden`}>
            <div className='flex flex-row w-[90%] mx-auto  justify-between items-center'>
                <Link href="" className='px-4 text-2xl h-[45px] flex items-center text-green-lime hover:bg-grey-dark transition-all duration-200'>
                    <IoHomeSharp />
                </Link>
                <Link href="" className='px-5  text-2xl h-[45px] flex items-center text-green-lime hover:bg-grey-dark transition-all duration-200'>
                    <FaUserFriends />
                </Link>
                <Link href="" className='px-5  text-2xl h-[45px] flex items-center text-green-lime hover:bg-grey-dark transition-all duration-200'>
                    <RiSendPlaneFill />
                </Link>
                <Link href="" className='px-5  text-2xl h-[45px] flex items-center text-green-lime hover:bg-grey-dark transition-all duration-200'>
                    <FaMoneyBillWave />
                </Link>
                <Link href="" className='px-5  text-2xl h-[45px] flex items-center text-green-lime hover:bg-grey-dark transition-all duration-200'>
                    <GiReceiveMoney />
                </Link>
                <Link href="" className='px-5  h-[45px] flex items-center'>
                    <Image src={profile} className='w-6 h-6 object-cover rounded-full' />
                </Link>
            </div>
        </nav>
    )
}

export default OpcitionsBottomComponent