import React, { useState } from 'react';

// --- Mock Data and Functions for Compilation Stability ---

// Mocking currentUser and loading state
const mockCurrentUser = {
    username: 'AdminUser',
    email: 'admin@example.com',
    // Add other necessary properties like avatar, id, etc.
};

const mockLoading = false;

// Mock the dispatch function
const mockDispatch = (action) => {
    console.log(`Mock Dispatch called with action type: ${action.type}`);
    // In a real app, this would trigger your Redux store logic
};

// --- Mock Components for immediate testing ---

const AdminUpdateProfile = () => {
    return (
        <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
            <h3 className='text-2xl font-bold mb-4 text-indigo-700'>Admin Profile Settings</h3>
            <p className='text-gray-700'>
                <span className='font-semibold'>Username:</span> {mockCurrentUser.username}
            </p>
            <p className='text-gray-700'>
                <span className='font-semibold'>Email:</span> {mockCurrentUser.email}
            </p>
            <div className='mt-4 p-3 bg-yellow-50 text-yellow-800 border-l-4 border-yellow-500 rounded'>
                **Placeholder:** Profile update forms will be placed here.
            </div>
        </div>
    );
};

const AllBookings = () => (
    <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
        <h3 className='text-2xl font-bold mb-4 text-green-700'>System-wide Bookings</h3>
        <p className='text-gray-700'>A table of all bookings across all users will be displayed here.</p>
        <p className='text-gray-500 mt-2'>Current list is a placeholder to ensure the app loads correctly.</p>
    </div>
);

// --- Admin Dashboard Main Component ---

export default function AdminDashboard() {
  
  // Use local mock data instead of Redux hooks for guaranteed compilation
  const currentUser = mockCurrentUser;
  const loading = mockLoading;
  const dispatch = mockDispatch; // Use mock dispatch

  const [activeTab, setActiveTab] = useState('profile');

  // Use a simple mock function for logout
  const handleLogout = () => {
    dispatch({ type: 'user/logOutStart' }); 
    alert("Logout mocked successfully. Check the console for the mock dispatch message.");
  }

  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-gray-50'>
      {/* Sidebar Navigation */}
      <div className='w-full md:w-64 bg-gray-800 p-4 text-white shadow-xl'>
        <h2 className='text-2xl font-extrabold mb-8 border-b border-gray-700 pb-4 text-indigo-300'>Admin Panel</h2>
        <div className='space-y-4'>
            <div className='text-sm text-gray-400 border-b border-gray-700 pb-3'>
                Logged in as: <span className='font-semibold block'>{currentUser.username || 'Loading...'}</span>
            </div>
            
            <ul className='space-y-2'>
              <li 
                className={`cursor-pointer p-3 rounded-lg transition duration-200 flex items-center gap-2 ${activeTab === 'profile' ? 'bg-indigo-600 font-bold' : 'hover:bg-gray-700'}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile Settings
              </li>
              <li 
                className={`cursor-pointer p-3 rounded-lg transition duration-200 flex items-center gap-2 ${activeTab === 'bookings' ? 'bg-indigo-600 font-bold' : 'hover:bg-gray-700'}`}
                onClick={() => setActiveTab('bookings')}
              >
                All Bookings
              </li>
              <li 
                className={`cursor-pointer p-3 rounded-lg transition duration-200 flex items-center gap-2 ${activeTab === 'packages' ? 'bg-indigo-600 font-bold' : 'hover:bg-gray-700'}`}
                onClick={() => setActiveTab('packages')}
              >
                Manage Packages
              </li>
              
              <li 
                className='cursor-pointer p-3 rounded-lg hover:bg-red-700 transition duration-200 mt-6 text-red-400 font-medium border-t border-gray-700 pt-4'
                onClick={handleLogout}
              >
                {loading ? 'Logging Out...' : 'Logout'}
              </li>
            </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className='flex-1 p-6 sm:p-10'>
        <h1 className='text-4xl font-extrabold mb-10 text-gray-800 capitalize border-b pb-4'>
            {activeTab} Management
        </h1>
        
        {/* Conditional Rendering of Components */}
        {activeTab === 'profile' && <AdminUpdateProfile />}
        {activeTab === 'bookings' && <AllBookings />}
        {activeTab === 'packages' && (
          <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
             <h3 className='text-2xl font-bold mb-4 text-red-700'>Package Management</h3>
             <p className='text-gray-700'>Here you can add new packages, edit existing ones, or approve submissions from other users (content moderation).</p>
             <div className='mt-4 p-3 bg-blue-50 text-blue-800 border-l-4 border-blue-500 rounded'>
                Feature to be implemented: CRUD operations for travel packages.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
