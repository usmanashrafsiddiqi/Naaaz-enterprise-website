function VegetablesCollection() {
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
      <div className="p-8">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-12">Our Vegetable Collection</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {vegetables.map((veg, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src={veg.image} 
                alt={veg.name} 
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{veg.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default VegetablesCollection;
  