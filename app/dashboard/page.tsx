"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone, Zap, Clock } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const recentTransactions = [
    { id: "TXN10023", phone: "+91 98765 43210", amount: "₹299", date: "2 Hours ago", status: "Success" },
    { id: "TXN10022", phone: "+91 91234 56789", amount: "₹199", date: "Yesterday", status: "Success" },
    { id: "TXN10021", phone: "+91 98765 43210", amount: "₹399", date: "Oct 1, 2026", status: "Success" },
  ];

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Dhanush</h1>
        <p className="mt-2 text-zinc-400">Here's what's happening with your account today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
            <Zap size={24} />
          </div>
          <p className="text-sm font-medium text-zinc-400">Quick Recharge</p>
          <Link
            href="/dashboard/recharge"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Start Now <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl md:col-span-2"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-400">Last Recharge</p>
              <p className="mt-1 text-2xl font-bold">+91 98765 43210</p>
              <p className="mt-1 text-sm text-zinc-500">Jio • ₹299 (2GB/Day)</p>
            </div>
            <div className="text-right">
              <div className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                Active
              </div>
              <p className="mt-3 text-xs text-zinc-500">Expires in 12 days</p>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20">
              Repeat
            </button>
            <Link href="/dashboard/recharge" className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/5">
              Change Plan
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <Link href="/dashboard/history" className="text-sm text-violet-400 hover:text-violet-300">
            View All
          </Link>
        </div>

        <div className="divide-y divide-white/5">
          {recentTransactions.map((txn, i) => (
            <div key={i} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                  <Smartphone size={18} className="text-zinc-400" />
                </div>
                <div>
                  <p className="font-medium">{txn.phone}</p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                    <Clock size={12} />
                    {txn.date}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{txn.amount}</p>
                <p className="mt-1 text-xs text-emerald-400">{txn.status}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
