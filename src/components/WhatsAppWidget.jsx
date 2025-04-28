import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  // The message you want to send as default
  const defaultMessage = "Hello, I need assistance with your services!";

  return (
    <a
      href={`https://wa.me/919419644700?text=${encodeURIComponent(defaultMessage)}`} // URL encode the message
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 bg-green-500 rounded-full p-6 shadow-lg transition-transform duration-300 hover:scale-110 z-50"
    >
      {/* Icon size changes based on screen size */}
      <FaWhatsapp 
        className="text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" 
      />
    </a>
  );
};

export default WhatsAppWidget;
