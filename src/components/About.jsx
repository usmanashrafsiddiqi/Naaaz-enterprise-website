function About() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat pt-20 px-4 sm:px-8 pb-12 min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/aboutbggg.png')" }}
    >
      <div className="relative w-full max-w-7xl mx-auto p-6 sm:p-10 md:p-16 rounded-2xl overflow-hidden
                      sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        {/* Frosted Glass Background */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl"></div>

        {/* Actual Content */}
        <div className="relative z-10 text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-8">About Us</h1>

          {/* Main Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            At <span className="font-semibold text-green-700">NAAZ ENTERPRISES</span>, we specialize in the
            transportation and delivery of fresh fruits and vegetables at wholesale prices. We are dedicated to
            ensuring that you receive only the best quality produce. With our headquarters based in Leh, Jammu & 
            Kashmir, India, we proudly serve customers across Asia and the UAE. Our services are timely, reliable, 
            and customer-focused, ensuring that fresh produce is delivered right to your doorstep.
          </p>

          {/* Service Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: "Time-to-Time Service", desc: "We ensure timely delivery of fresh fruits and vegetables, every time." },
              { title: "Customer Satisfaction", desc: "Your satisfaction is our priority, and we always aim to exceed your expectations." },
              { title: "Affordable Pricing", desc: "Get the best quality fruits and vegetables at wholesale prices." },
              { title: "Fresh Delivery", desc: "We deliver the freshest produce, straight from the farm to your door." },
              { title: "Wide Range of Products", desc: "We offer a wide variety of fruits and vegetables to choose from." },
              { title: "Global Reach", desc: "We deliver across Asia and the UAE, bringing fresh produce to your doorstep." },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-green-600 text-white text-center py-8 px-6 rounded-xl shadow-lg border-2 border-white/30 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
