import React from 'react';

// --- MOCK DATA (We will replace this later) ---
// This is just placeholder data to build the page.
const stats = {
  totalTrips: 7,
  totalCountries: 3,
  totalPhotos: 58,
  goalsCompleted: 4,
};

const visitedCountries = [
  { id: 1, name: 'Japan', flag: '🇯🇵' },
  { id: 2, name: 'Italy', flag: '🇮🇹' },
  { id: 3, name: 'Thailand', flag: '🇹🇭' },
];
// --- END MOCK DATA ---

export default function Statistics() {
  return (
    <div className="p-8 max-w-2xl mx-auto min-h-[calc(100vh-60px)]">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-8 text-center">Your Travel Statistics</h1>

      {/* "At a Glance" Summary */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">At a Glance</h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li className="flex justify-between">
            <span>Total Trips Taken:</span>
            <span className="font-bold text-purple-600">{stats.totalTrips}</span>
          </li>
          <li className="flex justify-between">
            <span>Countries Visited:</span>
            <span className="font-bold text-purple-600">{stats.totalCountries}</span>
          </li>
          <li className="flex justify-between">
            <span>Photos Uploaded:</span>
            <span className="font-bold text-purple-600">{stats.totalPhotos}</span>
          </li>
          <li className="flex justify-between">
            <span>Travel Goals Completed:</span>
            <span className="font-bold text-purple-600">{stats.goalsCompleted}</span>
          </li>
        </ul>
      </div>

      {/* Visited Countries List */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Countries You've Visited</h2>
        <ul className="space-y-3">
          {visitedCountries.map((country) => (
            <li key={country.id} className="flex items-center text-lg text-gray-700 p-2 bg-gray-50 rounded-md">
              <span className="text-2xl mr-3">{country.flag}</span>
              {country.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}