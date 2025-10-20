import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">About TravelBucket</h1>
        <div className="max-w-3xl mx-auto text-gray-700 space-y-6">
          <p>
            TravelBucket was born from a simple idea: to make travel planning as enjoyable as the journey itself. We believe that every trip, whether it's a weekend getaway or a month-long expedition, deserves a beautiful and organized space.
          </p>
          <p>
            Our platform allows you to create bucket lists, plan detailed itineraries, and store your precious memories all in one place. Join our community of explorers and start turning your travel dreams into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

