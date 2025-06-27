import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Eye,
  EyeOff,
  Lock,
  Calendar,
  Shield,
  AlertCircle,
  CheckCircle,
  Building,
  Mail,
  Smartphone,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem('rememberMe') === 'true'
  );
  const { login, rememberMe: contextRememberMe } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validasi input
    if (!formData.email || !formData.password) {
      setError("Email dan password harus diisi");
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Format email tidak valid");
      setIsLoading(false);
      return;
    }

    try {
      const result = await login(formData.email, formData.password, rememberMe);

      if (result.success) {
        navigate("/admin/dashboard"); // Redirect ke dashboard setelah login berhasil
      } else {
        setError(result.message || "Email atau password salah");
      }
    } catch (err) {
      setError("Terjadi kesalahan sistem. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const currentTime = new Date().toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="w-full max-w-6xl flex bg-white rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex-col justify-between relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full opacity-20 transform -translate-x-24 translate-y-24"></div>

          <div className="relative z-10">
            {/* Logo & Header */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4">
                <Calendar className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h1 className="text-white font-bold text-2xl">DISKOMINFO</h1>
                <p className="text-blue-200 text-sm">
                  Sistem Buku Tamu Digital
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500 bg-opacity-30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Keamanan Terjamin
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Sistem login yang aman dengan enkripsi tingkat tinggi
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500 bg-opacity-30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Manajemen Terintegrasi
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Kelola semua data tamu dalam satu platform
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500 bg-opacity-30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Akses Multi-Device
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Akses dari desktop, tablet, atau smartphone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-gray-900 font-bold text-2xl">DISKOMINFO</h1>
              <p className="text-gray-600 text-sm">Sistem Buku Tamu Digital</p>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Selamat Datang
            </h2>
            <p className="text-gray-600">
              Masuk ke panel admin untuk mengelola sistem buku tamu
            </p>
            <div className="mt-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {currentTime}
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Admin
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="admin@diskominfo.go.id"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Masukkan password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Ingat saya
                </label>
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Memproses...
                </>
              ) : (
                "Masuk ke Dashboard"
              )}
            </button>
          </div>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-blue-900 mb-1">
                  Demo Credentials
                </h4>
                <p className="text-sm text-blue-700">
                  <strong>Email:</strong> admin@diskominfo.go.id
                  <br />
                  <strong>Password:</strong> admin123
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2023 Diskominfo. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
