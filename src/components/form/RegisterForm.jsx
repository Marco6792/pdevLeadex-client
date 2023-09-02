import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {useDispatch, useSelector} from "react-redux"

import { useRegisterMutation } from '../../features/usersApiSlice'
import { setCredentails } from '../../features/authSlice'


const RegisterForm = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [credentials, setFormCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { userInfo } = useSelector(state => state.auth)

  const [register] = useRegisterMutation()

  useEffect(() =>{
    // if(userInfo){
    //   navigate('/') 
    // }
  }, [navigate, userInfo])

  const [disable, setDisable] = useState(true);

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (credentials.username && credentials.email && credentials.password) {
      setDisable(false);
    }
    console.log(credentials);
  }, [credentials.username, credentials.email, credentials.password, disable]);
  
  const handFormSubmitClick = async() => {
    const username = credentials.username
    const email = credentials.email;
    const password = credentials.password;
    try {
      const res = await register({username, email, password}).unwrap();
      toast.success(`welcome ${res.username}`)
      dispatch(setCredentails({...res}))
      navigate('/')
    } catch (error) {
     toast.error(`user ${username} already exit`)
    }
   
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <h2 className="text-3xl -mt-12 font-semibold text-slate-7 text-slate-600 text-center">
        Join Leadex Today
      </h2>
      <div className="flex flex-col justify-center mt-8 px-5 space-y-2">
        <label htmlFor="username" className="text-xl text-slate-600">
          userName
        </label>
        <input
          type="text"
          name="username"
          minLength={4}
          placeholder="Enter userName"
          onChange={handleForm}
          className="border border-slate-400 py-3 px-2 text-xl focus:outline-none rounded-md"
        />
        <label htmlFor="email" className="text-xl text-slate-600">
          Emial address
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleForm}
          className="border border-slate-400 py-3 px-2 text-xl focus:outline-none rounded-md"
        />
        <label htmlFor="password" className="text-xl text-slate-600">
          password
        </label>
        <input
          type="password"
          name="password"
          minLength={4}
          placeholder="Enter password"
          onChange={handleForm}
          className="border border-slate-400 py-3 px-2 text-xl focus:outline-none rounded-md"
        />
        <div className="py-5 flex items-center justify-between ">
          <p className="text-base max-sm:w-[150px]">
            Already have an account
            <Link to="/login" className="text-blue-900 px-2 text-xl underline">
              Login
            </Link>
          </p>
          <button
            type="submit"
            disabled={disable}
            onClick={handFormSubmitClick}
            className={
              disable
                ? "bg-slate-100 py-4 px-8 text-xl rounded-[50px] text-slate-300 font-semibold"
                : "bg-[#f1c40f] py-4 px-8 text-xl rounded-[50px] text-white font-semibold focus:outline-none cursor-pointer "
            }
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
