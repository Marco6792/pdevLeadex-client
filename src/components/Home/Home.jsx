import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const Home = () => {

  return (
    <>
    <AnimatePresence >
    <NavBar /> 
    <Outlet />
    </AnimatePresence>
    </>
  )
}

export default Home