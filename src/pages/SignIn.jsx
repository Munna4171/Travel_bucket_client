import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

// --- THIS IS THE FIX ---
// 1. Get the backend URL from the environment variable.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 2. Use the full API_URL in your fetch request.
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success === false) {
        setError(data.message || 'Sign in failed.');
        return;
      }
      
      dispatch(signInSuccess(data.user));
      navigate('/dashboard'); 

    } catch (apiError) {
      setLoading(false);
      setError(apiError.message || 'Could not connect to the server.');
    }
  };

  // ... (rest of your return JSX is fine)
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
