import React from 'react';
import AboutImg from "../src/images/AboutImg.avif";
import {NavLink} from "react-router-dom";
import Common from './Common.jsx';

const About = () => {
  return (
    <>
       <Common name="Welcome to about page of " imgsrc={AboutImg} visit="/contact" btnname="Contact now"/>
    </>
  )
}

export default About