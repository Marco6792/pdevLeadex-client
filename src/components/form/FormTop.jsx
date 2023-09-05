import React from 'react'
import TopDesign from './TopDesign'
import Bounce from "react-reveal/Bounce"

const FormTop = () => {
  return (
    <div className=" flex-col justify-center w-full items-center ">
    <div className="relative w overflow-hidden-full flex  md:w-[500px] -z-10">

    <Bounce right>
      <TopDesign /></Bounce>
      </div>
  </div>
  )
}

export default FormTop