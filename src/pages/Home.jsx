import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb')"
      }}
    >
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content container */}
      <div className="relative z-10 text-center text-white p-6 sm:p-8 md:p-10 max-w-3xl">
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Discover the world one dream at a time
        </h1>

        {/* Subtitle / Description */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-xl mx-auto">
          Plan your adventures, explore destinations, and make memories that last forever
        </p>

        {/* Call to Action Button */}
        <Link to="/signup"> 
          <button 
            className="
              px-8 py-3 text-lg font-semibold rounded-full 
              bg-blue-600 hover:bg-blue-700 text-white 
              shadow-lg transition duration-300 ease-in-out
              transform hover:scale-105 active:scale-95
              focus:outline-none focus:ring-4 focus:ring-blue-300
            "
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
