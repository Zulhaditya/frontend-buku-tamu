import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

export default function FormTamu() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    noTelepon: "",
    instansi: "",
    email: "",
    pejabat: "",
    tujuan: "",
    foto: null,
  });

  const pejabatMapping = {
    "Kepala Dinas": 1,
    "Kabid E-Gov": 2,
    "Kabid IKP": 3,
    Sekretaris: 4,
    "Kabid TI": 5,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [status, setStatus] = useState("");

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Gagal mengakses kamera:", error);
        setError("Gagal mengakses kamera. Pastikan Anda memberikan izin.");
      }
    };

    getCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTakePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 320, 240);

    canvasRef.current.toBlob(
      (blob) => {
        const file = new File([blob], "foto-tamu.png", { type: "image/png" });
        setFormData((prev) => ({ ...prev, foto: file }));
        setPhotoTaken(true);
        setStatus("Foto berhasil diambil");
      },
      "image/png",
      0.9
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!formData.foto) {
        throw new Error("Harap ambil foto terlebih dahulu");
      }

      const formDataToSend = new FormData();
      formDataToSend.append("nama", formData.nama);
      formDataToSend.append("noTelepon", formData.noTelepon);
      formDataToSend.append("instansi", formData.instansi);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("tujuan", formData.tujuan);
      formDataToSend.append("pejabatId", pejabatMapping[formData.pejabat]);
      formDataToSend.append("foto", formData.foto);

      const response = await axios.post(
        "http://localhost:5000/guests",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Data berhasil dikirim:", response.data);
      // navigate("/success", { state: { data: response.data } });
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Gagal mengirim data"
      );
      console.error("Error mengirim data:", err);
    } finally {
      setIsLoading(false);
    }
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

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {status && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {status}
          </div>
        )}

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
              type="tel"
              name="noTelepon"
              value={formData.noTelepon}
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
              <option value="Kabid E-Gov">Kabid E-Gov</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold text-sm mb-1">Tujuan *</label>
            <textarea
              name="tujuan"
              value={formData.tujuan}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-center text-sm text-gray-600">
            Pastikan wajah terlihat jelas dalam kamera
          </h2>
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-auto object-cover"
              width="320"
              height="240"
            ></video>
            <canvas
              ref={canvasRef}
              width="320"
              height="240"
              className="hidden"
            ></canvas>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={handleTakePhoto}
            disabled={isLoading}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-400"
          >
            {photoTaken ? "Ambil Ulang Foto" : "Ambil Foto"}
          </button>

          <button
            type="submit"
            disabled={isLoading || !photoTaken}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
          >
            {isLoading ? "Mengirim..." : "Kirim Data"}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 pt-4">
          © 2025 Dinas Komunikasi dan Informatika
        </p>
      </form>
    </div>
  );
}
