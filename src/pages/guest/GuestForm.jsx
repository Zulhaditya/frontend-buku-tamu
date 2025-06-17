import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function FormTamu() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    instansi: "",
    email: "",
    alamat: "",
    pejabat: "",
    keperluan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan data ke localStorage sementara sebelum pindah halaman
    localStorage.setItem("tamuData", JSON.stringify(formData));
    console.log(formData);
    navigate("/guest/foto");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-10 space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-700">Buku Tamu</h2>
          <p className="text-sm text-gray-600">
            Dinas Komunikasi dan Informatika Kabupaten Lingga
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-sm mb-1">
              Nama Lengkap *
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold text-sm mb-1">
              Nomor Telepon *
            </label>
            <input
              type="text"
              name="telepon"
              value={formData.telepon}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold text-sm mb-1">
              Asal / Instansi *
            </label>
            <input
              type="text"
              name="instansi"
              value={formData.instansi}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold text-sm mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold text-sm mb-1">
              Pejabat yang Ingin Ditemui *
            </label>
            <select
              name="pejabat"
              value={formData.pejabat}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Pilih Pejabat --</option>
              <option value="Kepala Dinas">Kepala Dinas</option>
              <option value="Sekretaris">Sekretaris</option>
              <option value="Kabid TI">Kabid TI</option>
              <option value="Kabid IKP">Kabid IKP</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold text-sm mb-1">
              Keperluan *
            </label>
            <textarea
              name="keperluan"
              value={formData.keperluan}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Kirim Data
        </button>

        <p className="text-center text-xs text-gray-400 pt-4">
          © 2025 Dinas Komunikasi dan Informatika
        </p>
      </form>
    </div>
  );
}
