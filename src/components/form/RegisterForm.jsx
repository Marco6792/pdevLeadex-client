import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { useRegisterMutation } from "../../features/usersApiSlice";
import { setCredentails } from "../../features/authSlice";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash, FaFingerprint, FaGoogle } from "react-icons/fa";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setFormCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { userInfo } = useSelector((state) => state.auth);

  const [register] = useRegisterMutation();

  const [togglePwd, setTogglePwd] = useState(false);

  const handleClickTogglePwd = () => {
    setTogglePwd((togglePwd) => !togglePwd);
  };

  // useEffect(() => {
  //   if(userInfo){
  //     navigate('/login')
  //   }
  // }, [navigate, userInfo]);

  const [disable, setDisable] = useState(true);

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (credentials.username && credentials.email && credentials.password) {
      setDisable(false);
    }
  }, [credentials.username, credentials.email, credentials.password, disable]);

  const handFormSubmitClick = async () => {
    const username = credentials.username;
    const email = credentials.email;
    const password = credentials.password;
    try {
      const res = await register({ username, email, password }).unwrap();
      dispatch(setCredentails({ ...res }));
      navigate("/login");
      toast.success(`welcome ${res.username} to Leadex. Login to continue`);
    } catch (error) {
      toast.error(`user ${username} with email: ${email} already exit. `);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <h2 className="text-3xl -mt-12 font-semibold text-slate-7 text-slate-600 text-center">
        Join <span className="text-red-400 font-extrabold">Leadex</span> Today
      </h2>
      <div className="flex flex-col justify-center mt-8 px-5 space-y-2">
        <label htmlFor="username" className=" text-gray-200 text-base">
          userName
        </label>
        <div className="relative flex flex-col items-center justify-center">
          <input
            type="text"
            name="username"
            minLength={4}
            required
            placeholder="Enter Username"
            onChange={handleForm}
            className="border border-slate-400 py-3 text-xl focus:outline-none rounded-md w-full px-14 max-xms:px-12"
          />
          <div className="bg-slate-300 absolute p-2 left-0 top-0 bottom-0 rounded-tl-md rounded-bl-md">
            <FaUser className="text-2xl mt-2" />
          </div>
        </div>

        <label htmlFor="email" className=" text-gray-200 text-base">
          Emial address
        </label>
        <div className="relative flex flex-col items-center justify-center">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Email"
            onChange={handleForm}
            className="border border-slate-400 py-3 px-14 max-xms:px-12 text-xl focus:outline-none rounded-md w-full"
          />
          <div className="bg-slate-300 absolute p-2 left-0 top-0 bottom-0 rounded-tl-md rounded-bl-md">
            <FaEnvelope className="text-2xl mt-2" />
          </div>
        </div>

        <label htmlFor="password" className=" text-gray-200 text-base">
          password
        </label>
        <div className="relative flex flex-col items-center justify-center">
          <input
            type={togglePwd ? "text" : "password"}
            name="password"
            required
            minLength={4}
            placeholder="Enter Password"
            onChange={handleForm}
            className="border border-slate-400 py-3 px-14 max-xms:px-12 text-xl focus:outline-none rounded-md w-full"
          />
          <div className="bg-slate-300 absolute p-2 left-0 top-0 bottom-0 rounded-tl-md rounded-bl-md">
            <FaFingerprint className="text-2xl mt-2" />
          </div>

          {togglePwd ? (
            <FaEye
              className="absolute right-3 text-2xl"
              onClick={handleClickTogglePwd}
            />
          ) : (
            <FaEyeSlash
              className="absolute right-3 text-2xl"
              onClick={handleClickTogglePwd}
            />
          )}
          {/* <FaEye  className='absolute right-3 text-xl'/> */}
        </div>
        <div className="py-5 flex items-center justify-between ">
          <p className="text-base max-sm:w-[150px] text-white">
            Already have an account
            <Link to="/login" className="text-blue-500 px-2 text-xl underline">
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
