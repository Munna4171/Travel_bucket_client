import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT LINK

export default function Dashboard() {
  return (
    <div className="p-8 max-w-6xl mx-auto min-h-[calc(100vh-60px)]">
      {/* ... header ... */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Goals Section (stays the same) */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Travel Goals</h3>
          <p className="text-gray-500">List and manage places you want to visit.</p>
          <Link to="/travel-goals">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Add Goal
            </button>
          </Link>
        </div>

        {/* Photos Section (stays the same) */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-teal-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Photo Gallery</h3>
          <p className="text-gray-500">Upload and view your cherished memories.</p>
          <Link to="/photo-gallery">
            <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
              Upload Photo
            </button>
          </Link>
        </div>
        
        {/* --- 2. WRAP THIS CARD IN A LINK --- */}
        <Link to="/statistics" className="hover:shadow-xl transition-shadow duration-300 rounded-lg">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500 h-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Trip Statistics</h3>
            <p className="text-gray-500">See how many countries you've explored!</p>
            <div className="mt-4 text-3xl font-bold text-purple-600">3 Countries Visited</div>
          </div>
        </Link>
        {/* ---------------------------------- */}

      </div>
    </div>
  );
}