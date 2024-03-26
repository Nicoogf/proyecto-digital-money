"use client"

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";


export default function Home() {

  const estaOnline = useAppSelector(state => state.userReducer.online)
  return (

    <section className={`grid col-span-12 sm:col-span-11 lg:col-span-8 xl:col-span-7 bg-blue-500 rounded-lg justify-center items-center`}>



    </section>
  );
}
