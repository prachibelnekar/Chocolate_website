import React from 'react';
import HomeImg from "../src/images/HomeImg.avif";
import Common from './Common.jsx';

const Home = () => {
  return (
    <Common className="imgHome" name="Grow your business with  " imgsrc={HomeImg} visit="/service" btnname="Get started"/>
  )
}

export default Home