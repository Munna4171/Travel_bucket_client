import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOutSuccess } from '../redux/user/userSlice'; // <-- Make sure to create this

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // This is the function that handles logging out
  const handleSignOut = () => {
    try {
      // 1. Dispatch the Redux action to clear the user from the store
      dispatch(signOutSuccess());
      
      // 2. Clear the user from localStorage (you set this in SignIn.jsx)
      localStorage.removeItem('user_auth');
      
      // 3. Navigate back to the sign-in page
      navigate('/signin');

    } catch (error) {
      console.error('Sign out failed', error);
      // You could dispatch a signOutFailure(error.message) here
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto min-h-[calc(100vh-60px)]">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      
      <form className="flex flex-col gap-4">
        {/* Profile Avatar */}
        <img
          src={currentUser.avatar || 'https://placehold.co/150x150/4f46e5/ffffff?text=U'}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover self-center mt-2 cursor-pointer shadow-lg"
        />

        {/* Email Input (read-only) */}
        <input
          type="email"
          id="email"
          placeholder="Email"
          defaultValue={currentUser.email}
          className="border p-3 rounded-lg bg-gray-100"
          readOnly
        />

        {/* Username Input (read-only) */}
        <input
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username || 'Traveler'}
          className="border p-3 rounded-lg bg-gray-100"
          readOnly
        />
        
        {/* We can add 'Update Profile' and 'Delete Account' buttons here later */}
      </form>

      {/* Sign Out Button */}
      <div className="flex justify-center mt-5">
        <span
          onClick={handleSignOut}
          className="text-red-600 cursor-pointer font-medium hover:underline"
        >
          Sign Out
        </span>
      </div>
    </div>
  );
}