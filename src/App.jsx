import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component Imports
import Header from './components/Header.jsx';
import PrivateRoute from './components/PrivateRoute.jsx'; 
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx'; 
import Profile from './pages/Profile.jsx'; 
import TravelGoals from './pages/TravelGoals.jsx';
import PhotoGallery from './pages/PhotoGallery.jsx'; 
import Statistics from './pages/Statistics.jsx';
// --- 1. IMPORT THE NEW TRIP PLANNER PAGE ---
// Note: You will need to create this file next.
import TripPlanner from './pages/TripPlanner.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        
        {/* We keep the path the same, but point it to the new component */}
        <Route path='/dashboard' element={<AdminDashboard />} />
        
        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/travel-goals' element={<TravelGoals />} />
          <Route path='/photo-gallery' element={<PhotoGallery />} />
          <Route path='/statistics' element={<Statistics />} />
          {/* --- 2. ADD THE NEW ROUTE FOR TRIP PLANNER --- */}
          <Route path='/trip-planner' element={<TripPlanner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

