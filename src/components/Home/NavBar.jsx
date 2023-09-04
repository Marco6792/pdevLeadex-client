import React, { useEffect, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/usemediaQuery";
import NavLinks from "./NavLinks";
import Bounce from "react-reveal/Bounce";
import { logout } from "../../features/authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../features/usersApiSlice";
import { useToggleContex } from "../../hooks/ToggleContextProvider";
import { actionType } from "../../hooks/reducer";
import { checkOnlineStatus } from "../../hooks/IsOnline";
import useHeight from "../../hooks/useHeight";
import BackToTop from "../../scene/ScrollToTopButton";

const NavBar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1000px");
  const [{ toggle }, dispatch] = useToggleContex();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const online = checkOnlineStatus();

  const handleToggle = () => {
    dispatch({
      type: actionType.SET_TOGGLE,
      toggle: !toggle,
    });
  };

  const navigate = useNavigate();
  const dispatchh = useDispatch();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatchh(logout());
      toast.warning("you have Log out");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : "";
  const { username } = userInfo;

  return (
    <div
      className={`fixed top-0 w-screen transition-all duration-700 ease-in z-10 backdrop-blur-lg backdrop-filter bg-opacity-80`}
    >
      <div
        className={`${
          online ? "text-green-400" : "text-red-400"
        } md:hidden fixed top-[2.5rem] left-10 text-sm mmd:hidden xms:left-[4.5rem] xms:top-[3rem] md:left-[7rem] shadow-2xl`}
      >
        {online ? "online" : "offline"}
      </div>
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto sm:px-6 md:space-x-10">
        <Link to="/">
          <div className="items-center cursor-pointer">
            <h3
              className="text-white text-2xl max-xms:text-xl max-xxms:text-sm"
            >
              PDVLEADEX
            </h3>
          </div>
        </Link>
        {isAboveMediumScreens ? (
          <>
            <div className="flex justify-center items-center">
              <div className="flex justify-between font-semibold gap-6 text-sm items-center text-gray-500">
                <Link to="/">Home</Link>
                <Link to="/courses">courses</Link>
                <Link to="about">about</Link>
                <Link to={username ? "/profile" : "/login"}>Profile</Link>
                <Link to="contact">contact us</Link>
              </div>
            </div>
            <div className="flex justify-between gap-8 items-center">
              <Link
                to="/profile"
                className="capitalize"
              >
                {username}
              </Link>
              <Link
                to="/register"
                className="btn-grad border border-gray-500 py-[8px] px-[12px] rounded-md"
              >
                <button className="text-white">
                  Become a student
                </button>
              </Link>
              {username ? (
                <Link to="" className="capitalize text-gray-500" onClick={logoutHandler}>
                  Log out
                </Link>
              ) : (
                <Link to={username ? "/profile" : "/login"} className="text-gray-500">
                  {username ? "Log out" : "log in"}</Link>
              )}
            </div>
          </>
        ) : (
          <Bounce>
            <div className="flex items-center relative gap-4 justify-between">
              {username ? (
                <Link
                  to="/profile"
                  className="text-slate-600 text-xl capitalize"
                >
                <FaUser className="text-green-500"/>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="text-slate-600 text-xl"
                >
                  {<FaUser />}
                </Link>
              )}
              <button
                className="p-2 max-xms:p-1 rounded-md text-slate-600 border border-gray-600"
                onClick={handleToggle}
              >
                <FaBars className="text-3xl focus:outline-none" />
              </button>
            </div>
          </Bounce>
        )}
      </div>
      {toggle && (
        <>
          <Bounce top>
            {" "}
            <div
              className=" z-50 absolute text-4xl top-6 bg-white
     text-slate-800 py-2 px-4 ring-2 ring-offset-3 ring-offset-red-50 rounded-md font-bold right-8 md:right-[65px] max-xms:right-6 max-xms:text-3xl
     transition-all duration-1000
     "
            >
              <button onClick={handleToggle}>X</button>
            </div>
          </Bounce>
          <div className="z-40">
            <NavLinks />
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;