// src/App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar at the top
import Homepage from "./pages/Homepage"; // Main homepage
import About from "./components/About";
import FruitsCollection from "./pages/FruitsCollection";
import VegetablesCollection from './pages/VegetablesCollection';
import Collection from './pages/Collection';  // Import Collection page

function App() {
  return (
    <div>
      {/* The Navbar will appear on every page */}
      <Navbar />
      
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Separate pages for individual components */}
        <Route path="/about" element={<About />} />
        <Route path="/fruitscollection" element={<FruitsCollection />} />
        <Route path="/vegetablescollection" element={<VegetablesCollection />} />
        
        {/* Route for Collection page */}
        <Route path="/collection" element={<Collection />} /> {/* Add this */}
      </Routes>
    </div>
  );
}

export default App;
