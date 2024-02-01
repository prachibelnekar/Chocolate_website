import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Service from "./Service.jsx";
import Navbar from './Navbar.jsx';
import Footer from "./Footer.jsx"
import { BrowserRouter,Route, Routes, Navigate} from 'react-router-dom';

const App = () => {
    return (
        <>
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
        </Routes>
        <Footer/>
        </>
    );
  };

export default App;
//rafce-->Shortcut for boiler plate code