'use client'
import React from 'react'
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavLateral from '../NavLateral/NavLateral';
import AsideLateral from '../AsideLateral/AsideLateral';

const MainComponent = ( {children} ) => {
  
  const estaOnline = useAppSelector(state => state.userReducer.online)
  const router = useRouter()

  {/*   useEffect(() => {
    if(!estaOnline){
        router.push("/loguin")
    }
  },[router])*/}

 
  return (

    <main className={`relative w-[98%] grid grid-cols-12 pt-[65px] gap-x-1 mx-auto  rounded-lg h-[calc(100vh-60px)]`}>
       
       <NavLateral />

         {children}

       <AsideLateral />

    </main>
  )
}

export default MainComponent ;