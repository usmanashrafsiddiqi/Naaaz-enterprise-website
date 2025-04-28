// src/pages/Homepage.jsx
import React from 'react';

import Header from "../components/Header";
import About from "../components/About";
import Fruits from "../components/Fruits";
import Vegetables from "../components/Vegetables";
import Contact from './Contact';

function Homepage() {
  return (
    <div>
  
      <Header />
      <Fruits />
      <Vegetables />
      <About />
      <Contact/>
    </div>
  );
}

export default Homepage;
