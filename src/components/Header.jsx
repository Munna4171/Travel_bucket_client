import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Placeholder avatar URL
const DEFAULT_AVATAR = 'https://placehold.co/30x30/4f46e5/ffffff?text=U'; 

export default function Header() {
  // Get the currentUser object from the Redux store
  const { currentUser } = useSelector((state) => state.user); 
  
  // --- THIS IS THE FIX ---
  // If the user is logged in, the "Home" link should go to /dashboard.
  // Otherwise, it should go to the landing page (/).
  const homeLinkPath = currentUser ? '/dashboard' : '/';
  // ---------------------

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo / Home Link - UPDATED to use homeLinkPath */}
        <Link to={homeLinkPath} className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition">
          TravelBucket
        </Link>
        
        <nav>
          <ul className="flex items-center space-x-6">
            
            {/* Home Link - UPDATED to use homeLinkPath */}
            <li>
              <Link 
                to={homeLinkPath} 
                className="text-gray-700 hover:text-indigo-500 font-semibold transition pb-1 border-b-2 border-transparent hover:border-indigo-500"
              >
                Home
              </Link>
            </li>
            
            {/* About Link */}
            <li>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-indigo-500 font-semibold transition pb-1 border-b-2 border-transparent hover:border-indigo-500"
              >
                About
              </Link>
            </li>
            
            {/* Profile / Sign In Link (This logic is already correct) */}
            <li>
              {currentUser ? (
                <Link to="/profile">
                  <img 
                    className='rounded-full h-8 w-8 object-cover border-2 border-indigo-500 shadow-md transition-transform duration-200 hover:scale-110'
                    src={currentUser.avatar || DEFAULT_AVATAR} 
                    alt='profile'
                  />
                </Link>
              ) : (
                <Link to="/signin"> 
                  <button 
                    className="bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg"
                  >
                    Sign In
                  </button>
                </Link>
              )}
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}