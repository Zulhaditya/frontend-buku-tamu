import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext.jsx';

const ProtectedRoute = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect ke halaman login dengan menyimpan lokasi sebelumnya
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // if (!user) {
  //   return <Navigate to="/admin/login" replace />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;
