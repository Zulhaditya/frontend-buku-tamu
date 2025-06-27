import { useState } from "react";
import { LayoutDashboard, Users, FileText, Settings, Calendar, X } from "lucide-react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true, link: "/admin/dashboard" },
    { icon: Users, label: "Daftar Tamu", active: false, link: "/admin/data-tamu" },
    { icon: FileText, label: "Laporan", active: false, link: "/admin/laporan" },
    { icon: Settings, label: "Pengaturan", active: false, link: "/admin/setting" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-600 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
            href={item.link}
            className={`flex items-center px-6 py-3 text-white hover:bg-blue-700 transition-colors ${item.active ? "bg-blue-700 border-r-4 border-white" : ""
              }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="ml-3 font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar;
