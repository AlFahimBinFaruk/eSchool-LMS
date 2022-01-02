import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import ForgetPassword from "./components/AuthPages/ForgetPassword";
import Login from "./components/AuthPages/Login";
import Register from "./components/AuthPages/Register";
import Footer from "./components/common_components/Footer";
import Navbar from "./components/common_components/Navbar";
import Courses from "./components/Pages/Courses";
import Home from "./components/Pages/Home";
import { AppProvider } from "./contexts/AlertContext";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
        {/* auth routers */}
        <AppProvider>
         
         <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
          </Routes>
        </AppProvider>
        {/* auth routers */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:category" element={<Courses/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;