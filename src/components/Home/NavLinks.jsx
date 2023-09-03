import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../../features/usersApiSlice";
import { logout } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useToggleContex } from "../../hooks/ToggleContextProvider";
import { actionType } from "../../hooks/reducer";

const NavLinks = () => {
  const navigate = useNavigate();
  const dispatchs = useDispatch();

  const [{toggle}, dispatch] = useToggleContex()

  const handleToggle = () => {
    dispatch({
      type: actionType.SET_TOGGLE,
      toggle: !toggle
    })
    console.log(toggle);
  }

  const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : "";
const { username } = userInfo;

  const [isMenueToggled, setIsMenuToggled] = useState(false);

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatchs(logout());
      if(!username) {
        toast.warning("you are not a member yet join us by signing up"); 
      }else{ toast.warning("you have Log out")}  
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleActions = () =>{
  handleToggle()
  logoutHandler()
  }

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "ease",
        duration: 0.9,
        delay: 1,
      },
    },
  };

  return (
      <motion.div
        className="flex flex-col h-screen bg-black w-screen items-center absolute left-0 top-0 justify-center text-white space-y-14 text-xl"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ delay: 0.4 }}
        exit="exit"
      >
        <Link to="/">
          <motion.button 
           initial={{ y: 90, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.4 }}
           exit={{
             opacity: 0,
             y: 20,
             transition: { ease: "easeInOut", delay: 1.2 },
           }}
           onClick={handleToggle}
          >Home</motion.button>
        </Link>

        <Link  to="/courses">
          <motion.button 
                    initial={{ y: 90, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: { ease: "easeInOut", delay: 1 },
                    }}
                    onClick={handleToggle}
          >courses</motion.button>
        </Link>

        <Link  to="about" >
          <motion.button 
                 initial={{ y: 90, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 exit={{
                   opacity: 0,
                   y: 90,
                   transition: { ease: "easeInOut", delay: .7 },
                 }}
                 onClick={handleToggle}
          >About</motion.button>
        </Link>

        <Link to="/register">
          <motion.button 
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: { ease: "easeInOut", delay: 0.4 },
            }}
            onClick={handleToggle}
          >Sign up</motion.button>
        </Link>

        <Link to="contact">
          <motion.button 
                    initial={{ y: 90, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: { ease: "easeInOut", delay: 0.3 },
                    }}
                    onClick={handleToggle}
          >contact us</motion.button>
        </Link>

        <Link className="bg-red-400 py-2 px-3 rounded-md">
          <motion.button
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: { ease: "easeInOut", delay: 0.1 },
            }}
            onClick={handleActions}
          >
            Log out
          </motion.button>
        </Link>
      </motion.div>
  );
};

export default NavLinks;
