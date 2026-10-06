"use client";
import { Download, Filter, Search } from "lucide-react";

export default function HistoryPage() {
  const transactions = [
    { id: "TXN10023", phone: "+91 98765 43210", operator: "Jio", amount: "₹299", date: "Oct 5, 2026 - 14:30", status: "Success" },
    { id: "TXN10022", phone: "+91 91234 56789", operator: "Airtel", amount: "₹199", date: "Oct 4, 2026 - 09:15", status: "Success" },
    { id: "TXN10021", phone: "+91 98765 43210", operator: "Jio", amount: "₹399", date: "Oct 1, 2026 - 18:45", status: "Success" },
    { id: "TXN10020", phone: "+91 99887 76655", operator: "Vi", amount: "₹479", date: "Sep 28, 2026 - 11:20", status: "Failed" },
    { id: "TXN10019", phone: "+91 98765 43210", operator: "Jio", amount: "₹299", date: "Sep 10, 2026 - 16:10", status: "Success" },
  ];

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transaction History</h1>
          <p className="mt-2 text-zinc-400">View and download your past recharge receipts.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20">
          <Download size={16} />
          Export CSV
        </button>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input
            type="text"
            placeholder="Search by number or TXN ID..."
            className="w-full rounded-xl border border-white/10 bg-black/50 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
          />
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium transition hover:bg-white/10">
          <Filter size={16} />
          Filter
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-white/10 bg-white/5 text-zinc-400">
              <tr>
                <th className="px-6 py-4 font-medium">Transaction ID</th>
                <th className="px-6 py-4 font-medium">Details</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Date & Time</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((txn) => (
                <tr key={txn.id} className="transition hover:bg-white/5">
                  <td className="px-6 py-4 font-medium">{txn.id}</td>
                  <td className="px-6 py-4">
                    <div>{txn.phone}</div>
                    <div className="text-xs text-zinc-500">{txn.operator}</div>
                  </td>
                  <td className="px-6 py-4 font-semibold">{txn.amount}</td>
                  <td className="px-6 py-4 text-zinc-400">{txn.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        txn.status === "Success"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-violet-400 hover:text-violet-300">Receipt</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
