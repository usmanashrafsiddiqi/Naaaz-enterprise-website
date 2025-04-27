// src/components/About.jsx
function About() {
  return (
    <>
      <section className="bg-transparent pt-20 px-8 mb-12"> {/* Adjusted padding-top and added bottom margin */}
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-5xl font-bold text-green-700 mb-6">About Us</h1>

          {/* Main Paragraph */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            At <span className="font-semibold text-green-700">NAAZ ENTERPRISES</span>, we specialize in the
            transportation and delivery of fresh fruits and vegetables at wholesale prices. We are dedicated to
            ensuring that you receive only the best quality produce. With our headquarters based in Leh, Jammu &
            Kashmir, India, we proudly serve customers across Asia and the UAE. Our services are timely, reliable,
            and customer-focused, ensuring that fresh produce is delivered right to your doorstep.
          </p>

          {/* Service Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="bg-green-600 text-white text-center py-8 rounded-lg shadow-lg border-2 border-white">
              <h3 className="text-2xl font-bold">Time-to-Time Service</h3>
              <p className="mt-2">We ensure timely delivery of fresh fruits and vegetables, every time.</p>
            </div>
            <div className="bg-green-600 text-white text-center py-8 rounded-lg shadow-lg border-2 border-white">
              <h3 className="text-2xl font-bold">Customer Satisfaction</h3>
              <p className="mt-2">Your satisfaction is our priority, and we always aim to exceed your expectations.</p>
            </div>
            <div className="bg-green-600 text-white text-center py-8 rounded-lg shadow-lg border-2 border-white">
              <h3 className="text-2xl font-bold">Affordable Pricing</h3>
              <p className="mt-2">Get the best quality fruits and vegetables at wholesale prices.</p>
            </div>
            <div className="bg-green-600 text-white text-center py-8 rounded-lg shadow-lg border-2 border-white">
              <h3 className="text-2xl font-bold">Fresh Delivery</h3>
              <p className="mt-2">We deliver the freshest produce, straight from the farm to your door.</p>
            </div>
            <div className="bg-green-600 text-white text-center py-8 rounded-lg shadow-lg border-2 border-white">
              <h3 className="text-2xl font-bold">Wide Range of Products</h3>
              <p className="mt-2">We offer a wide variety of fruits and vegetables to choose from.</p>
            </div>
            <div className="bg-green-600 text-white text-center py-8 rounded-lg shadow-lg border-2 border-white">
              <h3 className="text-2xl font-bold">Global Reach</h3>
              <p className="mt-2">We deliver across Asia and the UAE, bringing fresh produce to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
