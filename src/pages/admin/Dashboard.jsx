import { useState } from "react";
import {
  Search,
  Bell,
  User,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  UserCheck,
  Calendar,
  Clock,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Download,
  Eye,
  MoreVertical,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Semua Pejabat");

  const stats = [
    {
      title: "Total Tamu",
      value: "248",
      change: "12% dari bulan lalu",
      changeType: "increase",
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Tamu Hari Ini",
      value: "12",
      change: "3 lebih dari kemarin",
      changeType: "increase",
      icon: Calendar,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Menunggu",
      value: "5",
      change: "Perlu ditindaklanjuti",
      changeType: "warning",
      icon: Clock,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      title: "Rata-rata Waktu",
      value: "32 mnt",
      change: "5 mnt dari minggu lalu",
      changeType: "decrease",
      icon: AlertCircle,
      color: "bg-red-50 text-red-600",
    },
  ];

  const guests = [
    {
      id: 1,
      name: "Budi Santoso",
      phone: "0812-3456-7890",
      origin: "Dinas Pendidikan",
      official: "Kepala Dinas",
      date: "12 Nov 2023",
      time: "09:30 WIB",
      purpose: "Koordinasi program Smart City",
      status: "Selesai",
      statusColor: "bg-green-100 text-green-800",
      avatar: "BS",
    },
    {
      id: 2,
      name: "Rina Anggraini",
      phone: "0856-7890-1234",
      origin: "PT Maju Teknologi",
      official: "Kabid Aplikasi Informatika",
      date: "12 Nov 2023",
      time: "10:15 WIB",
      purpose: "Presentasi solusi e-government",
      status: "Sedang Berlangsung",
      statusColor: "bg-yellow-100 text-yellow-800",
      avatar: "RA",
    },
    {
      id: 3,
      name: "Deni Hermawan",
      phone: "0821-2345-6789",
      origin: "Masyarakat",
      official: "Sekretaris",
      date: "12 Nov 2023",
      time: "11:00 WIB",
      purpose: "Pengajuan permohonan informasi publik",
      status: "Menunggu",
      statusColor: "bg-blue-100 text-blue-800",
      avatar: "DH",
    },
  ];

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Users, label: "Daftar Tamu", active: false },
    { icon: FileText, label: "Laporan", active: false },
    { icon: Settings, label: "Pengaturan", active: false },
    { icon: UserCheck, label: "Admin", active: false },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-600 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 bg-blue-700">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <h1 className="text-white font-bold text-lg">DISKOMINFO</h1>
              <p className="text-blue-200 text-sm">Sistem Buku Tamu</p>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-6 py-3 text-white hover:bg-blue-700 transition-colors ${
                item.active ? "bg-blue-700 border-r-4 border-white" : ""
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="ml-3 font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative ml-4 lg:ml-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari tamu..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 lg:w-80"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative text-gray-600 hover:text-gray-900">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="hidden lg:block text-gray-700 font-medium">
                Admin Diskominfo
              </span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard Admin
            </h1>
            <p className="text-gray-600">
              Selamat datang di panel admin buku tamu Diskominfo
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {stat.changeType === "increase" && (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  )}
                  {stat.changeType === "decrease" && (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  {stat.changeType === "warning" && (
                    <AlertCircle className="w-4 h-4 text-yellow-500 mr-1" />
                  )}
                  <span
                    className={`${
                      stat.changeType === "increase"
                        ? "text-green-600"
                        : stat.changeType === "decrease"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Guest List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 lg:mb-0">
                  Daftar Tamu Terbaru
                </h2>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="relative">
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option>Semua Pejabat</option>
                      <option>Kepala Dinas</option>
                      <option>Sekretaris</option>
                      <option>Kabid</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Asal Instansi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pejabat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal & Waktu
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
                  {guests.map((guest) => (
                    <tr key={guest.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                            {guest.avatar}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {guest.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {guest.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {guest.origin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {guest.official}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {guest.date}
                        </div>
                        <div className="text-sm text-gray-500">
                          {guest.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                        {guest.purpose}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${guest.statusColor}`}
                        >
                          {guest.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden">
              {guests.map((guest) => (
                <div
                  key={guest.id}
                  className="p-4 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {guest.avatar}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          {guest.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {guest.phone}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${guest.statusColor}`}
                    >
                      {guest.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Instansi:</span>{" "}
                      {guest.origin}
                    </div>
                    <div>
                      <span className="font-medium">Pejabat:</span>{" "}
                      {guest.official}
                    </div>
                    <div>
                      <span className="font-medium">Waktu:</span> {guest.date}{" "}
                      {guest.time}
                    </div>
                    <div>
                      <span className="font-medium">Keperluan:</span>{" "}
                      {guest.purpose}
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-3">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
