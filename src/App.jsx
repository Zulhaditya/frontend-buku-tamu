import { Routes, Route } from "react-router";
import GuestForm from "./pages/guest/GuestForm";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
import GuestData from "./pages/admin/GuestData";
import AdminLoginPage from "./pages/admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Statistik from "./pages/admin/Statistik";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<AdminLoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/data-tamu" element={<GuestData />} />
          <Route path="/admin/statistik" element={<Statistik />} />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/guest/form" element={<GuestForm />} />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}
