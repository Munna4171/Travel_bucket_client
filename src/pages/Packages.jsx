import React from 'react';

export default function Packages() {
  // Mock data for demonstration
  const mockPackages = [
    { id: 1, name: 'Tokyo Metropolis', duration: '5 Days / 4 Nights', price: 1500, image: 'https://placehold.co/400x250/334155/ffffff?text=Tokyo' },
    { id: 2, name: 'Alps Hiking Adventure', duration: '7 Days / 6 Nights', price: 2800, image: 'https://placehold.co/400x250/065f46/ffffff?text=Alps' },
    { id: 3, name: 'Caribbean Beach Escape', duration: '4 Days / 3 Nights', price: 1200, image: 'https://placehold.co/400x250/ca8a04/ffffff?text=Beach' },
  ];

  return (
    <div className='p-6 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-extrabold text-center my-8 text-slate-700'>
        Explore Our Travel Packages
      </h1>
      
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {mockPackages.map((pkg) => (
          <div key={pkg.id} className='bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1'>
            <img 
              src={pkg.image} 
              alt={pkg.name} 
              className='w-full h-48 object-cover'
              // Fallback image in case the placeholder URL fails
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/94a3b8/ffffff?text=Image+Missing"; }}
            />
            <div className='p-5'>
              <h2 className='text-2xl font-semibold mb-2 text-slate-800'>{pkg.name}</h2>
              <p className='text-slate-600 mb-1'>
                <span className='font-medium'>Duration:</span> {pkg.duration}
              </p>
              <p className='text-xl font-bold text-indigo-600 mb-4'>
                ${pkg.price.toLocaleString()}
              </p>
              <a href={`/package/${pkg.id}`} className='w-full block text-center bg-indigo-500 text-white font-bold py-2 rounded-lg hover:bg-indigo-600 transition duration-150'>
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
