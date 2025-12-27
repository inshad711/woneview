import React from 'react';
import { Car, Search, ShieldCheck } from 'lucide-react';

const WorkflowSection = () => {
    const steps = [
        {
            id: "01",
            icon: <Car className="w-6 h-6" />,
            title: "Bring your car here",
            description: "Tell us about your car and choose the date you want.",
            linkText: "contact us",
            href: "#"
        },
        {
            id: "02",
            icon: <Search className="w-6 h-6" />,
            title: "Get a free inspection",
            description: "Share details of your vehicle and select the preferred date.",
            linkText: "get in touch",
            href: "#"
        },
        {
            id: "03",
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Get solid solution",
            description: "Disclose your car's information and pick a preferred date.",
            linkText: "contact us",
            href: "#"
        }
    ];

    return (
        <section className="py-24 px-6 bg-white overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-block px-5 py-1 mb-6 border border-[#E81C2E] rounded-full">
                        <span className="text-[12px] font-bold uppercase tracking-widest text-[#222222]">
                            how it works
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#222222] tracking-tight">
                        Easy to follow booking
                    </h2>
                </div>

                {/* Workflow Wrapper */}
                <div className="relative flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-2">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            {/* Step Card */}
                            <div className="relative z-10 flex-1 flex flex-col items-center group">
                                <a
                                    href={step.href}
                                    className="w-full flex flex-col items-center text-center px-4"
                                >
                                    {/* Icon Wrapper - Matching Framer padding/size */}
                                    <div className="w-[70px] h-[70px] bg-white border border-gray-100 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md group-hover:border-[#E81C2E]/20 transition-all duration-300">
                                        <div className="text-[#E81C2E]">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="max-w-[280px]">
                                        <h3 className="text-[22px] font-bold text-[#222222] mb-3 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#666666] leading-relaxed text-[15px] mb-8">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Contact Us Footer (0.4 Opacity as per prompt) */}
                                    <div className="mt-auto">
                                        <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#222222]/40 group-hover:text-[#E81C2E] transition-colors duration-300">
                                            {step.linkText}
                                        </span>
                                    </div>
                                </a>
                            </div>

                            {/* Curved Connector SVG - Positioned between items */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:flex items-start pt-8 flex-shrink-0 w-32">
                                    <svg
                                        width="100%"
                                        height="40"
                                        viewBox="0 0 155 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`text-gray-200 transform translate-y-2 ${index % 2 === 0 ? '' : 'scale-y-[-1] translate-y-6'}`}
                                    >
                                        <path
                                            d="M2 20C40 20 60 2 90 2C120 2 135 38 153 38"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M146 32L153 38L146 44"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            )}

                            {/* Mobile Separator */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden flex justify-center py-6">
                                    <div className="h-10 w-[2px] bg-gray-100"></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function Process() {
    return (
        <div className='templateContainer'>
            <div className="flex items-center justify-center">
                <WorkflowSection />
            </div>
        </div>
    );
}

/// use my code  make work and make like this given image, using nextjs tsx and tailwindcss, and responsive