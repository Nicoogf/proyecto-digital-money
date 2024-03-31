
import React from 'react'
import TitleSeccion from '../Components/TitleSeccion/TitleSeccion'
const Beneficios = () => {



    return (
        <section className={`relative grid col-span-12 sm:col-span-11 lg:col-span-8 xl:col-span-7 bg-grey-dark/90 rounded-lg p-4 `}>
            
            <TitleSeccion titleComponent="Beneficios" />

            <section className='grid grid-cols-12 gap-4 text-white mt-24'>

                <article className='opacity-50 relative bg-fondonike bg-no-repeat bg-cover bg-center border-2 border-gray-900  rounded-lg col-span-4 row-span-1 flex justify-center flex-col overflow-hidden hover:opacity-100 hover:border-lime-500 transition-all duration-200 cursor-pointer'>

                    <h5 className='relative text-2xl ml-2 z-50'> Nike </h5>
                    <h6 className='relative text-sm font-thin ml-2 z-50'> Hasta 6 cuotas sin interes </h6>
                    <div className='w-full bg-gradient-to-r from-lime-700/80 absolute top-0 h-48 z-0' />
                </article>

                <article className='opacity-50 relative bg-fondomcdonals bg-no-repeat bg-cover bg-center border-2 border-gray-900 rounded-lg col-span-8 row-span-1 flex justify-center flex-col overflow-hidden hover:opacity-100 hover:border-lime-500 transition-all duration-200 cursor-pointer'>
                    <h5 className='relative text-2xl ml-2 z-50'>  Mc Donals </h5>
                    <h6 className='relative text-sm font-thin ml-2 z-50'> 10 % de Decuento </h6>
                    <div className='w-full bg-gradient-to-r from-lime-700/80 absolute top-0 h-48 z-0' />
                </article>

                <article className='opacity-50 relative bg-fondoaxion bg-no-repeat bg-cover bg-center border-2 border-gray-900 rounded-lg col-span-8 row-span-1 flex justify-center flex-col overflow-hidden hover:opacity-100  hover:border-lime-500 transition-all duration-200 cursor-pointer'>
                    <h5 className='relative text-2xl ml-2 z-50'>Axion  </h5>
                    <h6 className='relative text-sm font-thin ml-2 z-50'> Descuento pagando con QR </h6>
                    <div className='w-full bg-gradient-to-r from-lime-700/80 absolute top-0 h-48 z-0' />
                </article>
                <article className='opacity-50 relative bg-fondowalmart bg-no-repeat bg-cover bg-center border-2 border-gray-900 rounded-lg col-span-4 row-span-2 flex justify-center flex-col overflow-hidden hover:opacity-100 hover:border-lime-500 transition-all duration-200 cursor-pointer'>
                    <h5 className='relative text-2xl ml-2 z-50'>  Wolmart </h5>
                    <h6 className='relative text-sm font-thin ml-2 z-50'> 25% Descuento en segundo producto seleccionado </h6>
                    <div className='w-full bg-gradient-to-r from-lime-700/80 absolute top-0 h-full z-0' />
                </article>
                <article className='opacity-50 relative bg-fondoparamount bg-no-repeat bg-cover bg-center border-2 border-gray-900 rounded-lg col-span-4 row-span-1 flex justify-center flex-col overflow-hidden hover:opacity-100 hover:border-lime-500 transition-all duration-200 cursor-pointer'>
                    <h5 className='relative text-2xl ml-2 z-50'> Paramount  </h5>
                    <h6 className='relative text-sm font-thin ml-2 z-50'> 1 Mes gratis </h6>
                    <div className='w-full bg-gradient-to-r from-lime-700/80 absolute top-0 h-full z-0' />
                </article>
                <article className='opacity-50 relative bg-fondomercadolibre bg-no-repeat bg-cover bg-center border-2 border-gray-900 rounded-lg col-span-4 row-span-1 flex justify-center flex-col overflow-hidden hover:opacity-100 hover:border-lime-500 transition-all duration-200 cursor-pointer'>
                    <h5 className='trelative text-2xl ml-2 z-50'> Mercadolibre  </h5>
                    <h6 className='relative text-sm font-thin ml-2 z-50'> Envio Gratis </h6>
                    <div className='w-full bg-gradient-to-r from-lime-700/80 absolute top-0 h-full z-0' />
                </article>

                <article className='opacity-50 relative bg-fondosolodeportes bg-no-repeat bg-cover bg-center border-2 border-gray-900 rounded-lg col-span-4 row-span-1 flex justify-center flex-col overflow-hidden hover:opacity-100 hover:border-lime-500 transition-all duration-200 cursor-pointer'>
                    <h5 className='trelative text-2xl ml-2 z-50'> Solodeportes  </h5>
                    <h6 className='relative text-sm font-thin ml-2 z-50'> 10% de Descuento </h6>
                    <div className='w-full bg-gradient-to-r from-lime-700/80 absolute top-0 h-full z-0' />
                </article>

                <article className='opacity-50 relative bg-fondofarmacity bg-no-repeat bg-cover bg-center border-2 border-gray-900 rounded-lg col-span-8 row-span-1 flex justify-center flex-col overflow-hidden hover:opacity-100 hover:border-lime-500 transition-all duration-200 cursor-pointer'>
                    <h5 className='trelative text-2xl ml-2 z-50'> Medicamentos  </h5>
                    <h6 className='relative text-sm font-thin ml-2 z-50'> 50% de Reintegro </h6>
                    <div className='w-full bg-gradient-to-r from-lime-700/80 absolute top-0 h-full z-0' />
                </article>


            </section>
        </section>
    )
}

export default Beneficios