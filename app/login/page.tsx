"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      {/* Back */}
      <Link
        href="/"
        className="absolute left-6 top-6 z-20 flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
      >
        <ArrowLeft size={17} />
        Back
      </Link>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20">
              <Zap size={23} fill="white" />
            </div>

            <h1 className="mt-5 text-3xl font-bold">
              Welcome back<span className="text-violet-400">.</span>
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              Sign in to continue to ReCharge
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-2xl sm:p-8">
            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-zinc-300">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-violet-400 transition hover:text-violet-300"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 transition hover:text-zinc-300"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  if (email === "admin@recharge.com") {
                    localStorage.setItem("isAdmin", "true");
                    window.location.href = "/admin";
                  } else {
                    localStorage.removeItem("isAdmin");
                    window.location.href = "/dashboard";
                  }
                }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Sign in
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-zinc-600">OR</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Register */}
            <p className="text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-violet-400 transition hover:text-violet-300"
              >
                Create one
              </Link>
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-zinc-600">
            Your information is protected with secure authentication.
          </p>
        </motion.div>
      </div>
    </main>
  );
}