import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  // 1. Get the user from the Redux store (this matches your other files)
  const { currentUser } = useSelector((state) => state.user);

  // 2. Check if the user is logged in
  // If true, render the <Outlet />, which becomes the <Profile /> page
  // If false, redirect them to the /signin page
  return currentUser ? <Outlet /> : <Navigate to='/signin' />;
}