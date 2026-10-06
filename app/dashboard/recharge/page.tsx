"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle2, ChevronRight, Check } from "lucide-react";

export default function RechargePage() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [operator, setOperator] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const operators = ["Jio", "Airtel", "Vi", "BSNL"];
  const operatorPlans = {
    Jio: [
      { id: 1, price: "₹299", data: "2 GB / Day", validity: "28 Days", type: "Hero" },
      { id: 2, price: "₹666", data: "1.5 GB / Day", validity: "84 Days", type: "Popular" },
      { id: 3, price: "₹899", data: "2.5 GB / Day", validity: "90 Days" },
      { id: 4, price: "₹2999", data: "2.5 GB / Day", validity: "365 Days", type: "Annual" },
    ],
    Airtel: [
      { id: 5, price: "₹299", data: "1.5 GB / Day", validity: "28 Days", type: "Hero" },
      { id: 6, price: "₹479", data: "1.5 GB / Day", validity: "56 Days", type: "Popular" },
      { id: 7, price: "₹719", data: "1.5 GB / Day", validity: "84 Days" },
      { id: 8, price: "₹2999", data: "2 GB / Day", validity: "365 Days", type: "Annual" },
    ],
    Vi: [
      { id: 9, price: "₹299", data: "1.5 GB / Day", validity: "28 Days", type: "Hero" },
      { id: 10, price: "₹479", data: "1.5 GB / Day", validity: "56 Days", type: "Popular" },
      { id: 11, price: "₹719", data: "1.5 GB / Day", validity: "84 Days" },
      { id: 12, price: "₹3099", data: "2 GB / Day", validity: "365 Days", type: "Annual" },
    ],
    BSNL: [
      { id: 13, price: "₹199", data: "2 GB / Day", validity: "30 Days", type: "Popular" },
      { id: 14, price: "₹398", data: "120 GB", validity: "30 Days", type: "Hero" },
      { id: 15, price: "₹599", data: "3 GB / Day", validity: "84 Days" },
      { id: 16, price: "₹2399", data: "2 GB / Day", validity: "395 Days", type: "Annual" },
    ]
  };

  const currentPlans = operator ? operatorPlans[operator as keyof typeof operatorPlans] : [];

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(4);
    }, 2000);
  };

  return (
    <div className="mx-auto max-w-4xl p-6 lg:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Recharge</h1>
        <p className="mt-2 text-zinc-400">Complete your mobile recharge in seconds.</p>
      </div>

      {/* Progress */}
      <div className="mb-10 flex items-center justify-between">
        {[
          { num: 1, label: "Details" },
          { num: 2, label: "Plan" },
          { num: 3, label: "Payment" },
        ].map((s, i) => (
          <div key={s.num} className="flex flex-1 items-center">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition ${step >= s.num ? "bg-violet-500 text-white" : "bg-white/10 text-zinc-500"}`}>
              {step > s.num ? <Check size={16} /> : s.num}
            </div>
            <span className={`ml-3 text-sm font-medium ${step >= s.num ? "text-white" : "text-zinc-500"}`}>
              {s.label}
            </span>
            {i < 2 && <div className={`mx-4 h-px flex-1 transition ${step > s.num ? "bg-violet-500/50" : "bg-white/10"}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: Number & Operator */}
      {step === 1 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-400">Mobile Number</label>
              <div className="relative">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                <input
                  type="text"
                  placeholder="Enter 10 digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 py-3 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-400">Operator</label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {operators.map((op) => (
                  <button
                    key={op}
                    onClick={() => setOperator(op)}
                    className={`rounded-xl border py-3 text-sm font-medium transition ${
                      operator === op
                        ? "border-violet-500 bg-violet-500/20 text-white"
                        : "border-white/10 bg-black/50 text-zinc-400 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!phone || !operator}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 font-semibold text-black transition hover:bg-zinc-200 disabled:opacity-50 disabled:hover:bg-white"
            >
              Browse Plans
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 2: Plans */}
      {step === 2 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-6 flex items-center justify-between rounded-2xl bg-white/5 p-4">
            <div>
              <p className="text-sm text-zinc-400">Recharging for</p>
              <p className="font-semibold">{phone} • {operator}</p>
            </div>
            <button onClick={() => setStep(1)} className="text-sm text-violet-400 hover:text-violet-300">Change</button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {currentPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => { setSelectedPlan(plan); setStep(3); }}
                className="cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl transition hover:border-violet-500/50 hover:bg-white/5"
              >
                {plan.type && (
                  <span className="mb-3 inline-block rounded-full bg-violet-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                    {plan.type}
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">{plan.price}</p>
                  <ChevronRight className="text-zinc-500" />
                </div>
                <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-sm">
                  <div>
                    <p className="text-zinc-500">Data</p>
                    <p className="font-medium">{plan.data}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-zinc-500">Validity</p>
                    <p className="font-medium">{plan.validity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Step 3: Payment */}
      {step === 3 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <p className="text-sm text-zinc-400">Total Amount Payable</p>
              <p className="mt-1 text-4xl font-bold">{selectedPlan?.price}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-zinc-400">Plan</p>
              <p className="font-medium">{selectedPlan?.data}, {selectedPlan?.validity}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Select Payment Method</h3>
            {["UPI", "Credit/Debit Card", "Net Banking"].map((method, i) => (
              <label key={i} className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-black/50 p-4 transition hover:bg-white/5">
                <span className="font-medium">{method}</span>
                <input type="radio" name="payment" className="h-4 w-4 accent-violet-500" defaultChecked={i === 0} />
              </label>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <button onClick={() => setStep(2)} className="rounded-xl border border-white/10 px-6 py-3 font-medium transition hover:bg-white/5">
              Back
            </button>
            <button
              onClick={handleSimulatePayment}
              disabled={isProcessing}
              className="flex flex-1 items-center justify-center rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-700 disabled:opacity-70"
            >
              {isProcessing ? "Processing..." : `Pay ${selectedPlan?.price}`}
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 4: Success */}
      {step === 4 && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center backdrop-blur-xl">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Recharge Successful!</h2>
          <p className="mb-8 max-w-md text-zinc-400">
            Your recharge of {selectedPlan?.price} for {phone} ({operator}) has been processed successfully.
          </p>
          <div className="flex gap-4">
            <button onClick={() => { setStep(1); setPhone(""); setOperator(""); setSelectedPlan(null); }} className="rounded-xl border border-white/10 px-6 py-3 font-medium transition hover:bg-white/5">
              Recharge Another
            </button>
            <a href="/dashboard" className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
              Go to Dashboard
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
