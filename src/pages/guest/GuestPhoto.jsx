import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

export default function FotoTamu() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [photoTaken, setPhotoTaken] = useState(false);

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (error) {
        console.error("Gagal mengakses kamera:", error);
      }
    };

    getCamera();
  }, []);

  const handleTakePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 320, 240);

    const imageDataUrl = canvasRef.current.toDataURL("image/png");
    const tamuData = JSON.parse(localStorage.getItem("tamuData")) || {};
    const combinedData = { ...tamuData, foto: imageDataUrl };
    localStorage.setItem("tamuData", JSON.stringify(combinedData));

    setPhotoTaken(true);
    setStatus("Menunggu konfirmasi...");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-12">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 md:p-10 text-center space-y-6">
        <h2 className="text-3xl font-bold text-blue-700">Ambil Foto Tamu</h2>
        <p className="text-sm text-gray-600">
          Pastikan wajah terlihat jelas dalam kamera
        </p>

        <div className="rounded-lg overflow-hidden border border-gray-300">
          <video
            ref={videoRef}
            autoPlay
            playsInline
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

        <button
          onClick={handleTakePhoto}
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Ambil Foto
        </button>

        {photoTaken && (
          <div className="text-blue-600 font-medium text-sm">
            Status: {status}
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Kembali ke Halaman Awal
        </button>

        <p className="text-center text-xs text-gray-400 pt-4">
          © 2023 Dinas Komunikasi dan Informatika. Semua hak dilindungi.
        </p>
      </div>
    </div>
  );
}
