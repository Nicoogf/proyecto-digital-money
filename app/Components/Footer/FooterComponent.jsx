import React from 'react'

const FooterComponent = ({isLogued}) => {
  return (
    <footer className={`${isLogued ? "hidden" : "block"} fixed bottom-0 w-full bg-grey-user text-green-lime `}>
        <p className='text-xs font-thin py-2 ml-2'> 
        Digital Money App 2024 
        </p>
    </footer>
  )
}

export default FooterComponent