// src/components/Header.jsx
function Header() {
    return (
      <header className="relative w-full h-[90vh] overflow-hidden">
        {/* Video Background */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          src="/video.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
        />
        
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          {/* Center Text */}
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Freshness you can trust!
          </h1>
        </div>
      </header>
    );
  }
  
  export default Header;
  