// "use client";
// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const AboutSection = () => {
//     const stats = [
//         { value: '239', label: 'Tours Packs', icon: 'https://framerusercontent.com/images/bN51nhuqlrmwyra2WX2DEgefids.svg' },
//         { value: '320', label: 'Tour Destination', icon: 'https://framerusercontent.com/images/wKpH0JiJC2SnpHPCQ1CFRvjo1KM.png?width=224&height=224' },
//         { value: '400', label: 'Travel Guides', icon: 'https://framerusercontent.com/images/aSTRnoapRBPpq7s5pWNIb35Mo.svg?width=56&height=56' },
//         { value: '23', label: 'Premium Resorts', icon: 'https://framerusercontent.com/images/F1lHVlWUSc7GA1a6tRqFUEvV1HE.svg?width=56&height=56' },
//     ];

//     return (
//         <section className="py-12 md:pt-24 px-4 bg-white overflow-hidden font-sans">
//             <div className="max-w-[1200px] mx-auto">
//                 <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

//                     {/* 1. Counter & Image Group */}
//                     <div className="w-full lg:w-[55%] flex flex-col md:flex-row items-center gap-6 relative">

//                         {/* Stats Column (Left of Image) */}
//                         <div className="grid grid-cols-1 gap-4 w-full md:w-[220px] shrink-0">
//                             {stats.slice(0, 4).map((stat, idx) => (
//                                 <div
//                                     key={idx}
//                                     className="bg-white border border-[#E6E6E8] p-5 rounded-[10px] flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
//                                 >
//                                     <div className="w-12 h-12 flex-shrink-0">
//                                         <img src={stat.icon} alt={stat.label} className="w-full h-full object-contain" />
//                                     </div>
//                                     <div>
//                                         <h3 className="text-2xl font-bold text-[#0A0322] leading-none">{stat.value}</h3>
//                                         <p className="text-[13px] text-[#6E717B] mt-1 whitespace-nowrap">{stat.label}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Main Image Wrapper */}
//                         <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[500px] flex-1">
//                             {/* Background Blob Shape */}
//                             <img
//                                 src="https://framerusercontent.com/images/Xr02RkbtA3XcerfcnqM5aBuk2A.png"
//                                 className="absolute -top-10 -right-10 w-[120%] h-[120%] object-contain -z-0 opacity-40 pointer-events-none"
//                                 alt=""
//                             />
//                             <div className="relative z-10 w-full h-full rounded-[20px] overflow-hidden">
//                                 <img
//                                     src="/image/dfd.png"
//                                     className="w-full h-full object-contain"
//                                     alt="Nature Beauty"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* 2. Text Content Wrapper */}
//                     <div className="w-full lg:w-[45%] flex flex-col gap-8">
//                         <div className="flex flex-col gap-3">
//                             <p className="text-[#FF6321] font-semibold text-lg tracking-wide uppercase">About Us</p>
//                             <h2 className="text-[36px] md:text-[42px] font-normal text-[#0A0322] leading-[1.1]">
//                                 Discover The <br />
//                                 Beauty of Nature
//                             </h2>
//                         </div>

//                         <div className="flex flex-col gap-6">
//                             {/* Features List */}
//                             <div className="flex flex-row gap-4">
//                                 <div className="flex items-center gap-4">
//                                     <div className="w-10 h-10 shrink-0">
//                                         <img src="https://framerusercontent.com/images/V90QeGv9AwkWRMF4fL2b2pqq9U.svg" alt="icon" className="w-full h-full" />
//                                     </div>
//                                     <div>
//                                         <p className="font-bold text-[#0A0322] text-lg">No Booking Fee</p>
//                                         <p className="text-[#0A0322] text-sm opacity-80">Rate Guarantee</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-4">
//                                     <div className="w-10 h-10 shrink-0">
//                                         <img src="https://framerusercontent.com/images/wmFrqICvmll1nODcjuVpRN5EAE.svg" alt="icon" className="w-full h-full" />
//                                     </div>
//                                     <p className="font-bold text-[#0A0322] text-lg">24/7 Emergency Helpline</p>
//                                 </div>
//                             </div>

//                             {/* Description Text */}
//                             <p className="text-[#6E717B] text-lg leading-relaxed">
//                                 Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure
//                             </p>
//                         </div>

//                         {/* CTA Button */}
//                         <div className="pt-4">
//                             <a
//                                 href="/contact"
//                                 className="group relative inline-flex items-center justify-between gap-6 px-4 py-2 border border-[#0A0322] rounded-[20px] bg-white transition-all overflow-hidden"
//                             >
//                                 <span className="relative z-10 text-[#0A0322] font-bold text-lg group-hover:text-white transition-colors duration-300">
//                                     Get In Touch
//                                 </span>

//                                 {/* The "Overlay" effect from your code */}
//                                 <div className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#FFA11F] transition-transform group-hover:scale-110">
//                                     <ArrowRight className="w-4 h-4 text-white" />
//                                 </div>

//                                 {/* Background Fill on Hover */}
//                                 <div className="absolute inset-0 bg-[#0A0322] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
//                             </a>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default function About() {
//     return (
//         <div className="templateContainer">
//             <AboutSection />
//         </div>
//     );
// }


"use client";
import React from 'react';
// 1. Added more Lucide icons
import { ArrowRight, Package, MapPin, Users, Hotel } from 'lucide-react';

const AboutSection = () => {
    // 2. Updated stats to use Icon components
    const stats = [
        { value: '239', label: 'Tours Packs', Icon: Package },
        { value: '320', label: 'Tour Destination', Icon: MapPin },
        { value: '400', label: 'Travel Guides', Icon: Users },
        { value: '23', label: 'Premium Resorts', Icon: Hotel },
    ];

    return (
        <section className="py-12 md:pt-24 px-4 bg-white overflow-hidden font-sans">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* 1. Counter & Image Group */}
                    <div className="w-full lg:w-[55%] flex flex-col md:flex-row items-center gap-6 relative">

                        {/* Stats Column (Left of Image) */}
                        <div className="grid grid-cols-1 gap-4 w-full md:w-[220px] shrink-0">
                            {stats.map((stat, idx) => {
                                // Extract the icon component
                                const { Icon } = stat;
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white border border-[#E6E6E8] p-5 rounded-[10px] flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow group/card"
                                    >
                                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#FF6321]/90 rounded-lg group-hover/card:bg-[#FF6321]/10 transition-colors">
                                            {/* 3. Render the Lucide Icon */}
                                            <Icon className="w-6 h-6 text-[#fff]" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#0A0322] leading-none">{stat.value}</h3>
                                            <p className="text-[13px] text-[#6E717B] mt-1 whitespace-nowrap">{stat.label}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Main Image Wrapper */}
                        <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[500px] flex-1">
                            <img
                                src="https://framerusercontent.com/images/Xr02RkbtA3XcerfcnqM5aBuk2A.png"
                                className="absolute -top-10 -right-10 w-[120%] h-[120%] object-contain -z-0 opacity-40 pointer-events-none"
                                alt=""
                            />
                            <div className="relative z-10 w-full h-full rounded-[20px] overflow-hidden">
                                <img
                                    src="/image/dfd.png"
                                    className="w-full h-full object-contain"
                                    alt="Nature Beauty"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 2. Text Content Wrapper */}
                    <div className="w-full lg:w-[45%] flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <p className="text-[#FF6321] font-semibold text-lg tracking-wide uppercase">About Us</p>
                            <h2 className="text-[36px] md:text-[42px] font-normal text-[#0A0322] leading-[1.1]">
                                Discover The <br />
                                Beauty of Nature
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 shrink-0 bg-[#FF6321]/10 rounded-full flex items-center justify-center">
                                        {/* You can also swap these bottom icons to Lucide if needed */}
                                        <img src="https://framerusercontent.com/images/V90QeGv9AwkWRMF4fL2b2pqq9U.svg" alt="icon" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#0A0322] text-lg">No Booking Fee</p>
                                        <p className="text-[#0A0322] text-sm opacity-80">Rate Guarantee</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 shrink-0 bg-[#FF6321]/10 rounded-full flex items-center justify-center">
                                        <img src="https://framerusercontent.com/images/wmFrqICvmll1nODcjuVpRN5EAE.svg" alt="icon" className="w-6 h-6" />
                                    </div>
                                    <p className="font-bold text-[#0A0322] text-lg">24/7 Helpline</p>
                                </div>
                            </div>

                            <p className="text-[#6E717B] text-lg leading-relaxed">
                                Travor is one of the most popular Travel agency for those who want to explore the world and try to make adventure.
                            </p>
                        </div>

                        <div className="pt-4">
                            <a
                                href="/contact"
                                className="group relative inline-flex items-center justify-between gap-6 px-4 py-2 border border-[#0A0322] rounded-[20px] bg-white transition-all overflow-hidden"
                            >
                                <span className="relative z-10 text-[#0A0322] font-bold text-lg group-hover:text-white transition-colors duration-300">
                                    Get In Touch
                                </span>
                                <div className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#FFA11F] transition-transform group-hover:scale-110">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                                <div className="absolute inset-0 bg-[#0A0322] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default function About() {
    return (
        <div className="templateContainer">
            <AboutSection />
        </div>
    );
}