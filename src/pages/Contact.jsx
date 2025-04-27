import { useState } from "react";

function Contact() {
  const [isCardOpen, setIsCardOpen] = useState(false); // State to toggle the card

  // Toggle function for foldable card
  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <section className="py-12 px-8 bg-transparent-100">
      {/* Contact Us Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-700">Contact Us</h1>
      </div>

      {/* Office Details Card */}
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-6 transition-all duration-500 ease-in-out">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-green-700">Our Office</h2>
          <p className="text-lg text-gray-600">Contact us for any inquiries</p>
        </div>

        {/* Card Content */}
        <div className={`overflow-hidden ${isCardOpen ? "h-auto" : "h-20"}`}>
          <div className="transition-all duration-500">
            <p className="text-lg font-medium text-gray-700 mb-2">
              <strong>Address:</strong> Chuchot Shama, Leh, J&K, India
            </p>
            <p className="text-lg font-medium text-gray-700 mb-4">
              <strong>Contact Numbers:</strong> 9419644700, 9906675527
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={toggleCard} 
          className="mt-4 py-2 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition duration-300">
          {isCardOpen ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {/* Email Contact Button */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-4">You can contact us via email</p>
        <a href="mailto:naazenterprises005@gmail.com">
          <button className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300">
            naazenterprises005@gmail.com
          </button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
