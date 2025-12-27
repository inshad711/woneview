// "use client";

// import React, { useState } from "react";
// import { Menu, X, Sparkles } from "lucide-react";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="fixed top-0 left-0 w-full z-50 px-4 py-6">
//             <div className="max-w-7xl mx-auto flex items-center justify-between">
//                 {/* Logo */}
//                 <div className="flex items-center gap-2 group cursor-pointer">
//                     <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
//                         <Sparkles className="text-black w-5 h-5" />
//                     </div>
//                     <span className="text-white font-bold text-xl tracking-tight uppercase">
//                         Mono AI
//                     </span>
//                 </div>

//                 {/* Desktop Links */}
//                 <div className="hidden md:flex items-center bg-white/5 border border-white/10 backdrop-blur-md px-8 py-3 rounded-full space-x-8">
//                     {["About", "Pricing", "Changelog", "Contact"].map((item) => (
//                         <a
//                             key={item}
//                             href={`#${item.toLowerCase()}`}
//                             className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
//                         >
//                             {item}
//                         </a>
//                     ))}
//                 </div>

//                 {/* Desktop CTA */}
//                 <div className="hidden md:block">
//                     <button className="bg-white/15 hover:bg-white/20 border border-white/15 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95">
//                         Get started
//                     </button>
//                 </div>

//                 {/* Mobile Toggle */}
//                 <button
//                     className="md:hidden text-white"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     {isOpen ? <X /> : <Menu />}
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="absolute top-24 left-4 right-4 bg-black/95 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 flex flex-col gap-6 md:hidden animate-in fade-in zoom-in duration-300">
//                     {["About", "Pricing", "Changelog", "Contact"].map((item) => (
//                         <a
//                             key={item}
//                             href={`#${item.toLowerCase()}`}
//                             className="text-white text-lg font-medium border-b border-white/5 pb-2"
//                         >
//                             {item}
//                         </a>
//                     ))}
//                     <button className="bg-white text-black w-full py-4 rounded-2xl font-bold">
//                         Get started
//                     </button>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



"use client";

import React, { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 px-4 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                            <Sparkles className="text-black w-5 h-5" />
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight uppercase">
                            Mono AI
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center bg-white/5 border border-white/10 backdrop-blur-md px-8 py-3 rounded-full space-x-8">
                        {["About", "Pricing", "Changelog", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <button className="bg-white/15 hover:bg-white/20 border border-white/15 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95">
                            Get started
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white z-[60]"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu />
                    </button>
                </div>
            </nav>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Slide Menu */}
            <div
                className={`fixed top-0 left-0 h-screen w-[80%] max-w-sm bg-black/95 
        border-r border-white/10 backdrop-blur-2xl z-50 p-6
        transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 text-white"
                    onClick={() => setIsOpen(false)}
                >
                    <X />
                </button>

                {/* Menu Content */}
                <div className="mt-20 flex flex-col gap-6">
                    {["About", "Pricing", "Changelog", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white text-lg font-medium border-b border-white/10 pb-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}

                    <button className="mt-6 bg-white text-black w-full py-4 rounded-2xl font-bold">
                        Get started
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
