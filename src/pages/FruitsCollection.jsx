function FruitsCollection() {
    const fruits = [
      { name: "Apple", image: "/fruits/apple.jpg" },
      { name: "Banana", image: "/fruits/banana.jpg" },
      { name: "Mango", image: "/fruits/mango.jpg" },
      { name: "Orange", image: "/fruits/orange.jpg" },
      { name: "Pineapple", image: "/fruits/pineapple.jpg" },
      { name: "Grapes", image: "/fruits/grapes.jpg" },
      { name: "Strawberry", image: "/fruits/strawberry.jpg" },
      { name: "Watermelon", image: "/fruits/watermelon.jpg" },
      { name: "Papaya", image: "/fruits/papaya.jpg" },
      { name: "Kiwi", image: "/fruits/kiwi.jpg" },
      // You can add more fruits easily here
    ];
  
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Fruit Collection</h2>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {fruits.map((fruit, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={fruit.image} alt={fruit.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-center mt-4 font-semibold text-lg">{fruit.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FruitsCollection;
  