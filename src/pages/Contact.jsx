import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing icons

function Contact() {
  return (
    <section className="py-16 px-8 pb-10 min-h-[70vh] flex items-center justify-center"> {/* Reduced height */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-green-700">Get in Touch</h1>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Address Card */}
          <div className="bg-blue-500 text-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border-2 border-white/30 backdrop-blur-md">
            <FaMapMarkerAlt className="text-5xl mb-6" />
            <h2 className="text-2xl font-bold mb-4">Address</h2>
            <p className="text-lg font-medium">
              Chuchot Shama, Leh, J&K, India
            </p>
          </div>

          {/* Contact Number Card */}
          <div className="bg-green-400 text-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border-2 border-white/30 backdrop-blur-md">
            <FaPhoneAlt className="text-5xl mb-6" />
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-lg font-medium mb-2">9419644700</p>
            <p className="text-lg font-medium">9906675527</p>
          </div>

          {/* Email Card */}
          <div className="bg-gray-300 text-green-900 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border-2 border-white/30 backdrop-blur-md">
            <FaEnvelope className="text-5xl mb-6" />
            <h2 className="text-2xl font-bold mb-4">Email</h2>
            <p className="text-lg font-medium break-words">
              naazenterprises005@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
