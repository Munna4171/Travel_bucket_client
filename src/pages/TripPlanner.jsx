import React from 'react';
import { ClipboardList, Wrench } from 'lucide-react'; // Using icons for a better look

export default function TripPlanner() {
  return (
    <div className="p-8 max-w-4xl mx-auto min-h-[calc(100vh-60px)]">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-amber-600 mb-4">
          Trip Planner
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Organize your itineraries, budgets, and packing lists all in one place.
        </p>
      </div>

      {/* Placeholder for the main feature */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
        <div className="p-4 bg-amber-100 rounded-full mb-6">
          <Wrench size={40} className="text-amber-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Feature Under Construction
        </h2>
        <p className="text-gray-500 max-w-md">
          We're busy building this amazing feature for you. Check back soon to start planning your next journey in detail!
        </p>
      </div>
    </div>
  );
}
