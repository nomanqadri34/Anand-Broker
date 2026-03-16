"use client";

import React from "react";
import { 
  LayoutDashboard, 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  Plus, 
  Search,
  Bell,
  ArrowUpRight,
  TrendingUp,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Properties", value: "248", icon: Home, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Active Leads", value: "1,240", icon: Users, color: "text-accent", bg: "bg-accent/10" },
    { label: "Revenue Change", value: "+12.5%", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Pending Visits", value: "42", icon: Clock, color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  const recentLeads = [
    { name: "Rahul Deshmukh", property: "3BHK Baner", time: "2 mins ago", status: "New" },
    { name: "Sonia Verma", property: "2BHK Wakad", time: "15 mins ago", status: "Closed" },
    { name: "Amit Patel", property: "Villa Magarpatta", time: "1 hour ago", status: "Contacted" },
    { name: "Priya Singh", property: "Studio Viman Nagar", time: "3 hours ago", status: "New" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 hidden lg:flex flex-col gap-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold">A</div>
          <span className="font-black tracking-tighter uppercase">Admin Panel</span>
        </div>

        <nav className="flex flex-col gap-2">
          {[
            { name: "Dashboard", icon: LayoutDashboard, active: true },
            { name: "Properties", icon: Home },
            { name: "Leads", icon: Users },
            { name: "Analytics", icon: BarChart3 },
            { name: "Settings", icon: Settings },
          ].map((item) => (
            <button
              key={item.name}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                item.active ? "bg-accent text-white shadow-lg shadow-accent/20" : "hover:bg-white/5 text-gray-400"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="mt-auto bg-white/5 p-6 rounded-2xl border border-white/10">
          <p className="text-xs font-bold text-accent uppercase mb-2">Need help?</p>
          <p className="text-xs text-gray-400 leading-relaxed">Check documentation or contact support agent.</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-playfair font-black text-primary">Dashboard Overview</h1>
            <p className="text-gray-500">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search listings..." 
                className="pl-10 pr-4 py-2 bg-white border border-border rounded-xl text-sm outline-none focus:border-accent w-64"
              />
            </div>
            <button className="relative w-10 h-10 bg-white border border-border rounded-xl flex items-center justify-center hover:bg-gray-50">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-xl bg-accent overflow-hidden">
               <img src="https://i.pravatar.cc/100?img=60" alt="Admin" />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                <div className="text-2xl font-black text-primary">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Leads Table */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h3 className="font-black text-lg text-primary uppercase tracking-tight">Recent Inquiries</h3>
              <Button variant="ghost" size="sm" className="text-accent underline">View All</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 text-gray-400 text-xs font-black uppercase tracking-widest">
                    <th className="px-6 py-4">Client Name</th>
                    <th className="px-6 py-4">Property</th>
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentLeads.map((lead, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-primary">
                          {lead.name.charAt(0)}
                        </div>
                        <span className="font-bold text-primary">{lead.name}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 font-medium">{lead.property}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{lead.time}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          lead.status === "New" ? "bg-accent/10 text-accent" : 
                          lead.status === "Closed" ? "bg-emerald-500/10 text-emerald-500" : 
                          "bg-blue-500/10 text-blue-500"
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-primary p-2">
                           <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Card */}
          <div className="space-y-6">
            <div className="bg-primary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-12 translate-x-12" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Add New Listing</h3>
              <p className="text-gray-400 mb-6 relative z-10">Create a premium property page including image gallery and video tours.</p>
              <Button variant="accent" className="w-full relative z-10">
                <Plus className="w-5 h-5 mr-2" />
                Create Listing
              </Button>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="font-bold text-primary mb-6">Popular Areas Demand</h3>
              <div className="space-y-4">
                {[
                  { area: "Baner", value: 85, color: "bg-accent" },
                  { area: "Kharadi", value: 65, color: "bg-blue-500" },
                  { area: "Wakad", value: 45, color: "bg-emerald-500" },
                ].map(item => (
                  <div key={item.area} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                      <span className="text-gray-500">{item.area}</span>
                      <span className="text-primary">{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
