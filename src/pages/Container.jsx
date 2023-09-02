import React from 'react'
import Home from "../components/Home/Home"
import FormIndex from '../components/form/FormIndex'
import { Routes, Route,} from 'react-router-dom'
import LoginForm from '../components/form/LoginForm'
import RegisterForm from '../components/form/RegisterForm'
import Bounce from "react-reveal/Bounce"


const Container = () => {
  return (
      <Route element={<FormIndex />}>
      <Route path='/register' element={<Bounce left><RegisterForm /></Bounce>} />
      <Route path='/login' element={<Bounce right><LoginForm /></Bounce>} />
      </Route>
  )
}

export default Container