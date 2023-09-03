import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import VideoPage from './VideoPage'

const Home = () => {

  return (
    <>  
    <AnimatePresence >
    <VideoPage />
    <NavBar /> 
    <Outlet />
    </AnimatePresence>
    </>
  )
}

export default Home