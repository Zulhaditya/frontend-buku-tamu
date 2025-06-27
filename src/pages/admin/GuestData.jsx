import { useState, useMemo } from "react";
import Header from "../../components/Header";
import {
  Search,
  Download,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Phone,
  Building,
  User,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

const GuestData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua");
  const [dateFilter, setDateFilter] = useState("Semua");
  const [selectedGuests, setSelectedGuests] = useState([]);

  // Mock data - replace with actual API data
  const allGuests = [
    {
      id: 1,
      name: "Budi Santoso",
      phone: "0812-3456-7890",
      email: "budi.santoso@email.com",
      origin: "Dinas Pendidikan",
      official: "Kepala Dinas",
      date: "2023-11-12",
      time: "09:30",
      purpose:
        "Koordinasi program Smart City untuk pengembangan infrastruktur digital",
      status: "Selesai",
      statusColor: "bg-green-100 text-green-800",
      avatar: "BS",
      duration: "45 menit",
      notes: "Meeting berjalan lancar, tindak lanjut diperlukan",
    },
    {
      id: 2,
      name: "Rina Anggraini",
      phone: "0856-7890-1234",
      email: "rina.anggraini@ptmaju.com",
      origin: "PT Maju Teknologi",
      official: "Kabid Aplikasi Informatika",
      date: "2023-11-12",
      time: "10:15",
      purpose:
        "Presentasi solusi e-government dan sistem informasi terintegrasi",
      status: "Sedang Berlangsung",
      statusColor: "bg-yellow-100 text-yellow-800",
      avatar: "RA",
      duration: "-",
      notes: "Sedang dalam proses presentasi",
    },
    {
      id: 3,
      name: "Deni Hermawan",
      phone: "0821-2345-6789",
      email: "deni.hermawan@gmail.com",
      origin: "Masyarakat",
      official: "Sekretaris",
      date: "2023-11-12",
      time: "11:00",
      purpose: "Pengajuan permohonan informasi publik terkait anggaran daerah",
      status: "Menunggu",
      statusColor: "bg-blue-100 text-blue-800",
      avatar: "DH",
      duration: "-",
      notes: "Menunggu konfirmasi jadwal",
    },
    {
      id: 4,
      name: "Sari Wulandari",
      phone: "0813-9876-5432",
      email: "sari.wulan@univ.ac.id",
      origin: "Universitas Negeri",
      official: "Kepala Dinas",
      date: "2023-11-11",
      time: "14:30",
      purpose: "Kerjasama penelitian dan pengembangan teknologi informasi",
      status: "Selesai",
      statusColor: "bg-green-100 text-green-800",
      avatar: "SW",
      duration: "60 menit",
      notes: "MoU telah ditandatangani",
    },
    {
      id: 5,
      name: "Ahmad Wijaya",
      phone: "0822-1111-2222",
      email: "ahmad.wijaya@koperasi.com",
      origin: "Koperasi Sejahtera",
      official: "Sekretaris",
      date: "2023-11-11",
      time: "16:00",
      purpose: "Konsultasi pengembangan aplikasi manajemen koperasi",
      status: "Dibatalkan",
      statusColor: "bg-red-100 text-red-800",
      avatar: "AW",
      duration: "-",
      notes: "Dibatalkan karena kendala teknis",
    },
    {
      id: 6,
      name: "Maya Sari",
      phone: "0834-5555-6666",
      email: "maya.sari@startup.id",
      origin: "Tech Startup Indonesia",
      official: "Kabid Aplikasi Informatika",
      date: "2023-11-10",
      time: "10:00",
      purpose: "Demo aplikasi mobile untuk pelayanan publik",
      status: "Selesai",
      statusColor: "bg-green-100 text-green-800",
      avatar: "MS",
      duration: "90 menit",
      notes: "Demo berhasil, akan ada pilot project",
    },
    {
      id: 7,
      name: "Rudi Hartono",
      phone: "0845-7777-8888",
      email: "rudi.hartono@konsultan.com",
      origin: "Konsultan IT",
      official: "Kepala Dinas",
      date: "2023-11-10",
      time: "13:30",
      purpose: "Audit sistem keamanan informasi dan rekomendasi perbaikan",
      status: "Menunggu",
      statusColor: "bg-blue-100 text-blue-800",
      avatar: "RH",
      duration: "-",
      notes: "Menunggu jadwal reschedule",
    },
    {
      id: 8,
      name: "Linda Permata",
      phone: "0856-9999-0000",
      email: "linda.permata@media.com",
      origin: "Media Digital",
      official: "Sekretaris",
      date: "2023-11-09",
      time: "09:00",
      purpose: "Wawancara program digitalisasi pelayanan publik",
      status: "Selesai",
      statusColor: "bg-green-100 text-green-800",
      avatar: "LP",
      duration: "30 menit",
      notes: "Artikel akan dipublikasi minggu depan",
    },
  ];

  // Filter and search logic
  const filteredGuests = useMemo(() => {
    return allGuests.filter((guest) => {
      const matchesSearch =
        guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guest.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guest.purpose.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "Semua" || guest.status === statusFilter;

      const matchesDate =
        dateFilter === "Semua" ||
        (dateFilter === "Hari Ini" && guest.date === "2023-11-12") ||
        (dateFilter === "Kemarin" && guest.date === "2023-11-11") ||
        (dateFilter === "Minggu Ini" &&
          new Date(guest.date) >= new Date("2023-11-06"));

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [searchTerm, statusFilter, dateFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredGuests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGuests = filteredGuests.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectGuest = (guestId) => {
    setSelectedGuests((prev) =>
      prev.includes(guestId)
        ? prev.filter((id) => id !== guestId)
        : [...prev, guestId]
    );
  };

  const handleSelectAll = () => {
    setSelectedGuests(
      selectedGuests.length === currentGuests.length
        ? []
        : currentGuests.map((guest) => guest.id)
    );
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Selesai":
        return <CheckCircle className="w-4 h-4" />;
      case "Sedang Berlangsung":
        return <Clock className="w-4 h-4" />;
      case "Menunggu":
        return <AlertCircle className="w-4 h-4" />;
      case "Dibatalkan":
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisible = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 text-sm font-medium rounded-lg ${i === currentPage
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <Header />
      {/* Header */}
      <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Data Tamu</h2>
            <p className="text-sm text-gray-600 mt-1">
              Menampilkan {startIndex + 1}-
              {Math.min(endIndex, filteredGuests.length)} dari{" "}
              {filteredGuests.length} data
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            {selectedGuests.length > 0 && (
              <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Hapus ({selectedGuests.length})
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-4 mt-4">
          {/* Search */}
          <div className="relative flex-1 lg:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari nama, instansi, atau keperluan..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-36"
            >
              <option value="Semua">Semua Status</option>
              <option value="Selesai">Selesai</option>
              <option value="Sedang Berlangsung">Berlangsung</option>
              <option value="Menunggu">Menunggu</option>
              <option value="Dibatalkan">Dibatalkan</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>

          {/* Date Filter */}
          <div className="relative">
            <select
              value={dateFilter}
              onChange={(e) => {
                setDateFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-36"
            >
              <option value="Semua">Semua Tanggal</option>
              <option value="Hari Ini">Hari Ini</option>
              <option value="Kemarin">Kemarin</option>
              <option value="Minggu Ini">Minggu Ini</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={
                    selectedGuests.length === currentGuests.length &&
                    currentGuests.length > 0
                  }
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tamu
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kontak
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instansi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pejabat
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Waktu
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Keperluan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentGuests.map((guest) => (
              <tr key={guest.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedGuests.includes(guest.id)}
                    onChange={() => handleSelectGuest(guest.id)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                      {guest.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {guest.name}
                      </div>
                      <div className="text-sm text-gray-500">{guest.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    {guest.phone}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 flex items-center">
                    <Building className="w-4 h-4 mr-2 text-gray-400" />
                    {guest.origin}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {guest.official}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{guest.date}</div>
                  <div className="text-sm text-gray-500">{guest.time} WIB</div>
                  <div className="text-xs text-gray-400">{guest.duration}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                  <div className="truncate" title={guest.purpose}>
                    {guest.purpose}
                  </div>
                  {guest.notes && (
                    <div className="text-xs text-gray-500 mt-1 italic">
                      {guest.notes}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${guest.statusColor}`}
                  >
                    {getStatusIcon(guest.status)}
                    <span className="ml-1">{guest.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button
                      className="text-blue-600 hover:text-blue-900"
                      title="Lihat Detail"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      className="text-green-600 hover:text-green-900"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      className="text-gray-400 hover:text-gray-600"
                      title="Menu Lainnya"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden">
        {currentGuests.map((guest) => (
          <div
            key={guest.id}
            className="p-4 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedGuests.includes(guest.id)}
                  onChange={() => handleSelectGuest(guest.id)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3"
                />
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {guest.avatar}
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    {guest.name}
                  </div>
                  <div className="text-xs text-gray-500">{guest.email}</div>
                </div>
              </div>
              <span
                className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${guest.statusColor}`}
              >
                {getStatusIcon(guest.status)}
                <span className="ml-1">{guest.status}</span>
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-600">{guest.phone}</span>
              </div>
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-600">{guest.origin}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-600">{guest.official}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-600">
                  {guest.date} - {guest.time} WIB
                </span>
              </div>
              <div className="flex items-start">
                <FileText className="w-4 h-4 mr-2 text-gray-400 mt-0.5" />
                <span className="text-gray-600">{guest.purpose}</span>
              </div>
              {guest.notes && (
                <div className="text-xs text-gray-500 italic pl-6">
                  {guest.notes}
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-2 mt-3">
              <button
                className="text-blue-600 hover:text-blue-900"
                title="Lihat Detail"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                className="text-green-600 hover:text-green-900"
                title="Edit"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                className="text-gray-400 hover:text-gray-600"
                title="Menu Lainnya"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-4 lg:px-6 py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            {/* Items per page */}
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-700">Tampilkan:</label>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-700">per halaman</span>
            </div>

            {/* Pagination buttons */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Sebelumnya
              </button>

              <div className="hidden sm:flex space-x-1">
                {renderPaginationButtons()}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Selanjutnya
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Page info on mobile */}
            <div className="sm:hidden text-sm text-gray-700">
              Halaman {currentPage} dari {totalPages}
            </div>
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredGuests.length === 0 && (
        <div className="text-center py-12">
          <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Tidak ada data tamu
          </h3>
          <p className="text-gray-500">
            {searchTerm || statusFilter !== "Semua" || dateFilter !== "Semua"
              ? "Coba ubah filter pencarian Anda"
              : "Belum ada tamu yang terdaftar"}
          </p>
        </div>
      )}
    </div>
  );
};

export default GuestData;
