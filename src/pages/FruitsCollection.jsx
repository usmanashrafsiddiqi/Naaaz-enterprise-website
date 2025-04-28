// src/components/FruitsCollection.jsx

function FruitsCollection() {
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
   
    { name: "Peach", image: "/peach.jpg" },
    { name: "Plum", image: "/plum.jpg" },
    { name: "Blueberry", image: "/blueberry.jpg"},
    { name: "Raspberry", image: "/raspberry.jpg" },
    { name: "Dragonfruit", image: "/dragonfruit.jpg" },
    { name: "Cherry", image: "/cherry.jpg" },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Fruit Collection</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {fruits.map((fruit, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition aspect-square flex flex-col items-center justify-center p-2"
          >
            <img 
              src={fruit.image} 
              alt={fruit.name} 
              className="w-full h-3/4 object-contain rounded-md"
            />
            <h3 className="text-center mt-2 font-semibold text-md">{fruit.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FruitsCollection;
