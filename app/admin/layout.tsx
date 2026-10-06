"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, Smartphone, FileText, LogOut, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Basic admin check (mock for now)
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin || isAdmin !== "true") {
      router.push("/login?error=admin-only");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) return null; // Or a loading spinner


  const links = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Plans", href: "/admin/plans", icon: Smartphone },
    { name: "Transactions", href: "/admin/transactions", icon: FileText },
  ];

  return (
    <div className="flex min-h-screen bg-[#07070a] text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-red-500/10 bg-black md:flex">
        <div className="flex h-20 items-center px-6">
          <Link href="/" className="flex items-center gap-2 text-red-400">
            <ShieldAlert size={24} />
            <span className="text-lg font-bold tracking-tight text-white">Admin Panel</span>
          </Link>
        </div>

        <nav className="mt-8 flex-1 px-4">
          <div className="space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/admin");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? "bg-red-500/10 text-red-400" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                  }`}
                >
                  <Icon size={18} className={isActive ? "text-red-400" : "text-zinc-500"} />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-white/5">
            <button
              onClick={() => {
                localStorage.removeItem("isAdmin");
                router.push("/login");
              }}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              <LogOut size={18} className="text-zinc-500" />
              Exit Admin
            </button>
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
