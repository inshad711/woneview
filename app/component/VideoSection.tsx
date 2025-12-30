// //////// for video

// "use client";

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { ArrowRight, Play } from 'lucide-react';

// export default function VideoSection() {
//     const containerRef = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"]
//     });

//     const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

//     const headerOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
//     const headerY = useTransform(smoothProgress, [0, 0.12], [0, -80]);

//     const videoY = useTransform(smoothProgress, [0, 0.45], ["85vh", "0vh"]);
//     const videoWidth = useTransform(smoothProgress, [0, 0.45], ["70%", "100%"]);
//     const videoHeight = useTransform(smoothProgress, [0, 0.45], ["50vh", "100vh"]);
//     const videoRadius = useTransform(smoothProgress, [0, 0.45], ["32px", "0px"]);
//     const videoScale = useTransform(smoothProgress, [0, 0.45], [0.8, 1]);

//     const leftX = useTransform(smoothProgress, [0, 0.25], [0, -400]);
//     const rightX = useTransform(smoothProgress, [0, 0.25], [0, 400]);
//     const assetsOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

//     return (
//         <div className="relative bg-white selection:bg-blue-100" ref={containerRef}>

//             <div className="relative h-[140vh]">
//                 <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

//                     {/* HEADER SECTION */}
//                     <motion.div
//                         style={{ opacity: headerOpacity, y: headerY }}
//                         className="absolute top-[28%] z-30 text-center px-6 pointer-events-none"
//                     >
//                         <h1 className="font-medium tracking-tight mb-6 text-black leading-[1]">
//                             <span className="text-[#f15b2b] text-2xl md:text-2xl font-light">website widgets platform</span><br />
//                             <span className='text-5xl md:text-7xl lg:text-[48px]'> Upgrade Your Website <br /> Without Coding</span>
//                         </h1>
//                         <p className="text-base md:text-xl text-black/50 max-w-xl mx-auto mb-8 font-light leading-[1.2]">
//                             100+  website widgets including reviews, social feeds, forms, chats, and AI to increase conversions, collect leads, and build trust for your business.

//                         </p>
//                         <button className="pointer-events-auto bg-black text-white px-10 py-3 font-bold text-base hover:bg-neutral-800 transition-all flex items-center gap-2 mx-auto  bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-[#ffffff] px-6 py-2 rounded-full">
//                             Get started for free
//                             <ArrowRight size={18} />
//                         </button>
//                     </motion.div>

//                     {/* SIDE ASSETS */}
//                     <div className="absolute inset-0 z-20 pointer-events-none max-w-[1440px] mx-auto w-full">
//                         <motion.div style={{ x: leftX, opacity: assetsOpacity }} className="absolute left-[2%] top-[30%] w-[320px]">
//                             <img src="https://cdn-front.freepik.com/revamp/temp/hero/v2-top-left.webp" alt="" className="rounded-2xl border border-black/5 shadow-2xl" />
//                         </motion.div>
//                         <motion.div style={{ x: rightX, opacity: assetsOpacity }} className="absolute right-[2%] top-[25%] w-[350px]">
//                             <img src="https://cdn-front.freepik.com/revamp/temp/hero/v3-right.webp" alt="" className="rounded-2xl border border-black/5 shadow-2xl" />
//                         </motion.div>
//                         <motion.div style={{ x: leftX, opacity: assetsOpacity }} className="absolute left-[12%] bottom-[15%] w-[160px]">
//                             <img src="https://cdn-front.freepik.com/revamp/temp/hero/v2-bottom-left.webp" alt="" className="rounded-2xl border border-black/5 shadow-2xl" />
//                         </motion.div>
//                     </div>

//                     {/* THE EXPANDING VIDEO */}
//                     <motion.div
//                         style={{
//                             y: videoY,
//                             width: videoWidth,
//                             height: videoHeight,
//                             borderRadius: videoRadius,
//                             scale: videoScale
//                         }}
//                         className="absolute top-0 bg-neutral-100 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] z-10 border border-black/5"
//                     >
//                         <video
//                             autoPlay
//                             muted
//                             loop
//                             playsInline
//                             poster="https://cdn-front.freepik.com/revamp/temp/hero/v3-loop-poster.webp"
//                             className="w-full h-full object-cover"
//                         >
//                             <source src="/video/5671044_Coll_wavebreak_Animation_1280x720.mp4" type="video/webm" />
//                             <source src="/video/5671044_Coll_wavebreak_Animation_1280x720.mp4" type="video/mp4" />
//                         </video>

//                         <div className="absolute inset-0 bg-black/5 flex flex-col justify-end p-10 opacity-0 hover:opacity-100 transition-opacity">
//                             <div className="flex items-center gap-3">
//                                 <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer">
//                                     <Play size={20} fill="white" />
//                                 </div>
//                                 <span className="font-bold text-xs tracking-widest uppercase text-white">Watch Film</span>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// }

//////// for image

// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { ArrowRight, Play } from "lucide-react";
// import Image from "next/image";

// export default function VideoSection() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 60,
//     damping: 20,
//     restDelta: 0.001,
//   });

//   const headerOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
//   const headerY = useTransform(smoothProgress, [0, 0.12], [0, -80]);

//   const videoY = useTransform(smoothProgress, [0, 0.45], ["85vh", "0vh"]);
//   const videoWidth = useTransform(smoothProgress, [0, 0.45], ["70%", "100%"]);
//   const videoHeight = useTransform(
//     smoothProgress,
//     [0, 0.45],
//     ["70vh", "100vh"]
//   );
//   const videoRadius = useTransform(smoothProgress, [0, 0.45], ["32px", "0px"]);
//   const videoScale = useTransform(smoothProgress, [0, 0.45], [0.8, 1]);

//   const leftX = useTransform(smoothProgress, [0, 0.25], [0, -400]);
//   const rightX = useTransform(smoothProgress, [0, 0.25], [0, 400]);
//   const assetsOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

//   return (
//     <div className="relative bg-white selection:bg-blue-100" ref={containerRef}>
//       <div className="relative h-[140vh]">
//         <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
//           {/* HEADER SECTION */}
//           <motion.div
//             style={{ opacity: headerOpacity, y: headerY }}
//             className="absolute top-[28%] z-30 text-center px-6 pointer-events-none"
//           >
//             <h1 className="font-medium tracking-tight mb-6 text-black leading-[1]">
//               <span className="text-[#f15b2b] text-2xl md:text-2xl font-light">
//                 website widgets platform
//               </span>
//               <br />
//               <span className="text-5xl md:text-7xl lg:text-[48px]">
//                 {" "}
//                 Upgrade Your Website <br /> Without Coding
//               </span>
//             </h1>
//             <p className="text-base md:text-xl text-black/50 max-w-xl mx-auto mb-8 font-light leading-[1.2]">
//               100+ website widgets including reviews, social feeds, forms,
//               chats, and AI to increase conversions, collect leads, and build
//               trust for your business.
//             </p>
//             <button className="pointer-events-auto bg-black text-white px-10 py-3 font-bold text-base hover:bg-neutral-800 transition-all flex items-center gap-2 mx-auto  bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-[#ffffff] px-6 py-2 rounded-full">
//               Get started for free
//               <ArrowRight size={18} />
//             </button>
//           </motion.div>

//           {/* SIDE ASSETS */}
//           <div className="absolute inset-0 z-20 pointer-events-none max-w-[1440px] mx-auto w-full">
//             <motion.div
//               style={{ x: leftX, opacity: assetsOpacity }}
//               className="absolute left-[2%] top-[20%] w-[320px]"
//             >
//               <img
//                 src="/image/feedback-social-media-post-vector-template_783926-1016.avif"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>
//             <motion.div
//               style={{ x: rightX, opacity: assetsOpacity }}
//               className="absolute right-[2%] top-[25%] w-[350px]"
//             >
//               <img
//                 src="/image/a_____give_me_prompt_t.png"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>
//             <motion.div
//               style={{ x: leftX, opacity: assetsOpacity }}
//               className="absolute left-[23%] bottom-[10%] w-[160px]"
//             >
//               <img
//                 src="https://cdn-front.freepik.com/revamp/temp/hero/v2-bottom-left.webp"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>
//           </div>

//           {/* THE EXPANDING IMAGE (Next.js Image) */}
//           <motion.div
//             style={{
//               y: videoY,
//               width: videoWidth,
//               height: videoHeight,
//               borderRadius: videoRadius,
//               scale: videoScale,
//             }}
//             className="absolute top-0"
//           >
//             <Image
//               src="https://framerusercontent.com/images/ixkKzTb9JFjaMw018haF9zgwgQ.png?scale-down-to=2048"
//               alt="Hero Preview"
//               fill
//               priority
//               className="object-contain"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

/////////////

// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { ArrowRight, Play } from "lucide-react";
// import Image from "next/image";

// export default function VideoSection() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 60,
//     damping: 20,
//     restDelta: 0.001,
//   });

//   const headerOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
//   const headerY = useTransform(smoothProgress, [0, 0.12], [0, -80]);

//   const videoY = useTransform(smoothProgress, [0, 0.45], ["85vh", "0vh"]);
//   const videoWidth = useTransform(smoothProgress, [0, 0.45], ["70%", "100%"]);
//   const videoHeight = useTransform(
//     smoothProgress,
//     [0, 0.45],
//     ["70vh", "100vh"]
//   );
//   const videoRadius = useTransform(smoothProgress, [0, 0.45], ["32px", "0px"]);
//   const videoScale = useTransform(smoothProgress, [0, 0.45], [0.8, 1]);

//   const leftX = useTransform(smoothProgress, [0, 0.25], [0, -400]);
//   const rightX = useTransform(smoothProgress, [0, 0.25], [0, 400]);
//   const assetsOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

//   return (
//     <div className="relative bg-white selection:bg-blue-100" ref={containerRef}>
//       <div className="relative h-[140vh]">
//         <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
//           {/* HEADER SECTION */}
//           <motion.div
//             style={{ opacity: headerOpacity, y: headerY }}
//             className="absolute top-[28%] z-30 text-center px-6 pointer-events-none"
//           >
//             <h1 className="font-medium tracking-tight mb-6 text-black leading-[1]">
//               <span className="text-[#f15b2b] text-2xl md:text-2xl font-light">
//                 website widgets platform
//               </span>
//               <br />
//               <span className="text-5xl md:text-7xl lg:text-[48px]">
//                 {" "}
//                 Upgrade Your Website <br /> Without Coding
//               </span>
//             </h1>
//             <p className="text-base md:text-xl text-black/50 max-w-xl mx-auto mb-8 font-light leading-[1.2]">
//               100+ website widgets including reviews, social feeds, forms,
//               chats, and AI to increase conversions, collect leads, and build
//               trust for your business.
//             </p>
//             <button className="pointer-events-auto bg-black text-white px-10 py-3 font-bold text-base hover:bg-neutral-800 transition-all flex items-center gap-2 mx-auto  bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-[#ffffff] px-6 py-2 rounded-full">
//               Get started for free
//               <ArrowRight size={18} />
//             </button>
//           </motion.div>

//           {/* SIDE ASSETS */}
//           <div className="absolute inset-0 z-20 pointer-events-none max-w-[1440px] mx-auto w-full">
//             <motion.div
//               style={{ x: leftX, opacity: assetsOpacity }}
//               className="absolute left-[2%] top-[20%] w-[320px]"
//             >
//               <img
//                 src="/image/feedback-social-media-post-vector-template_783926-1016.avif"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>
//             <motion.div
//               style={{ x: rightX, opacity: assetsOpacity }}
//               className="absolute right-[2%] top-[25%] w-[350px]"
//             >
//               <img
//                 src="/image/a_____give_me_prompt_t.png"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>
//             <motion.div
//               style={{ x: leftX, opacity: assetsOpacity }}
//               className="absolute left-[23%] bottom-[10%] w-[160px]"
//             >
//               <img
//                 src="https://cdn-front.freepik.com/revamp/temp/hero/v2-bottom-left.webp"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>
//           </div>

//           {/* THE EXPANDING IMAGE (Next.js Image) */}
//           <motion.div
//             style={{
//               y: videoY,
//               width: videoWidth,
//               height: videoHeight,
//               borderRadius: videoRadius,
//               scale: videoScale,
//             }}
//             className="absolute top-0"
//           >
//             <Image
//               src="https://framerusercontent.com/images/ixkKzTb9JFjaMw018haF9zgwgQ.png?scale-down-to=2048"
//               alt="Hero Preview"
//               fill
//               priority
//               className="object-contain"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function VideoSection() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 60,
//     damping: 20,
//     restDelta: 0.001,
//   });

//   // Header animations: Fades out and slides up
//   const headerOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
//   const headerY = useTransform(smoothProgress, [0, 0.5], [0, -100]);

//   // Side Assets: Slide outwards and fade out
//   const leftX = useTransform(smoothProgress, [0, 0.6], [0, -500]);
//   const rightX = useTransform(smoothProgress, [0, 0.6], [0, 500]);
//   const assetsOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);

//   return (
//     <div className="relative bg-white selection:bg-blue-100" ref={containerRef}>
//       {/* Reduced height to 120vh.
//           This controls how much "scroll room" there is before the section ends.
//       */}
//       <div className="relative h-[120vh]">
//         <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
//           {/* HEADER SECTION */}
//           <motion.div
//             style={{ opacity: headerOpacity, y: headerY }}
//             className="z-30 text-center px-6 pointer-events-none"
//           >
//             <h1 className="font-medium tracking-tight mb-6 text-black leading-[1]">
//               <span className="text-[#f15b2b] text-2xl md:text-2xl font-light">
//                 website widgets platform
//               </span>
//               <br />
//               <span className="text-5xl md:text-7xl lg:text-[48px]">
//                 {" "}
//                 Upgrade Your Website <br /> Without Coding
//               </span>
//             </h1>
//             <p className="text-base md:text-xl text-black/50 max-w-xl mx-auto mb-8 font-light leading-[1.2]">
//               100+ website widgets including reviews, social feeds, forms,
//               chats, and AI to increase conversions, collect leads, and build
//               trust for your business.
//             </p>
//             <button className="pointer-events-auto bg-black text-white px-10 py-3 font-bold text-base hover:bg-neutral-800 transition-all flex items-center gap-2 mx-auto bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-[#ffffff] px-6 py-2 rounded-full">
//               Get started for free
//               <ArrowRight size={18} />
//             </button>
//           </motion.div>

//           {/* SIDE ASSETS */}
//           <div className="absolute inset-0 z-20 pointer-events-none max-w-[1440px] mx-auto w-full">
//             <motion.div
//               style={{ x: leftX, opacity: assetsOpacity }}
//               className="absolute left-[2%] top-[20%] w-[320px]"
//             >
//               <img
//                 src="/image/feedback-social-media-post-vector-template_783926-1016.avif"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>

//             <motion.div
//               style={{ x: rightX, opacity: assetsOpacity }}
//               className="absolute right-[2%] top-[25%] w-[350px]"
//             >
//               <img
//                 src="/image/a_____give_me_prompt_t.png"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>

//             <motion.div
//               style={{ x: leftX, opacity: assetsOpacity }}
//               className="absolute left-[23%] bottom-[10%] w-[160px]"
//             >
//               <img
//                 src="https://cdn-front.freepik.com/revamp/temp/hero/v2-bottom-left.webp"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function VideoSection() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     // "start start" means the animation starts when the top of the container hits the top of the viewport
//     // "end end" means it ends when the bottom of the container hits the bottom of the viewport
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 60,
//     damping: 20,
//     restDelta: 0.001,
//   });

//   // Header: Now fades out exactly as the section ends
//   const headerOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0]);
//   const headerY = useTransform(smoothProgress, [0, 1], [0, -150]);

//   // Side Assets: Slide out further and stay visible longer
//   const leftX = useTransform(smoothProgress, [0, 1], [0, -600]);
//   const rightX = useTransform(smoothProgress, [0, 1], [0, 600]);

//   // Keep opacity until the very end to avoid the "empty" look
//   const assetsOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0]);

//   return (
//     // Removed extra padding/margins that might cause white gaps
//     <div className="relative bg-white" ref={containerRef}>
//       {/* Increased to 150vh.
//           The extra 50vh is the "scroll distance".
//           The sticky div inside will stay fixed for that duration.
//       */}
//       <div className="relative h-[150vh] w-full">
//         <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
//           {/* HEADER SECTION */}
//           <motion.div
//             style={{ opacity: headerOpacity, y: headerY }}
//             className="z-30 text-center px-6 pointer-events-none"
//           >
//             <h1 className="font-medium tracking-tight mb-6 text-black leading-[1]">
//               <span className="text-[#f15b2b] text-2xl md:text-2xl font-light">
//                 website widgets platform
//               </span>
//               <br />
//               <span className="text-5xl md:text-7xl lg:text-[48px] block mt-4">
//                 Upgrade Your Website <br /> Without Coding
//               </span>
//             </h1>
//             <p className="text-base md:text-xl text-black/50 max-w-xl mx-auto mb-8 font-light leading-[1.2]">
//               100+ website widgets including reviews, social feeds, forms,
//               chats, and AI to increase conversions, collect leads, and build
//               trust for your business.
//             </p>
//             <button className="pointer-events-auto bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-white px-8 py-3 rounded-full font-bold text-base hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
//               Get started for free
//               <ArrowRight size={18} />
//             </button>
//           </motion.div>

//           {/* SIDE ASSETS */}
//           <div className="absolute inset-0 z-20 pointer-events-none max-w-[1440px] mx-auto w-full">
//             <motion.div
//               style={{ x: leftX, opacity: assetsOpacity }}
//               className="absolute left-[5%] top-[20%] w-[280px] md:w-[320px]"
//             >
//               <img
//                 src="/image/feedback-social-media-post-vector-template_783926-1016.avif"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>

//             <motion.div
//               style={{ x: rightX, opacity: assetsOpacity }}
//               className="absolute right-[5%] top-[25%] w-[300px] md:w-[350px]"
//             >
//               <img
//                 src="/image/a_____give_me_prompt_t.png"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>

//             <motion.div
//               style={{ x: leftX, opacity: assetsOpacity }}
//               className="absolute left-[20%] bottom-[10%] w-[140px] md:w-[160px]"
//             >
//               <img
//                 src="https://cdn-front.freepik.com/revamp/temp/hero/v2-bottom-left.webp"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* IMPORTANT: Ensure the NEXT section follows immediately.
//           If this is the end of your page, that is why it's white.
//       */}
//     </div>
//   );
// }

// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function VideoSection() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     // "start start" means the animation starts when the top of the container hits the top of the viewport
//     // "end end" means it ends when the bottom of the container hits the bottom of the viewport
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 60,
//     damping: 20,
//     restDelta: 0.001,
//   });

//   // Header: Now fades out exactly as the section ends
//   const headerOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0]);
//   const headerY = useTransform(smoothProgress, [0, 1], [0, -150]);

//   // Side Assets: Slide out further and stay visible longer
//   const leftX = useTransform(smoothProgress, [0, 1], [0, -600]);
//   const rightX = useTransform(smoothProgress, [0, 1], [0, 600]);

//   // Keep opacity until the very end to avoid the "empty" look
//   const assetsOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0]);

//   return (
//     // Removed extra padding/margins that might cause white gaps
//     <div className="relative bg-white" ref={containerRef}>
//       {/* Increased to 150vh.
//           The extra 50vh is the "scroll distance".
//           The sticky div inside will stay fixed for that duration.
//       */}
//       <div className="relative h-[150vh] w-full">
//         <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
//           {/* HEADER SECTION */}
//           <motion.div
//             style={{ opacity: headerOpacity, y: headerY }}
//             className="z-30 text-center px-6 pointer-events-none"
//           >
//             <h1 className="font-medium tracking-tight mb-6 text-black leading-[1]">
//               <span className="text-[#f15b2b] text-2xl md:text-2xl font-light">
//                 website widgets platform
//               </span>
//               <br />
//               <span className="text-5xl md:text-7xl lg:text-[48px] block mt-4">
//                 Upgrade Your Website <br /> Without Coding
//               </span>
//             </h1>
//             <p className="text-base md:text-xl text-black/50 max-w-xl mx-auto mb-8 font-light leading-[1.2]">
//               100+ website widgets including reviews, social feeds, forms,
//               chats, and AI to increase conversions, collect leads, and build
//               trust for your business.
//             </p>
// <button className="pointer-events-auto bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-white px-8 py-3 rounded-full font-bold text-base hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
//   Get started for free
//   <ArrowRight size={18} />
// </button>
//           </motion.div>

//           {/* SIDE ASSETS */}
//           <div className="absolute inset-0 z-20 pointer-events-none max-w-[1440px] mx-auto w-full">
//             <motion.div
//               style={{ x: leftX, opacity: assetsOpacity }}
//               className="absolute left-[5%] top-[20%] w-[280px] md:w-[320px]"
//             >
//               <img
//                 src="/image/feedback-social-media-post-vector-template_783926-1016.avif"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>

//             <motion.div
//               style={{ x: rightX, opacity: assetsOpacity }}
//               className="absolute right-[5%] top-[25%] w-[300px] md:w-[350px]"
//             >
//               <img
//                 src="/image/a_____give_me_prompt_t.png"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>

//             <motion.div
//               style={{ x: leftX, opacity: assetsOpacity }}
//               className="absolute left-[20%] bottom-[10%] w-[140px] md:w-[160px]"
//             >
//               <img
//                 src="https://cdn-front.freepik.com/revamp/temp/hero/v2-bottom-left.webp"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* IMPORTANT: Ensure the NEXT section follows immediately.
//           If this is the end of your page, that is why it's white.
//       */}
//     </div>
//   );
// }

// // E:\woneview\app\component\VideoSection.tsx
// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function VideoSection() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 80,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const headerScale = useTransform(smoothProgress, [0, 0.9], [1, 0.9]);

//   // Subtle lift as it zooms
//   const headerY = useTransform(smoothProgress, [0, 1], ["0%", "-5%"]);

//   // Assets slide out further to clear space for the zoom
//   const leftX = useTransform(smoothProgress, [0, 1], [0, -900]);
//   const rightX = useTransform(smoothProgress, [0, 1], [0, 900]);

//   return (
//     <div className="relative bg-white" ref={containerRef}>
//       <div className="relative h-[180vh] w-full">
//         <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
//           {/* HEADER SECTION */}
//           <motion.div
//             style={{
//               scale: headerScale,
//               y: headerY,
//               opacity: 1,
//             }}
//             // max-w-4xl prevents the "extra large" horizontal spread
//             className="z-30 text-center px-6 will-change-transform max-w-4xl mx-auto"
//           >
//             <h1 className="font-medium tracking-tight mb-6 text-black leading-[1.1]">
//               <span className="text-[#f15b2b] text-xl md:text-2xl font-light">
//                 website widgets platform
//               </span>
//               <br />
//               {/* Reduced size from 72px to 54px for a cleaner start */}
//               <span className="text-4xl md:text-5xl lg:text-[54px] font-bold block mt-3">
//                 Upgrade Your Website <br className="md:block hidden" /> Without
//                 Coding
//               </span>
//             </h1>

//             <p className="text-base md:text-lg text-black/50 max-w-xl mx-auto mb-10 font-light leading-relaxed">
//               100+ website widgets including reviews, social feeds, forms, and
//               AI to increase conversions and build trust.
//             </p>

//             <button className="pointer-events-auto cursor-pointer bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-white px-8 py-3 rounded-full font-bold text-base hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
//               Get started for free
//               <ArrowRight size={18} />
//             </button>
//           </motion.div>

//           {/* SIDE ASSETS */}
//           <div className="absolute inset-0 z-20 pointer-events-none w-full">
//             {/* Left Top Image */}
//             <motion.div
//               style={{ x: leftX }}
//               className="absolute left-[5%] top-[20%] w-[280px] md:w-[320px]"
//             >
//               <img
//                 src="/image/feedback-social-media-post-vector-template_783926-1016.avif"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>

//             {/* Right Image */}
//             <motion.div
//               style={{ x: rightX }}
//               className="absolute right-[2%] top-[25%] w-[300px] md:w-[350px]"
//             >
//               <img
//                 src="/image/a_____give_me_prompt_t.png"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>

//             {/* Left Bottom Image */}
//             <motion.div
//               style={{ x: leftX }}
//               className="absolute left-[20%] bottom-[10%] w-[140px] md:w-[160px]"
//             >
//               <img
//                 src="https://cdn-front.freepik.com/revamp/temp/hero/v2-bottom-left.webp"
//                 alt=""
//                 className="rounded-2xl border border-black/5 shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function VideoSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const headerScale = useTransform(smoothProgress, [0, 0.9], [1, 0.9]);
  const headerY = useTransform(smoothProgress, [0, 1], ["0%", "-5%"]);

  // Increased the exit distance for mobile to ensure they clear the screen
  const leftX = useTransform(smoothProgress, [0, 1], [0, -1000]);
  const rightX = useTransform(smoothProgress, [0, 1], [0, 1000]);

  return (
    <div className="relative bg-white" ref={containerRef}>
      <div className="relative h-[180vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          {/* HEADER SECTION - Increased Z-index to stay above background assets */}
          <motion.div
            style={{
              scale: headerScale,
              y: headerY,
            }}
            className="z-40 text-center px-6 will-change-transform max-w-4xl mx-auto relative"
          >
            <h1 className="font-medium tracking-tight mb-6 text-black leading-[1.1]">
              <span className="text-[#f15b2b] text-lg md:text-2xl font-light">
                website widgets platform
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold block mt-3">
                Upgrade Your Website <br className="hidden sm:block" /> Without
                Coding
              </span>
            </h1>

            <p className="text-sm md:text-lg text-black/50 max-w-md md:max-w-xl mx-auto mb-10 font-light leading-relaxed">
              100+ website widgets including reviews, social feeds, forms, and
              AI to increase conversions and build trust.
            </p>

            <button className="relative z-50 cursor-pointer bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-white px-8 py-3 rounded-full font-bold text-base hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
              Get started for free
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* SIDE ASSETS - Reduced sizes and adjusted positions for mobile */}
          <div className="absolute inset-0 z-20 pointer-events-none w-full">
            {/* Left Top Image - Pushed further left on mobile */}
            <motion.div
              style={{ x: leftX }}
              className="absolute -left-[10%] sm:left-[2%] lg:left-[5%] top-[15%] sm:top-[20%] w-[180px] sm:w-[250px] lg:w-[320px] opacity-40 sm:opacity-100 transition-opacity"
            >
              <img
                src="/image/feedback-social-media-post-vector-template_783926-1016.avif"
                alt=""
                className="rounded-2xl border border-black/5 shadow-2xl"
              />
            </motion.div>

            {/* Right Image - Pushed further right on mobile */}
            <motion.div
              style={{ x: rightX }}
              className="absolute -right-[15%] sm:right-[1%] lg:right-[2%] top-[20%] sm:top-[25%] w-[200px] sm:w-[280px] lg:w-[350px] opacity-40 sm:opacity-100 transition-opacity"
            >
              <img
                src="/image/a_____give_me_prompt_t.png"
                alt=""
                className="rounded-2xl border border-black/5 shadow-2xl"
              />
            </motion.div>

            {/* Left Bottom Image - Smaller and moved down to clear text */}
            <motion.div
              style={{ x: leftX }}
              className="absolute left-[5%] sm:left-[15%] lg:left-[20%] bottom-[5%] sm:bottom-[10%] w-[100px] sm:w-[130px] lg:w-[160px] opacity-60 sm:opacity-100"
            >
              <img
                src="https://cdn-front.freepik.com/revamp/temp/hero/v2-bottom-left.webp"
                alt=""
                className="rounded-2xl border border-black/5 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
