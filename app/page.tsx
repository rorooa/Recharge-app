"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Home() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/plans/Jio`)
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) {
          setPlans(data.slice(0, 3));
        }
      })
      .catch(err => console.error("Error fetching plans:", err));
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07070a] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute right-[-150px] top-[35%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20">
            <Zap size={20} fill="white" />
          </div>

          <span className="text-xl font-bold tracking-tight">
            Re<span className="text-violet-400">Charge</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#plans" className="transition hover:text-white">
            Plans
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full px-5 py-2.5 text-sm text-zinc-300 transition hover:text-white sm:block"
          >
            Login
          </Link>

          <Link
            href="/login"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-20 text-center lg:px-10 lg:pb-32 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Fast. Simple. Secure.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl"
        >
          Recharge your world.
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            In seconds.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
        >
          A smarter way to manage your mobile recharges. Discover plans,
          recharge instantly, and keep track of everything in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <button className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:scale-[1.02] hover:bg-zinc-200">
            Start Recharging
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <button className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.08]">
            Explore Plans
          </button>
        </motion.div>

        {/* Floating recharge card */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="relative mt-20 w-full max-w-4xl"
        >
          <div className="absolute inset-0 rounded-3xl bg-violet-500/20 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-left shadow-2xl backdrop-blur-2xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-zinc-500">Mobile Number</p>
                <p className="mt-1 text-lg font-semibold">
                  +91 98765 43210
                </p>
              </div>

              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                Active
              </div>
            </div>

            <div className="grid gap-4 pt-5 sm:grid-cols-3">
              {plans.length > 0 ? plans.map((plan: any, index: number) => (
                <motion.div
                  key={plan._id || plan.price}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl border p-5 transition ${
                    index === 1
                      ? "border-violet-400/40 bg-violet-500/10"
                      : "border-white/10 bg-black/20"
                  }`}
                >
                  {index === 1 && (
                    <span className="mb-3 inline-block rounded-full bg-violet-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                      Popular
                    </span>
                  )}

                  <p className="text-2xl font-bold">₹{plan.price}</p>
                  <p className="mt-2 text-sm text-zinc-300">{plan.data}</p>
                  <p className="mt-1 text-xs text-zinc-500">{plan.validity}</p>
                </motion.div>
              )) : (
                <p className="text-zinc-400 text-sm">Loading plans...</p>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-28 lg:px-10"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Smartphone,
              title: "Simple Recharges",
              text: "Find and select the right plan without unnecessary steps.",
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              text: "A smooth recharge experience designed around speed.",
            },
            {
              icon: ShieldCheck,
              title: "Secure Platform",
              text: "Your account and transaction information stay protected.",
            },
          ].map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Icon size={20} />
                </div>

                <h3 className="text-lg font-semibold">{feature.title}</h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 ReCharge. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-emerald-400" />
            Built for a smarter recharge experience
          </div>
        </div>
      </footer>
    </main>
  );
}