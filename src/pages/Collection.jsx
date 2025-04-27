import { useState } from "react";

function Collection() {
  const [fruitCategory, setFruitCategory] = useState("all");
  const [vegCategory, setVegCategory] = useState("all");

  // Expanded sample data for fruits with categories
  const fruits = [
    { name: "Apple", image: "/fruits/apple.jpg", category: "tree" },
    { name: "Banana", image: "/fruits/banana.jpg", category: "ground" },
    { name: "Mango", image: "/fruits/mango.jpg", category: "tree" },
    { name: "Orange", image: "/fruits/orange.jpg", category: "tree" },
    { name: "Pineapple", image: "/fruits/pineapple.jpg", category: "ground" },
    { name: "Grapes", image: "/fruits/grapes.jpg", category: "vine" },
    { name: "Strawberry", image: "/fruits/strawberry.jpg", category: "ground" },
    { name: "Watermelon", image: "/fruits/watermelon.jpg", category: "ground" },
    { name: "Papaya", image: "/fruits/papaya.jpg", category: "tree" },
    { name: "Kiwi", image: "/fruits/kiwi.jpg", category: "vine" },
    { name: "Peach", image: "/fruits/peach.jpg", category: "tree" },
    { name: "Plum", image: "/fruits/plum.jpg", category: "tree" },
    { name: "Blueberry", image: "/fruits/blueberry.jpg", category: "bush" },
    { name: "Raspberry", image: "/fruits/raspberry.jpg", category: "bush" },
    { name: "Dragonfruit", image: "/fruits/dragonfruit.jpg", category: "vine" },
    { name: "Cherry", image: "/fruits/cherry.jpg", category: "tree" },
  ];

  // Expanded sample data for vegetables with categories
  const vegetables = [
    { name: "Carrot", image: "/vegetables/carrot.jpg", category: "root" },
    { name: "Broccoli", image: "/vegetables/broccoli.jpg", category: "leafy" },
    { name: "Tomato", image: "/vegetables/tomato.jpg", category: "fruit" },
    { name: "Cucumber", image: "/vegetables/cucumber.jpg", category: "fruit" },
    { name: "Bell Pepper", image: "/vegetables/bellpepper.jpg", category: "fruit" },
    { name: "Spinach", image: "/vegetables/spinach.jpg", category: "leafy" },
    { name: "Potato", image: "/vegetables/potato.jpg", category: "root" },
    { name: "Onion", image: "/vegetables/onion.jpg", category: "root" },
    { name: "Cauliflower", image: "/vegetables/cauliflower.jpg", category: "flower" },
    { name: "Green Beans", image: "/vegetables/greenbeans.jpg", category: "fruit" },
    { name: "Zucchini", image: "/vegetables/zucchini.jpg", category: "fruit" },
    { name: "Lettuce", image: "/vegetables/lettuce.jpg", category: "leafy" },
    { name: "Cabbage", image: "/vegetables/cabbage.jpg", category: "leafy" },
    { name: "Pumpkin", image: "/vegetables/pumpkin.jpg", category: "fruit" },
    { name: "Eggplant", image: "/vegetables/eggplant.jpg", category: "fruit" },
    { name: "Beetroot", image: "/vegetables/beetroot.jpg", category: "root" },
    { name: "Asparagus", image: "/vegetables/asparagus.jpg", category: "stem" },
  ];

  // Filtered fruits based on category
  const filteredFruits = fruits.filter(fruit => 
    fruitCategory === "all" || fruit.category === fruitCategory
  );

  // Filtered vegetables based on category
  const filteredVegetables = vegetables.filter(veg => 
    vegCategory === "all" || veg.category === vegCategory
  );

  return (
    <div className="py-12 px-4 sm:px-8">
      {/* Fruits Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-green-700 mb-4 text-center">Fruits Collection</h2>
        
        {/* Fruit Filter - Centered buttons */}
        <div className="flex justify-center flex-wrap mb-8 gap-4">
          <button
            className={`py-2 px-4 rounded-lg ${fruitCategory === "all" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setFruitCategory("all")}
          >
            All Fruits
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${fruitCategory === "tree" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setFruitCategory("tree")}
          >
            Tree Fruits
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${fruitCategory === "ground" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setFruitCategory("ground")}
          >
            Ground Fruits
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${fruitCategory === "vine" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setFruitCategory("vine")}
          >
            Vine Fruits
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${fruitCategory === "bush" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setFruitCategory("bush")}
          >
            Bush Fruits
          </button>
        </div>

        {/* Fruits Display Grid - Responsive Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredFruits.map((fruit, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={fruit.image}
                alt={fruit.name}
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-lg shadow-md"
              />
              <p className="mt-3 text-center font-semibold">{fruit.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vegetables Section */}
      <div>
        <h2 className="text-4xl font-extrabold text-green-700 mb-4 text-center">Vegetables Collection</h2>

        {/* Vegetable Filter - Centered buttons */}
        <div className="flex justify-center flex-wrap mb-8 gap-4">
          <button
            className={`py-2 px-4 rounded-lg ${vegCategory === "all" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setVegCategory("all")}
          >
            All Vegetables
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${vegCategory === "leafy" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setVegCategory("leafy")}
          >
            Leafy Vegetables
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${vegCategory === "root" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setVegCategory("root")}
          >
            Root Vegetables
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${vegCategory === "fruit" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setVegCategory("fruit")}
          >
            Fruiting Vegetables
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${vegCategory === "flower" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setVegCategory("flower")}
          >
            Flowering Vegetables
          </button>
        </div>

        {/* Vegetables Display Grid - Responsive Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredVegetables.map((veg, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={veg.image}
                alt={veg.name}
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-lg shadow-md"
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
