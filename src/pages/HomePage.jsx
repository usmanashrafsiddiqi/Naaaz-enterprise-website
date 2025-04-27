// src/pages/Homepage.jsx
import React from 'react';

import Header from "../components/Header";
import About from "../components/About";
import Fruits from "../components/Fruits";
import Vegetables from "../components/Vegetables";

function Homepage() {
  return (
    <div>
  
      <Header />
      <About />
      <Fruits />
      <Vegetables />
    </div>
  );
}

export default Homepage;
