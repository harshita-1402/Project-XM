import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contactus from '../pages/Contactus';
import Login from '../pages/Login';
import Signup from '../pages/Signup';




const Routing = () => {
  return (
    <>
     <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/contactus' element={<Contact Us />} />

        </Routes> 
    </>
  );
}

export default Routing;
