import { useState } from "react";

const GuestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    purpose: "",
    needs: [],
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const needs = checked
          ? [...prev.needs, name]
          : prev.needs.filter((item) => item !== name);
        return { ...prev, needs };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    alert("Terima kasih! Data Anda telah tersimpan.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">Buku Tamu</h1>
          <p className="text-blue-100">Diskominfo Kabupaten Lingga</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Isi form berikut untuk keperluan administrasi
            </h2>

            {/* Nama */}
            <div className="mb-6">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* No. Hp */}
            <div className="mb-6">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Nomor HP
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Instansi */}
            <div className="mb-6">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="institution"
              >
                Asal / Instansi
              </label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Purpose */}
            <div className="mb-6">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="purpose"
              >
                Tujuan Kunjungan
              </label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Kebutuhan (Checkboxes) */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Kebutuhan
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Internet",
                  "Konsultasi TI",
                  "Pelatihan",
                  "Layanan Publik",
                  "Pendataan",
                  "Lainnya",
                ].map((need) => (
                  <div key={need} className="flex items-center">
                    <input
                      type="checkbox"
                      id={need}
                      name={need}
                      checked={formData.needs.includes(need)}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={need} className="ml-2 text-gray-700">
                      {need}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Diskominfo Kabupaten Lingga. All
                rights reserved.
              </p>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Simpan Data
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuestForm;
