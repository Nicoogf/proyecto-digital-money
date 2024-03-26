'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { cambiarSesion } from '@/redux/features/userSlice'

const ButtonState = () => {
    const dispatch = useAppDispatch()
    const estaOnline = useAppSelector(state => state.userReducer.online)
    return (
        <button className={`${estaOnline ? "bg-green-500" : "bg-red-500"}  text-white rounded-2xl absolute bottom-10 right-10 p-3 z-50`}
            onClick={() => dispatch(cambiarSesion())}>
            {estaOnline ? <span> Online</span> : <span> Offline </span>}
        </button>
    )
}

export default ButtonState