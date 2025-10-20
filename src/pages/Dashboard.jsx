import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Map, Camera, Target, BarChart2, Plus } from 'lucide-react'; // Icon imports

export default function Dashboard() {
  // Get the current user to personalize the welcome message
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50/50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- NEW: Personalized Welcome Header --- */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            Hey, {currentUser?.username || 'Explorer'}!
          </h1>
          <p className="text-lg text-gray-500 mt-1">Ready for your next adventure? Let's get planning.</p>
        </div>

        {/* --- NEW: Restyled Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Travel Goals */}
          <Link to="/travel-goals" className="group">
            <div className="relative p-6 h-full flex flex-col justify-between bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg text-white overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute top-0 right-0 -mr-8 -mt-8">
                <Target size={120} className="text-white/20 opacity-50 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold">Travel Goals</h3>
                <p className="mt-1 opacity-80">Your dream destinations await.</p>
              </div>
              <div className="relative mt-4 flex items-center justify-center w-12 h-12 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                <Plus size={24} />
              </div>
            </div>
          </Link>

          {/* Card 2: Photo Gallery */}
          <Link to="/photo-gallery" className="group">
            <div className="relative p-6 h-full flex flex-col justify-between bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl shadow-lg text-white overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
               <div className="absolute top-0 right-0 -mr-8 -mt-8">
                <Camera size={120} className="text-white/20 opacity-50 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold">Photo Gallery</h3>
                <p className="mt-1 opacity-80">Relive your best memories.</p>
              </div>
              <div className="relative mt-4 flex items-center justify-center w-12 h-12 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                <Plus size={24} />
              </div>
            </div>
          </Link>

          {/* Card 3: Trip Statistics */}
          <Link to="/statistics" className="group">
            <div className="relative p-6 h-full flex flex-col justify-between bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-lg text-white overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
               <div className="absolute top-0 right-0 -mr-8 -mt-8">
                <BarChart2 size={120} className="text-white/20 opacity-50 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold">Trip Statistics</h3>
                <p className="mt-1 opacity-80">Track your journey's progress.</p>
              </div>
               <div className="relative mt-4">
                 {/* This could be dynamic data */}
                <span className="text-3xl font-bold">3</span>
                <span className="ml-2 opacity-80">Countries Visited</span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
