// // E:\woneview\app\component\Pricing.tsx

// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Check, X } from 'lucide-react';

// const PricingSection = () => {
//     const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

//     const plans = [
//         {
//             name: "Basic",
//             monthlyPrice: 9,
//             yearlyPrice: 5,
//             description: "For small businesses or startups looking to get started with AI-powered insights.",
//             features: [
//                 { text: "Data Integration", included: true },
//                 { text: "Real-Time Sync", included: true },
//                 { text: "Centralized Dashboard", included: true },
//                 { text: "Advanced Reporting", included: true },
//                 { text: "Email, Chat & Phone Support", included: true },

//                 { text: "Premium Support", included: false },
//                 { text: "Customizable Workflows", included: false },
//             ],
//             isPopular: false,
//             dark: false,
//         },
//         {
//             name: "Pro",
//             monthlyPrice: 29,
//             yearlyPrice: 15,
//             description: "For growing businesses needing more integrations and advanced features.",
//             features: [
//                 { text: "Data Integration", included: true },
//                 { text: "Real-Time Sync", included: true },
//                 { text: "Centralized Dashboard", included: true },
//                 { text: "Advanced Reporting", included: true },

//                 { text: "Premium Support", included: false },
//                 { text: "Customizable Workflows", included: false },
//             ],
//             isPopular: true,
//             dark: true,
//         },
//         {
//             name: "Premium",
//             monthlyPrice: 79,
//             yearlyPrice: 39,
//             description: "For established businesses or enterprises that need comprehensive AI solutions.",
//             features: [
//                 { text: "Data Integration", included: true },
//                 { text: "Real-Time Sync", included: true },
//                 { text: "Centralized Dashboard", included: true },

//                 { text: "Premium Support", included: true },
//                 { text: "Customizable Workflows", included: true },
//             ],
//             isPopular: false,
//             dark: false,
//         }
//     ];

//     return (
//         <section className="py-24 px-6 bg-white overflow-hidden" id="pricing">
//             <div className="max-w-7xl mx-auto">

//                 <div className="text-center mb-4">
//                     <h2 className="text-4xl md:text-4xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
//                         <span className="text-black">Choose the  </span>
//                         <motion.span

//                             className="px-4 py-1 text-black inline-block"
//                             style={{
//                                 borderLeft: '3px solid #db6e1a',
//                                 background: 'linear-gradient(90deg, rgba(219, 110, 26, 0) 16%, rgba(219, 110, 26, 0.15) 100%)',
//                             }}
//                         >
//                             Perfect Plan
//                         </motion.span>

//                         <span className="text-black">for You</span>
//                     </h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2 }}
//                         className="text-lg text-[#1D322D]/70 max-w-2xl mx-auto"
//                     >
//                         Find the right option and start making the most of our AI-powered platform today!
//                     </motion.p>
//                 </div>

//                 {/* Toggle Switch */}
//                 <div className="flex flex-col items-center mb-8">
//                     <div className="relative  flex items-center p-1 bg-black/5 rounded-full border border-black/15">
//                         <motion.div
//                             layout
//                             className="absolute h-[85%]  w-[48%] bg-zinc-950 rounded-full shadow-lg"
//                             animate={{ x: billingCycle === 'monthly' ? '4%' : '104%' }}
//                             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                         />
//                         <button
//                             onClick={() => setBillingCycle('monthly')}
//                             className={`relative cursor-pointer z-10 px-8 py-2.5 text-sm font-semibold transition-colors duration-200 ${billingCycle === 'monthly' ? 'text-white' : 'text-zinc-500'
//                                 }`}
//                         >
//                             Monthly
//                         </button>
//                         <button
//                             onClick={() => setBillingCycle('yearly')}
//                             className={`relative cursor-pointer z-10 px-8 py-2.5 text-sm font-semibold transition-colors duration-200 ${billingCycle === 'yearly' ? 'text-white' : 'text-zinc-500'
//                                 }`}
//                         >
//                             Yearly
//                         </button>
//                     </div>
//                     <p className="mt-4 text-sm font-medium text-zinc-600">
//                         Save up to 50% by paying yearly
//                     </p>
//                 </div>

//                 {/* Pricing Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
//                     {plans.map((plan, index) => (
//                         <motion.div
//                             key={plan.name}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1, duration: 0.5 }}
//                             className={`flex flex-col p-2 rounded-[40px] border ${plan.dark
//                                 ? 'bg-[#0A0A0A] border-transparent shadow-2xl scale-105 z-10'
//                                 : 'bg-white border-black/10'
//                                 }`}
//                         >
//                             {/* Card Header Section */}
//                             <div className={`p-8 rounded-[32px] mb-6 ${plan.dark ? 'bg-white/10' : 'bg-[#EEF1F4]'
//                                 }`}>
//                                 <div className="flex justify-between items-start mb-6">
//                                     <span className={`px-4 py-1 rounded-full text-xs font-bold ${plan.dark ? 'bg-white/10 text-[#85B8F2]' : 'bg-white text-zinc-900'
//                                         }`}>
//                                         {plan.name}
//                                     </span>
//                                     {plan.isPopular && (
//                                         <span className="px-4 py-1 rounded-full text-xs font-bold bg-[#C2FA69] text-zinc-950">
//                                             Most Popular
//                                         </span>
//                                     )}
//                                 </div>

//                                 <div className="flex items-baseline gap-1 mb-4">
//                                     <AnimatePresence mode="wait">
//                                         <motion.span
//                                             key={billingCycle}
//                                             initial={{ opacity: 0, y: 10 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             exit={{ opacity: 0, y: -10 }}
//                                             className={`text-4xl font-normal tracking-tight ${plan.dark ? 'text-white' : 'text-[#1D322D]'
//                                                 }`}
//                                         >
//                                             ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
//                                         </motion.span>
//                                     </AnimatePresence>
//                                     <span className={plan.dark ? 'text-white/60' : 'text-zinc-600'}>
//                                         /month
//                                     </span>
//                                 </div>

//                                 <p className={`text-sm leading-relaxed ${plan.dark ? 'text-white/70' : 'text-zinc-600'
//                                     }`}>
//                                     {plan.description}
//                                 </p>
//                             </div>

//                             {/* Features List */}
//                             <div className="px-6 flex-grow">
//                                 <ul className="space-y-4 mb-8">
//                                     {plan.features.map((feature, fIndex) => (
//                                         <li key={fIndex} className="flex items-center gap-3">
//                                             <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${feature.included ? 'text-[#75AD1A]' : 'text-zinc-400 opacity-50'
//                                                 }`}>
//                                                 {feature.included ? <Check size={16} strokeWidth={3} /> : <X size={16} strokeWidth={3} />}
//                                             </div>
//                                             <span className={`text-sm font-medium ${plan.dark
//                                                 ? (feature.included ? 'text-white' : 'text-white/30')
//                                                 : (feature.included ? 'text-zinc-800' : 'text-zinc-400')
//                                                 }`}>
//                                                 {feature.text}
//                                             </span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             {/* Action Button */}
//                             <div className="p-4">
//                                 <a
//                                     href="#"
//                                     className={`block w-full py-4 text-center rounded-full font-bold transition-all duration-300 ${plan.dark
//                                         ? 'bg-[#6F8EFF] text-zinc-950 shadow-[0_0_40px_-10px_rgba(111,142,255,0.65)] hover:brightness-110'
//                                         : 'bg-black text-white hover:bg-zinc-800'
//                                         }`}
//                                 >
//                                     Get started for free
//                                 </a>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// // Main App component
// const Pricing = () => {
//     return (
//         <div className="templateContainer">
//             <PricingSection />
//         </div>
//     );
// };

// export default Pricing;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'yearly'

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 9,
      yearlyPrice: 5,
      description:
        "For small businesses or startups looking to get started with AI-powered insights.",
      features: [
        { text: "Data Integration", included: true },
        { text: "Real-Time Sync", included: true },
        { text: "Centralized Dashboard", included: true },
        { text: "Advanced Reporting", included: true },
        { text: "Email, Chat & Phone Support", included: true },
        { text: "Premium Support", included: false },
        { text: "Customizable Workflows", included: false },
      ],
      isPopular: false,
      dark: false,
    },
    {
      name: "Pro",
      monthlyPrice: 29,
      yearlyPrice: 15,
      description:
        "For growing businesses needing more integrations and advanced features.",
      features: [
        { text: "Data Integration", included: true },
        { text: "Real-Time Sync", included: true },
        { text: "Centralized Dashboard", included: true },
        { text: "Advanced Reporting", included: true },
        { text: "Premium Support", included: false },
        { text: "Customizable Workflows", included: false },
      ],
      isPopular: true,
      dark: true,
    },
    {
      name: "Premium",
      monthlyPrice: 79,
      yearlyPrice: 39,
      description:
        "For established businesses or enterprises that need comprehensive AI solutions.",
      features: [
        { text: "Data Integration", included: true },
        { text: "Real-Time Sync", included: true },
        { text: "Centralized Dashboard", included: true },
        { text: "Premium Support", included: true },
        { text: "Customizable Workflows", included: true },
      ],
      isPopular: false,
      dark: false,
    },
  ];

  return (
    <section
      className="py-24 px-0 md:px-6 bg-white overflow-hidden"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-4xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <span className="text-black">Choose the </span>
            <motion.span
              className="px-4 py-1 text-black inline-block"
              style={{
                borderLeft: "3px solid #db6e1a",
                background:
                  "linear-gradient(90deg, rgba(219, 110, 26, 0) 16%, rgba(219, 110, 26, 0.15) 100%)",
              }}
            >
              Perfect Plan
            </motion.span>
            <span className="text-black">for You</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1D322D]/70 max-w-2xl mx-auto"
          >
            Find the right option and start making the most of our AI-powered
            platform today!
          </motion.p>
        </div>

        {/* Toggle Switch */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative flex items-center p-1 bg-black/5 rounded-full border border-black/15 w-64">
            <motion.div
              className="absolute h-[85%] w-[48%] bg-zinc-950 rounded-full shadow-lg"
              initial={false}
              animate={{ left: billingCycle === "monthly" ? "2%" : "50%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative flex-1 cursor-pointer z-10 px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                billingCycle === "monthly" ? "text-white" : "text-zinc-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`relative flex-1 cursor-pointer z-10 px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                billingCycle === "yearly" ? "text-white" : "text-zinc-500"
              }`}
            >
              Yearly
            </button>
          </div>
          <p className="mt-4 text-sm font-medium text-zinc-600">
            Save up to 50% by paying yearly
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col p-2 rounded-[40px] border ${
                plan.dark
                  ? "bg-[#0A0A0A] border-transparent shadow-2xl scale-105 z-10"
                  : "bg-white border-black/10"
              }`}
            >
              {/* Card Header Section */}
              <div
                className={`p-8 rounded-[32px] mb-6 ${
                  plan.dark ? "bg-white/10" : "bg-[#EEF1F4]"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-bold ${
                      plan.dark
                        ? "bg-white/10 text-[#85B8F2]"
                        : "bg-white text-zinc-900"
                    }`}
                  >
                    {plan.name}
                  </span>
                  {plan.isPopular && (
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-[#C2FA69] text-zinc-950">
                      Most Popular
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={billingCycle}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`text-4xl font-normal tracking-tight ${
                        plan.dark ? "text-white" : "text-[#1D322D]"
                      }`}
                    >
                      $
                      {billingCycle === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  <span
                    className={plan.dark ? "text-white/60" : "text-zinc-600"}
                  >
                    /month
                  </span>
                </div>

                <p
                  className={`text-sm leading-relaxed ${
                    plan.dark ? "text-white/70" : "text-zinc-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="px-6 flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
                          feature.included
                            ? "text-[#75AD1A]"
                            : "text-zinc-400 opacity-50"
                        }`}
                      >
                        {feature.included ? (
                          <Check size={16} strokeWidth={3} />
                        ) : (
                          <X size={16} strokeWidth={3} />
                        )}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          plan.dark
                            ? feature.included
                              ? "text-white"
                              : "text-white/30"
                            : feature.included
                            ? "text-zinc-800"
                            : "text-zinc-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="p-4">
                <a
                  href="#"
                  className={`block w-full py-4 text-center rounded-full font-bold transition-all duration-300 ${
                    plan.dark
                      ? "bg-[#6F8EFF] text-zinc-950 shadow-[0_0_40px_-10px_rgba(111,142,255,0.65)] hover:brightness-110"
                      : "bg-black text-white hover:bg-zinc-800"
                  }`}
                >
                  Get started for free
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <div className="templateContainer">
      <PricingSection />
    </div>
  );
};

export default Pricing;
