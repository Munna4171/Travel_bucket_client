import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function AdminRoute() {
  const { currentUser } = useSelector((state) => state.user);
  
  // This route is only accessible if the user is logged in AND has isAdmin set to true.
  // If not admin, they are redirected to the home page.
  return currentUser && currentUser.isAdmin ? <Outlet /> : <Navigate to='/' />;
}
