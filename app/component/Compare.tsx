"use client";
import React from "react";
import { XCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ComparisonSection = () => {
  const othersList = [
    "Generic one-size-fits-all plans only",
    "Vague claims with zero clarity",
    "Inexperienced teams, weak results",
    "Short-term fixes, no lasting impact",
    "Limited access, slow delayed responses",
  ];

  const elevarList = [
    "Data-driven tailored strategies always",
    "Clear reporting and full transparency",
    "Proven experts with real results",
    "Long-term business growth and stability",
    "Dedicated 24/7 client support team",
    "Innovative solutions with creative edge",
  ];

  return (
    <section className="py-20 px-0 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-4xl font-medium tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <span className="text-black"> Why </span>
            <motion.span
              className="px-4 py-1 text-black inline-block"
              style={{
                borderLeft: "3px solid #db6e1a",
                background:
                  "linear-gradient(90deg, rgba(219, 110, 26, 0) 16%, rgba(219, 110, 26, 0.15) 100%)",
              }}
            >
              choose us
            </motion.span>
            <span className="text-black"> over others</span>
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

        {/* Comparison Grid */}
        <div className="relative w-full  grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-stretch">
          {/* Others Card */}
          <div className="rounded-[28px] px-4 py-6 bg-gradient-to-br from-[#F2F2F2] via-[#F2F2F2] to-white border border-gray-100 flex flex-col h-full">
            <h5 className="text-xl font-semibold text-start text-[#0D0D0D] mb-5">
              Others
            </h5>
            <div className="space-y-4 flex-grow">
              {othersList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl border border-transparent"
                >
                  <XCircle className="text-gray-400 shrink-0" size={20} />
                  <span className="text-gray-500 font-medium text-[15px] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* VS Divider - Desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-[#1B2A41] text-white rounded-xl items-center justify-center font-bold text-lg rotate-12 shadow-xl border-4 border-white">
            V/S
          </div>

          {/* VS Divider - Mobile */}
          <div className="flex md:hidden justify-center -my-4 z-20">
            <div className="w-12 h-12 bg-[#1B2A41] text-white rounded-lg flex items-center justify-center font-bold rotate-12 shadow-lg">
              V/S
            </div>
          </div>

          {/* Our Agency (Elevar) Card */}
          <div className="rounded-[28px] px-6 py-6 bg-gradient-to-br from-[#284783] to-[#0B1421] text-white flex flex-col h-full">
            <div className="space-y-4 mb-5">
              {/* Brand Header Placeholder */}
              <div className="flex justify-start">
                <div className="flex items-start ">
                  <span className="text-xl font-bold tracking-tight">
                    Elevar
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 flex-grow">
              {elevarList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-gradient-to-r from-white/10 to-transparent border border-white/5 backdrop-blur-sm "
                >
                  <CheckCircle className="text-white shrink-0" size={20} />
                  <span className="text-white font-medium text-[15px] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Compare() {
  return (
    <div className="templateContainer">
      <div className="flex items-center justify-center">
        <ComparisonSection />
      </div>
    </div>
  );
}
