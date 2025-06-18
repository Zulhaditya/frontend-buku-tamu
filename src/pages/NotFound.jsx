import React, { useState, useEffect } from "react";
import { Home, ArrowLeft, Search, BookOpen, MapPin } from "lucide-react";

export default function NotFoundPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate floating elements for animation
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: i * 0.5,
      size: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setFloatingElements(elements);
  }, []);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Floating background elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-10 bg-blue-300 rounded-full animate-pulse"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: "3s",
          }}
        />
      ))}

      {/* Header */}
      <header className="relative z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">DISKOMINFO</h1>
              <p className="text-sm text-gray-600">Kabupaten Lingga</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div
          className={`text-center max-w-2xl mx-auto transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-none">
              404
            </h1>
            <div className="relative -mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 blur-xl opacity-30 rounded-full"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Maaf, halaman yang Anda cari tidak dapat ditemukan atau mungkin
              telah dipindahkan.
            </p>
          </div>

          {/* Illustration */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center shadow-lg">
                <Search className="w-16 h-16 text-blue-500 animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </button>

            <button
              onClick={handleGoBack}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Halaman Sebelumnya
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Atau kunjungi halaman lainnya:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/"
                className="text-blue-600 hover:text-blue-800 transition-colors underline"
              >
                Beranda
              </a>
              <a
                href="/buku-tamu"
                className="text-blue-600 hover:text-blue-800 transition-colors underline"
              >
                Buku Tamu
              </a>
              <a
                href="/kontak"
                className="text-blue-600 hover:text-blue-800 transition-colors underline"
              >
                Kontak
              </a>
              <a
                href="/tentang"
                className="text-blue-600 hover:text-blue-800 transition-colors underline"
              >
                Tentang Kami
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <MapPin className="w-4 h-4" />
              <span>Diskominfo Kabupaten Lingga</span>
            </div>
            <div>
              <span>&copy; 2024 Semua hak dilindungi.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-indigo-200 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
