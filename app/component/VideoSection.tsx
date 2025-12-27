

"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';


export default function VideoSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

    const headerOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
    const headerY = useTransform(smoothProgress, [0, 0.12], [0, -80]);

    const videoY = useTransform(smoothProgress, [0, 0.45], ["85vh", "0vh"]);
    const videoWidth = useTransform(smoothProgress, [0, 0.45], ["70%", "100%"]);
    const videoHeight = useTransform(smoothProgress, [0, 0.45], ["50vh", "100vh"]);
    const videoRadius = useTransform(smoothProgress, [0, 0.45], ["32px", "0px"]);
    const videoScale = useTransform(smoothProgress, [0, 0.45], [0.8, 1]);

    const leftX = useTransform(smoothProgress, [0, 0.25], [0, -400]);
    const rightX = useTransform(smoothProgress, [0, 0.25], [0, 400]);
    const assetsOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

    return (
        <div className="relative bg-white selection:bg-blue-100" ref={containerRef}>


            <div className="relative h-[140vh]">
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                    {/* HEADER SECTION */}
                    <motion.div
                        style={{ opacity: headerOpacity, y: headerY }}
                        className="absolute top-[28%] z-30 text-center px-6 pointer-events-none"
                    >
                        <h1 className="font-medium tracking-tight mb-6 text-black leading-[1]">
                            <span className="text-[#f15b2b] text-2xl md:text-2xl font-light">website widgets platform</span><br />
                            <span className='text-5xl md:text-7xl lg:text-[48px]'> Upgrade Your Website <br /> Without Coding</span>
                        </h1>
                        <p className="text-base md:text-xl text-black/50 max-w-xl mx-auto mb-8 font-light leading-[1.2]">
                            100+  website widgets including reviews, social feeds, forms, chats, and AI to increase conversions, collect leads, and build trust for your business.

                        </p>
                        <button className="pointer-events-auto bg-black text-white px-10 py-3 font-bold text-base hover:bg-neutral-800 transition-all flex items-center gap-2 mx-auto  bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-[#ffffff] px-6 py-2 rounded-full">
                            Get started for free
                            <ArrowRight size={18} />
                        </button>
                    </motion.div>

                    {/* SIDE ASSETS */}
                    <div className="absolute inset-0 z-20 pointer-events-none max-w-[1440px] mx-auto w-full">
                        <motion.div style={{ x: leftX, opacity: assetsOpacity }} className="absolute left-[2%] top-[30%] w-[320px]">
                            <img src="https://cdn-front.freepik.com/revamp/temp/hero/v2-top-left.webp" alt="" className="rounded-2xl border border-black/5 shadow-2xl" />
                        </motion.div>
                        <motion.div style={{ x: rightX, opacity: assetsOpacity }} className="absolute right-[2%] top-[25%] w-[350px]">
                            <img src="https://cdn-front.freepik.com/revamp/temp/hero/v3-right.webp" alt="" className="rounded-2xl border border-black/5 shadow-2xl" />
                        </motion.div>
                        <motion.div style={{ x: leftX, opacity: assetsOpacity }} className="absolute left-[12%] bottom-[15%] w-[160px]">
                            <img src="https://cdn-front.freepik.com/revamp/temp/hero/v2-bottom-left.webp" alt="" className="rounded-2xl border border-black/5 shadow-2xl" />
                        </motion.div>
                    </div>

                    {/* THE EXPANDING VIDEO */}
                    <motion.div
                        style={{
                            y: videoY,
                            width: videoWidth,
                            height: videoHeight,
                            borderRadius: videoRadius,
                            scale: videoScale
                        }}
                        className="absolute top-0 bg-neutral-100 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] z-10 border border-black/5"
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="https://cdn-front.freepik.com/revamp/temp/hero/v3-loop-poster.webp"
                            className="w-full h-full object-cover"
                        >
                            <source src="/video/5671044_Coll_wavebreak_Animation_1280x720.mp4" type="video/webm" />
                            <source src="/video/5671044_Coll_wavebreak_Animation_1280x720.mp4" type="video/mp4" />
                        </video>

                        <div className="absolute inset-0 bg-black/5 flex flex-col justify-end p-10 opacity-0 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer">
                                    <Play size={20} fill="white" />
                                </div>
                                <span className="font-bold text-xs tracking-widest uppercase text-white">Watch Film</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}