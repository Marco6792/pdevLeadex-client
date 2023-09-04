import React from 'react'
import ScrollToTopButton from '../scene/ScrollToTopButton'
import FixedBottomMenu from '../components/sections/FixedBottomMenu'

const ProfilePage = () => {
  return (
    <div className='flex h-screen justify-center items-center text-white'>
        <h1>Profile Page goes here</h1>
        <ScrollToTopButton />
        <FixedBottomMenu />
    </div>
  )
}

export default ProfilePage