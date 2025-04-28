import { useState } from "react";

function Collection() {
  const [fruitCategory, setFruitCategory] = useState("all");
  const [vegCategory, setVegCategory] = useState("all");

  const fruits = [
    { name: "Apple", image: "/apple.jpg", category: "tree" },
    { name: "Banana", image: "/banana.jpg", category: "ground" },
    { name: "Mango", image: "/mango.jpg", category: "tree" },
    { name: "Orange", image: "/orange.jpg", category: "tree" },
    { name: "Pineapple", image: "/Pineapple.jpg", category: "ground" },
    { name: "Grapes", image: "/grapes.jpg", category: "vine" },
    { name: "Strawberry", image: "/strawberry.jpg", category: "ground" },
    { name: "Watermelon", image: "/Watermelon.jpg", category: "ground" },
    { name: "Papaya", image: "/papaya.jpg", category: "tree" },
    { name: "Kiwi", image: "/kiwi.jpg", category: "vine" },
    { name: "Peach", image: "/peach.jpg", category: "tree" },
    { name: "Plum", image: "/plum.jpg", category: "tree" },
    { name: "Blueberry", image: "/blueberry.jpg", category: "bush" },
    { name: "Raspberry", image: "/raspberry.jpg", category: "bush" },
    { name: "Dragonfruit", image: "/dragonfruit.jpg", category: "vine" },
    { name: "Cherry", image: "/cherry.jpg", category: "tree" },
  ];

  const vegetables = [
    { name: "Carrot", image: "/carrot.jpg", category: "root" },
    { name: "Broccoli", image: "/broccoli.jpg", category: "leafy" },
    { name: "Tomato", image: "/tomato.jpg", category: "fruit" },
    { name: "Cucumber", image: "/cucumber.jpg", category: "fruit" },
    { name: "Bell Pepper", image: "/bellpepper.jpg", category: "fruit" },
    { name: "Spinach", image: "/spinach.jpg", category: "leafy" },
    { name: "Potato", image: "/potato.jpg", category: "root" },
    { name: "Onion", image: "/onion.jpg", category: "root" },
    { name: "Cauliflower", image: "/cauliflower.jpg", category: "flower" },
    { name: "Green Beans", image: "/greenbeans.jpg", category: "fruit" },
    { name: "Zucchini", image: "/zucchini.jpg", category: "fruit" },
    { name: "Lettuce", image: "/lettuce.jpg", category: "leafy" },
    { name: "Cabbage", image: "/cabbage.jpg", category: "leafy" },
    { name: "Pumpkin", image: "/pumpkin.jpg", category: "fruit" },
    { name: "Eggplant", image: "/eggplant.jpg", category: "fruit" },
    { name: "Beetroot", image: "/beetroot.jpg", category: "root" },
    { name: "Asparagus", image: "/asparagus.jpg", category: "stem" },
  ];

  const filteredFruits = fruits.filter(fruit => fruitCategory === "all" || fruit.category === fruitCategory);
  const filteredVegetables = vegetables.filter(veg => vegCategory === "all" || veg.category === vegCategory);

  return (
    <div className="py-12 px-4 sm:px-8">
      {/* Fruits Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold text-green-700 mb-6 text-center">Fruits Collection</h2>

        {/* Fruit Filter */}
        <div className="flex justify-center flex-wrap mb-10 gap-4">
          {["all", "tree", "ground", "vine", "bush"].map(type => (
            <button
              key={type}
              className={`py-2 px-4 rounded-lg ${fruitCategory === type ? "bg-green-600 text-white" : "bg-gray-200"}`}
              onClick={() => setFruitCategory(type)}
            >
              {type === "all" ? "All Fruits" : type.charAt(0).toUpperCase() + type.slice(1) + " Fruits"}
            </button>
          ))}
        </div>

        {/* Fruits Display Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredFruits.map((fruit, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col items-center">
              <img
                src={fruit.image}
                alt={fruit.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="mt-3 text-center font-semibold">{fruit.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vegetables Section */}
      <div>
        <h2 className="text-4xl font-extrabold text-green-700 mb-6 text-center">Vegetables Collection</h2>

        {/* Vegetable Filter */}
        <div className="flex justify-center flex-wrap mb-10 gap-4">
          {["all", "leafy", "root", "fruit", "flower"].map(type => (
            <button
              key={type}
              className={`py-2 px-4 rounded-lg ${vegCategory === type ? "bg-green-600 text-white" : "bg-gray-200"}`}
              onClick={() => setVegCategory(type)}
            >
              {type === "all" ? "All Vegetables" : type.charAt(0).toUpperCase() + type.slice(1) + " Vegetables"}
            </button>
          ))}
        </div>

        {/* Vegetables Display Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredVegetables.map((veg, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col items-center">
              <img
                src={veg.image}
                alt={veg.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="mt-3 text-center font-semibold">{veg.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
