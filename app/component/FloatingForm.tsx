// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageCircle, X, Send, CheckCircle2, Loader2 } from 'lucide-react';

// // --- Components ---

// const FloatingForm = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isSuccess, setIsSuccess] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Simulate API call
//         setTimeout(() => {
//             setIsSubmitting(false);
//             setIsSuccess(true);
//             // Reset after 3 seconds
//             setTimeout(() => {
//                 setIsSuccess(false);
//                 setIsOpen(false);
//             }, 3000);
//         }, 1500);
//     };

//     return (
//         <div className=" flex items-center justify-center text-slate-900 selection:bg-black selection:text-white">


//             {/* Floating Action Button */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="fixed bottom-6 right-6 w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform z-50 overflow-hidden"
//             >
//                 <AnimatePresence mode="wait">
//                     {isOpen ? (
//                         <motion.div
//                             key="close"
//                             initial={{ rotate: -90, opacity: 0 }}
//                             animate={{ rotate: 0, opacity: 1 }}
//                             exit={{ rotate: 90, opacity: 0 }}
//                         >
//                             <X size={24} />
//                         </motion.div>
//                     ) : (
//                         <motion.div
//                             key="chat"
//                             initial={{ rotate: 90, opacity: 0 }}
//                             animate={{ rotate: 0, opacity: 1 }}
//                             exit={{ rotate: -90, opacity: 0 }}
//                         >
//                             <MessageCircle size={24} />
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </button>

//             {/* The Floating Form */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
//                         animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
//                         exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
//                         transition={{ type: "spring", damping: 25, stiffness: 300 }}
//                         className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-40 flex flex-col"
//                     >
//                         {/* Form Section */}
//                         <div className="p-6 pb-4 border-b border-slate-100">
//                             <form onSubmit={handleSubmit} className="space-y-4">
//                                 <div className="space-y-1.5">
//                                     <label className="text-[12px] font-semibold text-slate-700 block ml-1 uppercase tracking-wider">Name</label>
//                                     <input
//                                         type="text"
//                                         required
//                                         placeholder="Enter your name"
//                                         className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-slate-400"
//                                     />
//                                 </div>

//                                 <div className="space-y-1.5">
//                                     <label className="text-[12px] font-semibold text-slate-700 block ml-1 uppercase tracking-wider">Email</label>
//                                     <input
//                                         type="email"
//                                         required
//                                         placeholder="Enter your email"
//                                         className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-slate-400"
//                                     />
//                                 </div>

//                                 <div className="space-y-1.5">
//                                     <label className="text-[12px] font-semibold text-slate-700 block ml-1 uppercase tracking-wider">Your message</label>
//                                     <textarea
//                                         required
//                                         rows={3}
//                                         placeholder="Type your message here..."
//                                         className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
//                                     ></textarea>
//                                 </div>

//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting || isSuccess}
//                                     className={`w-full h-11 rounded-full text-white font-medium flex items-center justify-center transition-all ${isSuccess
//                                         ? 'bg-emerald-500'
//                                         : 'bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98]'
//                                         } disabled:opacity-90`}
//                                 >
//                                     {isSubmitting ? (
//                                         <Loader2 className="animate-spin mr-2" size={18} />
//                                     ) : isSuccess ? (
//                                         <motion.div
//                                             initial={{ scale: 0 }}
//                                             animate={{ scale: 1 }}
//                                             className="flex items-center"
//                                         >
//                                             <CheckCircle2 size={18} className="mr-2" />
//                                             Sent
//                                         </motion.div>
//                                     ) : (
//                                         "Send message"
//                                     )}
//                                 </button>
//                             </form>
//                         </div>

//                         {/* Profile Greeting Section */}
//                         <div className="p-6 bg-white flex flex-col items-start">
//                             {/* Overlapping Avatars */}
//                             <div className="flex items-center mb-4 pl-1">
//                                 <div className="relative flex">
//                                     <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm bg-slate-200">
//                                         <img
//                                             src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
//                                             alt="Avatar"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm bg-slate-300 -ml-3">
//                                         <img
//                                             src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop"
//                                             alt="Avatar"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm bg-slate-400 -ml-3">
//                                         <img
//                                             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
//                                             alt="Avatar"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                 </div>
//                                 {/* Waving Hand Icon */}
//                                 <motion.div
//                                     animate={{ rotate: [0, 20, 0, 20, 0] }}
//                                     transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//                                     className="ml-4 text-2xl"
//                                 >
//                                     👋
//                                 </motion.div>
//                             </div>

//                             {/* Greeting Text */}
//                             <div className="space-y-1">
//                                 <h3 className="text-xl font-medium tracking-tight">How can I help you?</h3>
//                                 <p className="text-2xl font-semibold">Hello there...</p>
//                             </div>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default FloatingForm;


"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MessageCircle,
    X,
    CheckCircle2,
    Loader2,
} from "lucide-react";

const FloatingForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            setTimeout(() => {
                setIsSuccess(false);
                setIsOpen(false);
            }, 3000);
        }, 1500);
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 cursor-pointer right-6 w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform z-50"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    />
                )}
            </AnimatePresence>

            {/* Centered Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-[360px] max-w-[calc(100vw-32px)]
                       bg-white rounded-2xl shadow-2xl border border-slate-200
                       overflow-hidden z-50 flex flex-col"
                    >
                        {/* Greeting Section */}
                        <div className="p-6 bg-white">
                            <div className="flex items-center">
                                <div className="relative flex">
                                    {[
                                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                                    ].map((img, i) => (
                                        <div
                                            key={i}
                                            className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm ${i !== 0 ? "-ml-3" : ""
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt="Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <motion.div
                                    animate={{ rotate: [0, 20, 0, 20, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="ml-4 text-2xl"
                                >
                                    👋
                                </motion.div>
                            </div>

                            <h3 className="text-xl font-medium tracking-tight">
                                How can I help you?
                            </h3>
                            <p className="text-2xl font-semibold">Hello there...</p>
                        </div>
                        {/* Form Section */}
                        <div className="px-6 pb-4 border-b border-slate-100">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[12px] font-semibold text-slate-700 block ml-1 uppercase tracking-wider">
                                        Name
                                    </label>
                                    <input
                                        required
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[12px] font-semibold text-slate-700 block ml-1 uppercase tracking-wider">
                                        Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[12px] font-semibold text-slate-700 block ml-1 uppercase tracking-wider">
                                        Your message
                                    </label>
                                    <textarea
                                        required
                                        rows={3}
                                        placeholder="Type your message..."
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-neutral-900"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className={`w-full h-11 rounded-[12px] text-white font-medium flex items-center justify-center transition-all
                    ${isSuccess
                                            ? "bg-emerald-500"
                                            : "bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98]"
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="animate-spin" size={18} />
                                    ) : isSuccess ? (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="flex items-center"
                                        >
                                            <CheckCircle2 size={18} className="mr-2" />
                                            Sent
                                        </motion.div>
                                    ) : (
                                        "Send message"
                                    )}
                                </button>
                            </form>
                        </div>


                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingForm;
