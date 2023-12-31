import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/usersApiSlice";
import { setCredentails } from "../../features/authSlice";
import { FaEnvelope, FaEye, FaEyeSlash, FaFingerprint } from "react-icons/fa";
import OverLay from "./OverLay";
import { toast } from "react-toastify";

const LoginForm = ({isloading}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const [togglePwd, setTogglePwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);

  const handleClickTogglePwd = useCallback(() => {
    setTogglePwd((togglePwd) => !togglePwd);
  }, []);

  const handleForm = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }, []);

  useEffect(() => {
    if (Boolean(email) && Boolean(password)) {
      setDisable(false);
    }
  }, [email, password]);

  const handFormSubmitClick = useCallback(async () => {
    try {
      const res = await login({ email, password }).unwrap();
      toast.success(`welcome ${res.username}`);
      dispatch(setCredentails({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.data);
    }
  }, [email, password, login, dispatch, navigate]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);
  
  isloading = isLoading
  console.log(isloading);

  return (
    <>
     {isLoading && <OverLay />}
      <form className="" onSubmit={handleSubmit}>
        <h2 className="text-3xl text-white opacity-90  md:-mt-14 md:pb-6 font-semibold text-slate-7 text-center px-3 ">
          Welcome Back To <span className="text-red-400">Leadex</span>
        </h2>
        <div className="flex flex-col justify-center mt-8 px-5 space-y-3">
          <label htmlFor="email" className="text-base text-white opacity-90">
            Email address
          </label>
          <div className="relative flex flex-col items-center justify-center">
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              onChange={handleForm}
              className="border border-slate-400 py-3 px-14 text-xl focus:outline-none rounded-md w-full"
            />
            <div className="bg-slate-300 absolute p-2 left-0 top-0 bottom-0 rounded-tl-md rounded-bl-md">
              <FaEnvelope className="text-2xl mt-2" />
            </div>
          </div>
          <label htmlFor="password" className="text-base text-white opacity-90">
            Password
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
          </div>
          <div className="py-5 flex items-center justify-between">
            <p className="text-base max-sm:w-[171px] text-white">
              Don't have an account ?
              <Link to="/register" className="text-blue-600 px-2 text-xl underline">
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
    </>
  );
};

export default LoginForm;