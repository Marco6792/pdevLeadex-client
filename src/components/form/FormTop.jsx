import React from 'react'
import TopDesign from './TopDesign'
import Bounce from "react-reveal/Bounce"

const FormTop = () => {
  return (
    <div className="flex flex-col justify-center md:h-[450px] w-full items-center max-sm:h-full ">
    <div className="relative overflow-hidden w-full h-full  flex flex-col md:w-[500px]">

    <Bounce right><TopDesign /></Bounce>
      </div>
  </div>
  )
}

export default FormTop