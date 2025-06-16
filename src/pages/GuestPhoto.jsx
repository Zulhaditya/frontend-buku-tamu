import { useState, useRef, useEffect } from "react";
import { CameraIcon, RetryIcon, CheckIcon } from "../components/Icons";

const GuestPhoto = ({ guestData, onComplete, onBack }) => {
  const [photo, setPhoto] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  // Memulai kamera
  const startCamera = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      setIsCameraActive(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError(
        "Tidak dapat mengakses kamera. Pastikan Anda memberikan izin akses kamera."
      );
      setIsCameraActive(false);
    }
  };

  // Menghentikan kamera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      setIsCameraActive(false);
    }
  };

  // Mengambil foto
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Atur ukuran canvas sesuai video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Gambar frame video ke canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Dapatkan foto sebagai data URL
    const photoDataUrl = canvas.toDataURL("image/jpeg");
    setPhoto(photoDataUrl);

    // Hentikan kamera setelah mengambil foto
    stopCamera();
  };

  // Mengulang pengambilan foto
  const retakePhoto = () => {
    setPhoto(null);
    startCamera();
  };

  // Membersihkan saat komponen unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // Menyelesaikan proses
  const handleComplete = () => {
    onComplete(photo);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">
            Pengambilan Foto Tamu
          </h1>
          <p className="text-blue-100">Diskominfo Kabupaten Lingga</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Data Tamu
            </h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="font-medium">{guestData.name}</p>
              <p className="text-gray-600">{guestData.institution}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Ambil Foto
            </h2>

            {error && (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p>{error}</p>
              </div>
            )}

            {/* Area Kamera/Foto */}
            <div
              className="relative bg-gray-200 rounded-md overflow-hidden mb-4"
              style={{ height: "400px" }}
            >
              {!photo ? (
                <>
                  {isCameraActive ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500">
                      <CameraIcon className="w-16 h-16 mb-4" />
                      <p>Kamera tidak aktif</p>
                    </div>
                  )}
                </>
              ) : (
                <img
                  src={photo}
                  alt="Foto tamu"
                  className="w-full h-full object-cover"
                />
              )}

              <canvas ref={canvasRef} className="hidden" />
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-3 justify-center">
              {!photo ? (
                <>
                  {!isCameraActive ? (
                    <button
                      type="button"
                      onClick={startCamera}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      <CameraIcon className="w-5 h-5 mr-2" />
                      Aktifkan Kamera
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={capturePhoto}
                      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Ambil Foto
                    </button>
                  )}
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={retakePhoto}
                    className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                  >
                    <RetryIcon className="w-5 h-5 mr-2" />
                    Ambil Ulang
                  </button>
                  <button
                    type="button"
                    onClick={handleComplete}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    <CheckIcon className="w-5 h-5 mr-2" />
                    Gunakan Foto Ini
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={onBack}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
              >
                Kembali ke Form
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 py-4 px-6 bg-gray-50">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Diskominfo Kabupaten Lingga. Foto akan
            digunakan untuk keperluan administrasi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuestPhoto;
