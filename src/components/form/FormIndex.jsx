import React from 'react'
import { Outlet, } from 'react-router-dom'
import FormTop from './FormTop'

const FormIndex = () => {
  return (
    <div className="flex flex-col z-20 fixed top-0 bg-white justify-center h-screen w-full items-center max-sm:h-screen">
    <div className="relative w-full max-md:h-screen h-full md:h-[950px] md:shadow-md overflow-scroll scrollbar-hide md:rounded-[19px] flex flex-col md:w-[500px]">
     <FormTop />
      <Outlet />
      </div>
  </div>
  )
}

export default FormIndex