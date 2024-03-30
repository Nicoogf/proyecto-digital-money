
import Link from 'next/link';
import React from 'react';



const Enviar = () => {



    return (
        <section className={`relative grid col-span-12 sm:col-span-11 lg:col-span-8 xl:col-span-7 bg-grey-dark/95 rounded-lg text-white`}>
            <section>
                Confirmacion de Informacion
                <h3> Se enviara : </h3>
                <h3> $ 10000 </h3>
                <h4> Destinatario : </h4>
                <h4> Juan Lopez </h4>
                <h4> 0302051618489498498</h4>
                <Link href ="../../" className='border border-green-lime p-3 rounded-lg'> Transferir </Link>
            </section>
        </section>
    )
}

export default Enviar