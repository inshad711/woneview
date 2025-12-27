


// // E:\woneview\app\component\ReviewSection.tsx
// "use client";
// import React, { useState, useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Star, Check } from 'lucide-react';
// import { motion } from 'framer-motion';

// // --- Types & Data ---

// interface Review {
//     id: string;
//     author: string;
//     date: string;
//     rating: number;
//     content: string;
//     source: 'google' | 'g2' | 'trustpilot';
//     title?: string;
//     avatar?: string;
// }

// const reviews: Review[] = [
//     {
//         id: 'ai-summary',
//         author: 'AI-Generated Summary',
//         date: 'Based on 1,021 reviews',
//         rating: 4.8,
//         content: '',
//         source: 'google',
//     },
//     {
//         id: '1',
//         author: 'Shirley Cui',
//         date: '3 days ago',
//         rating: 5,
//         content: "We're having an excellent experience using their whatsapp and google review apps on our websites.",
//         source: 'google',
//     },
//     {
//         id: '2',
//         author: 'Yevhen Kalashnik',
//         date: '6 days ago',
//         rating: 5,
//         content: "I’ve been using these widgets for a few years now. I’m fully satisfied with the features, price, and support. It makes our workflow so much faster.",
//         source: 'google',
//     },
//     {
//         id: '3',
//         author: 'Jakob F.',
//         date: 'December 5',
//         rating: 5,
//         title: 'Easy Setup, Exceptional Support',
//         content: "I think Elfsight is super easy to install and use right out of the box. It only takes a few minutes to install on any website and embed it. I really like their customer service...",
//         source: 'g2',
//     },
//     {
//         id: '4',
//         author: 'Pablo Alejandro R.',
//         date: 'November 20',
//         rating: 5,
//         content: "Here in Australia, we have been using Elfsight for 12 Months, and we are very impressed with its integration and ease of setup and use.",
//         source: 'g2',
//     },
//     {
//         id: '5',
//         author: 'Shirley Cui',
//         date: '3 days ago',
//         rating: 5,
//         content: "We're having an excellent experience using their whatsapp and google review apps on our websites.",
//         source: 'google',
//     },
//     {
//         id: '6',
//         author: 'Yevhen Kalashnik',
//         date: '6 days ago',
//         rating: 5,
//         content: "I’ve been using these widgets for a few years now. I’m fully satisfied with the features, price, and support. It makes our workflow so much faster.",
//         source: 'google',
//     },
//     {
//         id: '7',
//         author: 'Jakob F.',
//         date: 'December 5',
//         rating: 5,
//         title: 'Easy Setup, Exceptional Support',
//         content: "I think Elfsight is super easy to install and use right out of the box. It only takes a few minutes to install on any website and embed it. I really like their customer service...",
//         source: 'g2',
//     },
//     {
//         id: '8',
//         author: 'Pablo Alejandro R.',
//         date: 'November 20',
//         rating: 5,
//         content: "Here in Australia, we have been using Elfsight for 12 Months, and we are very impressed with its integration and ease of setup and use.",
//         source: 'g2',
//     },

// ];

// // --- Sub-components ---

// const RatingStars = ({ rating }: { rating: number }) => {
//     return (
//         <div className="flex gap-0.5">
//             {[...Array(5)].map((_, i) => (
//                 <Star
//                     key={i}
//                     size={18}
//                     className={`${i < Math.floor(rating) ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-200'
//                         }`}
//                 />
//             ))}
//         </div>
//     );
// };

// const SourceIcon = ({ source }: { source: string }) => {
//     if (source === 'google') {
//         return (
//             <svg className="w-6 h-6" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
//             </svg>
//         );
//     }
//     if (source === 'g2') {
//         return (
//             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF492C">
//                 <path d="M12.294 2.5c.656.034 1.312.083 1.96.192-.673 1.368-1.337 2.739-2.014 4.104a5.85 5.85 0 0 0-3.756 1.336 5.699 5.699 0 0 0-2.015 3.421c-.221 1.382.06 2.846.846 4.022.867 1.35 2.34 2.302 3.946 2.568a6.01 6.01 0 0 0 4.805-1.302c.734 1.25 1.471 2.5 2.213 3.745-1.95 1.398-4.42 2.074-6.83 1.882a10.227 10.227 0 0 1-6.442-2.894 9.851 9.851 0 0 1-2.896-5.68A18.008 18.008 0 0 1 2 12.37v-.32c.068-.677.134-1.359.32-2.016.684-2.675 2.57-5.022 5.057-6.324 1.474-.79 3.15-1.18 4.828-1.21h.09Zm7.146 8.639c.825 1.4 1.642 2.803 2.486 4.192l.074.087v.06l-.073.087c-.842 1.397-1.66 2.807-2.497 4.208-.845-1.446-1.703-2.884-2.554-4.326-1.703.001-3.406-.002-5.109.002.848-1.437 1.705-2.868 2.544-4.31 1.71-.004 3.42-.003 5.129 0Zm-.304-7.11c.737.642.697 1.883.005 2.542-.566.576-1.382.797-2.047 1.233-.273.17-.427.455-.53.743 1.025.013 2.05.006 3.076.004.005.407.003.815.003 1.222a1018.97 1018.97 0 0 0-4.613 0c-.024-.784.098-1.617.59-2.264.482-.632 1.219-1.007 1.931-1.346.32-.164.7-.389.745-.772.051-.28-.124-.565-.39-.674-.431-.18-.949-.102-1.34.138-.295.18-.487.473-.663.758-.291-.285-.583-.57-.88-.848.392-.752 1.206-1.283 2.073-1.344.724-.061 1.5.116 2.04.608Z" />
//             </svg>
//         );
//     }
//     return null;
// };

// const ReviewCard = ({ review }: { review: Review }) => {
//     if (review.id === 'ai-summary') {
//         return (
//             <div className="min-w-[350px] max-w-[350px] bg-[#F8F9FB] rounded-[12px] p-8 flex flex-col h-[320px] shrink-0 border border-gray-100 shadow-sm">
//                 <div className="flex items-center gap-4 mb-6">
//                     <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shrink-0">
//                         <Star size={20} className="text-white fill-white" />
//                     </div>
//                     <div>
//                         <h4 className="text-gray-900 font-bold text-base">{review.author}</h4>
//                         <p className="text-gray-500 text-sm">{review.date}</p>
//                     </div>
//                 </div>
//                 <div className="mb-4">
//                     <RatingStars rating={4.8} />
//                 </div>
//                 <div className="space-y-4">
//                     {[
//                         "User-friendly interface allows for quick integration.",
//                         "Outstanding customer support is consistently praised.",
//                     ].map((text, i) => (
//                         <div key={i} className="flex gap-3 items-start">
//                             <div className="mt-1 shrink-0 flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full">
//                                 <Check size={12} className="text-white" />
//                             </div>
//                             <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-w-[350px] max-w-[350px] bg-white rounded-[12px] p-8 flex flex-col h-[320px] shrink-0 border border-gray-100 shadow-sm transition-all hover:shadow-md">
//             <div className="flex justify-between items-start mb-6">
//                 <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center text-gray-600 font-bold text-lg uppercase shrink-0">
//                         {review.author.charAt(0)}
//                     </div>
//                     <div className="flex flex-col">
//                         <h4 className="text-[#111827] font-bold text-[17px] leading-tight">{review.author}</h4>
//                         <p className="text-gray-500 text-sm mt-0.5">{review.date}</p>
//                     </div>
//                 </div>
//                 <div className="pt-1">
//                     <SourceIcon source={review.source} />
//                 </div>
//             </div>

//             <div className="mb-5">
//                 <RatingStars rating={review.rating} />
//             </div>

//             <div className="flex flex-col">
//                 {review.title && (
//                     <h5 className="text-gray-900 font-bold text-base mb-2 leading-snug">{review.title}</h5>
//                 )}
//                 <p className="text-[#4B5563] text-[16px] leading-[1.6] line-clamp-5 overflow-hidden">
//                     {review.content}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default function ReviewSection() {
//     const scrollRef = useRef<HTMLDivElement>(null);
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(true);

//     const checkScroll = () => {
//         if (scrollRef.current) {
//             const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//             setCanScrollLeft(scrollLeft > 0);
//             setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
//         }
//     };

//     useEffect(() => {
//         checkScroll();
//         window.addEventListener('resize', checkScroll);
//         return () => window.removeEventListener('resize', checkScroll);
//     }, []);

//     const scroll = (direction: 'left' | 'right') => {
//         if (scrollRef.current) {
//             const { clientWidth } = scrollRef.current;
//             const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
//             scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="w-full bg-white">
//             <section className="pt-20 px-4 md:px-8 max-w-[1440px] mx-auto overflow-hidden">

//                 <div className="text-center mb-4">
//                     <h2 className="text-4xl md:text-4xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
//                         <span className="text-black">  Loved by  </span>
//                         <motion.span
//                             className="px-4 py-1 text-black inline-block"
//                             style={{
//                                 borderLeft: '3px solid #db6e1a',
//                                 background: 'linear-gradient(90deg, rgba(219, 110, 26, 0) 16%, rgba(219, 110, 26, 0.15) 100%)',
//                             }}
//                         >
//                             Businesses
//                         </motion.span>
//                         <span className="text-black">Worldwide</span>
//                     </h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2 }}
//                         className="text-lg text-[#1D322D]/70 max-w-2xl mx-auto"
//                     >
//                         Tens of thousands of reviews and multiple awards prove why companies worldwide rely on Elfsight.
//                     </motion.p>
//                 </div>

//                 <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-20">
//                     <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
//                         <img src="https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/rating-google.svg" alt="Google" className="h-10 w-auto" />
//                         <img src="https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/rating-g2.svg" alt="G2" className="h-10 w-auto" />
//                         <img src="https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/rating-trustpilot.svg" alt="Trustpilot" className="h-10 w-auto" />
//                     </div>

//                     <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 bg-[#F8F9FB] p-6 px-10 rounded-[40px] border border-gray-100">
//                         {[
//                             "badge-best-relationship-2025.png",
//                             "badge-easiest-setup-2025.png",
//                             "badge-momentum-leader-2025.png",
//                             "badge-grid-leader-2025.png",
//                             "badge-high-performer-2025.png"
//                         ].map((badge, idx) => (
//                             <img
//                                 key={idx}
//                                 src={`https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/${badge}`}
//                                 alt="Award"
//                                 className="h-16 md:h-20 w-auto hover:scale-110 transition-transform cursor-help"
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="relative group max-w-[100vw]">
//                     {/* --- NAVIGATION BUTTONS (ALWAYS VISIBLE) --- */}
//                     <button
//                         onClick={() => scroll('left')}
//                         className={`absolute -left-2 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white shadow-2xl border border-gray-100 transition-all flex items-center justify-center hover:bg-gray-50 active:scale-95 ${!canScrollLeft ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900 cursor-pointer'}`}
//                     >
//                         <ChevronLeft size={24} />
//                     </button>

//                     <button
//                         onClick={() => scroll('right')}
//                         className={`absolute -right-2 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white shadow-2xl border border-gray-100 transition-all flex items-center justify-center hover:bg-gray-50 active:scale-95 ${!canScrollRight ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900 cursor-pointer'}`}
//                     >
//                         <ChevronRight size={24} />
//                     </button>

//                     {/* Gradient Fades */}
//                     <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//                     <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

//                     <div
//                         ref={scrollRef}
//                         onScroll={checkScroll}
//                         className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-10 md:px-20 pb-10"
//                     >
//                         {reviews.map((review) => (
//                             <ReviewCard key={review.id} review={review} />
//                         ))}
//                     </div>
//                 </div>

//             </section>

//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 .no-scrollbar::-webkit-scrollbar { display: none; }
//                 .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//                 `
//             }} />
//         </div>
//     );
// }

"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Types & Data ---

interface Review {
    id: string;
    author: string;
    date: string;
    rating: number;
    content: string;
    source: 'google' | 'g2' | 'trustpilot';
    title?: string;
    avatar?: string;
}

const reviews: Review[] = [
    {
        id: 'ai-summary',
        author: 'AI-Generated Summary',
        date: 'Based on 1,021 reviews',
        rating: 4.8,
        content: '',
        source: 'google',
    },
    {
        id: '1',
        author: 'Shirley Cui',
        date: '3 days ago',
        rating: 5,
        content: "We're having an excellent experience using their whatsapp and google review apps on our websites.",
        source: 'google',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
    },
    {
        id: '2',
        author: 'Yevhen Kalashnik',
        date: '6 days ago',
        rating: 5,
        content: "I’ve been using these widgets for a few years now. I’m fully satisfied with the features, price, and support. It makes our workflow so much faster.",
        source: 'google',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
        id: '3',
        author: 'Jakob F.',
        date: 'December 5',
        rating: 5,
        title: 'Easy Setup, Exceptional Support',
        content: "I think Elfsight is super easy to install and use right out of the box. It only takes a few minutes to install on any website and embed it. I really like their customer service...",
        source: 'g2',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    {
        id: '4',
        author: 'Pablo Alejandro R.',
        date: 'November 20',
        rating: 5,
        content: "Here in Australia, we have been using Elfsight for 12 Months, and we are very impressed with its integration and ease of setup and use.",
        source: 'g2',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
        id: '5',
        author: 'Sarah Jenkins',
        date: '1 week ago',
        rating: 5,
        content: "The best tool for social proof. Our conversion rate increased by 15% after adding the review widget.",
        source: 'google',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
        id: '6',
        author: 'Marcus Thorne',
        date: '2 weeks ago',
        rating: 5,
        content: "Incredible value for money. The interface is clean and the widgets are highly customizable to match our branding.",
        source: 'google',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face'
    },
    {
        id: '7',
        author: 'Elena R.',
        date: 'December 12',
        rating: 5,
        title: 'Seamless Integration',
        content: "I've tried many different platforms, but this one is by far the most stable and easiest to manage.",
        source: 'g2',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    {
        id: '8',
        author: 'David Chen',
        date: 'November 28',
        rating: 5,
        content: "Technical support answered within 10 minutes and solved my CSS issue immediately. 5 stars!",
        source: 'g2',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
    },
];

// --- Sub-components ---

const RatingStars = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={18}
                    className={`${i < Math.floor(rating) ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-200'
                        }`}
                />
            ))}
        </div>
    );
};

const SourceIcon = ({ source }: { source: string }) => {
    if (source === 'google') {
        return (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
        );
    }
    if (source === 'g2') {
        return (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF492C">
                <path d="M12.294 2.5c.656.034 1.312.083 1.96.192-.673 1.368-1.337 2.739-2.014 4.104a5.85 5.85 0 0 0-3.756 1.336 5.699 5.699 0 0 0-2.015 3.421c-.221 1.382.06 2.846.846 4.022.867 1.35 2.34 2.302 3.946 2.568a6.01 6.01 0 0 0 4.805-1.302c.734 1.25 1.471 2.5 2.213 3.745-1.95 1.398-4.42 2.074-6.83 1.882a10.227 10.227 0 0 1-6.442-2.894 9.851 9.851 0 0 1-2.896-5.68A18.008 18.008 0 0 1 2 12.37v-.32c.068-.677.134-1.359.32-2.016.684-2.675 2.57-5.022 5.057-6.324 1.474-.79 3.15-1.18 4.828-1.21h.09Zm7.146 8.639c.825 1.4 1.642 2.803 2.486 4.192l.074.087v.06l-.073.087c-.842 1.397-1.66 2.807-2.497 4.208-.845-1.446-1.703-2.884-2.554-4.326-1.703.001-3.406-.002-5.109.002.848-1.437 1.705-2.868 2.544-4.31 1.71-.004 3.42-.003 5.129 0Zm-.304-7.11c.737.642.697 1.883.005 2.542-.566.576-1.382.797-2.047 1.233-.273.17-.427.455-.53.743 1.025.013 2.05.006 3.076.004.005.407.003.815.003 1.222a1018.97 1018.97 0 0 0-4.613 0c-.024-.784.098-1.617.59-2.264.482-.632 1.219-1.007 1.931-1.346.32-.164.7-.389.745-.772.051-.28-.124-.565-.39-.674-.431-.18-.949-.102-1.34.138-.295.18-.487.473-.663.758-.291-.285-.583-.57-.88-.848.392-.752 1.206-1.283 2.073-1.344.724-.061 1.5.116 2.04.608Z" />
            </svg>
        );
    }
    return null;
};

const ReviewCard = ({ review }: { review: Review }) => {
    if (review.id === 'ai-summary') {
        return (
            <div className="min-w-[350px] max-w-[350px] bg-[#F8F9FB] rounded-[12px] p-8 flex flex-col h-[320px] shrink-0 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shrink-0">
                        <Star size={20} className="text-white fill-white" />
                    </div>
                    <div>
                        <h4 className="text-gray-900 font-bold text-base">{review.author}</h4>
                        <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <RatingStars rating={4.8} />
                </div>
                <div className="space-y-4">
                    {[
                        "User-friendly interface allows for quick integration.",
                        "Outstanding customer support is consistently praised.",
                    ].map((text, i) => (
                        <div key={i} className="flex gap-3 items-start">
                            <div className="mt-1 shrink-0 flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full">
                                <Check size={12} className="text-white" />
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="min-w-[350px] max-w-[350px] bg-white rounded-[12px] p-8 flex flex-col h-[320px] shrink-0 border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                    {/* Avatar with fallback to initial letter */}
                    <div className="w-12 h-12 rounded-full bg-[#F3F4F6] overflow-hidden flex items-center justify-center text-gray-600 font-bold text-lg uppercase shrink-0">
                        {review.avatar ? (
                            <img
                                src={review.avatar}
                                alt={review.author}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            review.author.charAt(0)
                        )}
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-[#111827] font-bold text-[17px] leading-tight">{review.author}</h4>
                        <p className="text-gray-500 text-sm mt-0.5">{review.date}</p>
                    </div>
                </div>
                <div className="pt-1">
                    <SourceIcon source={review.source} />
                </div>
            </div>

            <div className="mb-5">
                <RatingStars rating={review.rating} />
            </div>

            <div className="flex flex-col">
                {review.title && (
                    <h5 className="text-gray-900 font-bold text-base mb-2 leading-snug">{review.title}</h5>
                )}
                <p className="text-[#4B5563] text-[16px] leading-[1.6] line-clamp-5 overflow-hidden">
                    {review.content}
                </p>
            </div>
        </div>
    );
};

export default function ReviewSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full bg-white">
            <section className="pt-20 px-4 md:px-8 max-w-[1440px] mx-auto overflow-hidden">

                <div className="text-center mb-4">
                    <h2 className="text-4xl md:text-4xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                        <span className="text-black"> Loved by </span>
                        <motion.span
                            className="px-4 py-1 text-black inline-block"
                            style={{
                                borderLeft: '3px solid #db6e1a',
                                background: 'linear-gradient(90deg, rgba(219, 110, 26, 0) 16%, rgba(219, 110, 26, 0.15) 100%)',
                            }}
                        >
                            Businesses
                        </motion.span>
                        <span className="text-black">Worldwide</span>
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#1D322D]/70 max-w-2xl mx-auto"
                    >
                        Tens of thousands of reviews and multiple awards prove why companies worldwide rely on Elfsight.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-8">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        <img src="https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/rating-google.svg" alt="Google" className="h-10 w-auto" />
                        <img src="https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/rating-g2.svg" alt="G2" className="h-10 w-auto" />
                        <img src="https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/rating-trustpilot.svg" alt="Trustpilot" className="h-10 w-auto" />
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 bg-[#F8F9FB] p-6 px-10 rounded-[40px] border border-gray-100">
                        {[
                            "badge-best-relationship-2025.png",
                            "badge-easiest-setup-2025.png",
                            "badge-momentum-leader-2025.png",
                            "badge-grid-leader-2025.png",
                            "badge-high-performer-2025.png"
                        ].map((badge, idx) => (
                            <img
                                key={idx}
                                src={`https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/${badge}`}
                                alt="Award"
                                className="h-16 md:h-20 w-auto hover:scale-110 transition-transform cursor-help"
                            />
                        ))}
                    </div>
                </div>

                <div className="relative group max-w-[100vw]">
                    {/* --- NAVIGATION BUTTONS (ALWAYS VISIBLE) --- */}
                    <button
                        onClick={() => scroll('left')}
                        className={`absolute -left-2 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white shadow-2xl border border-gray-100 transition-all flex items-center justify-center hover:bg-gray-50 active:scale-95 ${!canScrollLeft ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900 cursor-pointer'}`}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className={`absolute -right-2 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white shadow-2xl border border-gray-100 transition-all flex items-center justify-center hover:bg-gray-50 active:scale-95 ${!canScrollRight ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900 cursor-pointer'}`}
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Gradient Fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div
                        ref={scrollRef}
                        onScroll={checkScroll}
                        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-10 md:px-20 pb-10"
                    >
                        {reviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>
                </div>

            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `
            }} />
        </div>
    );
}