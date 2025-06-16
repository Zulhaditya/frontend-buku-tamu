import { Routes, Route } from "react-router";
import GuestForm from "./pages/GuestForm";
import GuestPhoto from "./pages/GuestPhoto";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form-tamu" element={<GuestForm />} />
        <Route path="/foto-tamu" element={<GuestPhoto />} />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}
