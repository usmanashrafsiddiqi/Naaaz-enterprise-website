import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar at the top
import Footer from "./components/Footer"; 
import Homepage from "./pages/Homepage"; // Main homepage
import About from "./components/About";
import FruitsCollection from "./pages/FruitsCollection";
import VegetablesCollection from './pages/VegetablesCollection';
import Collection from './pages/Collection';  // Import Collection page
import Contact from "./pages/Contact"; // Import the Contact page

// Import WhatsAppWidget component
import WhatsAppWidget from "./components/WhatsAppWidget";

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
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} /> {/* Add route for Contact */}
      </Routes>
      
      {/* Footer will appear on every page */}
      <Footer />
      
      {/* WhatsApp Widget will appear on every page */}
      <WhatsAppWidget />
    </div>
  );
}

export default App;
