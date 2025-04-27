import { Link } from "react-router-dom";

function Vegetables() {
  const vegetables = [
    { name: "Carrot", image: "/vegetables/carrot.jpg" },
    { name: "Broccoli", image: "/vegetables/broccoli.jpg" },
    { name: "Tomato", image: "/vegetables/tomato.jpg" },
    { name: "Cucumber", image: "/vegetables/cucumber.jpg" },
    { name: "Bell Pepper", image: "/vegetables/bellpepper.jpg" },
    { name: "Spinach", image: "/vegetables/spinach.jpg" },
    { name: "Potato", image: "/vegetables/potato.jpg" },
    { name: "Onion", image: "/vegetables/onion.jpg" },
    { name: "Cauliflower", image: "/vegetables/cauliflower.jpg" },
    { name: "Green Beans", image: "/vegetables/greenbeans.jpg" },
  ];

  return (
    <section className="relative bg-transparent py-12 overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700">
          Fresh and Organic Vegetables Collection
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">Farm-fresh vegetables delivered to your doorstep.</p>
      </div>

      {/* Explore More Button */}
      <div className="absolute top-20 sm:top-28 right-8 z-10">
        <Link to="/vegetablescollection">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md transition text-sm sm:text-lg">
            Explore More
          </button>
        </Link>
      </div>

      {/* Scrolling Vegetables */}
      <div className="flex space-x-12 animate-scroll px-8 py-12">
        {vegetables.map((veg, index) => (
          <div key={index} className="flex-shrink-0 w-56">
            <img 
              src={veg.image} 
              alt={veg.name} 
              className="w-full h-56 object-cover rounded-lg shadow-md" 
            />
            <p className="text-center mt-3 font-semibold text-lg">{veg.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vegetables;
