import React from "react";
import { Routes, Route} from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

const Routing = () => {
  return (
    <Routes>
      
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route  path="*" element={<ErrorPage/>}/>
     
    </Routes>
  );
};

export default Routing;
