import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';  // Import the React Icons

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Links, Contact Us, Follow Us */}
        <div className="flex justify-between items-start mb-12 space-x-12">
          {/* Links Section */}
          <div className="w-1/3">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-yellow-300 transition duration-300 text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-300 transition duration-300 text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-300 transition duration-300 text-lg">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-yellow-300 transition duration-300 text-lg">
                  Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-1/3 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-lg mb-2">
              <strong>Email:</strong> <a href="mailto:naazenterprises005@gmail.com" className="text-yellow-300">naazenterprises005@gmail.com</a>
            </p>
            <p className="text-lg mb-2">
              <strong>Number:</strong> 9419644700, 9906675527
            </p>
            <p className="text-lg">
              <strong>Address:</strong> Chuchot Shama, Leh, J&K, India
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="w-1/3 text-left">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-start space-x-6 mt-2">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/people/Naaz-Fruits-Veggies/pfbid02kQ5d5yVQQVAbGQYbyeWNeuaq8dwxxaZKLob5CQsfYj7TyTXVaKuKHED26WirrmRfl/?mibextid=wwXIfr&rdid=sYzWb0W2pED3uu0w&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CDdjDZtH2%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition duration-300 text-3xl"
              >
                <FaFacebookF />
              </a>
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/naaz_fruits_veggies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition duration-300 text-3xl"
              >
                <FaInstagram />
              </a>
              {/* Twitter Icon */}
              
              
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/9419644700"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition duration-300 text-3xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-lg text-gray-300 mt-8">
  <p>&copy; 2025 Naaz Enterprises. All Rights Reserved.</p>
</div>

      </div>
    </footer>
  );
}

export default Footer;
