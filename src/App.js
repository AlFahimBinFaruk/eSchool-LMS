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
import PageNotFound from "./components/error_components/PageNotFound";
import InternerServerError from "./components/error_components/InternerServerError";
import CourseDetails from "./components/Pages/CourseDetails";
import Cart from './components/Pages/Cart';
import Checkout from './components/Pages/Checkout';
import UserProfile from './components/AuthPages/UserProfile'
import InstructorProfile from "./components/Pages/InstructorProfile";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
         
          {/* auth routers */} <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          {/* auth routers */} <Route path="/" element={<Home />} />
          <Route path="/courses/:category" element={<Courses />} />
          <Route path="/details/:name" element={<CourseDetails />} />
          <Route path="/servererror" element={<InternerServerError />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/instructorprofile/:id" element={<InstructorProfile/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
