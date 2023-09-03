import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route, Navigate, redirect} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import FormIndex from "./components/form/FormIndex";
import Bounce from "react-reveal/Bounce"
import RegisterForm from "./components/form/RegisterForm";
import LoginForm from "./components/form/LoginForm";
import ProfilePage from "./pages/ProfilePage";
import CoursePage from "./pages/CoursePage";
import NavBar from "./components/Home/NavBar";
import Welcomepe from "./pages/Welcomepe";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OnlineCheck from "./scene/OnlineCheck";

const App = () => {

// const [showComp, setShowComp] = useState(true)

// setTimeout(() => {
//   setShowComp(false)
// }, 2000);

  return (
    
    <BrowserRouter>
    <ToastContainer />
      <NavBar />
    <OnlineCheck />
    <Routes >
    
    <Route path="/welcome" element={<Welcomepe />}/>

    <Route path="/" element={<Home />}/>

     <Route element={<FormIndex />}>
       <Route path='/register' element={<Bounce left><RegisterForm /></Bounce>} />
       <Route path='/login' element={<Bounce right><LoginForm /></Bounce>} />
      </Route>
    
       <Route path='/profile' element={<ProfilePage />} />
       <Route path='/courses' element={<CoursePage />} />
       <Route path='/about' element={<AboutPage />} />
       <Route path='/contact' element={<ContactPage />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
