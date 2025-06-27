import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { Users, UserCheck, Clock, TrendingUp, Calendar, Building, Phone, Mail } from 'lucide-react';
import Header from '../../components/Header';

const GuestStatisticsDashboard = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationComplete(true), 500);
  }, []);

  // Data simulasi berdasarkan skema Prisma
  const dailyVisitors = [
    { name: 'Sen', jumlah: 45, diterima: 38, ditolak: 7 },
    { name: 'Sel', jumlah: 52, diterima: 47, ditolak: 5 },
    { name: 'Rab', jumlah: 38, diterima: 35, ditolak: 3 },
    { name: 'Kam', jumlah: 61, diterima: 55, ditolak: 6 },
    { name: 'Jum', jumlah: 43, diterima: 40, ditolak: 3 },
    { name: 'Sab', jumlah: 28, diterima: 25, ditolak: 3 },
    { name: 'Min', jumlah: 19, diterima: 17, ditolak: 2 }
  ];

  const statusDistribution = [
    { name: 'Diterima', value: 257, color: '#10B981' },
    { name: 'Menunggu', value: 34, color: '#F59E0B' },
    { name: 'Ditolak', value: 27, color: '#EF4444' },
    { name: 'Selesai', value: 189, color: '#6366F1' }
  ];

  const monthlyTrend = [
    { bulan: 'Jan', tamu: 320, rata: 280 },
    { bulan: 'Feb', tamu: 285, rata: 290 },
    { bulan: 'Mar', tamu: 410, rata: 350 },
    { bulan: 'Apr', tamu: 380, rata: 365 },
    { bulan: 'Mei', tamu: 445, rata: 400 },
    { bulan: 'Jun', tamu: 507, rata: 420 }
  ];

  const topPejabat = [
    { nama: 'Dr. Ahmad Subagio', jabatan: 'Direktur Utama', jumlah: 89 },
    { nama: 'Ir. Siti Nurhaliza', jabatan: 'Wakil Direktur', jumlah: 67 },
    { nama: 'Drs. Bambang Heri', jabatan: 'Kepala Bagian', jumlah: 54 },
    { nama: 'Prof. Maria Dewi', jabatan: 'Kepala Divisi', jumlah: 43 },
    { nama: 'Dr. Eko Prasetyo', jabatan: 'Manajer Operasi', jumlah: 38 }
  ];

  const StatCard = ({ title, value, icon: Icon, color, change, delay = 0 }) => (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 transform ${animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
          {change && (
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm font-medium text-green-600">{change}</span>
            </div>
          )}
        </div>
        <div className={`p-4 rounded-xl ${color}`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard Statistik Tamu</h1>
              <p className="text-lg text-gray-600">Sistem Manajemen Kunjungan Tamu</p>
            </div>

          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Tamu Hari Ini"
            value="67"
            icon={Users}
            color="bg-gradient-to-r from-blue-500 to-blue-600"
            change="+12% dari kemarin"
            delay={0}
          />
          <StatCard
            title="Tamu Diterima"
            value="54"
            icon={UserCheck}
            color="bg-gradient-to-r from-green-500 to-green-600"
            change="+8% dari kemarin"
            delay={100}
          />
          <StatCard
            title="Sedang Menunggu"
            value="8"
            icon={Clock}
            color="bg-gradient-to-r from-yellow-500 to-yellow-600"
            change="-2 dari kemarin"
            delay={200}
          />
          <StatCard
            title="Rata-rata Waktu Tunggu"
            value="12 mnt"
            icon={Calendar}
            color="bg-gradient-to-r from-purple-500 to-purple-600"
            change="-3 mnt dari kemarin"
            delay={300}
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Daily Visitors Chart */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-700 ${animationComplete ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Kunjungan Mingguan</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Total</span>
                <div className="w-3 h-3 bg-green-500 rounded-full ml-4"></div>
                <span className="text-sm text-gray-600">Diterima</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyVisitors}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="jumlah" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="diterima" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Status Distribution */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-700 ${animationComplete ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Distribusi Status Tamu</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Monthly Trend */}
          <div className={`lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-700 ${animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Tren Kunjungan Bulanan</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="bulan" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="tamu"
                  stroke="#3B82F6"
                  fill="url(#colorTamu)"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="rata"
                  stroke="#10B981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <defs>
                  <linearGradient id="colorTamu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Top Officials */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-700 ${animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Pejabat Tersering Dikunjungi</h3>
            <div className="space-y-4">
              {topPejabat.map((pejabat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">{pejabat.nama}</p>
                    <p className="text-xs text-gray-600">{pejabat.jabatan}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-blue-600 mr-2">{pejabat.jumlah}</span>
                    <div className="w-2 h-8 bg-blue-500 rounded-full opacity-80"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestStatisticsDashboard;
