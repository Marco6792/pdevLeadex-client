import React from "react";
import { FaBars } from "react-icons/fa";
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

const NavBar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1000px");

  const [{ toggle }, dispatch] = useToggleContex();

  const online = checkOnlineStatus();

  const handleToggle = () => {
    dispatch({
      type: actionType.SET_TOGGLE,
      toggle: !toggle,
    });
    console.log(toggle);
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
    <>
      <div
        className={`${
          online ? "text-green-300" : "text-red-400"
        } :hidden absolute top-14 left-10 text-sm mmd:hidden xms:left-[4.5rem] xms:top-[4rem] md:left-[7rem]`}
      >
        {online ? "online" : "offline"}
      </div>
      <div className="top-0 w-full py-6 z-10 fixed shadow-sm ">
        <div className="mx-auto max-xms:w-full max-md:w-[90.777%] max-md:px-3 w-5/6 flex justify-between items-center gap-10 max-md:gap-3">
          {/*left side Logo */}
          <Link to="/">
            <div className="items-center cursor-pointer">
              <h3
                className="text-slate-600 text-2xl max-xms:text-xl
          "
              >
                PDVLEADEX
              </h3>
            </div>
          </Link>
          {/*right  side links */}
          {isAboveMediumScreens ? (
            <div className="flex justify- w-10/12 justify-between items-center">
              {/*nav links*/}
              <div className="flex justify-between font-semibold gap-6 text-sm items-center text-slate-800">
                <Link to="/">Home</Link>
                <Link to="/courses">courses</Link>
                <Link to="about">about</Link>

                <Link to="/login">Profile</Link>
                <Link to="contact-us">contact us</Link>
              </div>
              <div className="flex justify-between gap-8 items-center">
                <Link to="/login" className="capitalize">
                  {username}
                </Link>
                <Link to="/register">
                  <button className="bg-red-400 text-white p-3 rounded-md">
                    Become a student
                  </button>
                </Link>
                {username ? (
                  <Link to="" className="capitalize" onClick={logoutHandler}>
                    Log out
                  </Link>
                ) : (
                  <Link to="/login">Log In</Link>
                )}
              </div>
            </div>
          ) : (
            <Bounce>
              <div className="flex items-center relative gap-4 justify-between">
                {username ? (
                  <Link
                    to="/profile"
                    className="text-slate-600 text-xl capitalize"
                  >
                    {username}
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-slate-600 text-xl capitalize"
                  >
                    Log in
                  </Link>
                )}
                <button
                  className="bg-yellow-300  p-2 max-xms:p-1 rounded-md text-slate-100"
                  onClick={handleToggle}
                >
                  <FaBars className="text-3xl focus:outline-none" />
                </button>
              </div>
            </Bounce>
          )}
        </div>
        {/* <FaBars className="text-3xl z-10 md:hidden" /> */}
        {toggle && (
          <>
            <Bounce top>
              {" "}
              <div
                className=" z-10 absolute text-4xl top-6 bg-white
     text-slate-800 py-2 px-4 ring-2 ring-offset-3 ring-offset-red-50 rounded-md font-bold right-8 md:right-[65px] max-xms:right-6 max-xms:text-3xl
     transition-all duration-1000
     "
              >
                <button onClick={handleToggle}>X</button>
              </div>
            </Bounce>   
              <NavLinks />       
          </>
        )}
      </div>
       </>

  );
};

export default NavBar;
