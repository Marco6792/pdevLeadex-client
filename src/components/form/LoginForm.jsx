import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { useLoginMutation } from "../../features/usersApiSlice";
import { setCredentails } from "../../features/authSlice";

import { FaEnvelope, FaEye, FaEyeSlash, FaFingerprint } from "react-icons/fa";
// import usePwdToggle from '../../hooks/usePwdToggle'

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading, isSuccess }] = useLoginMutation();

  const [togglePwd, setTogglePwd] = useState(true);

  const handleClickTogglePwd = () => {
    setTogglePwd((togglePwd) => !togglePwd);
  };

  const [success, setSuccess] = useState(isSuccess);

  const { userInfo } = useSelector((state) => state.auth);


  const [credentials, setCredentialState] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentialState({ ...credentials, [name]: value });
  };

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (Boolean(credentials.email) && Boolean(credentials.password)) {
      setDisable(false);
    }
    console.log(credentials);
  }, [credentials.email, credentials.password]);

  const handFormSubmitClick = async () => {
    // toast.success("your are now Login")
    console.log(disable);
    try {
      const email = credentials.email;
      const password = credentials.password;
      const res = await login({ email, password }).unwrap();
      console.log(res.username);
      toast.success(`welcome ${res.username}`);
      dispatch(setCredentails({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <h2 className="text-3xl text-slate-600  md:-mt-14 md:pb-6 font-semibold text-slate-7 text-center px-3 ">
        Welcome Back To <span className="text-purple-500">Leadex</span>
      </h2>
      <div className="flex flex-col justify-center mt-8 px-5 space-y-2">
        <label htmlFor="email" className="text-xl text-slate-600">
          Emial address
        </label>
        <div className="relative flex flex-col items-center justify-center">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleForm}
            className="border border-slate-400 py-3 px-14 text-xl focus:outline-none rounded-md w-full"
          />
          <div className="bg-slate-300 absolute p-2 left-0 top-0 bottom-0 rounded-tl-md rounded-bl-md">
            <FaEnvelope className="text-2xl mt-2" />
          </div>
        </div>

        <label htmlFor="password" className="text-xl text-slate-600">
          password
        </label>
        <div className="relative flex flex-col items-center justify-center">
          <input
            type={togglePwd ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            onChange={handleForm}
            className="border border-slate-400 py-3 text-xl focus:outline-none rounded-md w-full px-14"
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
          <p className="text-base max-sm:w-[171px]">
            Don't have an account ?
            <Link
              to="/register"
              className="text-blue-900 px-2 text-xl underline"
            >
              Sign Up
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
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

// <button
// type="submit"
// disabled={disable}
// onClick={handFormSubmitClick}
// className={
//   disable
//     ? "bg-slate-100 py-4 px-8 text-xl rounded-[50px] text-slate-300 font-semibold"
//     : "bg-[#f1c40f] py-4 px-8 text-xl rounded-[50px] text-white font-semibold focus:outline-none cursor-pointer "
// }
// >
// Sign in
// </button>
