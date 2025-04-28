// src/components/Header.jsx
function Header() {
  return (
    <header className="relative w-full h-[70vh] overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-[70vh] object-cover" 
        src="/video1.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline 
      />
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-[70vh] bg-black bg-opacity-40 flex items-center justify-center">
        {/* Center Text */}
        <div className="text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Freshness you can trust! 
            <span className="text-green-500"> Premium quality fruits and vegetables</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-6">
            We deliver farm-fresh produce directly to your doorstep, ensuring quality, taste, and nutritional value in every bite.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
