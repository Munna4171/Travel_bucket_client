import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Basic client-side validation
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    try {
      // --- MOCK API CALL START ---
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setLoading(false);

      // --- CRITICAL FIX: Safely parse JSON or handle non-JSON response ---
      let data = {};
      try {
          data = await res.json();
      } catch (e) {
          // If the response body is empty or not JSON (e.g., a server crash page), 
          // we handle it here by setting a generic error and returning.
          // The status text is used as a fallback error message.
          if (!res.ok) {
              setError(res.statusText || 'Server error occurred. Could not parse response.');
              return;
          }
          // If the status is OK but the body is empty (unexpected success), treat it as success.
          data.success = true; 
      }
      // --- END CRITICAL FIX ---


      if (data.success === false) {
        // Handle server-side errors (e.g., email already in use)
        setError(data.message || 'Sign up failed due to an unknown server error.');
        return;
      }
      
      // Success: Redirect directly to the Dashboard as requested
      // The user experience is: Sign Up -> Success -> Dashboard
      navigate('/dashboard');

    } catch (apiError) {
      setLoading(false);
      // Handle network or parsing errors
      setError(apiError.message || 'Could not connect to the server. Please check your network.');
      console.error('API Sign Up Error:', apiError);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
         style={{backgroundImage: "url(https://placehold.co/1920x1080/4f46e5/ffffff?text=Travel+Dreamscape)"}}>
      <div className="p-8 max-w-lg w-full bg-white bg-opacity-95 rounded-xl shadow-2xl backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">Create Account</h1>

        <form onSubmit={handleSignUp} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Username"
            className="border p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out shadow-sm"
            id="username"
            onChange={handleChange}
            required
            aria-label="Username"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out shadow-sm"
            id="email"
            onChange={handleChange}
            required
            aria-label="Email"
          />
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            className="border p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out shadow-sm"
            id="password"
            onChange={handleChange}
            required
            aria-label="Password"
          />

          <button
            disabled={loading}
            className="bg-indigo-600 text-white p-3 rounded-lg uppercase hover:bg-indigo-700 disabled:opacity-80 transition duration-150 ease-in-out font-semibold shadow-md"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <div className="flex justify-center gap-2 mt-5 text-sm">
          <p className="text-gray-600">Have an account?</p>
          <Link to="/signin" className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-150 ease-in-out">
            Sign In
          </Link>
        </div>

        {/* Custom Error/Message Box */}
        {error && (
          <div className="mt-5 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
