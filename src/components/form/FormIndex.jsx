import React, { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import FormTop from './FormTop'
import { FaArrowLeft } from 'react-icons/fa'
import OverLay from './OverLay'
import { useToggleContex } from '../../hooks/ToggleContextProvider'


const FormIndex = ({isloading}) => {

  isloading = false
  const [{loading}] = useToggleContex()
  console.log("from loading",loading);


  return (<>
   {loading && <OverLay />}
    <div className="gradient flex flex-col z-20 fixed top-0 justify-center h-screen w-full items-center max-sm:h-full ">

      <Link to="/" className='text-2xl text-gray-700 fixed max-md:top-4 z-40 bg-white px-6 py-1 rounded-md md:top-2 md:left-5 backdrop-blur-lg bafi'>
      <FaArrowLeft />
      </Link>

    <div className="w-full h-full  md:h-[780px] md:shadow-md md:rounded-[19px] flex flex-col md:w-[500px] rounded-md overflow-x-hidden overflow-y-scroll scrollbar-hide">
     <FormTop />
      <Outlet />  
      </div>
  </div>
  </>
  )
}

export default FormIndex