// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Heart, Sparkles, ThumbsUp, ThumbsDown } from 'lucide-react';

// // --- Types & Data ---

// interface Review {
//     id: number;
//     username: string;
//     avatar: string;
//     comment: string;
// }

// const reviews: Review[] = [
//     {
//         id: 1,
//         username: '@mark_locus',
//         avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
//         comment: 'Bro who edits your videos? The pacing and cuts are SO clean.',
//     },
//     {
//         id: 2,
//         username: '@tonysa',
//         avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
//         comment: "Whoever's editing your videos now... they deserve a raise this was smooth af",
//     },
//     {
//         id: 3,
//         username: '@johnbai',
//         avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
//         comment: "Editing leveled up big time. Timing, cuts, music — everything's just right",
//     },
//     {
//         id: 4,
//         username: '@chrismaw',
//         avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
//         comment: 'Noticed the pacing and flow are so much better lately. You working with someone new?',
//     },
//     {
//         id: 5,
//         username: '@jemmy',
//         avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
//         comment: 'This feels super polished now. Loving the new vibe — your editor is killing it',
//     },
// ];

// const tags = [
//     "Business Inquiry",
//     "Want My Videos Edited",
//     "Send Me Samples",
//     "Long-Term Collaboration"
// ];

// // --- Components ---

// const ReviewCard = ({ review, index }: { review: Review; index: number }) => (
//     <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: index * 0.1, duration: 0.5 }}
//         className="w-full bg-white rounded-[20px] p-5 border border-dashed border-gray-300 shadow-[5px_5px_15px_0px_rgba(0,0,0,0.02)] flex gap-4 items-start"
//     >
//         <img
//             src={review.avatar}
//             alt={review.username}
//             className="w-12 h-12 rounded-full object-cover shrink-0"
//             onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100'; }}
//         />
//         <div className="flex flex-col gap-2">
//             <span className="text-sm font-semibold text-[#171717]">{review.username}</span>
//             <p className="text-[15px] leading-snug text-[#171717] font-medium">
//                 {review.comment}
//             </p>
//             <div className="flex items-center gap-4 mt-1">
//                 <div className="flex items-center gap-1.5 text-gray-400">
//                     <ThumbsUp size={14} />
//                     <ThumbsDown size={14} />
//                 </div>
//                 <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center relative overflow-hidden">
//                     <img
//                         src="https://framerusercontent.com/images/FIRQ1C62VwXfKsg0Rn3rcRHoE.png"
//                         className="w-full h-full object-cover absolute inset-0 opacity-40"
//                         alt=""
//                     />
//                     <Heart size={10} fill="white" color="white" className="relative z-10" />
//                 </div>
//                 <span className="text-xs font-semibold text-[#171717] cursor-pointer hover:underline">Reply</span>
//             </div>
//         </div>
//     </motion.div>
// );

// const TagMarquee = () => (
//     <div className="relative w-full overflow-hidden py-6 pointer-events-none">
//         {/* Gradient Overlay for Fade Effect */}
//         <div className="absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-[#171717] to-transparent" />
//         <div className="absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-[#171717] to-transparent" />

//         <motion.div
//             animate={{ x: [0, -1000] }}
//             transition={{
//                 duration: 25,
//                 repeat: Infinity,
//                 ease: "linear",
//             }}
//             className="flex gap-3 whitespace-nowrap"
//         >
//             {[...tags, ...tags, ...tags, ...tags].map((tag, idx) => (
//                 <span
//                     key={idx}
//                     className="px-5 py-2.5 bg-[#212121] border border-dashed border-white/10 rounded-full text-white text-[13px] font-medium shadow-sm"
//                 >
//                     {tag}
//                 </span>
//             ))}
//         </motion.div>
//     </div>
// );

// const ParticleBackground = () => {
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
//             {[...Array(20)].map((_, i) => (
//                 <motion.div
//                     key={i}
//                     animate={{
//                         y: [0, -40, 0],
//                         x: [0, Math.random() * 20 - 10, 0],
//                         opacity: [0.2, 0.6, 0.2],
//                         scale: [1, 1.2, 1],
//                     }}
//                     transition={{
//                         duration: 4 + Math.random() * 6,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: Math.random() * 5,
//                     }}
//                     style={{
//                         position: 'absolute',
//                         left: `${Math.random() * 100}%`,
//                         top: `${Math.random() * 100}%`,
//                         width: `${Math.random() * 3 + 2}px`,
//                         height: `${Math.random() * 3 + 2}px`,
//                         backgroundColor: 'white',
//                         borderRadius: '50%',
//                         filter: 'blur(0.5px)',
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };

// export default function StackReview() {
//     return (
//         <div className="min-h-screen bg-[#F9F9F9] font-sans text-[#171717] py-24 px-6 md:px-12">
//             <div className="max-w-7xl mx-auto">

//                 {/* Header Section */}
//                 <div className="flex flex-col items-center text-center mb-20">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         className="flex items-center gap-2 px-5 py-2 bg-white border border-dashed border-gray-300 rounded-full mb-8 shadow-sm"
//                     >
//                         <Sparkles size={18} className="text-[#FF5100] rotate-[277deg]" fill="#FF5100" />
//                         <span className="text-sm font-semibold tracking-wide">Reviews</span>
//                     </motion.div>

//                     <motion.h2
//                         initial={{ opacity: 0, y: 15 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
//                     >
//                         Loved by Creators
//                     </motion.h2>

//                     <motion.p
//                         initial={{ opacity: 0, y: 15 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.1 }}
//                         className="text-xl text-gray-500 max-w-2xl leading-relaxed"
//                     >
//                         We don’t just deliver edits — we make creators look good, grow faster, and stay consistent.
//                     </motion.p>
//                 </div>

//                 {/* Main Content Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 items-start">

//                     {/* Left Column: Stacked Reviews */}
//                     <div className="flex flex-col gap-5 order-2 lg:order-1">
//                         {reviews.map((review, index) => (
//                             <ReviewCard key={review.id} review={review} index={index} />
//                         ))}
//                     </div>

//                     {/* Right Column: Call Card (Sticky) */}
//                     <div className="order-1 lg:order-2">
//                         <motion.div
//                             initial={{ opacity: 0, x: 30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             className="sticky top-12 bg-[#171717] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center pt-16"
//                         >
//                             <ParticleBackground />

//                             {/* Profile Avatar with Ring */}
//                             <div className="relative z-20 mb-10 group">
//                                 <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF5100] to-orange-400 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity" />
//                                 <div className="relative w-28 h-28 rounded-full p-1 bg-white/5 border border-white/10 overflow-hidden">
//                                     <img
//                                         src="https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/assets/GaxkgrTkzKlxI7B3EJtZp4dabI.png"
//                                         alt="Profile"
//                                         className="w-full h-full rounded-full object-cover"
//                                     />
//                                 </div>
//                             </div>

//                             <h3 className="relative z-20 text-white text-4xl font-bold text-center leading-[1.1] mb-10 px-10 max-w-[320px]">
//                                 Book a 15-min intro call
//                             </h3>

//                             {/* Call to Action Button */}
//                             <motion.a
//                                 href="#contact"
//                                 whileHover={{ y: -4, scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 className="relative z-20 flex items-center justify-between bg-white px-7 py-5 rounded-full w-[85%] max-w-[320px] group transition-all duration-300 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.15)] mb-12"
//                             >
//                                 <span className="text-[#171717] font-extrabold text-xl">Book a Call</span>
//                                 <div className="w-11 h-11 bg-[#FF5100] rounded-full flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-[-45deg] group-hover:shadow-[0_0_20px_rgba(255,81,0,0.5)]">
//                                     <ArrowRight size={22} strokeWidth={3} />
//                                 </div>
//                             </motion.a>

//                             {/* Alternative Contact */}
//                             <div className="relative z-20 text-center mb-10">
//                                 <p className="text-white/40 text-[15px] font-medium mb-1.5 uppercase tracking-widest">Prefer to Email?</p>
//                                 <a
//                                     href="mailto:ajoy.sayhello@gmail.com"
//                                     className="text-white text-lg font-semibold hover:text-[#FF5100] transition-colors border-b border-white/10 pb-0.5"
//                                 >
//                                     ajoy.sayhello@gmail.com
//                                 </a>
//                             </div>

//                             {/* Infinite Scrolling Tag Bar */}
//                             <TagMarquee />
//                         </motion.div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, ThumbsUp, ThumbsDown } from 'lucide-react';

// --- Types & Data ---

const reviews = [
    {
        id: 1,
        username: '@mark_locus',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
        comment: 'Bro who edits your videos? The pacing and cuts are SO clean.',
    },
    {
        id: 2,
        username: '@tonysa',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
        comment: "Whoever's editing your videos now... they deserve a raise this was smooth af",
    },
    {
        id: 3,
        username: '@johnbai',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
        comment: "Editing leveled up big time. Timing, cuts, music — everything's just right",
    },
    {
        id: 4,
        username: '@chrismaw',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        comment: 'Noticed the pacing and flow are so much better lately. You working with someone new?',
    },
    {
        id: 5,
        username: '@jemmy',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        comment: 'This feels super polished now. Loving the new vibe — your editor is killing it',
    },
];

const tags = [
    "Business Inquiry",
    "Want My Videos Edited",
    "Send Me Samples",
    "Long-Term Collaboration"
];

// --- Components ---

const ReviewCard = ({ review, index }: { review: any; index: number }) => {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.9]);

    return (
        <motion.div
            ref={cardRef}
            style={{
                scale,
                opacity,
                top: `${40 + index * 40}px`
            }}
            className="sticky w-full bg-white rounded-[24px] p-6 border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] flex gap-4 items-start"
        >
            <img
                src={review.avatar}
                alt={review.username}
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-gray-50"
            />
            <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-gray-900">{review.username}</span>
                <p className="text-[15px] leading-relaxed text-gray-800 font-medium">
                    {review.comment}
                </p>
                <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2 text-gray-300">
                        <ThumbsUp size={16} />
                        <ThumbsDown size={16} />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                        <Heart size={12} fill="currentColor" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 cursor-pointer hover:text-black">Reply</span>
                </div>
            </div>
        </motion.div>
    );
};

const TagMarquee = () => (
    <div className="relative w-full overflow-hidden py-4 border-t border-white/5 mt-4">
        <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 whitespace-nowrap px-4"
        >
            {[...tags, ...tags, ...tags].map((tag, idx) => (
                <span
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-[12px] font-medium"
                >
                    {tag}
                </span>
            ))}
        </motion.div>
    </div>
);

export default function StackReview() {
    return (
        <div className='templateContainer'>
            <div className="bg-[#FDFDFD] text-[#171717] selection:bg-orange-100 p-10 md:pb-12">
                <div className="max-w-7xl mx-auto">



                    <div className="text-center mb-4">
                        <h2 className="text-4xl md:text-4xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                            <span className="text-black">  Design Portfolio </span>
                            <motion.span
                                className="px-4 py-1 text-black inline-block"
                                style={{
                                    borderLeft: '3px solid #db6e1a',
                                    background: 'linear-gradient(90deg, rgba(219, 110, 26, 0) 16%, rgba(219, 110, 26, 0.15) 100%)',
                                }}
                            >
                                Stack
                            </motion.span>
                            <span className="text-black"> Works</span>
                        </h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-[#1D322D]/70 max-w-2xl mx-auto"
                        >
                            Find the right option and start making the most of our AI-powered platform today!
                        </motion.p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-start">

                        {/* Left Column: Stacking Reviews */}
                        <div className="relative space-y-2">
                            {reviews.map((review, index) => (
                                <ReviewCard key={review.id} review={review} index={index} />
                            ))}
                        </div>

                        <div className="sticky top-10 w-full max-w-[380px]">
                            {/* Main Card Container with Green Gradient */}
                            <div className="bg-gradient-to-br from-emerald-900 via-green-300 to-gray-300 rounded-[32px] overflow-hidden border border-white/20 shadow-2xl pt-14 flex flex-col items-center">

                                {/* Profile Image with updated border color to match green theme */}
                                <div className="w-24 h-24 rounded-full p-1 bg-black mb-8 shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                                        alt="Host"
                                        className="w-full h-full rounded-full object-cover border-4 border-emerald-400"
                                    />
                                </div>

                                {/* Heading - Now Black */}
                                <h3 className="text-black text-2xl font-black text-center leading-tight mb-8 px-12">
                                    Book a 15-min intro call
                                </h3>

                                {/* Call to Action Button - Black background with green accents on hover */}
                                <button className="flex items-center cursor-pointer justify-between bg-black text-white px-8 py-2 rounded-[16px] w-[80%] group hover:bg-white hover:text-black transition-all duration-300 mb-8 shadow-xl">
                                    <span className="font-bold text-lg">Book a Call</span>
                                    <div className="w-10 h-10 bg-emerald-500 text-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-emerald-400 transition-colors">
                                        <ArrowRight size={20} strokeWidth={3} />
                                    </div>
                                </button>

                                {/* Email Section - Text colors adjusted to Black/Dark variants */}
                                <div className="text-center mb-2">
                                    <p className="text-black/40 text-xs font-bold uppercase tracking-widest mb-1">
                                        Prefer to Email?
                                    </p>
                                    <a
                                        href="mailto:hello@creatorflow.com"
                                        className="text-black font-black text-lg hover:underline transition-all"
                                    >
                                        hello@creatorflow.com
                                    </a>
                                </div>

                                {/* Infinite scrolling bottom tags */}
                                <TagMarquee />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}