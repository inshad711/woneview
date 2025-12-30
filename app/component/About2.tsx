// import React from 'react';
// import { Quote, Star, ArrowRight, Video, Play } from 'lucide-react';

// /**
//  * HeroSection Component
//  * Recreates the Framer-style hero section with floating testimonials,
//  * a project ticker, and a logo marquee.
//  */

// // --- Sub-components ---

// const Badge = () => (
//     <div className="inline-flex items-center gap-2 p-1 pr-4 bg-white border border-[#E2E7EE] rounded-full shadow-sm">
//         <div className="flex items-center gap-2 px-3 py-1 bg-[#E7F8F4] rounded-full">
//             <div className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3CBA8C] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#37BD8E] shadow-[0_0_0_2px_rgba(55,189,142,0.25)]"></span>
//             </div>
//             <span className="text-[12px] font-bold text-[#26916C]">2 slots</span>
//         </div>
//         <span className="text-sm font-medium text-[#121419]">Available this month</span>
//         <div className="w-px h-4 bg-[#E2E7EE] mx-1 hidden sm:block" />
//         <button className="text-sm font-semibold text-[#323745] flex items-center gap-1 hover:text-black transition-colors group hidden sm:flex">
//             Join Now
//             <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
//         </button>
//     </div>
// );

// const FloatingCard = ({ text, author, rotation, side }) => (
//     <div
//         className={`hidden xl:block absolute top-[20%] ${side === 'left' ? 'left-[-40px]' : 'right-[-40px]'} p-6 bg-white rounded-2xl shadow-[0_80px_40px_-5px_rgba(44,45,48,0.05),0_2px_6px_-4px_rgba(15,25,62,0.08)] border border-[#D9D3E8]/30 max-w-[260px] z-20 text-left`}
//         style={{ transform: `rotate(${rotation}deg)` }}
//     >
//         <div className="relative">
//             <Quote className="absolute -top-3 -left-3 text-[#9FAAC1]/20 fill-[#9FAAC1]/20" size={40} />
//             <p className="relative text-[15px] text-[#50576B] leading-relaxed mb-4">
//                 "{text}"
//             </p>
//         </div>
//         <p className="text-sm font-bold text-[#121419]">- {author}</p>

//         {/* Decorative shadow card behind */}
//         <div className="absolute inset-0 bg-white border border-[#EFF3F7] rounded-2xl -z-10 translate-y-2 translate-x-2 rotate-[4deg]" />
//     </div>
// );

// const ProjectCard = ({ title, category, metric, metricLabel, image }) => (
//     <div className="flex-shrink-0 w-[320px] sm:w-[450px] bg-white rounded-[40px] border border-[#E2E7EE] p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group cursor-pointer">
//         <div className="relative aspect-[3/2] rounded-[30px] overflow-hidden bg-gray-50">
//             <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
//         </div>
//         <div className="p-6 flex justify-between items-center">
//             <div>
//                 <h6 className="text-xl font-bold text-[#0F1115] mb-1">{title}</h6>
//                 <p className="text-sm text-[#697289]">{category}</p>
//             </div>
//             <div className="text-right">
//                 <p className="text-2xl font-bold text-[#0F1115]">{metric}</p>
//                 <p className="text-[11px] font-medium text-[#697289] uppercase tracking-wider">{metricLabel}</p>
//             </div>
//         </div>
//     </div>
// );

// const LogoMarquee = () => {
//     const logos = [
//         { name: 'Acme Corp', icon: '✦' },
//         { name: 'Quantum', icon: '◈' },
//         { name: 'APEX', icon: '▲' },
//         { name: 'Celestial', icon: '❃' },
//         { name: 'Orbit', icon: '◌' }
//     ];

//     return (
//         <div className="mt-24 w-full">
//             <p className="text-center text-[11px] font-bold tracking-[0.2em] text-[#697289] mb-10 uppercase">
//                 Trusted by top companies
//             </p>
//             <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
//                 <div className="flex animate-scroll gap-16 items-center py-4 min-w-full">
//                     {[...logos, ...logos, ...logos].map((logo, i) => (
//                         <div key={i} className="flex items-center gap-3 text-[#99A1B2] transition-colors hover:text-[#121419] cursor-default shrink-0">
//                             <span className="text-2xl">{logo.icon}</span>
//                             <span className="text-xl font-bold tracking-tight">{logo.name}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// // --- Main App Component ---

// export default function About2() {
//     const projects = [
//         { title: "Cloudash", category: "Web design • development", metric: "2x", metricLabel: "Conversion", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
//         { title: "Nova Threads", category: "Web design • development", metric: "4x", metricLabel: "Ad performance", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
//         { title: "OrbitCloud", category: "Web design • development", metric: "+65%", metricLabel: "Sign-ups", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800" },
//         { title: "Vertax Labs", category: "Web design • development", metric: "120%", metricLabel: "Boost in leads", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
//     ];

//     return (
//         <div className="min-h-screen bg-[#FDFDFF] font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">

//             {/* Background Pattern */}
//             <div
//                 className="absolute inset-0 opacity-[0.4] pointer-events-none"
//                 style={{
//                     backgroundImage: 'url(https://framerusercontent.com/images/jIzgWv1ngkkV3oGhfkZy0ymiHU.png)',
//                     backgroundSize: '33px auto',
//                     backgroundRepeat: 'repeat'
//                 }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDFDFF]/50 to-[#FDFDFF] pointer-events-none" />

//             <main className="relative pt-20 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center">

//                 {/* Floating Testimonials (Desktop Only) */}
//                 <FloatingCard
//                     side="left"
//                     rotation={-15}
//                     text="The team designed a stunning site optimized for conversions. We saw a 40% increase in leads!"
//                     author="Jessica Carter"
//                 />
//                 <FloatingCard
//                     side="right"
//                     rotation={15}
//                     text="Bravio nailed our MVP design with a fast turnaround and incredible attention to detail."
//                     author="Sarah Mitchel"
//                 />

//                 {/* Hero Top */}
//                 <div className="z-10 text-center flex flex-col items-center">
//                     <Badge />

//                     <h1 className="mt-10 text-5xl md:text-7xl lg:text-[80px] font-bold tracking-[-0.05em] text-[#121419] max-w-5xl leading-[1.1] text-balance">
//                         world-class design
//                         <span className="inline-flex items-center gap-1.5 align-middle mx-3">
//                             <div className="w-12 h-12 bg-[#E0F5FF] rounded-xl rotate-[9deg] flex items-center justify-center border-[3px] border-white shadow-sm overflow-hidden">
//                                 <div className="w-5 h-5 bg-[#000] rounded-sm rotate-45" />
//                             </div>
//                             <div className="w-12 h-12 bg-[#FFEFEE] rounded-xl rotate-[-8deg] flex items-center justify-center border-[3px] border-white shadow-sm -ml-5 overflow-hidden">
//                                 <div className="w-5 h-5 bg-[#F24E1E] rounded-full" />
//                             </div>
//                         </span>
//                         and marketing for
//                         <span className="inline-flex items-center align-middle mx-3">
//                             <div className="w-12 h-12 bg-[#FFEFEE] rounded-xl rotate-[9deg] flex items-center justify-center border-[3px] border-white shadow-sm overflow-hidden">
//                                 <Video size={20} className="text-[#121419]" />
//                             </div>
//                         </span>
//                         Businesses
//                     </h1>

//                     <p className="mt-10 text-lg md:text-xl text-[#323745] max-w-2xl leading-relaxed">
//                         We craft high-performing website design and marketing campaigns that attract, engage, and convert your ideal customers.
//                     </p>

//                     <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
//                         <button className="w-full sm:w-auto px-10 py-5 bg-[#17181C] text-white rounded-full font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]">
//                             <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
//                                 <Play size={14} fill="white" className="ml-0.5" />
//                             </div>
//                             Book an intro call
//                         </button>
//                         <button className="w-full sm:w-auto px-10 py-5 bg-white border border-[#D2DAE4] text-[#323745] rounded-full font-bold hover:bg-gray-50 transition-all shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)]">
//                             View Pricing
//                         </button>
//                     </div>

//                     {/* Social Proof Section */}
//                     <div className="mt-16 flex flex-col items-center gap-4">
//                         <div className="flex items-center">
//                             {[1, 2, 3].map((i) => (
//                                 <div key={i} className="w-11 h-11 rounded-full border-[3px] border-white overflow-hidden -ml-3 first:ml-0 bg-gray-100 shadow-sm">
//                                     <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover" />
//                                 </div>
//                             ))}
//                             <div className="w-11 h-11 rounded-full border-[3px] border-white bg-[#F9FAFB] flex items-center justify-center -ml-3 shadow-sm border border-[#E5EAEF]">
//                                 <span className="text-[12px] font-bold text-[#121419]">+2K</span>
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-center gap-1.5">
//                             <div className="flex gap-0.5 text-[#FDB022]">
//                                 {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
//                             </div>
//                             <span className="text-sm font-semibold text-[#50576B]">From 1.5K reviews</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Project Horizontal Ticker */}
//                 <div className="mt-32 w-screen max-w-[100vw]">
//                     <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//                         <div className="flex gap-8 animate-scroll-projects py-4 px-4 hover:[animation-play-state:paused]">
//                             {[...projects, ...projects].map((project, i) => (
//                                 <ProjectCard key={i} {...project} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Logo Cloud */}
//                 <LogoMarquee />

//             </main>

//             <style>
//                 {`
//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-33.33%); }
//           }
//           @keyframes scroll-projects {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-scroll {
//             animation: scroll 40s linear infinite;
//           }
//           .animate-scroll-projects {
//             animation: scroll-projects 50s linear infinite;
//           }
//         `}
//             </style>
//         </div>
//     );
// }

// // E:\woneview\app\component\About2.tsx
// "use client";
// import React from 'react';
// import { Quote, Star, ArrowRight, Video, Play } from 'lucide-react';

// const Badge = () => (
//     <div className="inline-flex items-center gap-2 p-1 pr-4 bg-white border border-[#E2E7EE] rounded-full shadow-sm">
//         <div className="flex items-center gap-2 px-3 py-1 bg-[#E7F8F4] rounded-full">
//             <div className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3CBA8C] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#37BD8E] shadow-[0_0_0_2px_rgba(55,189,142,0.25)]"></span>
//             </div>
//             <span className="text-[12px] font-bold text-[#26916C]">2 slots</span>
//         </div>
//         <span className="text-sm font-medium text-[#121419]">Available this month</span>
//         <div className="w-px h-4 bg-[#E2E7EE] mx-1 hidden sm:block" />
//         <button className="text-sm font-semibold text-[#323745] flex items-center gap-1 hover:text-black transition-colors group hidden sm:flex">
//             Join Now
//             <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
//         </button>
//     </div>
// );

// const FloatingCard = ({ text, author, rotation, side }) => (
//     <div
//         className={`hidden xl:block absolute top-[20%] ${side === 'left' ? 'left-[-15px]' : 'right-[-15px]'} p-6 bg-white rounded-2xl shadow-[0_80px_40px_-5px_rgba(44,45,48,0.05),0_2px_6px_-4px_rgba(15,25,62,0.08)] border border-[#D9D3E8]/30 max-w-[260px] z-20 text-left`}
//         style={{ transform: `rotate(${rotation}deg)` }}
//     >
//         <div className="relative">
//             <Quote className="absolute -top-6 -bottom-18 text-[#9FAAC1]/20 fill-[#9FAAC1]/20" size={40} />
//             <p className="relative text-[15px] text-[#50576B] leading-relaxed mb-4">
//                 "{text}"
//             </p>
//         </div>
//         <p className="text-sm font-bold text-[#121419]">- {author}</p>

//         {/* Decorative shadow card behind */}
//         <div className="absolute inset-0 bg-white border border-[#EFF3F7] rounded-2xl -z-10 translate-y-2 translate-x-2 rotate-[4deg]" />
//     </div>
// );

// const ProjectCard = ({ title, category, metric, metricLabel, image }) => (
//     <div className="flex-shrink-0 w-[320px] sm:w-[450px] bg-white rounded-[40px] border border-[#E2E7EE] p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group cursor-pointer">
//         <div className="relative aspect-[3/2] rounded-[30px] overflow-hidden bg-gray-50">
//             <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
//         </div>
//         <div className="p-6 flex justify-between items-center">
//             <div>
//                 <h6 className="text-xl font-normal text-[#0F1115] mb-1">{title}</h6>
//                 <p className="text-sm text-[#697289]">{category}</p>
//             </div>
//             <div className="text-right">
//                 <p className="text-xl font-normal text-[#0F1115]">{metric}</p>
//                 <p className="text-[11px] font-medium text-[#697289] uppercase tracking-wider">{metricLabel}</p>
//             </div>
//         </div>
//     </div>
// );

// const LogoMarquee = () => {
//     const logos = [
//         { name: 'Acme Corp', icon: '✦' },
//         { name: 'Quantum', icon: '◈' },
//         { name: 'APEX', icon: '▲' },
//         { name: 'Celestial', icon: '❃' },
//         { name: 'Orbit', icon: '◌' }
//     ];

//     return (
//         <div className="mt-8 w-full">
//             <p className="text-center text-[11px] font-bold tracking-[0.2em] text-[#697289] mb-5 uppercase">
//                 Trusted by top companies
//             </p>
//             <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
//                 <div className="flex animate-scroll gap-16 items-center py-0 min-w-full">
//                     {[...logos, ...logos, ...logos].map((logo, i) => (
//                         <div key={i} className="flex items-center gap-3 text-[#99A1B2] transition-colors hover:text-[#121419] cursor-default shrink-0">
//                             <span className="text-2xl">{logo.icon}</span>
//                             <span className="text-xl font-bold tracking-tight">{logo.name}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// // --- Main App Component ---

// export default function About2() {
//     const projects = [
//         { title: "Cloudash", category: "Web design • development", metric: "2x", metricLabel: "Conversion", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
//         { title: "Nova Threads", category: "Web design • development", metric: "4x", metricLabel: "Ad performance", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
//         { title: "OrbitCloud", category: "Web design • development", metric: "+65%", metricLabel: "Sign-ups", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800" },
//         { title: "Vertax Labs", category: "Web design • development", metric: "120%", metricLabel: "Boost in leads", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
//     ];

//     return (
//         <div className="bg-[#FDFDFF] selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">

//             <main className="relative pt-8 pb-2 px-6 max-w-7xl mx-auto flex flex-col items-center">

//                 {/* Floating Testimonials (Desktop Only) */}
//                 <FloatingCard
//                     side="left"
//                     rotation={-15}
//                     text="The team designed a stunning site optimized for conversions. We saw a 40% increase in leads!"
//                     author="Jessica Carter"
//                 />
//                 <FloatingCard
//                     side="right"
//                     rotation={15}
//                     text="Bravio nailed our MVP design with a fast turnaround and incredible attention to detail."
//                     author="Sarah Mitchel"
//                 />

//                 {/* Hero Top */}
//                 <div className="z-10 text-center flex flex-col items-center">
//                     <Badge />

//                     <h1 className="mt-10 text-3xl md:text-4xl lg:text-[60px] font-normal tracking-[-0.05em] text-[#121419] max-w-5xl leading-[1.1] text-balance">
//                         World-class design
//                         <span className="inline-flex items-center gap-1.5 align-middle mx-3">
//                             <div className="w-12 h-12 bg-[#E0F5FF] rounded-xl rotate-[9deg] flex items-center justify-center border-[3px] border-white shadow-sm overflow-hidden">
//                                 <div className="w-5 h-5 bg-[#000] rounded-sm rotate-45" />
//                             </div>
//                             <div className="w-12 h-12 bg-[#FFEFEE] rounded-xl rotate-[-8deg] flex items-center justify-center border-[3px] border-white shadow-sm -ml-5 overflow-hidden">
//                                 <div className="w-5 h-5 bg-[#F24E1E] rounded-full" />
//                             </div>
//                         </span>
//                         and marketing for
//                         <span className="inline-flex items-center align-middle mx-3">
//                             <div className="w-12 h-12 bg-[#FFEFEE] rounded-xl rotate-[9deg] flex items-center justify-center border-[3px] border-white shadow-sm overflow-hidden">
//                                 <Video size={20} className="text-[#121419]" />
//                             </div>
//                         </span>
//                         Businesses
//                     </h1>

//                     <p className="mt-10 text-md text-[#323745] max-w-2xl leading-relaxed">
//                         We craft high-performing website design and marketing campaigns that attract, engage, and convert your ideal customers.
//                     </p>

//                     <div className="mt-5 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
//                         <button className="w-full sm:w-auto px-10 py-3 bg-[#17181C] text-white rounded-full font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]">
//                             <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
//                                 <Play size={14} fill="white" className="ml-0.5" />
//                             </div>
//                             Book an intro call
//                         </button>
//                         <button className="w-full sm:w-auto px-10 py-3 bg-white border border-[#D2DAE4] text-[#323745] rounded-full font-bold hover:bg-gray-50 transition-all shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)]">
//                             View Pricing
//                         </button>
//                     </div>

//                     {/* Social Proof Section */}
//                     <div className="mt-4 flex flex-col items-center gap-4">
//                         <div className="flex items-center">
//                             {[1, 2, 3].map((i) => (
//                                 <div key={i} className="w-11 h-11 rounded-full border-[3px] border-white overflow-hidden -ml-3 first:ml-0 bg-gray-100 shadow-sm">
//                                     <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover" />
//                                 </div>
//                             ))}
//                             <div className="w-11 h-11 rounded-full border-[3px] border-white bg-[#F9FAFB] flex items-center justify-center -ml-3 shadow-sm border border-[#E5EAEF]">
//                                 <span className="text-[12px] font-bold text-[#121419]">+2K</span>
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-center gap-1.5">
//                             <div className="flex gap-0.5 text-[#FDB022]">
//                                 {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
//                             </div>
//                             <span className="text-sm font-semibold text-[#50576B]">From 1.5K reviews</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Project Horizontal Ticker */}
//                 <div className="mt-2 w-screen max-w-[100vw]">
//                     <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//                         <div className="flex gap-8 animate-scroll-projects py-4 px-4 hover:[animation-play-state:paused]">
//                             {[...projects, ...projects].map((project, i) => (
//                                 <ProjectCard key={i} {...project} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Logo Cloud */}
//                 <LogoMarquee />

//             </main>

//             <style>
//                 {`
//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-33.33%); }
//           }
//           @keyframes scroll-projects {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-scroll {
//             animation: scroll 40s linear infinite;
//           }
//           .animate-scroll-projects {
//             animation: scroll-projects 50s linear infinite;
//           }
//         `}
//             </style>
//         </div>
//     );
// }

"use client";
import React from "react";
import { Quote, Star, ArrowRight, Video, Play } from "lucide-react";

const Badge = () => (
  <div className="inline-flex items-center gap-2 p-1 pr-4 bg-white border border-[#E2E7EE] rounded-full shadow-sm">
    <div className="flex items-center gap-2 px-3 py-1 bg-[#E7F8F4] rounded-full">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3CBA8C] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#37BD8E] shadow-[0_0_0_2px_rgba(55,189,142,0.25)]"></span>
      </div>
      <span className="text-[12px] font-bold text-[#26916C]">2 slots</span>
    </div>
    <span className="text-sm font-medium text-[#121419]">
      Available this month
    </span>
    <div className="w-px h-4 bg-[#E2E7EE] mx-1 hidden sm:block" />
    <button className="text-sm font-semibold text-[#323745] flex items-center gap-1 hover:text-black transition-colors group hidden sm:flex">
      Join Now
      <ArrowRight
        size={14}
        className="group-hover:translate-x-0.5 transition-transform"
      />
    </button>
  </div>
);

// Added Interface for FloatingCard
interface FloatingCardProps {
  text: string;
  author: string;
  rotation: number;
  side: "left" | "right";
}

const FloatingCard = ({ text, author, rotation, side }: FloatingCardProps) => (
  <div
    className={`hidden xl:block absolute top-[20%] ${
      side === "left" ? "left-[-15px]" : "right-[-15px]"
    } p-6 bg-white rounded-2xl shadow-[0_80px_40px_-5px_rgba(44,45,48,0.05),0_2px_6px_-4px_rgba(15,25,62,0.08)] border border-[#D9D3E8]/30 max-w-[260px] z-20 text-left`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <div className="relative">
      <Quote
        className="absolute -top-6 -bottom-18 text-[#9FAAC1]/20 fill-[#9FAAC1]/20"
        size={40}
      />
      <p className="relative text-[15px] text-[#50576B] leading-relaxed mb-4">
        {text}
      </p>
    </div>
    <p className="text-sm font-bold text-[#121419]">- {author}</p>

    {/* Decorative shadow card behind */}
    <div className="absolute inset-0 bg-white border border-[#EFF3F7] rounded-2xl -z-10 translate-y-2 translate-x-2 rotate-[4deg]" />
  </div>
);

// Added Interface for ProjectCard
interface ProjectCardProps {
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  image: string;
}

const ProjectCard = ({
  title,
  category,
  metric,
  metricLabel,
  image,
}: ProjectCardProps) => (
  <div className="flex-shrink-0 w-[320px] sm:w-[450px] bg-white rounded-[40px] border border-[#E2E7EE] p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group cursor-pointer">
    <div className="relative aspect-[3/2] rounded-[30px] overflow-hidden bg-gray-50">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
    </div>
    <div className="p-6 flex justify-between items-center">
      <div>
        <h6 className="text-xl font-normal text-[#0F1115] mb-1">{title}</h6>
        <p className="text-sm text-[#697289]">{category}</p>
      </div>
      <div className="text-right">
        <p className="text-xl font-normal text-[#0F1115]">{metric}</p>
        <p className="text-[11px] font-medium text-[#697289] uppercase tracking-wider">
          {metricLabel}
        </p>
      </div>
    </div>
  </div>
);

const LogoMarquee = () => {
  const logos = [
    { name: "Acme Corp", icon: "✦" },
    { name: "Quantum", icon: "◈" },
    { name: "APEX", icon: "▲" },
    { name: "Celestial", icon: "❃" },
    { name: "Orbit", icon: "◌" },
  ];

  return (
    <div className="mt-8 w-full">
      <p className="text-center text-[11px] font-bold tracking-[0.2em] text-[#697289] mb-5 uppercase">
        Trusted by top companies
      </p>
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex animate-scroll gap-16 items-center py-0 min-w-full">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-[#121419] cursor-default shrink-0"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="text-xl font-bold tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function About2() {
  const projects = [
    {
      title: "Cloudash",
      category: "Web design • development",
      metric: "2x",
      metricLabel: "Conversion",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    },
    {
      title: "Nova Threads",
      category: "Web design • development",
      metric: "4x",
      metricLabel: "Ad performance",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    },
    {
      title: "OrbitCloud",
      category: "Web design • development",
      metric: "+65%",
      metricLabel: "Sign-ups",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
    },
    {
      title: "Vertax Labs",
      category: "Web design • development",
      metric: "120%",
      metricLabel: "Boost in leads",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
    },
  ];

  return (
    <div className="templateContainer overflow-x-hidden">
      <main className="relative pt-8 pb-2 px-0 md:px-6 max-w-7xl mx-auto flex flex-col items-center">
        <FloatingCard
          side="left"
          rotation={-15}
          text="The team designed a stunning site optimized for conversions. We saw a 40% increase in leads!"
          author="Jessica Carter"
        />
        <FloatingCard
          side="right"
          rotation={15}
          text="Bravio nailed our MVP design with a fast turnaround and incredible attention to detail."
          author="Sarah Mitchel"
        />

        <div className="z-10 text-center flex flex-col items-center">
          <Badge />

          <h1 className="mt-10 text-3xl md:text-4xl lg:text-[60px] font-normal tracking-[-0.05em] text-[#121419] max-w-5xl leading-[1.1] text-balance">
            World-class design
            <span className="inline-flex items-center gap-1.5 align-middle mx-3">
              <div className="w-12 h-12 bg-[#E0F5FF] rounded-xl rotate-[9deg] flex items-center justify-center border-[3px] border-white shadow-sm overflow-hidden">
                <div className="w-5 h-5 bg-[#000] rounded-sm rotate-45" />
              </div>
              <div className="w-12 h-12 bg-[#FFEFEE] rounded-xl rotate-[-8deg] flex items-center justify-center border-[3px] border-white shadow-sm -ml-5 overflow-hidden">
                <div className="w-5 h-5 bg-[#F24E1E] rounded-full" />
              </div>
            </span>
            and marketing for
            <span className="inline-flex items-center align-middle mx-3">
              <div className="w-12 h-12 bg-[#FFEFEE] rounded-xl rotate-[9deg] flex items-center justify-center border-[3px] border-white shadow-sm overflow-hidden">
                <Video size={20} className="text-[#121419]" />
              </div>
            </span>
            Businesses
          </h1>

          <p className="mt-10 text-md text-[#323745] max-w-2xl leading-relaxed">
            We craft high-performing website design and marketing campaigns that
            attract, engage, and convert your ideal customers.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-3 bg-[#17181C] text-white rounded-full font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]">
              <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
                <Play size={14} fill="white" className="ml-0.5" />
              </div>
              Book an intro call
            </button>
            <button className="w-full sm:w-auto px-10 py-3 bg-white border border-[#D2DAE4] text-[#323745] rounded-full font-bold hover:bg-gray-50 transition-all shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)]">
              View Pricing
            </button>
          </div>

          <div className="mt-4 flex flex-col items-center gap-4">
            <div className="flex items-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full border-[3px] border-white overflow-hidden -ml-3 first:ml-0 bg-gray-100 shadow-sm"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 15}`}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-11 h-11 rounded-full border-[3px] border-white bg-[#F9FAFB] flex items-center justify-center -ml-3 shadow-sm border border-[#E5EAEF]">
                <span className="text-[12px] font-bold text-[#121419]">
                  +2K
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex gap-0.5 text-[#FDB022]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#50576B]">
                From 1.5K reviews
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 w-screen max-w-[100vw]">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-3 animate-scroll-projects py-4 px-4 hover:[animation-play-state:paused]">
              {[...projects, ...projects].map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </div>
        </div>

        <LogoMarquee />
      </main>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-40%); }
          }
          @keyframes scroll-projects {
            0% { transform: translateX(0); }
            100% { transform: translateX(-40%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll-projects {
            animation: scroll-projects 50s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
