import React from 'react'
import { Outlet, } from 'react-router-dom'
import FormTop from './FormTop'

const FormIndex = () => {
  return (
    <div className="flex flex-col z-20 fixed top-0 bg-white justify-center h-screen w-full items-center max-sm:h-screen">
    <div className="relative overflow-x-hidden w-full h-full md:h-[950px] md:shadow-md md:rounded-[19px] flex flex-col md:w-[500px]">
     <FormTop />
      <Outlet />
      </div>
  </div>
  )
}

export default FormIndex