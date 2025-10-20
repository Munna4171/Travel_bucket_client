import React from 'react';
// --- THIS IS THE FIX ---
// You were missing 'BrowserRouter' from this import line.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component Imports
import Header from './components/Header.jsx';
import PrivateRoute from './components/PrivateRoute.jsx'; 
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx'; 
import TravelGoals from './pages/TravelGoals.jsx';
import PhotoGallery from './pages/PhotoGallery.jsx';
import Statistics from './pages/Statistics.jsx';

export default function App() {
  return (
    <BrowserRouter>
      {/* The Header appears on all pages */}
      <Header />
      
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        
        {/* Routes that need a logged-in user */}
        {/* The PrivateRoute component protects all the routes nested inside it */}
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/travel-goals' element={<TravelGoals />} />
          <Route path='/photo-gallery' element={<PhotoGallery />} />
          <Route path='/statistics' element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
