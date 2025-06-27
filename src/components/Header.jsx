import { Menu, Search, User, LayoutDashboard, FileText, Settings } from 'lucide-react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-6">
      <div className="flex mx-auto items-center">
        <button className="lg:hidden text-gray-600 hover:text-gray-900">
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
        <div className="flex items-center space-x-2 ml-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <Link to={"/admin/dashboard"} className="hidden lg:block text-gray-700 font-medium">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <Link to={"/admin/data-tamu"} className="hidden lg:block text-gray-700 font-medium">
            Data Tamu
          </Link>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <Link to={"/admin/statistik"} className="hidden lg:block text-gray-700 font-medium">
            Statistik
          </Link>
        </div>
        <div className="flex items-center space-x-2 ml-4 hover: text-red-500">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <Link to={"/admin/setting"} className="hidden lg:block text-gray-700 font-medium">
            Pengaturan
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
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
  );
};

export default Header;
