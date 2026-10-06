"use client";
import { motion } from "framer-motion";
import { Users, Smartphone, IndianRupee, ArrowUpRight, Activity } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { name: "Total Users", value: "12,450", change: "+12%", icon: Users },
    { name: "Active Plans", value: "48", change: "+4", icon: Smartphone },
    { name: "Total Revenue", value: "₹2.4M", change: "+18%", icon: IndianRupee },
    { name: "Success Rate", value: "98.5%", change: "+0.5%", icon: Activity },
  ];

  const recentUsers = [
    { name: "Rahul Kumar", email: "rahul@example.com", joined: "Today" },
    { name: "Priya Singh", email: "priya@example.com", joined: "Yesterday" },
    { name: "Amit Patel", email: "amit@example.com", joined: "Oct 3, 2026" },
  ];

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Overview</h1>
        <p className="mt-2 text-zinc-400">Manage your application and view key metrics.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                <Icon size={24} />
              </div>
              <p className="text-sm font-medium text-zinc-400">{stat.name}</p>
              <div className="mt-1 flex items-baseline gap-3">
                <p className="text-3xl font-bold">{stat.value}</p>
                <span className="flex items-center text-xs font-medium text-emerald-400">
                  <ArrowUpRight size={14} />
                  {stat.change}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl"
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Users</h2>
            <button className="text-sm text-red-400 hover:text-red-300">View All</button>
          </div>
          <div className="divide-y divide-white/5">
            {recentUsers.map((user, i) => (
              <div key={i} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-zinc-500">{user.email}</p>
                </div>
                <p className="text-sm text-zinc-400">{user.joined}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl flex flex-col items-center justify-center text-center"
        >
           <Activity size={48} className="text-zinc-600 mb-4" />
           <h3 className="text-xl font-medium mb-2">Revenue Chart Placeholder</h3>
           <p className="text-zinc-500 max-w-xs text-sm">A real application would show a chart of revenue over time here.</p>
        </motion.div>
      </div>
    </div>
  );
}
