'use client'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'

const FooterComponent = () => {
  const estaOnline = useAppSelector( state => state.userReducer.online)
  return (
    <footer className={`hidden sm:flex fixed bottom-0 w-full bg-grey-user text-green-lime h-[50px]  items-center`}>
      <h6 className='text-xs font-thin py-2 ml-2 w-full max-w-[1280px] mx-auto'>
        Digital Money App 2024
      </h6>
    </footer>
  )
}

export default FooterComponent