import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // <-- 1. IMPORT useDispatch
import { signInSuccess } from '../redux/user/userSlice'; // <-- 2. IMPORT YOUR ACTION (Check this path!)

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // <-- 3. INITIALIZE useDispatch

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success === false) {
        setError(data.message || 'Sign in failed due to server error.');
        return;
      }
      
      // This is good, but not enough
      localStorage.setItem('user_auth', JSON.stringify(data.user)); 
      
      // --- THIS IS THE FIX ---
      // 4. Dispatch the user data to the Redux store
      dispatch(signInSuccess(data.user));
      // -------------------------
      
      // 5. Navigate to the dashboard
      navigate('/dashboard'); 

    } catch (apiError) {
      setLoading(false);
      setError(apiError.message || 'Could not connect to the server. Check your network and proxy.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full">
        {/* Decorative Side Image */}
        <div className="hidden md:block md:w-1/2">
          <img 
            src="https://placehold.co/1000x800/2962ff/ffffff?text=Welcome+Back%21" 
            alt="Scenic view" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Sign In Form */}
        <div className="w-full md:w-1/2 p-10 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Welcome Back!</h2>
          <p className="text-center text-gray-600">Sign in to continue your journey.</p>
          
          <form onSubmit={handleSignIn} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            
            <button
              disabled={loading}
              className="w-full bg-indigo-600 text-white font-bold p-3 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400 transition shadow-md"
            >
              {loading ? 'Processing...' : 'Sign In'}
            </button>
          </form>

          {error && <p className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center text-sm">{error}</p>}
          
          <div className="text-center text-sm">
            Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}