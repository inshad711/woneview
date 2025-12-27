


// // app\component\Cta.tsx
// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { Star, Sparkles } from 'lucide-react';

// const platforms = [
//     "Notion docs",
//     "Canva slides",
//     "Coda apps",
//     "Google sites",
//     "Framer pages",
//     "Obsidian notes"
// ];

// // Added interface to fix the "implicitly has an any type" error
// interface WidgetCardProps {
//     children: React.ReactNode;
//     initialRotation: { x: number; y: number; z: number; translateX?: number };
//     animateRotation: { x: number; y: number; z: number; translateX?: number };
//     className?: string;
//     style?: React.CSSProperties;
// }

// const WidgetCard = ({ children, initialRotation, animateRotation, className, style }: WidgetCardProps) => {
//     const x = useMotionValue(0);
//     const y = useMotionValue(0);

//     const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
//     const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

//     const rotateX = useTransform(mouseY, [-0.5, 0.5], [initialRotation.x + 10, initialRotation.x - 10]);
//     const rotateY = useTransform(mouseX, [-0.5, 0.5], [initialRotation.y - 10, initialRotation.y + 10]);

//     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const width = rect.width;
//         const height = rect.height;
//         const mouseXPos = e.clientX - rect.left;
//         const mouseYPos = e.clientY - rect.top;
//         x.set(mouseXPos / width - 0.5);
//         y.set(mouseYPos / height - 0.5);
//     };

//     const handleMouseLeave = () => {
//         x.set(0);
//         y.set(0);
//     };

//     return (
//         <motion.div
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             initial={{ opacity: 0, ...initialRotation }}
//             animate={{ opacity: 1, ...animateRotation }}
//             style={{
//                 rotateX,
//                 rotateY,
//                 transformStyle: "preserve-3d",
//                 perspective: 1000,
//                 ...style
//             }}
//             transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
//             className={`absolute hidden md:block bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100/50 overflow-hidden pointer-events-auto cursor-pointer ${className}`}
//         >
//             <div style={{ transform: "translateZ(50px)" }} className="h-full w-full relative">
//                 {children}
//                 <motion.div
//                     className="absolute inset-0 pointer-events-none"
//                     style={{
//                         background: useTransform(
//                             mouseX,
//                             [-0.5, 0.5],
//                             ["linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 70%)", "linear-gradient(120deg, rgba(255,255,255,0) 10%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0) 50%)"]
//                         )
//                     }}
//                 />
//             </div>
//         </motion.div>
//     );
// };

// const HeroSection = () => {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setIndex((prev) => (prev + 1) % platforms.length);
//         }, 3000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 py-12 overflow-hidden bg-white selection:bg-black selection:text-white">

//             <motion.div
//                 animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="absolute top-[20%] left-[10%] text-yellow-400"
//             >
//                 <Sparkles size={32} strokeWidth={1} fill="currentColor" />
//             </motion.div>
//             <motion.div
//                 animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
//                 transition={{ duration: 4, repeat: Infinity, delay: 1 }}
//                 className="absolute bottom-[30%] right-[12%] text-blue-400"
//             >
//                 <Star size={24} strokeWidth={1} fill="currentColor" />
//             </motion.div>

//             <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
//                 <div className="relative w-full max-w-7xl h-full">
//                     <WidgetCard
//                         className="left-[5%] top-1/2 -translate-y-1/2 w-52 h-64 p-6"
//                         initialRotation={{ x: 0, y: 20, z: -10, translateX: -50 }}
//                         animateRotation={{ x: 0, y: -12, z: -8, translateX: 0 }}
//                     >
//                         <div className="flex flex-col h-full items-center justify-center text-center space-y-4">
//                             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">San Francisco</span>
//                             <div className="relative">
//                                 <div className="w-20 h-20 bg-yellow-100 rounded-full blur-xl absolute inset-0 animate-pulse" />
//                                 <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full relative z-10 shadow-lg shadow-yellow-200" />
//                             </div>
//                             <div>
//                                 <div className="text-4xl font-bold text-gray-800 tracking-tighter">65°F</div>
//                                 <div className="text-xs font-medium text-gray-400 mt-1">scattered clouds</div>
//                             </div>
//                         </div>
//                     </WidgetCard>

//                     <WidgetCard
//                         className="right-[5%] top-1/2 -translate-y-1/2 w-72 h-48 p-5"
//                         initialRotation={{ x: 0, y: -20, z: 10, translateX: 50 }}
//                         animateRotation={{ x: 0, y: 12, z: 8, translateX: 0 }}
//                     >
//                         <div className="h-full flex flex-col justify-between">
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-2">
//                                     <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
//                                     <span className="text-[11px] font-bold text-gray-500 uppercase">Project Deadline</span>
//                                 </div>
//                                 <div className="px-2 py-0.5 bg-gray-100 rounded text-[9px] font-bold text-gray-400 uppercase">Live</div>
//                             </div>
//                             <div className="flex justify-between items-center gap-2 py-4">
//                                 {[{ v: '04', l: 'Hours' }, { v: '12', l: 'Mins' }, { v: '02', l: 'Secs' }].map((t, i) => (
//                                     <React.Fragment key={t.l}>
//                                         <div className="flex-1 bg-gray-50/80 rounded-xl p-3 border border-gray-100 text-center">
//                                             <div className="text-2xl font-mono font-bold text-gray-800 leading-none">{t.v}</div>
//                                             <div className="text-[8px] uppercase text-gray-400 font-bold mt-1 tracking-wider">{t.l}</div>
//                                         </div>
//                                         {i < 2 && <div className="text-xl font-bold text-gray-200">:</div>}
//                                     </React.Fragment>
//                                 ))}
//                             </div>
//                             <div className="text-[10px] text-right text-gray-400 font-bold italic">Until launch</div>
//                         </div>
//                     </WidgetCard>
//                 </div>
//             </div>

//             <div className="z-20 text-center max-w-4xl mx-auto flex flex-col items-center">
//                 <motion.h1
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-5xl md:text-7xl lg:text-5xl font-black tracking-tight text-gray-900 leading-[1.05]"
//                 >
//                     Powerful widgets <br /> to level up your
//                 </motion.h1>

//                 <div className="mt-4 flex items-center justify-center">
//                     <motion.div
//                         layout
//                         className="inline-flex items-center justify-center bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-2xl shadow-2xl overflow-hidden min-w-[280px] md:min-w-[420px]"
//                     >
//                         <AnimatePresence mode="wait">
//                             <motion.span
//                                 key={platforms[index]}
//                                 initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
//                                 animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
//                                 exit={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
//                                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//                                 className="text-xl md:text-3xl lg:text-4xl font-black tracking-tight whitespace-nowrap"
//                             >
//                                 {platforms[index]}
//                             </motion.span>
//                         </AnimatePresence>
//                     </motion.div>
//                 </div>

//                 <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="mt-8 text-xl md:text-2xl text-gray-500 font-medium tracking-tight max-w-lg"
//                 >
//                     Fully customizable, and <span className="text-gray-900 font-bold">seamless to set up.</span>
//                 </motion.p>

//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.4 }}
//                     className="mt-12 w-full max-w-md group"
//                 >
//                     <div className="relative flex p-1.5 bg-white border border-gray-200 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] focus-within:ring-4 focus-within:ring-black/5 transition-all duration-300">
//                         <input
//                             type="email"
//                             placeholder="Email address"
//                             className="flex-1 bg-transparent px-5 py-4 outline-none text-lg text-gray-700 placeholder:text-gray-400 font-medium"
//                         />
//                         <button className="bg-black text-white px-10 py-4 rounded-[14px] font-bold text-lg hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg shadow-black/10">
//                             Sign up
//                         </button>
//                     </div>

//                     <div className="mt-10 flex flex-col items-center gap-4">
//                         <div className="flex items-center gap-3 w-full max-w-[200px]">
//                             <div className="h-px flex-1 bg-gray-200" />
//                             <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Or login with</span>
//                             <div className="h-px flex-1 bg-gray-200" />
//                         </div>

//                         <button className="group flex items-center gap-3 px-8 py-3.5 bg-white border border-gray-200 rounded-2xl">
//                             <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all" />
//                             <span className="text-sm font-bold text-gray-700">Continue with Google</span>
//                         </button>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default function Cta() {
//     return (
//         <div className=" bg-gray-50/30">
//             <HeroSection />
//         </div>
//     );
// }

// // E:\woneview\app\component\Cta.tsx
// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { Star, Sparkles } from 'lucide-react';

// const platforms = [
//     "Notion docs",
//     "Canva slides",
//     "Coda apps",
//     "Google sites",
//     "Framer pages",
//     "Obsidian notes"
// ];

// // Reusable Interactive Image Container
// const InteractiveImage = ({ src, initialRotation, animateRotation, className, style, alt }) => {
//     const x = useMotionValue(0);
//     const y = useMotionValue(0);

//     const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
//     const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

//     const rotateX = useTransform(mouseY, [-0.5, 0.5], [initialRotation.x + 10, initialRotation.x - 10]);
//     const rotateY = useTransform(mouseX, [-0.5, 0.5], [initialRotation.y - 10, initialRotation.y + 10]);

//     const handleMouseMove = (e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const width = rect.width;
//         const height = rect.height;
//         const mouseXPos = e.clientX - rect.left;
//         const mouseYPos = e.clientY - rect.top;
//         x.set(mouseXPos / width - 0.5);
//         y.set(mouseYPos / height - 0.5);
//     };

//     const handleMouseLeave = () => {
//         x.set(0);
//         y.set(0);
//     };

//     return (
//         <motion.div
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             initial={{ opacity: 0, ...initialRotation }}
//             animate={{ opacity: 1, ...animateRotation }}
//             style={{
//                 rotateX,
//                 rotateY,
//                 transformStyle: "preserve-3d",
//                 perspective: 1000,
//                 ...style
//             }}
//             transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
//             className={`absolute hidden lg:block rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white/20 overflow-hidden pointer-events-auto cursor-pointer ${className}`}
//         >
//             <div style={{ transform: "translateZ(60px)" }} className="h-full w-full relative">
//                 <img
//                     src={src}
//                     alt={alt}
//                     className="w-full h-full object-contain"
//                     onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=500&auto=format&fit=crop'; }}
//                 />
//                 {/* Gloss Overlay */}
//                 <motion.div
//                     className="absolute inset-0 pointer-events-none"
//                     style={{
//                         background: useTransform(
//                             mouseX,
//                             [-0.5, 0.5],
//                             [
//                                 "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 70%)",
//                                 "linear-gradient(120deg, rgba(255,255,255,0) 10%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0) 50%)"
//                             ]
//                         )
//                     }}
//                 />
//             </div>
//         </motion.div>
//     );
// };

// const HeroSection = () => {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setIndex((prev) => (prev + 1) % platforms.length);
//         }, 3000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <section className="relative flex flex-col items-center justify-center  px-4 py-32 overflow-hidden bg-[#fafafa] selection:bg-black selection:text-white">

//             {/* Ambient Background Elements */}
//             <motion.div
//                 animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute top-[15%] left-[15%] text-amber-400/60"
//             >
//                 <Sparkles size={48} strokeWidth={1} fill="currentColor" />
//             </motion.div>
//             <motion.div
//                 animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
//                 transition={{ duration: 6, repeat: Infinity, delay: 1 }}
//                 className="absolute bottom-[20%] right-[15%] text-indigo-400/40"
//             >
//                 <Star size={40} strokeWidth={1} fill="currentColor" />
//             </motion.div>

//             {/* Floating Visuals Layer */}
//             <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
//                 <div className="relative w-full max-w-[1400px] h-full">

//                     {/* Left Image: Weather/Utility Widget Concept */}
//                     <InteractiveImage
//                         alt="Weather Widget Preview"
//                         src="https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/component-cta-widgets-left@2x.png"
//                         className="left-[4%] top-[25%] w-64 h-80 rotate-[-4deg]"
//                         initialRotation={{ x: 0, y: 15, z: -5, translateX: -40 }}
//                         animateRotation={{ x: 0, y: -8, z: -4, translateX: 0 }}
//                     />

//                     {/* Right Image: Calendar/Planner Widget Concept */}
//                     <InteractiveImage
//                         alt="Task Management Preview"
//                         src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop"
//                         className="right-[4%] bottom-[20%] w-80 h-56 rotate-[3deg]"
//                         initialRotation={{ x: 0, y: -15, z: 5, translateX: 40 }}
//                         animateRotation={{ x: 0, y: 10, z: 6, translateX: 0 }}
//                     />
//                 </div>
//             </div>

//             {/* Content Layer */}
//             <div className="z-20 text-center max-w-4xl mx-auto flex flex-col items-center">


//                 <motion.h1
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[0.95]"
//                 >
//                     Powerful widgets <br /> to level up your
//                 </motion.h1>
//                 <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="mt-6 text-lg md:text-xl text-gray-400 font-medium tracking-tight max-w-xl leading-relaxed"
//                 >
//                     Embed beautiful, functional blocks into your favorite workspace. <br /> <span className="text-gray-900 font-bold underline decoration-indigo-500/30 underline-offset-4">No coding required.</span>
//                 </motion.p>

//                 <div className="mt-6 flex items-center justify-center">
//                     <motion.div
//                         className="inline-flex items-center cursor-pointer justify-center bg-black text-white px-6 py-3 rounded-[2rem] shadow-2xl"
//                     >

//                         <AnimatePresence mode="wait">
//                             <motion.span
//                                 key={platforms[index]}
//                                 initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
//                                 animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
//                                 exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
//                                 transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
//                                 className="text-lg md:text-xl w-fit lg:text-2xl font-normal tracking-tighter whitespace-nowrap"
//                             >
//                                 {platforms[index]}
//                             </motion.span>
//                         </AnimatePresence>
//                     </motion.div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default function Cta() {
//     return (
//         <div className="">
//             <HeroSection />
//         </div>
//     );
// }

"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

const platforms = [
    "Notion docs",
    "Canva slides",
    "Coda apps",
    "Google sites",
    "Framer pages",
    "Obsidian notes"
];

// 1. Define Props Interface for TypeScript
interface InteractiveImageProps {
    src: string;
    initialRotation: { x: number; y: number; z: number; translateX?: number };
    animateRotation: { x: number; y: number; z: number; translateX?: number };
    className?: string;
    style?: React.CSSProperties;
    alt: string;
}

// 2. Applied types to the component
const InteractiveImage = ({
    src,
    initialRotation,
    animateRotation,
    className,
    style,
    alt
}: InteractiveImageProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [initialRotation.x + 10, initialRotation.x - 10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [initialRotation.y - 10, initialRotation.y + 10]);

    // Added type for the mouse event
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        x.set(mouseXPos / width - 0.5);
        y.set(mouseYPos / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, ...initialRotation }}
            animate={{ opacity: 1, ...animateRotation }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000,
                ...style
            }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className={`absolute hidden lg:block rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white/20 overflow-hidden pointer-events-auto cursor-pointer ${className}`}
        >
            <div style={{ transform: "translateZ(60px)" }} className="h-full w-full relative">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        // Type assertion for HTMLImageElement
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=500&auto=format&fit=crop';
                    }}
                />
                {/* Gloss Overlay */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: useTransform(
                            mouseX,
                            [-0.5, 0.5],
                            [
                                "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 70%)",
                                "linear-gradient(120deg, rgba(255,255,255,0) 10%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0) 50%)"
                            ]
                        )
                    }}
                />
            </div>
        </motion.div>
    );
};

const HeroSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % platforms.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center px-4 py-32 overflow-hidden bg-[#fafafa] selection:bg-black selection:text-white">

            {/* Ambient Background Elements */}
            <motion.div
                animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[15%] left-[15%] text-amber-400/60"
            >
                <Sparkles size={48} strokeWidth={1} fill="currentColor" />
            </motion.div>
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute bottom-[20%] right-[15%] text-indigo-400/40"
            >
                <Star size={40} strokeWidth={1} fill="currentColor" />
            </motion.div>

            {/* Floating Visuals Layer */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="relative w-full max-w-[1400px] h-full">

                    {/* Left Image: Weather/Utility Widget Concept */}
                    <InteractiveImage
                        alt="Weather Widget Preview"
                        src="https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/component-cta-widgets-left@2x.png"
                        className="left-[4%] top-[25%] w-64 h-80 rotate-[-4deg]"
                        initialRotation={{ x: 0, y: 15, z: -5, translateX: -40 }}
                        animateRotation={{ x: 0, y: -8, z: -4, translateX: 0 }}
                    />

                    {/* Right Image: Calendar/Planner Widget Concept */}
                    <InteractiveImage
                        alt="Task Management Preview"
                        src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop"
                        className="right-[4%] bottom-[20%] w-80 h-56 rotate-[3deg]"
                        initialRotation={{ x: 0, y: -15, z: 5, translateX: 40 }}
                        animateRotation={{ x: 0, y: 10, z: 6, translateX: 0 }}
                    />
                </div>
            </div>

            {/* Content Layer */}
            <div className="z-20 text-center max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[0.95]"
                >
                    Powerful widgets <br /> to level up your
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-gray-400 font-medium tracking-tight max-w-xl leading-relaxed"
                >
                    Embed beautiful, functional blocks into your favorite workspace. <br />
                    <span className="text-gray-900 font-bold underline decoration-indigo-500/30 underline-offset-4">
                        No coding required.
                    </span>
                </motion.p>

                <div className="mt-6 flex items-center justify-center">
                    <motion.div
                        className="inline-flex items-center cursor-pointer justify-center bg-black text-white px-6 py-3 rounded-[2rem] shadow-2xl"
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={platforms[index]}
                                initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
                                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                                className="text-lg md:text-xl w-fit lg:text-2xl font-normal tracking-tighter whitespace-nowrap"
                            >
                                {platforms[index]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default function Cta() {
    return (
        <div className="">
            <HeroSection />
        </div>
    );
}