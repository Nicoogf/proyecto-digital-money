"use client"

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";


export default function Home() {

  const estaOnline = useAppSelector(state => state.userReducer.online)
  return (

    <section className={`relative bg-fondo bg-center grid col-span-12 sm:col-span-11 lg:col-span-8 xl:col-span-7 bg-blue-500 rounded-lg`}>

      <article className="pl-5 pt-5 flex flex-col gap-y-1">
        <h2 className="text-white font-semibold text-2xl"> De ahora en </h2>
        <h3 className="text-white font-semibold text-2xl"> adelante, haces </h3>
        <h4 className="text-white font-semibold text-2xl"> más con tu dinero </h4>
        <div className="border border-green-lime w-[40%] " />
        <h4 className="text-green-lime text-xl"> Tu nueva </h4>
        <h4 className="text-green-lime font-semibold text-xl"> billetera virtual</h4>
      </article>

      <article className="bg-green-lime h-[40vh] md:h-[20vh] absolute z-50 bottom-0 left-0 w-full rounded-t-xl rounded-b-lg">
        <div className="relative w-full h-[40vh] md:h-[20vh]  flex justify-center">

          <div className=" w-full flex flex-col md:flex-row gap-y-2 absolute bottom-5 md:w-[90%] xl:justify-center xl:items-center xl:mx-auto md:gap-x-2">

            <section className="bg-white w-[90%] mx-auto p-4 rounded-lg">
              <h3 className="text-xl font-bold py-4"> Transferi dinero </h3>
              <div className="border border-green-lime w-[80%] " />
              <h6 className="text-sm py-2"> Desde digital money house vas sa pdoer transferi dinero a otras cuentas, asicomo trambien recibir transferencias ynuclear tu capital en nuestra billetera virtual</h6>
            </section>

            <section className="bg-white w-[90%] mx-auto p-4 rounded-lg">
              <h3 className="text-xl font-bold py-4"> Transferi dinero </h3>
              <div className="border border-green-lime w-[80%] " />
              <h6 className="text-sm py-2"> Desde digital money house vas sa pdoer transferi dinero a otras cuentas, asicomo trambien recibir transferencias y nuclear tu capital en nuestra billetera virtual</h6>
            </section>
          </div>


        </div>

      </article>


    </section>
  );
}
