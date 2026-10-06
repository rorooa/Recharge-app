"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Smartphone, History, LogOut, Zap, ShieldAlert } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Recharge", href: "/dashboard/recharge", icon: Smartphone },
    { name: "History", href: "/dashboard/history", icon: History },
  ];

  return (
    <div className="flex min-h-screen bg-[#07070a] text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-white/10 bg-black md:flex">
        <div className="flex h-20 items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20">
              <Zap size={16} fill="white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Re<span className="text-violet-400">Charge</span>
            </span>
          </Link>
        </div>

        <nav className="mt-8 flex-1 px-4">
          <div className="space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/dashboard");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                  }`}
                >
                  <Icon size={18} className={isActive ? "text-violet-400" : "text-zinc-500"} />
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 border-t border-white/10 pt-4">
            <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Admin
            </p>
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-zinc-200"
            >
              <ShieldAlert size={18} className="text-zinc-500" />
              Admin Panel
            </Link>
          </div>
        </nav>

        <div className="p-4">
          <div className="mb-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
            <div className="mb-1 text-zinc-400">Current Balance</div>
            <div className="text-2xl font-bold">₹1,240.50</div>
          </div>
          <Link
            href="/login"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
          >
            <LogOut size={18} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:pl-64">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
}
