// // E:\woneview\app\component\LineProcess.tsx
// "use client";
// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring } from 'framer-motion';

// const steps = [
//     {
//         id: '01',
//         title: 'Discovery & Strategy',
//         description: 'We uncover your goals, audience, and challenges to build a clear roadmap for success.',
//     },
//     {
//         id: '02',
//         title: 'Design & Prototyping',
//         description: 'Transforming insights into bold, user-focused designs that connect and convert.',
//     },
//     {
//         id: '03',
//         title: 'Development & Launch',
//         description: 'From pixel to code, we craft high-performing websites and launch them flawlessly.',
//     },
//     {
//         id: '04',
//         title: 'Optimization & Scale',
//         description: 'We monitor, refine, and enhance to ensure continuous growth and lasting impact.',
//     },
// ];

// const StepCard = ({ step, index }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className="relative pl-12 md:pl-20 pb-0 last:pb-0"
//         >
//             {/* Circle Marker */}
//             <div className="absolute left-0 top-0 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-900 shadow-sm">
//                 {step.id}
//             </div>

//             {/* Content Card */}
//             <div className="rounded-[12px] border border-gray-100 bg-white p-8 md:p-10 shadow-sm transition-shadow hover:shadow-md">
//                 <h5 className="mb-4 text-xl md:text-2xl font-normal text-gray-800">
//                     {step.title}
//                 </h5>
//                 <p className="text-lg text-gray-500 leading-relaxed">
//                     {step.description}
//                 </p>
//             </div>
//         </motion.div>
//     );
// };

// function ProcessSection() {
//     const containerRef = useRef(null);

//     // Track scroll progress of the entire section
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start center", "end center"]
//     });

//     // Smooth out the progress bar movement
//     const scaleY = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001
//     });

//     return (
//         <section
//             ref={containerRef}
//             className="relative min-h-screen bg-gray-50 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
//         >
//             <div className="mx-auto max-w-7xl">
//                 <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

//                     {/* Left Column: Sticky Header */}
//                     <div className="lg:col-span-5">
//                         <div className="lg:sticky lg:top-0">

//                             <h2 className="mb-6 text-4xl font-normal tracking-tight text-gray-900 md:text-5xl lg:text-4xl leading-[1.1]">
//                                 Proven & effective process.
//                                 <span className="block text-gray-400">That delivers results.</span>
//                             </h2>
//                             <p className="max-w-md text-lg text-gray-600 leading-relaxed">
//                                 We dive deep into your goals, audience, and challenges to craft a strategy
//                                 that drives clear direction and impact.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Right Column: Animated Timeline */}
//                     <div className="relative lg:col-span-7">
//                         {/* The Vertical Line Background */}
//                         <div className="absolute left-[19px] md:left-[23px] top-0 h-full w-[2px] bg-gray-200" />

//                         {/* The Animated Progress Line (Red) */}
//                         <motion.div
//                             style={{ scaleY, originY: 0 }}
//                             className="absolute left-[19px] md:left-[23px] top-0 h-full w-[2px] bg-red-500 z-0"
//                         />

//                         <div className="space-y-4">
//                             {steps.map((step, index) => (
//                                 <StepCard key={step.id} step={step} index={index} />
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

// const LineProcess = () => {
//     return (
//         <main className="bg-white">


//             <ProcessSection />


//         </main>
//     );
// };

// export default LineProcess;


// // E:\woneview\app\component\LineProcess.tsx
// "use client";
// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring } from 'framer-motion';

// const steps = [
//     {
//         id: '01',
//         title: 'Discovery & Strategy',
//         description: 'We uncover your goals, audience, and challenges to build a clear roadmap for success.',
//     },
//     {
//         id: '02',
//         title: 'Design & Prototyping',
//         description: 'Transforming insights into bold, user-focused designs that connect and convert.',
//     },
//     {
//         id: '03',
//         title: 'Development & Launch',
//         description: 'From pixel to code, we craft high-performing websites and launch them flawlessly.',
//     },
//     {
//         id: '04',
//         title: 'Optimization & Scale',
//         description: 'We monitor, refine, and enhance to ensure continuous growth and lasting impact.',
//     },
// ];

// const StepCard = ({ step, index }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className="relative pl-12 md:pl-20 pb-16 last:pb-0"
//         >
//             {/* Circle Marker */}
//             <div className="absolute left-0 top-0 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-900 shadow-sm">
//                 {step.id}
//             </div>

//             {/* Content Card */}
//             <div className="rounded-[12px] border border-gray-100 bg-white p-8 md:p-10 shadow-sm transition-shadow hover:shadow-md">
//                 <h5 className="mb-4 text-xl md:text-2xl font-normal text-gray-800">
//                     {step.title}
//                 </h5>
//                 <p className="text-lg text-gray-500 leading-relaxed">
//                     {step.description}
//                 </p>
//             </div>
//         </motion.div>
//     );
// };

// function ProcessSection() {
//     const containerRef = useRef(null);

//     // Track scroll progress of the entire section
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start center", "end center"]
//     });

//     // Smooth out the progress bar movement
//     const scaleY = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001
//     });

//     return (
//         <section
//             ref={containerRef}
//             /* Removed overflow-hidden to allow sticky to function */
//             className="relative min-h-screen bg-gray-50 py-24 px-6 md:px-12 lg:px-24"
//         >
//             <div className="mx-auto max-w-7xl">
//                 <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

//                     {/* Left Column: Sticky Header */}
//                     <div className="lg:col-span-5">
//                         {/* Changed lg:top-0 to lg:top-20 for better visual spacing */}
//                         <div className="lg:sticky lg:top-20">
//                             <h2 className="mb-6 text-4xl font-normal tracking-tight text-gray-900 md:text-5xl lg:text-4xl leading-[1.1]">
//                                 Proven & effective process.
//                                 <span className="block text-gray-400">That delivers results.</span>
//                             </h2>
//                             <p className="max-w-md text-lg text-gray-600 leading-relaxed">
//                                 We dive deep into your goals, audience, and challenges to craft a strategy
//                                 that drives clear direction and impact.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Right Column: Animated Timeline */}
//                     <div className="relative lg:col-span-7">
//                         {/* The Vertical Line Background */}
//                         <div className="absolute left-[19px] md:left-[23px] top-0 h-full w-[2px] bg-gray-200" />

//                         {/* The Animated Progress Line (Red) */}
//                         <motion.div
//                             style={{ scaleY, originY: 0 }}
//                             className="absolute left-[19px] md:left-[23px] top-0 h-full w-[2px] bg-red-500 z-0"
//                         />

//                         <div className="space-y-4">
//                             {steps.map((step, index) => (
//                                 <StepCard key={step.id} step={step} index={index} />
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

// const LineProcess = () => {
//     return (
//         <main className="bg-white">
//             <ProcessSection />
//         </main>
//     );
// };

// export default LineProcess;


"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Define the shape of a single step item
interface Step {
    id: string;
    title: string;
    description: string;
}

// Define the props for the StepCard component
interface StepCardProps {
    step: Step;
    index: number;
}

const steps: Step[] = [
    {
        id: '01',
        title: 'Discovery & Strategy',
        description: 'We uncover your goals, audience, and challenges to build a clear roadmap for success.',
    },
    {
        id: '02',
        title: 'Design & Prototyping',
        description: 'Transforming insights into bold, user-focused designs that connect and convert.',
    },
    {
        id: '03',
        title: 'Development & Launch',
        description: 'From pixel to code, we craft high-performing websites and launch them flawlessly.',
    },
    {
        id: '04',
        title: 'Optimization & Scale',
        description: 'We monitor, refine, and enhance to ensure continuous growth and lasting impact.',
    },
];

const StepCard = ({ step, index }: StepCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-12 md:pl-20 pb-0 last:pb-0"
        >
            {/* Circle Marker */}
            <div className="absolute left-0 top-0 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-900 shadow-sm">
                {step.id}
            </div>

            {/* Content Card */}
            <div className="rounded-[12px] border border-gray-100 bg-white p-8 md:p-10 shadow-sm transition-shadow hover:shadow-md">
                <h5 className="mb-4 text-xl md:text-2xl font-normal text-gray-800">
                    {step.title}
                </h5>
                <p className="text-lg text-gray-500 leading-relaxed">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
};

function ProcessSection() {
    const containerRef = useRef<HTMLElement>(null);

    // Track scroll progress of the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Smooth out the progress bar movement
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-gray-50 py-24 px-6 md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

                    {/* Left Column: Sticky Header */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-20">
                            <h2 className="mb-6 text-4xl font-normal tracking-tight text-gray-900 md:text-5xl lg:text-4xl leading-[1.1]">
                                Proven & effective process.
                                <span className="block text-gray-400">That delivers results.</span>
                            </h2>
                            <p className="max-w-md text-lg text-gray-600 leading-relaxed">
                                We dive deep into your goals, audience, and challenges to craft a strategy
                                that drives clear direction and impact.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Animated Timeline */}
                    <div className="relative lg:col-span-7">
                        {/* The Vertical Line Background */}
                        <div className="absolute left-[19px] md:left-[23px] top-0 h-full w-[2px] bg-gray-200" />

                        {/* The Animated Progress Line (Red) */}
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute left-[19px] md:left-[23px] top-0 h-full w-[2px] bg-red-500 z-0"
                        />

                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <StepCard key={step.id} step={step} index={index} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

const LineProcess = () => {
    return (
        <main className="bg-white">
            <ProcessSection />
        </main>
    );
};

export default LineProcess;