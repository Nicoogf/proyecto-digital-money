import React from 'react';
import Image from 'next/image';

import logoOff from "../../../public/logo-off.png"
import logoOn from "../../../public/logo-on.png"
import profile from "../../../public/profile.jpg"

import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from 'next/link';

const NavbarComponent = () => {
  const isLogued = false

  return (
 
    <header className="bg-grey-user">

    <nav className='max-w-[1280px] mx-auto py-2 flex flex-row justify-between'>

      <Image src={ logoOn }
         width={50}
         height={50}
         alt='Logo Digital Money'
         className='ml-5 w-10 h-10 object-contain xl:ml-0'
      />

      {/*  Menu Usuario Logueado */}
      { isLogued ? (
        <div className='flex flex-row mr-5 items-center gap-x-2 px-3 rounded-lg bg-grey-dark cursor-pointer'>
          <Image src={profile}
                 width={50}
                 height={50}
                 alt='Logo Digital Money'
                 className='w-10 h-10 rounded-full object-contain p-1'
                 />

          <h6 className='text-xs'> Nfalabella</h6>

           <MdOutlineArrowDropDown />

           </div>
       ) : (
       <div className='flex flex-row mr-5 items-center gap-x-4'>
       <Link href={""}>
        <h6 className='text-sm bg-grey-user border border-green-lime text-green-lime px-3 py-1 rounded-lg font-semibold hover:bg-green-lime hover:text-grey-dark transition-all duration-200'> Ingresar</h6>
       </Link>
       <Link href={""}>
        <h6 className='text-gray-400 text-sm border border-gray-400  px-3 py-1 rounded-lg font-semibold hover:bg-gray-100 hover:text-grey-dark transition-all duration-200'> Registrarse</h6>
       </Link>

       </div>
       
       )}
                
    </nav>

     </header>
    )
}

export default NavbarComponent