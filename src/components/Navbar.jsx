import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // State to toggle the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center shadow-md relative z-20">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="/logo.png" 
          alt="Naaz Enterprises Logo" 
          className="h-20 w-32 object-contain" 
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Links for Desktop */}
      <div className="hidden lg:flex space-x-12">
        <Link to="/" className="font-bold hover:text-yellow-300 transition duration-300 text-lg">
          Home
        </Link>
        <Link to="/about" className="font-bold hover:text-yellow-300 transition duration-300 text-lg">
          About
        </Link>
        <Link to="/contact" className="font-bold hover:text-yellow-300 transition duration-300 text-lg">
          Contact
        </Link>
        <Link to="/collection" className="font-bold hover:text-yellow-300 transition duration-300 text-lg">
          Collection
        </Link>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`lg:hidden absolute left-0 w-full bg-green-700 text-white py-4 px-8 ${isMenuOpen ? "block opacity-100 translate-x-0" : "hidden opacity-0 translate-x-[-100%]"} transition-all duration-500 ease-in-out z-30`}
        style={{ top: "64px" }} // Adjust top value to place the menu below the navbar
      >
        <div className="flex flex-col space-y-6 items-center">
          <Link to="/" className="font-bold hover:text-yellow-300 transition duration-300 text-lg" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="font-bold hover:text-yellow-300 transition duration-300 text-lg" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" className="font-bold hover:text-yellow-300 transition duration-300 text-lg" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/collection" className="font-bold hover:text-yellow-300 transition duration-300 text-lg" onClick={closeMenu}>
            Collection
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
