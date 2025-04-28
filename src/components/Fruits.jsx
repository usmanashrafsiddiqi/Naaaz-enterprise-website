import { Link } from "react-router-dom";

function Fruits() {
  const fruits = [
    { name: "Apple", image: "/apple.jpg" },
    { name: "Banana", image: "/banana.jpg" },
    { name: "Mango", image: "/mango.jpg" },
    { name: "Orange", image: "/orange.jpg" },
    { name: "Pineapple", image: "/Pineapple.jpg" },
    { name: "Grapes", image: "/grapes.jpg" },
    { name: "Strawberry", image: "/strawberry.jpg" },
    { name: "Watermelon", image: "/Watermelon.jpg" },
    { name: "Papaya", image: "/papaya.jpg" },
    { name: "Kiwi", image: "/kiwi.jpg" },
  ];

  return (
    <section className="relative bg-transparent py-12 overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700">
          Fresh and Healthy Fruits Collection
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">Hand-picked fruits delivered fresh to your doorstep.</p>
      </div>

      {/* Explore More Button */}
      <div className="absolute top-20 sm:top-28 right-8 z-10">
        <Link to="/fruitscollection">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md transition text-sm sm:text-lg">
            Explore More
          </button>
        </Link>
      </div>

      {/* Scrolling Fruits */}
      <div className="flex space-x-12 animate-scroll px-8 py-12">
        {fruits.map((fruit, index) => (
          <div key={index} className="flex-shrink-0 w-56 bg-white p-4 rounded-xl shadow-md overflow-hidden">
            <img 
              src={fruit.image} 
              alt={fruit.name} 
              className="w-full h-56 object-cover rounded-lg shadow-md" 
            />
            <p className="text-center mt-3 font-semibold text-lg">{fruit.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Fruits;
