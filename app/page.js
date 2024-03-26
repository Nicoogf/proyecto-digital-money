"use client"

import Link from "next/link";
import { useSelector } from "react-redux";
import userSlice from "./features/userSlice";

export default function Home() {
  const estadoActual = useSelector(state => state.userSlice.initialState)
  console.log(estadoActual)

  return (

    <section className={`grid col-span-12 sm:col-span-11 md:col-span-10 lg:col-span-7 relative bg-fondo bg-cover bg-center bg-no-repeat 
    c rounded-lg`}>

      <div className="flex flex-col">
        <h2 className="text-white text-3xl font-semibold ml-4 mt-2 mb-2">
          De ahora <br />
          en adelante <br />
          haces mas <br />
          con tu dinero <br />
        </h2>
        <div className="border-b-4 border-green-lime w-[20%] rounded-lg ml-4 mb-2">

        </div>
        <div>
          <h3 className="text-green-lime ml-4 text-xl"> Tu nueva </h3>
          <h4 className="text-green-lime ml-4 text-2xl font-semibold" > billetera virtual </h4>
        </div>
      </div>

      <div className="absolute bg-green-lime w-full rounded-t-2xl  rounded-b-lg bottom-0 h-[40vh]">

        <section className="flex flex-col absolute bottom-2 gap-y-2">
          <Link href="">
            <article className="bg-white shadow-lg rounded-lg w-[95%] mx-auto p-2 border border-red-500">
              <h3 className="text-black font-semibold"> Transferi tu dinero </h3>
              <div className="border-b-2 border-green-lime w-[50%] my-2"> </div>
              <p className="text-black text-xs"> Desde Digital Money House vas a poder trasnferir dinero a otras cuentas, asi como tambien recibir transferencias y nuclear tu capital en nuestra billetera virtual</p>
            </article>
          </Link>

          <Link href="">
            <article className="bg-white shadow-lg rounded-lg w-[95%] mx-auto p-2 border border-red-500">
              <h3 className="text-black font-semibold"> Transferi tu dinero </h3>
              <div className="border-b-2 border-green-lime w-[50%] my-2"> </div>
              <p className="text-black text-xs"> Desde Digital Money House vas a poder trasnferir dinero a otras cuentas, asi como tambien recibir transferencias y nuclear tu capital en nuestra billetera virtual</p>
            </article>
          </Link>
        </section>



      </div>

    </section>
  );
}
