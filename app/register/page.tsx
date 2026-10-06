"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      {/* Back button */}
      <Link
        href="/login"
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
              Create your account<span className="text-violet-400">.</span>
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              Join ReCharge and manage your recharges smarter
            </p>
          </div>

          {/* Register card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-2xl sm:p-8">
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Full name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                  />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
                  />
                </div>
              </div>

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
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Mobile number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                  />

                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
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

              {/* Confirm password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Confirm password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 transition hover:text-zinc-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 py-2 text-xs text-zinc-500">
                <input
                  type="checkbox"
                  className="mt-0.5 accent-violet-500"
                />

                <span>
                  I agree to the{" "}
                  <span className="text-violet-400">Terms of Service</span>{" "}
                  and{" "}
                  <span className="text-violet-400">Privacy Policy</span>.
                </span>
              </label>

              {/* Create account */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/dashboard";
                }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Create account

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Login link */}
            <p className="mt-6 text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-violet-400 transition hover:text-violet-300"
              >
                Sign in
              </Link>
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-zinc-600">
            Create your ReCharge account in seconds.
          </p>
        </motion.div>
      </div>
    </main>
  );
}