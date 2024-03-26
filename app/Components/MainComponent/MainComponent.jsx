'use client'
import React from 'react'
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MainComponent = ( {children} ) => {
  
  const estaOnline = useAppSelector(state => state.userReducer.online)
  const router = useRouter()

  {/*   useEffect(() => {
    if(!estaOnline){
        router.push("/loguin")
    }
  },[router])*/}

 
  return (

    <main className={`${estaOnline ? "grid" : "hidden"} relative w-[98%] grid-cols-12 pt-[65px] gap-x-1 mx-auto  rounded-lg h-[calc(100vh-60px)]`}>
       
        {children}

    </main>
  )
}

export default MainComponent ;