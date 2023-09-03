import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
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

import { toggleContext } from "./hooks/toggleContext";

const App = () => {

  return (
    <BrowserRouter>
    <toggleContext.Provider value={true}>
    <header>
      <NavBar />
    </header>
    <ToastContainer />
    <Routes >
    <Route path="/" element={<Home />}/>
     <Route element={<FormIndex />}>
       <Route path='/register' element={<Bounce left><RegisterForm /></Bounce>} />
       <Route path='/login' element={<Bounce right><LoginForm /></Bounce>} />
      </Route>
       <Route path='/profile' element={<ProfilePage />} />
       <Route path='/courses' element={<CoursePage />} />
    </Routes>
    </toggleContext.Provider>
    </BrowserRouter>
  );
};

export default App;
