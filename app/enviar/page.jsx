
import React from 'react';
import { BsBank } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import profiledefault from "../../public/default.jpg"
import Image from 'next/image';
import Link from 'next/link';


const Enviar = () => {



    return (
        <section className={`relative grid col-span-12 sm:col-span-11 lg:col-span-8 xl:col-span-7 bg-grey-dark/95 rounded-lg text-white`}>
            <section className='w-[90%] mx-auto flex flex-col cursor-pointer gap-y-4'>
                <h2 className='text-center py-4'> Transferir dinero </h2>

                <div className='mb-4 flex flex-row items-center  justify-between gap-x-4 w-[80%] mx-auto border border-gray-600 rounded-lg'>
                    <div className='flex flex-row items-center gap-x-4 py-2'>
                        <BsBank className='text-2xl ml-4' />

                        <div>
                            <h6> Con CBU CVU  alias </h6>
                            <h6> A cuentas bancarias o digital </h6>
                        </div>

                    </div>

                    <IoIosArrowForward />
                </div>

                <section className='border border-red-500 py-4 rounded-lg'>
                    <h3 className='text-center'> Ingresar Destinatario </h3>
                    <input className='mx-auto block' placeholder='ingresar cbu cvu alias' />
                    <article className='flex flex-col justify-center items-center'>
                        <Image src={profiledefault} className='w-10 h-10 object-cover rounded-full mt-4' alt="img profile" />
                        <h4> Carlos Gonzales</h4>
                        <h4 className='text-xs'> 0000000000000000000000</h4>
                        <h5> No se ha encontrado usuario </h5>
                    </article>
                </section>

                <section className='border border-red-500 py-4 rounded-lg'>
                    <h3 className='text-center'> Ingresar monto </h3>
                    <input className='mx-auto block mb-4' type="number" />
                    <select id="cars" className='text-green-lime block w-[80%] mx-auto bg-gray-700'>
                        <option value="volvo" className='bg-gray-700'>Volvo</option>
                        <option value="saab" className='bg-gray-700'>Saab</option>
                        <option value="opel" className='bg-gray-700'>Opel</option>
                        <option value="audi" className='bg-gray-700'>Audi</option>
                    </select>
                </section>

                <Link href="/enviar/confirmacion" className='absolute bottom-4 w-[90%] bg-red-500 rounded-lg py-2'> Continuar </Link>

            </section>
        </section>
    )
}

export default Enviar