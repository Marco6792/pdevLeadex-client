import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {useDispatch, useSelector} from "react-redux"

import { useLoginMutation } from '../../features/usersApiSlice'
import { setCredentails } from '../../features/authSlice'

const LoginForm = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, { isLoading, isSuccess}] = useLoginMutation()

  const [success, setSuccess] = useState(isSuccess)

  const { userInfo } = useSelector(state => state.auth)

  // useEffect(() =>{
  //   if(userInfo){
  //     navigate('/') 
  //   }
  // }, [navigate, userInfo])

  const [credentials, setCredentialState] = useState({
    email: "",
    password: ""
  })

  const handleForm = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setCredentialState({...credentials, [name]:value})
  }
 

  const [disable, setDisable] = useState(true)

  useEffect(() =>{
    if(Boolean(credentials.email)  && Boolean(credentials.password)){
      setDisable(false)
    }
  },[credentials.email, credentials.password, disable])

  const handFormSubmitClick = async() =>{
    // toast.success("your are now Login")
    try {
      const email = credentials.email;
      const password = credentials.password;
      const res = await login({email, password}).unwrap();
      console.log(res.username);
      toast.success(`welcome ${res.username}`)
      dispatch(setCredentails({...res}))
      if(res) { setSuccess(true)}
      navigate('/')
     } catch (err) {
     toast.error(err?.data?.message || err.data)
     }
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault()
  } 

  return (
    <form className="flex flex-col"
    onSubmit={handleSubmit}
    >
    <h2 className="text-3xl text-slate-600  md:-mt-14 md:pb-6 font-semibold text-slate-7 text-center px-3 ">
     Welcome Back To Leadex 
    </h2>
    <div className="flex flex-col justify-center mt-8 px-5 space-y-2">
   
    <label htmlFor="email" className="text-xl text-slate-600">Emial address</label>
    <input
     type="email"
     name="email"
     placeholder="Enter Email"
     onChange={handleForm}
     className="border border-slate-400 py-3 px-2 text-xl focus:outline-none rounded-md"
     />
    <label htmlFor="password" className="text-xl text-slate-600">password</label>
    <input
     type="password"
     name="password"
     minLength={4}
     placeholder="Enter password"
     onChange={handleForm}
     className="border border-slate-400 py-3 px-2 text-xl focus:outline-none rounded-md"
     />
     <div className="py-5 flex items-center justify-between ">
     <p className="text-base max-sm:w-[170px]">Don't have an account ?
    <Link to="/register" className="text-blue-900 px-2 text-xl underline">Sign Up</Link>
    </p>
     <button type="submit"
     disabled={disable}
     onClick={handFormSubmitClick}
     className={disable ? "bg-slate-100 py-4 px-8 text-xl rounded-[50px] text-slate-300 font-semibold" : "bg-[#f1c40f] py-4 px-8 text-xl rounded-[50px] text-white font-semibold focus:outline-none cursor-pointer "}
     >
        Sign in
     </button>
     </div>
     </div>
  </form>
  )
}

export default LoginForm