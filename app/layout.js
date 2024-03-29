import { Inter } from "next/font/google";
import { Background } from "./Components/Background/Background";
import "./globals.css";
import React from "react";


import NavbarComponent from "./Components/Navbar/NavbarComponent";
import OpcitionsBottomComponent from "./Components/OptionsBottom/OpcitionsBottomComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import NavLateral from "./Components/NavLateral/NavLateral";
import AsideLateral from "./Components/AsideLateral/AsideLateral";



import UserProvider from "@/redux/provider";

import ButtonState from "./Components/ButtonState/ButtonState";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Money App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <body className={inter.className}>
        {/*
         <UserProvider> 
         
          <Background />
          <NavbarComponent />

          <ButtonState />

          <main className={`relative w-[98%] grid grid-cols-12 pt-[65px] gap-x-1 mx-auto  rounded-lg h-[calc(100vh-60px)]`}>

          <NavLateral />      
               
              {children}          

          <AsideLateral />

          </main>

         

          <OpcitionsBottomComponent />
          <FooterComponent />
         

          </UserProvider>



      <main className="bg-black/95 absolute w-full h-full">
            <Background />

            <NavbarComponent />

            <ButtonState />

            <div className="grid grid-cols-12 h-full pt-16">
              <NavLateral />
              {children}
              <AsideLateral />
            </div>

            <OpcitionsBottomComponent />

          </main>


            <NavbarComponent />

          <main className="h-[calc(100vh-106px)] w-[98%] grid grid-cols-12 pt-[65px] gap-x-1 mx-auto rounded-lg">

            <NavLateral />
            {children}
            <OpcitionsBottomComponent />
          </main>



         */}
        <Background />
        <UserProvider>

          <main className="absolte top-0 left-0 w-full max-h-screen flex flex-col items-center">

            <NavbarComponent />

            <section className="w-[98%] max-w-[1440px] fixed grid grid-cols-12 gap-x-1 top-16 h-[calc(100vh-121px)]">

              <NavLateral />

              {children}

              <AsideLateral />

            </section>

            <OpcitionsBottomComponent />
            <FooterComponent />

          </main>

        </UserProvider>

      </body>
    </html>

  );
}
