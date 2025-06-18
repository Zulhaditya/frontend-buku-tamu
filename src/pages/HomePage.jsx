import {
  BookOpen,
  Users,
  MapPin,
  Mail,
  Calendar,
  User,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router";

export default function DiskominfoBukuTamu() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-8">
          <nav className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">DISKOMINFO</h1>
                <p className="text-sm opacity-90">Kabupaten Lingga</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-white">
              <a href="#home" className="hover:text-blue-200 transition-colors">
                Beranda
              </a>
              <a
                href="#tentang"
                className="hover:text-blue-200 transition-colors"
              >
                Tentang
              </a>
              <a
                href="#kontak"
                className="hover:text-blue-200 transition-colors"
              >
                Kontak
              </a>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="text-center text-white transform transition-all duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Selamat Datang di
              <span className="block text-yellow-300 mt-2">
                Buku Tamu Digital
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Dinas Komunikasi dan Informatika Kabupaten Lingga
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                to="/guest/form"
              >
                <User className="w-5 h-5 inline mr-2" />
                Isi Buku Tamu
              </Link>
              <a
                target="_blank"
                href="https://linggakab.go.id/"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                <Users className="w-5 h-5 inline mr-2" />
                Website Kabupaten Lingga
              </a>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-300 opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white opacity-5 rounded-full animate-ping"></div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                number: "1,247",
                label: "Total Pengunjung",
                color: "text-blue-600",
              },
              {
                icon: Calendar,
                number: "365",
                label: "Hari Beroperasi",
                color: "text-green-600",
              },
              {
                icon: MessageSquare,
                number: "892",
                label: "Feedback Positif",
                color: "text-purple-600",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${"animate-pulse"}`}
              >
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="tentang"
        className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Tentang Diskominfo Kabupaten Lingga
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dinas Komunikasi dan Informatika Kabupaten Lingga berkomitmen
              untuk memberikan pelayanan terbaik dalam bidang teknologi
              informasi dan komunikasi. Buku tamu digital ini merupakan wujud
              inovasi dalam memberikan kemudahan bagi masyarakat untuk
              berinteraksi dengan kami.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">
                  Pelayanan Digital
                </h3>
                <p className="text-gray-600">
                  Transformasi digital untuk pelayanan publik yang lebih efisien
                  dan modern.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">
                  Komunikasi Terbuka
                </h3>
                <p className="text-gray-600">
                  Memfasilitasi komunikasi dua arah antara pemerintah dan
                  masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Hubungi Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Istana Kota Baru, Kelurahan Daik, Kecamatan Lingga,
                  Kabupaten Lingga, Provinsi Kepulauan Riau, Kode Pos 29872
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">diskominfo@linggakab.go.id</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Diskominfo Kabupaten Lingga.</p>
        </div>
      </footer>
    </div>
  );
}
