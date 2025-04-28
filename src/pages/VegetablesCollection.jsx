// src/components/VegetablesCollection.jsx

function VegetablesCollection() {
  const vegetables = [
    { name: "Carrot", image: "/carrot.jpg" },
    { name: "Broccoli", image: "/broccoli.jpg" },
    { name: "Tomato", image: "/tomato.jpg" },
    { name: "Cucumber", image: "/cucumber.jpg" },
    { name: "Bell Pepper", image: "/bellpepper.jpg" },
    { name: "Spinach", image: "/spinach.jpg" },
    { name: "Potato", image: "/potato.jpg" },
    { name: "Onion", image: "/onion.jpg" },
    { name: "Cauliflower", image: "/cauliflower.jpg" },
    { name: "Green Beans", image: "/greenbeans.jpg" },
    { name: "Zucchini", image: "/zucchini.jpg" },
    { name: "Lettuce", image: "/lettuce.jpg" },
    { name: "Cabbage", image: "/cabbage.jpg" },
    { name: "Pumpkin", image: "/pumpkin.jpg" },
    { name: "Eggplant", image: "/eggplant.jpg" },
    { name: "Beetroot", image: "/beetroot.jpg" },
    { name: "Asparagus", image: "/asparagus.jpg" },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-12">Our Vegetable Collection</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {vegetables.map((veg, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition aspect-square flex flex-col items-center justify-center p-2"
          >
            <img
              src={veg.image}
              alt={veg.name}
              className="w-full h-3/4 object-contain rounded-md"
            />
            <h2 className="text-center mt-2 font-semibold text-md">{veg.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VegetablesCollection;
