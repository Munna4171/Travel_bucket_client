import React from 'react';
import { useParams } from 'react-router-dom';

export default function PackageDetail() {
  const { packageId } = useParams();

  // Mock package details based on ID
  const packageData = {
    id: packageId,
    name: packageId == 1 ? 'Tokyo Metropolis' : (packageId == 2 ? 'Alps Hiking Adventure' : (packageId == 3 ? 'Caribbean Beach Escape' : 'Unknown Package')),
    description: `This is a detailed description for Package #${packageId}, covering the best sights, activities, and accommodations. Book now for an unforgettable experience!`,
    details: [
        `Accommodation in a 4-star hotel.`,
        `Daily breakfast and two gourmet dinners.`,
        `Guided tours of all major landmarks.`,
        `All transportation within the destination.`
    ],
    price: packageId == 1 ? 1500 : (packageId == 2 ? 2800 : (packageId == 3 ? 1200 : 'N/A')),
    image: packageId == 1 ? 'https://placehold.co/800x400/334155/ffffff?text=Tokyo+Detail' : (packageId == 2 ? 'https://placehold.co/800x400/065f46/ffffff?text=Alps+Detail' : (packageId == 3 ? 'https://placehold.co/800x400/ca8a04/ffffff?text=Beach+Detail' : 'https://placehold.co/800x400/94a3b8/ffffff?text=Detail')),
  };

  return (
    <div className='p-6 max-w-6xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6 text-slate-800 text-center'>
        {packageData.name}
      </h1>

      <div className='bg-white shadow-xl rounded-xl overflow-hidden'>
        <img 
          src={packageData.image} 
          alt={packageData.name} 
          className='w-full h-96 object-cover' 
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/94a3b8/ffffff?text=Image+Missing"; }}
        />
        
        <div className='p-8'>
          <p className='text-xl font-semibold text-indigo-600 mb-4'>
            Price: ${packageData.price.toLocaleString()}
          </p>
          
          <p className='text-gray-700 mb-6 leading-relaxed'>
            {packageData.description}
          </p>
          
          <h2 className='text-2xl font-semibold mb-3 text-slate-700 border-b pb-2'>
            What's Included
          </h2>
          <ul className='list-disc list-inside space-y-2 text-gray-600 ml-4'>
            {packageData.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          <button className='mt-8 w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-150 shadow-md'>
            Book This Package
          </button>
        </div>
      </div>
      <a href='/packages' className='mt-6 block text-center text-blue-500 hover:text-blue-700 hover:underline'>
        ← Back to all packages
      </a>
    </div>
  );
}
