import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../../features/usersApiSlice";
import { logout } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const NavLinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [isMenueToggled, setIsMenuToggled] = useState(false);

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      toast.warning("you have Log out");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.6,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col h-screen bg-black w-screen items-center absolute left-0 top-0 justify-center text-white space-y-14 text-xl"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ delay: 0.4 }}
        exit="exit"
      >
        <Link to="/" 
        onClick={() => setIsMenuToggled(!isMenueToggled)}
        >
          <motion.button 
           initial={{ y: 90, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.4 }}
           exit={{
             opacity: 0,
             y: 20,
             transition: { ease: "easeInOut", delay: 1.4 },
           }}
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
                      transition: { ease: "easeInOut", delay: 1.2 },
                    }}
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
                   transition: { ease: "easeInOut", delay: 1 },
                 }}
          >About</motion.button>
        </Link>

        <Link to="/register">
          <motion.button 
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: { ease: "easeInOut", delay: 0.6 },
            }}
          >Sign up</motion.button>
        </Link>

        <Link to="contact-us">
          <motion 
                    initial={{ y: 90, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: { ease: "easeInOut", delay: 0.4 },
                    }}
          >contact us</motion>
        </Link>

        <Link to="contact-us" className="bg-red-400 py-2 px-3 rounded-md">
          <motion.button
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: { ease: "easeInOut", delay: 0.4 },
            }}
            onClick={logoutHandler}
          >
            Log out
          </motion.button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavLinks;
