import Link from 'next/link'
import React from 'react'

const Loguin = () => {
    return (
        <section className='col-span-12 bg-gray-900/10 rounded-lg flex justify-center items-center'>
            <div className='relative pb-16 w-[97%] max-w-[450px] bg-gray-600/20 rounded-lg flex flex-col'>
                <h2 className='text-center font-bold py-4 text-lg'> ¡Hola! Ingresa tu E-maill</h2>
                <form className='flex flex-col gap-y-3'>

                    <input type='text'
                        placeholder='Ingesar tu Email'
                        className='w-[65%] py-2 px-3 mx-auto  placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm' />

                    <div className='flex flex-col items-center gap-y-3'>

                        <button className='bg-transparent font-semibold text-green-lime border border-green-lime py-2 px-3 rounded-lg w-[65%] hover:bg-green-lime hover:text-grey-dark transition-all duration-300'>
                            Continuar
                        </button>

                        <Link href={"/register"} className='w-[65%] text-center'>
                            <h6 className='bg-transparent  text-gray-300 border border-gray-300 font-semibold py-2 px-3 rounded-lg hover:bg-gray-300 hover:text-grey-dark transition-all duration-300'>
                                Crear Cuenta
                            </h6>
                        </Link>
                    </div>

                </form>

                <h6 className='absolute bottom-0 text-center w-full mt-4 text-sm bg-red-500/70 py-1 rounded-b-lg'>
                    Usuario inexistente. Vuelve a intentarlo
                </h6>

            </div>

            <div className='relative pb-16 w-[97%] max-w-[450px] bg-gray-600/20 rounded-lg flex flex-col'>
                <h2 className='text-center font-bold py-4 text-lg'> ¡Hola! Ingresa tu Contraseña</h2>
                <form className='flex flex-col gap-y-3'>

                    <input type='text'
                        placeholder='Ingesar tu Email'
                        className='w-[65%] py-2 px-3 mx-auto  placeholder:text-sm bg-gray-800/10 border-b border-green-lime outline-none text-gray-100 text-sm' />

                    <div className='flex flex-col items-center gap-y-3'>

                        <button className='bg-transparent font-semibold text-green-lime border border-green-lime py-2 px-3 rounded-lg w-[65%] hover:bg-green-lime hover:text-grey-dark transition-all duration-300'>
                            Continuar
                        </button>

                        <Link href={"/register"} className='w-[65%] text-center'>
                            <h6 className='bg-transparent  text-gray-300 border border-gray-300 font-semibold py-2 px-3 rounded-lg hover:bg-gray-300 hover:text-grey-dark transition-all duration-300'>
                                Crear Cuenta
                            </h6>
                        </Link>
                    </div>

                </form>

                <h6 className='absolute bottom-0 text-center w-full mt-4 text-sm bg-red-500/70 py-1 rounded-b-lg'>
                    Usuario inexistente. Vuelve a intentarlo
                </h6>

            </div>
        </section>
    )
}

export default Loguin