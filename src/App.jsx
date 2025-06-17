import { Routes, Route } from "react-router";
import GuestForm from "./pages/guest/GuestForm";
import GuestPhoto from "./pages/guest/GuestPhoto";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
import GuestData from "./pages/admin/GuestData";
import AdminLoginPage from "./pages/admin/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guest/form" element={<GuestForm />} />
        <Route path="/guest/foto" element={<GuestPhoto />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/data-tamu" element={<GuestData />} />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}
