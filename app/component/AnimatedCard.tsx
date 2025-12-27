// "use client";

// import React, { useState } from 'react';
// import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
// import { X, ExternalLink } from 'lucide-react';

// // Project Data
// const PROJECTS = [
//     {
//         id: 'adella-ai',
//         title: 'Adella AI',
//         category: 'Product Design',
//         client: 'Adella Technologies',
//         duration: '4 Weeks',
//         tool: 'Framer',
//         description: 'Adella is a modern productivity platform designed to help teams align goals, automate tasks, and visualize growth in real time. I built a cohesive design system focused on clarity, motion, and emotional connection.',
//         image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1024&h=1024&auto=format&fit=crop',
//         color: 'bg-white'
//     },
//     {
//         id: 'nexus-app',
//         title: 'Nexus Flow',
//         category: 'UX Research',
//         client: 'Nexus Global',
//         duration: '6 Weeks',
//         tool: 'Figma',
//         description: 'A deep dive into user behavior for distributed teams. We redesigned the core navigation to reduce cognitive load by 40% and improved the task completion rate.',
//         image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1024&h=1024&auto=format&fit=crop',
//         color: 'bg-white'
//     },
//     {
//         id: 'luna-brand',
//         title: 'Luna Studio',
//         category: 'Branding',
//         client: 'Luna Creative',
//         duration: '3 Weeks',
//         tool: 'Adobe CC',
//         description: 'Developing a visual identity for a high-end photography studio. The brand focuses on minimalism and light, utilizing negative space to let the portfolio speak for itself.',
//         image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1024&h=1024&auto=format&fit=crop',
//         color: 'bg-white'
//     }
// ];

// const ProjectCard = ({ project, isSelected, onSelect, onClear }) => {
//     return (
//         <div className="relative w-full max-w-sm mx-auto">
//             {/* Background Dimming when open */}
//             <AnimatePresence>
//                 {isSelected && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
//                         onClick={onClear}
//                     />
//                 )}
//             </AnimatePresence>

//             {/* Main Card */}
//             <motion.div
//                 layoutId={`card-${project.id}`}
//                 onClick={() => !isSelected && onSelect(project.id)}
//                 className={`
//           ${isSelected ? 'fixed inset-4 md:inset-x-1/4 md:inset-y-20 z-50 h-fit max-h-[85vh] overflow-hidden' : 'relative w-full cursor-pointer'}
//           ${project.color} rounded-[44px] shadow-2xl overflow-hidden
//         `}
//                 style={{ borderRadius: isSelected ? '44px 44px 34px 34px' : '34px' }}
//             >
//                 <div className="relative p-2 h-full flex flex-col">
//                     {/* Image Section */}
//                     <motion.div
//                         layoutId={`image-container-${project.id}`}
//                         className="relative w-full aspect-square rounded-[34px] overflow-hidden"
//                     >
//                         <motion.img
//                             layoutId={`image-${project.id}`}
//                             src={project.image}
//                             alt={project.title}
//                             className="w-full h-full object-cover"
//                         />
//                         {/* Gradient Overlay for bottom text legibility on image */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

//                         {/* Header Text Overlay */}
//                         <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
//                             <div>
//                                 <motion.h1
//                                     layoutId={`title-${project.id}`}
//                                     className="text-white text-2xl font-medium tracking-tight"
//                                 >
//                                     {project.title}
//                                 </motion.h1>
//                                 <motion.p
//                                     layoutId={`category-${project.id}`}
//                                     className="text-white/60 text-xs font-normal mt-0.5"
//                                 >
//                                     {project.category}
//                                 </motion.p>
//                             </div>

//                             {!isSelected && (
//                                 <motion.div
//                                     layoutId={`button-${project.id}`}
//                                     className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10"
//                                 >
//                                     <span className="text-white text-sm font-medium">Preview Project</span>
//                                 </motion.div>
//                             )}
//                         </div>

//                         {/* Close Button (Only visible when expanded) */}
//                         {isSelected && (
//                             <motion.button
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 onClick={(e) => { e.stopPropagation(); onClear(); }}
//                                 className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl p-2 rounded-full text-white z-50 transition-colors"
//                             >
//                                 <X size={20} />
//                             </motion.button>
//                         )}
//                     </motion.div>

//                     {/* Expanded Content Section */}
//                     <AnimatePresence>
//                         {isSelected && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: 10 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="bg-black/[0.03] mt-2 rounded-[34px] p-6 flex flex-col gap-6"
//                             >
//                                 <p className="text-gray-600 text-[14px] leading-relaxed">
//                                     {project.description}
//                                 </p>

//                                 <div className="border-t border-black/10 pt-4">
//                                     <h3 className="text-gray-900 font-medium text-sm mb-4">
//                                         The Thought process behind {project.title}.
//                                     </h3>

//                                     <div className="flex flex-wrap gap-2">
//                                         <span className="px-3 py-1.5 bg-black/5 rounded-lg text-xs text-gray-600 font-normal">
//                                             {project.client}
//                                         </span>
//                                         <span className="px-3 py-1.5 bg-black/5 rounded-lg text-xs text-gray-600 font-normal">
//                                             {project.duration}
//                                         </span>
//                                         <span className="px-3 py-1.5 bg-black/5 rounded-lg text-xs text-gray-600 font-normal">
//                                             {project.tool}
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <div className="flex justify-end">
//                                     <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
//                                         View Project <ExternalLink size={14} />
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default function AnimatedCard() {
//     const [selectedId, setSelectedId] = useState(null);

//     return (
//         <div className="bg-[#1c1c1c] p-6 font-sans antialiased selection:bg-white selection:text-black">
//             <div className="max-w-7xl mx-auto py-12">
//                 <header className="mb-12 text-center">
//                     <h2 className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">Portfolio</h2>
//                     <h1 className="text-white text-4xl font-semibold">Selected Works</h1>
//                 </header>

//                 {/* Card Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     <LayoutGroup>
//                         {PROJECTS.map((project) => (
//                             <ProjectCard
//                                 key={project.id}
//                                 project={project}
//                                 isSelected={selectedId === project.id}
//                                 onSelect={setSelectedId}
//                                 onClear={() => setSelectedId(null)}
//                             />
//                         ))}
//                     </LayoutGroup>
//                 </div>
//             </div>


//         </div>
//     );
// }


// // E:\woneview\app\component\AnimatedCard.tsx
// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, ChevronRight } from 'lucide-react';

// // Project Data
// const PROJECTS = [
//     {
//         id: 'adella-ai',
//         title: 'Adella AI',
//         category: 'Product Design',
//         client: 'Adella Technologies',
//         duration: '4 Weeks',
//         tool: 'Framer',
//         description: 'Adella is a modern productivity platform designed to help teams align goals, automate tasks, and visualize growth in real time. I built a cohesive design system focused on clarity, motion, and emotional connection.',
//         image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1024&h=1024&auto=format&fit=crop',
//         color: 'bg-white'
//     },
//     {
//         id: 'nexus-app',
//         title: 'Nexus Flow',
//         category: 'UX Research',
//         client: 'Nexus Global',
//         duration: '6 Weeks',
//         tool: 'Figma',
//         description: 'A deep dive into user behavior for distributed teams. We redesigned the core navigation to reduce cognitive load by 40% and improved the task completion rate through iterative prototyping.',
//         image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1024&h=1024&auto=format&fit=crop',
//         color: 'bg-white'
//     },
//     {
//         id: 'luna-brand',
//         title: 'Luna Studio',
//         category: 'Branding',
//         client: 'Luna Creative',
//         duration: '3 Weeks',
//         tool: 'Adobe CC',
//         description: 'Developing a visual identity for a high-end photography studio. The brand focuses on minimalism and light, utilizing negative space to let the portfolio speak for itself.',
//         image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1024&h=1024&auto=format&fit=crop',
//         color: 'bg-white'
//     }
// ];

// const ProjectCard = ({ project, index }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className={`
//         relative w-full overflow-hidden
//         ${project.color} rounded-[32px] 
//         shadow-xl ring-1 ring-black/5 cursor-default
//       `}
//         >
//             <div className="p-3">
//                 {/* Image Container */}
//                 <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
//                     <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover"
//                     />

//                     {/* Subtle Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

//                     {/* Floating Category Badge */}
//                     <div className="absolute top-4 left-4">
//                         <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/20">
//                             {project.category}
//                         </span>
//                     </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="mt-2 px-3">
//                     <div className="flex justify-between items-start">
//                         <div>
//                             <h3 className="text-xl font-normal text-gray-900 leading-tight">
//                                 {project.title}
//                             </h3>
//                             <p className="text-gray-500 text-sm">
//                                 {project.client}
//                             </p>
//                         </div>
//                     </div>

//                     {/* Permanent Info Section */}
//                     <div className="pt-2 flex flex-col gap-y-3">
//                         <div className="h-px bg-gray-100" />

//                         <div className="">
//                             <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Project Overview</h4>
//                             <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-2">
//                                 {project.description}
//                             </p>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default function AnimatedCard() {
//     return (
//         <div className="bg-[#F8F9FA] p-6 antialiased text-gray-900 selection:bg-black selection:text-white">
//             <div className="max-w-6xl mx-auto py-12">
//                 <header className="mb-16">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <span className="text-black/30 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
//                             Design Portfolio
//                         </span>
//                         <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
//                             Selected Works <br />
//                             <span className="text-gray-400">2024 Edition.</span>
//                         </h1>
//                     </motion.div>
//                 </header>

//                 {/* Card Grid - Adjusted gap for taller cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-start">
//                     {PROJECTS.map((project, index) => (
//                         <ProjectCard
//                             key={project.id}
//                             project={project}
//                             index={index}
//                         />
//                     ))}
//                 </div>


//             </div>
//         </div>
//     );
// }


"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';

// --- TypeScript Definitions ---
interface Project {
    id: string;
    title: string;
    category: string;
    client: string;
    duration: string;
    tool: string;
    description: string;
    image: string;
    color: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

// Project Data
const PROJECTS: Project[] = [
    {
        id: 'adella-ai',
        title: 'Adella AI',
        category: 'Product Design',
        client: 'Adella Technologies',
        duration: '4 Weeks',
        tool: 'Framer',
        description: 'Adella is a modern productivity platform designed to help teams align goals, automate tasks, and visualize growth in real time. I built a cohesive design system focused on clarity, motion, and emotional connection.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1024&h=1024&auto=format&fit=crop',
        color: 'bg-white'
    },
    {
        id: 'nexus-app',
        title: 'Nexus Flow',
        category: 'UX Research',
        client: 'Nexus Global',
        duration: '6 Weeks',
        tool: 'Figma',
        description: 'A deep dive into user behavior for distributed teams. We redesigned the core navigation to reduce cognitive load by 40% and improved the task completion rate through iterative prototyping.',
        image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1024&h=1024&auto=format&fit=crop',
        color: 'bg-white'
    },
    {
        id: 'luna-brand',
        title: 'Luna Studio',
        category: 'Branding',
        client: 'Luna Creative',
        duration: '3 Weeks',
        tool: 'Adobe CC',
        description: 'Developing a visual identity for a high-end photography studio. The brand focuses on minimalism and light, utilizing negative space to let the portfolio speak for itself.',
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1024&h=1024&auto=format&fit=crop',
        color: 'bg-white'
    }
];

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`
        relative w-full overflow-hidden
        ${project.color} rounded-[32px] 
        shadow-xl ring-1 ring-black/5 cursor-default
      `}
        >
            <div className="p-3">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/20">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-2 px-3">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-normal text-gray-900 leading-tight">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {project.client}
                            </p>
                        </div>
                    </div>

                    {/* Permanent Info Section */}
                    <div className="pt-2 flex flex-col gap-y-3">
                        <div className="h-px bg-gray-100" />

                        <div className="">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Project Overview</h4>
                            <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-2">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function AnimatedCard() {
    return (
        <div className='templateContainer'>
            <div className="p-6 antialiased text-gray-900">
                <div className="max-w-6xl mx-auto  py-12">



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
                                Selected
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


                    {/* Card Grid - Adjusted gap for taller cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-start">
                        {PROJECTS.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}