import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext.jsx';

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
