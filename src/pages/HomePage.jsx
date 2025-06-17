import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Animasi varians
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-10"
        />

        {/* Floating Circles Animation */}
        {isMounted && (
          <>
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                transition: { duration: 15, repeat: Infinity, ease: "linear" },
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 70, 0],
                transition: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="absolute top-3/4 right-1/3 w-48 h-48 rounded-full bg-blue-300 opacity-20 blur-xl"
            />
          </>
        )}

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              <span className="block">Selamat Datang di</span>
              <span className="block text-blue-600">Diskominfo Lingga</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Sistem Buku Tamu Digital Pemerintah Kabupaten Lingga
            </motion.p>

            <motion.div variants={item} className="mt-10">
              <button
                onClick={() => navigate(ROUTES.GUEST_FORM)}
                className="relative px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Isi Buku Tamu</span>
                <motion.span
                  className="absolute inset-0 bg-blue-700 rounded-lg opacity-0"
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Layanan Kami</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai fasilitas dan layanan tersedia untuk kenyamanan Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Pendaftaran Digital",
                description:
                  "Proses pendaftaran tamu secara elektronik yang cepat dan efisien",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Foto Otomatis",
                description:
                  "Pengambilan foto tamu secara otomatis dengan teknologi terkini",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Keamanan Data",
                description:
                  "Data tamu tersimpan aman dengan sistem enkripsi modern",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "10.000+", label: "Tamu Terdaftar" },
              { value: "24/7", label: "Layanan" },
              { value: "99%", label: "Kepuasan Tamu" },
              { value: "100%", label: "Keamanan Data" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6"
              >
                <motion.p
                  className="text-4xl font-bold"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-2 text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white">
              Siap Mengunjungi Kami?
            </h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Daftarkan diri Anda sekarang untuk pengalaman yang lebih baik
            </p>
            <motion.button
              onClick={() => navigate(ROUTES.GUEST_FORM)}
              className="mt-8 px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mulai Sekarang
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold">Diskominfo Lingga</h3>
              <p className="mt-4 text-gray-400">
                Jl. Raja H. Fisabilillah No.1, Daik, Kabupaten Lingga, Kepulauan
                Riau
              </p>
            </motion.div>

            {[
              {
                title: "Tautan Cepat",
                links: ["Beranda", "Buku Tamu", "Profil", "Kontak"],
              },
              {
                title: "Layanan",
                links: ["Pendaftaran", "Informasi", "Bantuan", "FAQ"],
              },
              {
                title: "Kontak",
                links: [
                  "(0771) 12345",
                  "info@diskominfo-lingga.go.id",
                  "Facebook",
                  "Twitter",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          >
            <p>
              © {new Date().getFullYear()} Dinas Komunikasi dan Informatika
              Kabupaten Lingga. Seluruh hak cipta dilindungi.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
