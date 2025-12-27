// "use client";
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { Phone, Mail, ChevronRight } from 'lucide-react';

// /**
//  * AnimatedCharacter Component
//  * Handles the individual character reveal logic based on scroll progress.
//  */
// const AnimatedCharacter = ({ char, progress, range }) => {
//     // Transform scroll progress to opacity and blur
//     const opacity = useTransform(progress, range, [0.2, 1]);
//     const blur = useTransform(progress, range, ['8px', '0px']);
//     const y = useTransform(progress, range, [10, 0]);

//     return (
//         <motion.span
//             style={{ opacity, filter: `blur(${blur})`, y, display: 'inline-block' }}
//             className="char"
//         >
//             {char === ' ' ? '\u00A0' : char}
//         </motion.span>
//     );
// };

// /**
//  * TextRevealSection Component
//  * Splitting text into characters and mapping them to scroll progress.
//  */
// const TextRevealSection = ({ text }) => {
//     const containerRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start end", "end start"]
//     });

//     const characters = text.split("");

//     return (
//         <div ref={containerRef} className="px-[4vw] py-[15vh] md:py-[25vh] flex flex-col justify-center items-center bg-white overflow-hidden">
//             <div className="max-w-6xl w-full mx-auto text-center">
//                 <h2 className="text-[32px] md:text-5xl lg:text-7xl leading-[1.15] font-serif text-black">
//                     {characters.map((char, i) => {
//                         // Define the range for each character to appear
//                         const start = i / characters.length;
//                         const end = (i + 1) / characters.length;
//                         return (
//                             <AnimatedCharacter
//                                 key={i}
//                                 char={char}
//                                 progress={scrollYProgress}
//                                 range={[start * 0.6, (start * 0.6) + 0.1]}
//                             />
//                         );
//                     })}
//                 </h2>
//             </div>
//         </div>
//     );
// };

// /**
//  * Navbar Component
//  */
// const Navbar = () => (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
//         <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
//             <div className="hidden lg:flex gap-8 text-[11px] font-bold tracking-widest uppercase text-gray-800">
//                 <a href="#" className="hover:text-amber-600 transition-colors">About</a>
//                 <a href="#" className="hover:text-amber-600 transition-colors">Quality</a>
//                 <a href="#" className="hover:text-amber-600 transition-colors">Authenticity</a>
//                 <a href="#" className="hover:text-amber-600 transition-colors">Counterfeits</a>
//             </div>

//             <div className="flex-shrink-0">
//                 {/* Placeholder for Logo */}
//                 <div className="flex items-center gap-2">
//                     <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">TPG</div>
//                     <span className="font-serif text-xl font-bold tracking-tight">THAIGER PHARMA</span>
//                 </div>
//             </div>

//             <div className="flex items-center gap-6">
//                 <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-black text-[12px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
//                     Contact <Mail size={14} />
//                 </button>
//                 <div className="lg:hidden text-black cursor-pointer">
//                     <div className="w-6 h-0.5 bg-black mb-1"></div>
//                     <div className="w-6 h-0.5 bg-black mb-1"></div>
//                     <div className="w-6 h-0.5 bg-black"></div>
//                 </div>
//             </div>
//         </div>
//     </nav>
// );

// /**
//  * HeroSection Component
//  */
// const HeroSection = () => (
//     <section className="relative pt-20 bg-[#f8f8f8] min-h-[80vh] flex flex-col lg:flex-row items-stretch overflow-hidden">
//         {/* Left Visual Content */}
//         <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
//             <img
//                 src="https://images.unsplash.com/photo-1579152276503-68fe286c5847?auto=format&fit=crop&q=80&w=1200"
//                 alt="Laboratory"
//                 className="w-full h-full object-cover grayscale"
//             />
//             <div className="absolute bottom-10 left-10 z-20 text-white">
//                 <h3 className="text-4xl font-serif mb-2">Purity & Precision</h3>
//                 <p className="text-gray-200 max-w-md">Our manufacturing facilities adhere to the highest international standards of safety and efficacy.</p>
//             </div>
//         </div>

//         {/* Right Product Display Content */}
//         <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white">
//             <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs block mb-4">New Release</span>
//                 <h1 className="text-5xl lg:text-7xl font-serif text-black mb-6">Injectable</h1>
//                 <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
//                     Premium, pharmaceutical-grade injectable products engineered for superior purity and performance. Our latest line represents the pinnacle of generic manufacturing.
//                 </p>
//                 <button className="flex items-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all group">
//                     View Products <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//             </motion.div>
//         </div>
//     </section>
// );

// /**
//  * Main App Component
//  */
// export default function AimatedText() {
//     const revealText = "Thaiger Pharma Group specializes in manufacturing and distributing high-quality generic pharmaceutical products.";

//     return (
//         <main className="min-h-screen bg-white selection:bg-amber-100 selection:text-amber-900">
//             <Navbar />

//             <HeroSection />

//             {/* Scrollable Space to demonstrate animation */}
//             <TextRevealSection text={revealText} />

//             {/* Footer / Extra Content to allow scrolling past */}
//             <section className="h-[100vh] bg-black text-white flex items-center justify-center">
//                 <div className="text-center px-6">
//                     <h4 className="text-sm font-bold uppercase tracking-[0.4em] mb-4 text-gray-500">Excellence in Pharmaceuticals</h4>
//                     <p className="text-3xl font-serif max-w-2xl mx-auto">Providing global healthcare solutions with uncompromising standards since 2007.</p>
//                 </div>
//             </section>
//         </main>
//     );
// }

// "use client";
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { Phone, Mail, ChevronRight } from 'lucide-react';

// /**
//  * AnimatedCharacter Component
//  * Handles the individual character reveal logic based on scroll progress.
//  */
// const AnimatedCharacter = ({ char, progress, range }) => {
//     // Transform scroll progress to opacity and blur
//     const opacity = useTransform(progress, range, [0.2, 1]);
//     const blur = useTransform(progress, range, ['8px', '0px']);
//     const y = useTransform(progress, range, [10, 0]);

//     return (
//         <motion.span
//             style={{ opacity, filter: `blur(${blur})`, y, display: 'inline-block' }}
//             className="char"
//         >
//             {char === ' ' ? '\u00A0' : char}
//         </motion.span>
//     );
// };

// /**
//  * TextRevealSection Component
//  * Splitting text into characters and mapping them to scroll progress.
//  */
// const TextRevealSection = ({ text }) => {
//     const containerRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start end", "end start"]
//     });

//     const characters = text.split("");

//     return (
//         <div ref={containerRef} className="px-[4vw] py-[15vh] md:py-[25vh] flex flex-col justify-center items-center bg-white overflow-hidden">
//             <div className="max-w-6xl w-full mx-auto text-center">
//                 <h2 className="text-[32px] md:text-5xl lg:text-7xl leading-[1.15] font-serif text-black">
//                     {characters.map((char, i) => {
//                         // Define the range for each character to appear
//                         const start = i / characters.length;
//                         const end = (i + 1) / characters.length;
//                         return (
//                             <AnimatedCharacter
//                                 key={i}
//                                 char={char}
//                                 progress={scrollYProgress}
//                                 range={[start * 0.6, (start * 0.6) + 0.1]}
//                             />
//                         );
//                     })}
//                 </h2>
//             </div>
//         </div>
//     );
// };

// /**
//  * Navbar Component
//  */
// const Navbar = () => (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
//         <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
//             <div className="hidden lg:flex gap-8 text-[11px] font-bold tracking-widest uppercase text-gray-800">
//                 <a href="#" className="hover:text-amber-600 transition-colors">About</a>
//                 <a href="#" className="hover:text-amber-600 transition-colors">Quality</a>
//                 <a href="#" className="hover:text-amber-600 transition-colors">Authenticity</a>
//                 <a href="#" className="hover:text-amber-600 transition-colors">Counterfeits</a>
//             </div>

//             <div className="flex-shrink-0">
//                 {/* Placeholder for Logo */}
//                 <div className="flex items-center gap-2">
//                     <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">TPG</div>
//                     <span className="font-serif text-xl font-bold tracking-tight">THAIGER PHARMA</span>
//                 </div>
//             </div>

//             <div className="flex items-center gap-6">
//                 <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-black text-[12px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
//                     Contact <Mail size={14} />
//                 </button>
//                 <div className="lg:hidden text-black cursor-pointer">
//                     <div className="w-6 h-0.5 bg-black mb-1"></div>
//                     <div className="w-6 h-0.5 bg-black mb-1"></div>
//                     <div className="w-6 h-0.5 bg-black"></div>
//                 </div>
//             </div>
//         </div>
//     </nav>
// );

// /**
//  * HeroSection Component
//  */
// const HeroSection = () => (
//     <section className="relative pt-20 bg-[#f8f8f8] min-h-[80vh] flex flex-col lg:flex-row items-stretch overflow-hidden">
//         {/* Left Visual Content */}
//         <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
//             <img
//                 src="https://images.unsplash.com/photo-1579152276503-68fe286c5847?auto=format&fit=crop&q=80&w=1200"
//                 alt="Laboratory"
//                 className="w-full h-full object-cover grayscale"
//             />
//             <div className="absolute bottom-10 left-10 z-20 text-white">
//                 <h3 className="text-4xl font-serif mb-2">Purity & Precision</h3>
//                 <p className="text-gray-200 max-w-md">Our manufacturing facilities adhere to the highest international standards of safety and efficacy.</p>
//             </div>
//         </div>

//         {/* Right Product Display Content */}
//         <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white">
//             <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs block mb-4">New Release</span>
//                 <h1 className="text-5xl lg:text-7xl font-serif text-black mb-6">Injectable</h1>
//                 <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
//                     Premium, pharmaceutical-grade injectable products engineered for superior purity and performance. Our latest line represents the pinnacle of generic manufacturing.
//                 </p>
//                 <button className="flex items-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all group">
//                     View Products <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//             </motion.div>
//         </div>
//     </section>
// );

// /**
//  * Main App Component
//  */
// export default function TextReveal() {
//     const revealText = "Thaiger Pharma Group specializes in manufacturing and distributing high-quality generic pharmaceutical products.";

//     return (
//         <main className="min-h-screen bg-white selection:bg-amber-100 selection:text-amber-900">
//             {/* <Navbar /> */}

//             {/* <HeroSection /> */}

//             {/* Scrollable Space to demonstrate animation */}
//             <TextRevealSection text={revealText} />

//         </main>
//     );
// }

// "use client";
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// /**
//  * AnimatedCharacter Component
//  * Handles the individual reveal logic for each letter based on scroll progress.
//  */
// const AnimatedCharacter = ({ char, progress, range }) => {
//     // Map scroll progress to opacity and blur
//     const opacity = useTransform(progress, range, [0.7, 1]);
//     const blur = useTransform(progress, range, [0.6, 0]);
//     const color = useTransform(progress, range, ["#9ca3af", "#000000"]);

//     return (
//         <motion.span
//             style={{
//                 opacity,
//                 filter: useTransform(blur, (v) => `blur(${v}px)`),
//                 color,
//                 display: 'inline-block',
//                 whiteSpace: 'pre'
//             }}
//             className="transition-colors duration-300"
//         >
//             {char}
//         </motion.span>
//     );
// };

// /**
//  * WordRevealSection Component
//  * Uses a sticky container to keep the text centered while it reveals.
//  */
// const WordRevealSection = () => {
//     const containerRef = useRef(null);
//     const text = "Thaiger Pharma Group specializes in manufacturing and distributing high-quality generic pharmaceutical products.";
//     const words = text.split(" ");

//     // Track scroll progress over the entire 200vh height
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"],
//     });

//     // Smoothing the scroll progress
//     const smoothProgress = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001
//     });

//     const totalChars = text.length;
//     let charCount = 0;

//     return (
//         <div
//             ref={containerRef}
//             className="relative h-[150vh] bg-white" // Total scroll area
//         >
//             {/* Sticky wrapper keeps text centered during the reveal */}
//             <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">



//                 <div className="px-[4vw] md:px-[4vw] lg:px-[3vw] max-w-6xl mx-auto text-center">
//                     <h2 className="text-[28px] md:text-5xl lg:text-7xl leading-[1.15] font-serif text-gray-900 tracking-tight">
//                         {words.map((word, wordIndex) => (
//                             <span key={wordIndex} className="inline-block mr-[0.25em] whitespace-nowrap">
//                                 {word.split("").map((char, charIndex) => {
//                                     // Distribute ranges across the progress
//                                     const start = charCount / totalChars;
//                                     charCount++;
//                                     const end = charCount / totalChars;

//                                     return (
//                                         <AnimatedCharacter
//                                             key={charIndex}
//                                             char={char}
//                                             progress={smoothProgress}
//                                             range={[start, end]}
//                                         />
//                                     );
//                                 })}
//                             </span>
//                         ))}
//                     </h2>
//                 </div>

//             </div>
//         </div>
//     );
// };

// /**
//  * Main App Component
//  */
// export default function TextReveal() {
//     return (
//         <div className="bg-slate-50 font-sans selection:bg-orange-100">



//             {/* The Animated Text Section - Now with Sticky Logic */}
//             <WordRevealSection />



//             {/* Font Injection */}
//             <style dangerouslySetInnerHTML={{
//                 __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
//         .font-serif { font-family: 'Forum', serif; }
//       `}} />
//         </div>
//     );
// }


// // E:\woneview\app\component\TextReveal.tsx
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// /**
//  * AnimatedCharacter Component
//  */
// const AnimatedCharacter = ({ char, progress, range }) => {
//     const opacity = useTransform(progress, range, [0.7, 1]);
//     const blur = useTransform(progress, range, [0.6, 0]);
//     const color = useTransform(progress, range, ["#9ca3af", "#000000"]);

//     return (
//         <motion.span
//             style={{
//                 opacity,
//                 filter: useTransform(blur, (v) => `blur(${v}px)`),
//                 color,
//                 display: "inline-block",
//                 whiteSpace: "pre",
//             }}
//         >
//             {char}
//         </motion.span>
//     );
// };

// /**
//  * WordRevealSection – Center Reveal (NO sticky, NO h-screen)
//  */
// const WordRevealSection = () => {
//     const containerRef = useRef(null);

//     const text =
//         "A creative brand agency focused on building meaningful identities and delivering impactful digital web experiences.";
//     const words = text.split(" ");

//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start center", "end center"],
//     });

//     const smoothProgress = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001,
//     });

//     const totalChars = text.length;
//     let charCount = 0;

//     return (
//         <section
//             ref={containerRef}
//             className="relative min-h-[50vh] bg-white flex items-center justify-center"
//         >
//             {/* Centered reveal container */}
//             <div className="w-full flex items-center justify-center px-[4vw]">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <h2 className="text-[28px] md:text-5xl lg:text-6xl leading-[1.15] font-serif tracking-tight">
//                         {words.map((word, wordIndex) => (
//                             <span
//                                 key={wordIndex}
//                                 className="inline-block mr-[0.25em] whitespace-nowrap"
//                             >
//                                 {word.split("").map((char, charIndex) => {
//                                     const start = charCount / totalChars;
//                                     charCount++;
//                                     const end = charCount / totalChars;

//                                     return (
//                                         <AnimatedCharacter
//                                             key={charIndex}
//                                             char={char}
//                                             progress={smoothProgress}
//                                             range={[start, end]}
//                                         />
//                                     );
//                                 })}
//                             </span>
//                         ))}
//                     </h2>
//                 </div>
//             </div>
//         </section>
//     );
// };

// /**
//  * Main Component
//  */
// export default function TextReveal() {
//     return (
//         <div className="bg-slate-50 font-sans selection:bg-orange-100">
//             <WordRevealSection />

//             {/* Font Injection */}
//             <style
//                 dangerouslySetInnerHTML={{
//                     __html: `
//             @import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
//             .font-serif { font-family: 'Forum', serif; }
//           `,
//                 }}
//             />
//         </div>
//     );
// }


"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

/**
 * Types for the AnimatedCharacter component props
 */
interface AnimatedCharacterProps {
    char: string;
    progress: MotionValue<number>;
    range: [number, number];
}

/**
 * AnimatedCharacter Component
 */
const AnimatedCharacter = ({ char, progress, range }: AnimatedCharacterProps) => {
    const opacity = useTransform(progress, range, [0.7, 1]);
    const blur = useTransform(progress, range, [0.6, 0]);
    const color = useTransform(progress, range, ["#9ca3af", "#000000"]);

    return (
        <motion.span
            style={{
                opacity,
                filter: useTransform(blur, (v) => `blur(${v}px)`),
                color,
                display: "inline-block",
                whiteSpace: "pre",
            }}
        >
            {char}
        </motion.span>
    );
};

/**
 * WordRevealSection – Center Reveal (NO sticky, NO h-screen)
 */
const WordRevealSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    const text =
        "A creative brand agency focused on building meaningful identities and delivering impactful digital web experiences.";
    const words = text.split(" ");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const totalChars = text.length;
    let charCount = 0;

    return (
        <section
            ref={containerRef}
            className="relative min-h-[50vh] bg-white flex items-center justify-center py-20"
        >
            {/* Centered reveal container */}
            <div className="w-full flex items-center justify-center px-[4vw]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-[28px] md:text-5xl lg:text-6xl leading-[1.15] font-serif tracking-tight">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-[0.25em] whitespace-nowrap"
                            >
                                {word.split("").map((char, charIndex) => {
                                    const start = charCount / totalChars;
                                    charCount++;
                                    const end = charCount / totalChars;

                                    return (
                                        <AnimatedCharacter
                                            key={`${wordIndex}-${charIndex}`}
                                            char={char}
                                            progress={smoothProgress}
                                            range={[start, end]}
                                        />
                                    );
                                })}
                            </span>
                        ))}
                    </h2>
                </div>
            </div>
        </section>
    );
};

/**
 * Main Component
 */
export default function TextReveal() {
    return (
        <div className="bg-slate-50 font-sans selection:bg-orange-100">
            <WordRevealSection />

            {/* Font Injection */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
            @import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
            .font-serif { font-family: 'Forum', serif; }
          `,
                }}
            />
        </div>
    );
}