'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

const MainComponent = ( {children} ) => {

  const estaOnline = useAppSelector(state => state.userReducer.online)
 
  return (

    <main className={`${estaOnline ? "grid" : "hidden"} relative w-[98%] grid-cols-12 pt-[65px] gap-x-1 mx-auto  rounded-lg h-[calc(100vh-60px)]`}>
       
        {children}

    </main>
  )
}

export default MainComponent ;