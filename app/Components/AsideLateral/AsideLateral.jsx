import React from 'react'
import bitcoin from "../../../public/bitcoin.png"
import Image from 'next/image'

const AsideLateral = () => {
  return (
    <aside className={`hidden lg:grid bg-grey-user/95 text-white lg:col-span-3 rounded-lg`}>

      <div className='flex flex-col '>

        <h2 className='text-center py-6 font-bold text-xl'> Digital - Cripto </h2>
        <div className='text-gray-500 border border-grey-dark w-[80%] mx-auto mb-4' />

        <section className='flex flex-col gap-y-6 '>

          <article className='flex flex-row items-center justify-around gap-x-2 shadow-lg py-2'>
            <div className='flex flex-row gap-x-2 items-center'>
              <Image src={bitcoin} className='w-8 h-8' alt="criptomoneda" />
              <div className='flex flex-col'>
                <h6 className='text-green'>  BTC </h6>
                <h6 className='text-xs text-gray-500'>  Bitcoin </h6>
              </div>
            </div>

            <div className='flex flex-col'>
              <h6 className='text-xs'> $ 69953.72 </h6>
              <h6 className='text-xs text-red-500 text-end'> -0,62 % </h6>
            </div>


          </article>

          <article className='flex flex-row items-center justify-around gap-x-2 shadow-lg py-2'>
            <div className='flex flex-row gap-x-2 items-center'>
              <Image src={bitcoin} className='w-8 h-8' alt="criptomoneda" />
              <div className='flex flex-col'>
                <h6 className='text-green'>  BTC </h6>
                <h6 className='text-xs text-gray-500'>  Bitcoin </h6>
              </div>
            </div>

            <div className='flex flex-col'>
              <h6 className='text-xs'> $ 69953.72 </h6>
              <h6 className='text-xs text-red-500 text-end'> -0,62 % </h6>
            </div>


          </article>

          <article className='flex flex-row items-center justify-around gap-x-2 shadow-lg py-2'>
            <div className='flex flex-row gap-x-2 items-center'>
              <Image src={bitcoin} className='w-8 h-8' alt="criptomoneda" />
              <div className='flex flex-col'>
                <h6 className='text-green'>  BTC </h6>
                <h6 className='text-xs text-gray-500'>  Bitcoin </h6>
              </div>
            </div>

            <div className='flex flex-col'>
              <h6 className='text-xs'> $ 69953.72 </h6>
              <h6 className='text-xs text-red-500 text-end'> -0,62 % </h6>
            </div>


          </article>

          <article className='flex flex-row items-center justify-around gap-x-2 shadow-lg py-2'>
            <div className='flex flex-row gap-x-2 items-center'>
              <Image src={bitcoin} className='w-8 h-8' alt="criptomoneda" />
              <div className='flex flex-col'>
                <h6 className='text-green'>  BTC </h6>
                <h6 className='text-xs text-gray-500'>  Bitcoin </h6>
              </div>
            </div>

            <div className='flex flex-col'>
              <h6 className='text-xs'> $ 69953.72 </h6>
              <h6 className='text-xs text-red-500 text-end'> -0,62 % </h6>
            </div>


          </article>

          <article className='flex flex-row items-center justify-around gap-x-2 shadow-lg py-2'>
            <div className='flex flex-row gap-x-2 items-center'>
              <Image src={bitcoin} className='w-8 h-8' alt="criptomoneda" />
              <div className='flex flex-col'>
                <h6 className='text-green'>  BTC </h6>
                <h6 className='text-xs text-gray-500'>  Bitcoin </h6>
              </div>
            </div>

            <div className='flex flex-col'>
              <h6 className='text-xs'> $ 69953.72 </h6>
              <h6 className='text-xs text-red-500 text-end'> -0,62 % </h6>
            </div>


          </article>





        </section>
      </div>



    </aside>
  )
}

export default AsideLateral