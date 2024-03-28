
import React from 'react'


const Beneficios = () => {



    return (
        <section className={`grid col-span-12 sm:col-span-11 lg:col-span-8 xl:col-span-7 bg-grey-dark/95 rounded-lg items-start text-white `}>
            <section>
            <h2 className='text-center py-4'> Ingresar dinero </h2>

            <div className='flex flex-row bg-gray-500 gap-x-2 justify-center py-3 w-[80%] mx-auto rounded-lg mb-4'>
                <h3>Copiar CVU</h3>
                <h3> Icono </h3>
            </div>

            <div>
                <h4 className='font-semibold w-[90%] mx-auto py-2'>
                    Para ingresar y recibir dinero desde cuentas bancarias o digitales
                </h4>

                <article className='w-[90%] mx-auto mb-2'>
                    <h4 className='font-semibold'> Tu alias</h4>
                    <div className='flex flex-row justify-between'>
                        <h5 className='text-sm'> luz.fuego.oktubre.dm </h5>
                        <div className='flex flex-row gap-x-2'>
                            <p> Icono </p>
                            <p> Icono </p>
                        </div>
                    </div>
                </article>

                <article className='w-[90%] mx-auto flex flex-col mb-4'>
                    <h4 className='font-semibold'> Tu CVU </h4>
                    <div className='flex flex-row justify-between'>
                     <h5 className='text-sm'> 00000000000000000000000 </h5>
                        <div>
                            <p> Icono </p>
                        </div>
                    </div>
                </article>

                <button className='w-[80%] mx-auto flex flex-row justify-center bg-gray-500 gap-x-2 py-3 rounded-lg mb-4'>
                    <p> Icono </p>
                    <p> Compartir datos</p>
                </button>

                <section className='w-[90%] mx-auto'>
                    <h4 className='font-semibold mb-4'> Pedi dinero a otras cuentas de DigitalMoney o con tu celular o e-mail</h4>
                    <div className='flex flex-col'>
                        <h5 className='font-semibold'>Tu celular</h5>
                        <h6 className='text-sm'>542324556699</h6>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <h5 className='font-semibold'>Tu e-mail</h5>
                        <h6 className='text-sm'>nicolas@falabella.com</h6>
                    </div>
                    
                    <button className='w-[80%] mx-auto flex flex-row justify-center bg-gray-500 gap-x-2 py-3 rounded-lg mb-4'>
                        <p> Icono </p>
                        <p> Pedir dinero </p>
                    </button>

                </section>
            </div>
            </section>
          
        </section>
    )
}

export default Beneficios