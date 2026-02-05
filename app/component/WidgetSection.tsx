// // E:\woneview\app\component\WidgetSection.tsx
// "use client";

// import React, { useState, useMemo, forwardRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     Search,
//     ChevronDown,
//     Star,
//     Sparkles,
//     Flame,
//     TrendingUp,
//     Zap,
//     LayoutGrid,
//     Share2,
//     MessageSquare,
//     ShoppingCart,
//     Wand2,
//     FileText,
//     Play,
//     Music,
//     Settings
// } from 'lucide-react';

// // --- Types ---
// type CategoryType = 'all' | 'ai-powered' | 'best-seller' | 'trending' | 'new' | 'social' | 'reviews' | 'e-commerce' | 'chats' | 'forms' | 'video' | 'audio' | 'tools';

// interface Widget {
//     id: string;
//     name: string;
//     caption: string;
//     categories: CategoryType[];
//     badge?: 'Best Seller' | 'New' | 'Trending';
//     rating: number;
//     url: string;
//     icon: React.ReactNode;
// }

// // --- Data ---
// const CATEGORIES: { id: CategoryType; name: string; icon: React.ReactNode }[] = [
//     { id: 'all', name: 'All Widgets', icon: <LayoutGrid className="w-4 h-4" /> },
//     { id: 'ai-powered', name: 'AI-Powered', icon: <Sparkles className="w-4 h-4 text-purple-500" /> },
//     { id: 'best-seller', name: 'Best Sellers', icon: <Flame className="w-4 h-4 text-orange-500" /> },
//     { id: 'trending', name: 'Trending', icon: <TrendingUp className="w-4 h-4 text-blue-500" /> },
//     { id: 'new', name: 'New Apps', icon: <Zap className="w-4 h-4 text-yellow-500" /> },
//     { id: 'social', name: 'Social', icon: <Share2 className="w-4 h-4" /> },
//     { id: 'reviews', name: 'Reviews', icon: <Star className="w-4 h-4" /> },
//     { id: 'e-commerce', name: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" /> },
//     { id: 'chats', name: 'Chats', icon: <MessageSquare className="w-4 h-4" /> },
//     { id: 'forms', name: 'Forms', icon: <FileText className="w-4 h-4" /> },
//     { id: 'video', name: 'Video', icon: <Play className="w-4 h-4" /> },
//     { id: 'audio', name: 'Audio', icon: <Music className="w-4 h-4" /> },
//     { id: 'tools', name: 'Tools', icon: <Settings className="w-4 h-4" /> },
// ];

// const WIDGETS: Widget[] = [
//     {
//         id: 'google-reviews',
//         name: 'Google Reviews',
//         caption: 'Display customer reviews from Google about your business.',
//         categories: ['reviews', 'ai-powered', 'best-seller'],
//         badge: 'Best Seller',
//         rating: 5,
//         url: '#',
//         icon: <path d="M25.429 4.598A19.61 19.61 0 0139.08 9.905l-5.825 5.825-.403-.366a11.091 11.091 0 00-7.424-2.693c-5.323 0-9.844 3.59-11.455 8.426a12.218 12.218 0 000 7.81c1.626 4.828 6.14 8.419 11.462 8.419 2.752 0 5.113-.705 6.943-1.949l-.01.004a9.457 9.457 0 003.975-5.7l.105-.503H25.43v-7.856h19.244a23.99 23.99 0 01.353 4.145c0 2.418-.337 4.69-.976 6.774-1.3-.497-2.925 0-3.572 1.491l-1.723 3.974-4.312.41c-2.427.232-3.408 3.249-1.58 4.863l.919.811c-2.276.963-4.841 1.519-7.64 1.6l-.713.01A20.406 20.406 0 017.196 34.162l-.299-.622a20.416 20.416 0 01.3-17.7l.296-.568A20.4 20.4 0 0125.43 4.598z" />
//     },
//     {
//         id: 'instagram-feed',
//         name: 'Instagram Feed',
//         caption: 'Display photos, reels, and posts from your Instagram account.',
//         categories: ['social', 'best-seller'],
//         badge: 'Best Seller',
//         rating: 5,
//         url: '#',
//         icon: <path d="M44.192 12.985C46.484 14.612 48 17.292 48 20.325v18.672C48 43.95 43.951 48 38.997 48H20.324c-3.013 0-5.712-1.516-7.34-3.808h25.587c3.088 0 5.62-2.533 5.62-5.62V12.984zM31.676 4c4.954 0 9.003 4.049 9.003 9.003v18.673c0 4.954-4.049 9.003-9.003 9.003H13.003C8.05 40.679 4 36.63 4 31.676V13.003C4 8.05 8.049 4 13.003 4h18.673zm-.426 3.808H13.43c-3.088 0-5.62 2.533-5.62 5.62V31.25c0 3.088 2.532 5.62 5.62 5.62h17.84c3.087 0 5.62-2.532 5.62-5.62h-.018V13.43c0-3.088-2.533-5.62-5.62-5.62zm-9.114 5.14c5.177 0 9.373 4.215 9.373 9.373 0 5.158-4.215 9.373-9.373 9.373-5.158 0-9.373-4.215-9.373-9.373 0-5.158 4.197-9.373 9.373-9.373zm0 4.049c-2.94 0-5.343 2.403-5.343 5.343 0 2.939 2.404 5.342 5.343 5.342 2.94 0 5.343-2.403 5.343-5.342 0-2.94-2.403-5.343-5.343-5.343zm9.392-6.138a2.07 2.07 0 110 4.141 2.07 2.07 0 010-4.141z" />
//     },
//     {
//         id: 'countdown-timer',
//         name: 'Countdown Timer',
//         caption: 'Create countdowns to boost urgency for sales and limited-time deals.',
//         categories: ['e-commerce', 'best-seller'],
//         badge: 'Best Seller',
//         rating: 5,
//         url: '#',
//         icon: <path d="M28.192 2c1.059 0 1.918.855 1.918 1.909a1.913 1.913 0 01-1.918 1.908h-.274v1.727C38.064 8.504 46 17.009 46 27.358c0 10.993-8.954 19.905-20 19.905S6 38.351 6 27.358C6 17.01 13.936 8.505 24.082 7.544V5.817h-.274A1.913 1.913 0 0121.89 3.91c0-1.055.86-1.91 1.918-1.91h4.384zM26 10.725c-9.23 0-16.712 7.447-16.712 16.633S16.77 43.991 26 43.991s16.712-7.447 16.712-16.633S35.23 10.725 26 10.725zm1.912 16.782v.015a1.912 1.912 0 01-.96 1.643l-7.51 4.316a1.917 1.917 0 01-1.91.005 1.904 1.904 0 01-.008-3.311l6.558-3.769v-11.59c0-1.055.859-1.91 1.918-1.91 1.06 0 1.918.855 1.918 1.91v12.542c0 .05-.002.1-.006.15z" />
//     },
//     {
//         id: 'ai-chatbot',
//         name: 'AI Chatbot',
//         caption: 'Create a virtual assistant to answer your customers’ questions 24/7.',
//         categories: ['chats', 'ai-powered', 'best-seller'],
//         badge: 'Best Seller',
//         rating: 5,
//         url: '#',
//         icon: <path d="M33.614 27.828c0 5.376-4.374 9.75-9.75 9.75h-4.999l-6.181 6.184a1.091 1.091 0 01-1.181.234 1.083 1.083 0 01-.67-1.001v-5.417H9.75c-5.375 0-9.75-4.374-9.75-9.75v-5.633c0-5.375 4.375-9.75 9.75-9.75h14.114c5.376 0 9.75 4.375 9.75 9.75v5.633zM16.5 17.223c.066-.336.548-.336.615 0l.659 3.336a4.493 4.493 0 003.66 3.56l3.469.585c.348.06.348.56 0 .619l-3.47.585a4.493 4.493 0 00-3.66 3.56l-.658 3.335c-.067.337-.549.337-.615 0l-.66-3.335a4.493 4.493 0 00-3.66-3.56l-3.469-.585c-.348-.06-.348-.56 0-.619l3.47-.585a4.493 4.493 0 003.66-3.56l.659-3.336z" />
//     },
//     {
//         id: 'calculator',
//         name: 'Calculator',
//         caption: 'Create online calculators for loan, mortgage, and service pricing.',
//         categories: ['forms', 'ai-powered', 'new'],
//         badge: 'New',
//         rating: 5,
//         url: '#',
//         icon: <path d="M17.111 34.889v2.778c0 .481.157.88.472 1.194.315.315.713.472 1.195.472.481 0 .88-.157 1.194-.472.315-.315.472-.713.472-1.194v-2.778h2.778c.482 0 .88-.158 1.195-.472.314-.315.472-.713.472-1.195 0-.481-.157-.88-.472-1.194-.315-.315-.713-.472-1.195-.472h-2.778v-2.778c0-.482-.157-.88-.472-1.195-.315-.314-.713-.472-1.194-.472-.482 0-.88.157-1.195.472-.314.315-.472.713-.472 1.195v2.778h-2.778c-.481 0-.88.157-1.194.472-.315.315-.472.713-.472 1.194 0 .482.157.88.472 1.195.315.314.713.472 1.194.472h2.778zm12.778 2.778h7.778c.481 0 .88-.158 1.194-.473.315-.314.472-.713.472-1.194s-.157-.88-.472-1.194c-.315-.315-.713-.473-1.194-.473h-7.778c-.482 0-.88.158-1.195.473-.314.314-.472.713-.472 1.194s.158.88.472 1.194c.315.315.713.473 1.195.473zM10.445 46c-1.222 0-2.268-.435-3.138-1.306C6.436 43.824 6 42.778 6 41.556V10.444c0-1.222.435-2.268 1.306-3.138C8.176 6.436 9.222 6 10.444 6h31.112c1.222 0 2.268.435 3.138 1.306.87.87 1.306 1.916 1.306 3.138v31.112c0 1.222-.435 2.268-1.306 3.138-.87.87-1.916 1.306-3.138 1.306H10.444z" />
//     },
//     {
//         id: 'social-feed',
//         name: 'Social Feed',
//         caption: 'Display posts from Instagram, Facebook, Twitter and more in one feed.',
//         categories: ['social', 'trending'],
//         badge: 'Trending',
//         rating: 5,
//         url: '#',
//         icon: <path d="M22.518 26.758c1.21 0 2.191.943 2.205 2.11v15.926l-.005.128c-.08 1.108-1.035 1.983-2.2 1.983H8.205C6.987 46.905 6 45.949 6 44.769V28.894c0-1.18.987-2.136 2.205-2.136h14.313zm21.248 0c1.234 0 2.234.947 2.234 2.115V44.79c0 1.168-1 2.115-2.234 2.115H29.51c-1.233 0-2.233-.947-2.233-2.115V28.873c0-1.168 1-2.115 2.233-2.115h14.256z" />
//     },
//     {
//         id: 'whatsapp-chat',
//         name: 'WhatsApp Chat',
//         caption: 'Connect with customers via WhatsApp for quick support.',
//         categories: ['chats', 'best-seller'],
//         badge: 'Best Seller',
//         rating: 5,
//         url: '#',
//         icon: <path d="M24.924 4.025C37.8 3.417 48.39 13.793 47.99 26.52c-.373 11.872-10.357 21.303-22.331 21.122a22.043 22.043 0 01-9.453-2.276l-11.11 2.61a.853.853 0 01-1.036-.997l2.336-11.246A21.586 21.586 0 014 25.89C3.965 14.256 13.21 4.579 24.924 4.025z" />
//     },
//     {
//         id: 'pricing-table',
//         name: 'Pricing Table',
//         caption: 'Create pricing tables to showcase plans and features clearly.',
//         categories: ['e-commerce'],
//         rating: 5,
//         url: '#',
//         icon: <path d="M30.424 7c4.31 0 7.833 3.362 7.833 7.475v21.643c0 4.114-2.235 7.476-6.546 7.476H21.575c-4.31 0-7.833-3.362-7.833-7.476V14.475c0-4.113 3.522-7.475 7.833-7.475h8.848z" />
//     }
// ];

// // --- Sub-components ---

// // Use forwardRef to allow framer-motion to measure/hold the DOM element
// const WidgetCard = forwardRef<HTMLDivElement, { widget: Widget }>(({ widget }, ref) => {
//     return (
//         <motion.div
//             ref={ref}
//             layout
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
//         >
//             <a href={widget.url} className="flex flex-col h-full space-y-4">
//                 <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-magenta-50 transition-colors">
//                     <svg
//                         viewBox="0 0 52 52"
//                         className="w-8 h-8 fill-gray-800 group-hover:fill-magenta-600 transition-colors"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         {widget.icon}
//                     </svg>
//                 </div>

//                 <div className="space-y-2 flex-grow">
//                     <div className="flex items-center gap-2 flex-wrap">
//                         <h3 className="font-bold text-lg text-gray-900 leading-tight">
//                             {widget.name}
//                         </h3>
//                         {widget.badge && (
//                             <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${widget.badge === 'Best Seller' ? 'border-orange-200 bg-orange-50 text-orange-600' :
//                                 widget.badge === 'New' ? 'border-green-200 bg-green-50 text-green-600' :
//                                     'border-blue-200 bg-blue-50 text-blue-600'
//                                 }`}>
//                                 {widget.badge}
//                             </span>
//                         )}
//                     </div>
//                     <p className="text-sm text-gray-500 line-clamp-2">
//                         {widget.caption}
//                     </p>
//                 </div>

//                 <div className="flex items-center gap-0.5 mt-auto">
//                     {[...Array(5)].map((_, i) => (
//                         <Star key={i} className={`w-3.5 h-3.5 ${i < widget.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
//                     ))}
//                 </div>
//             </a>
//         </motion.div>
//     );
// });

// WidgetCard.displayName = 'WidgetCard';

// // --- Main App Component ---

// export default function WidgetSection() {
//     const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
//     const [searchQuery, setSearchQuery] = useState('');

//     const filteredWidgets = useMemo(() => {
//         return WIDGETS.filter(widget => {
//             const matchesCategory = activeCategory === 'all' || widget.categories.includes(activeCategory);
//             const matchesSearch = widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 widget.caption.toLowerCase().includes(searchQuery.toLowerCase());
//             return matchesCategory && matchesSearch;
//         });
//     }, [activeCategory, searchQuery]);

//     return (
//         <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-magenta-100 selection:text-magenta-900">
//             {/* CSS Injection for custom Magenta color */}
//             <style dangerouslySetInnerHTML={{
//                 __html: `
//         :root { --magenta: #FF008A; }
//         .text-magenta { color: var(--magenta); }
//         .bg-magenta { background-color: var(--magenta); }
//         .border-magenta { border-color: var(--magenta); }
//         .bg-magenta-50 { background-color: #FFF0F7; }
//         .bg-magenta-100 { background-color: #FFE1F0; }
//         .hover\\:bg-magenta-600:hover { background-color: #E6007C; }
//         .fill-magenta-600 { fill: var(--magenta); }
//       `}} />

//             <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

//                 {/* --- Section Heading --- */}
//                 <div className="text-center mb-16 space-y-4">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="inline-block text-[13px] font-bold tracking-widest uppercase py-1 px-4 rounded-full bg-magenta-50 text-magenta border border-magenta/10"
//                     >
//                         97 No-Code Widgets
//                     </motion.div>
//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.1 }}
//                         className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
//                     >
//                         All the Widgets Your Website Needs
//                     </motion.h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="text-lg text-gray-600 max-w-2xl mx-auto"
//                     >
//                         Whatever your website goal, there’s a widget for it. No coding, no hassle, just results.
//                     </motion.p>
//                 </div>

//                 {/* --- Main Content Grid --- */}
//                 <div className="flex flex-col lg:flex-row gap-12 items-start">

//                     {/* Sidebar (Desktop) */}
//                     <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-8 space-y-2">
//                         {CATEGORIES.map((cat) => (
//                             <button
//                                 key={cat.id}
//                                 onClick={() => setActiveCategory(cat.id)}
//                                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeCategory === cat.id
//                                     ? 'bg-white shadow-md text-gray-900 border border-gray-100'
//                                     : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
//                                     }`}
//                             >
//                                 <span className={`${activeCategory === cat.id ? 'text-magenta' : 'text-gray-400'}`}>
//                                     {cat.icon}
//                                 </span>
//                                 {cat.name}
//                             </button>
//                         ))}
//                     </aside>

//                     {/* Mobile Category Select */}
//                     <div className="lg:hidden w-full relative mb-4">
//                         <div className="relative">
//                             <select
//                                 value={activeCategory}
//                                 onChange={(e) => setActiveCategory(e.target.value as CategoryType)}
//                                 className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-4 pr-10 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent shadow-sm"
//                             >
//                                 {CATEGORIES.map((cat) => (
//                                     <option key={cat.id} value={cat.id}>{cat.name}</option>
//                                 ))}
//                             </select>
//                             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
//                         </div>
//                     </div>

//                     {/* Catalog Area */}
//                     <main className="flex-grow space-y-8 w-full">

//                         {/* Search Bar */}
//                         <div className="relative group">
//                             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-magenta" />
//                             <input
//                                 type="text"
//                                 placeholder="Search for widgets (e.g. Google Reviews, Chat...)"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 className="w-full bg-white border border-gray-100 py-4 pl-12 pr-4 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
//                             />
//                         </div>

//                         {/* Grid */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
//                             <AnimatePresence mode="popLayout">
//                                 {filteredWidgets.map((widget) => (
//                                     <WidgetCard key={widget.id} widget={widget} />
//                                 ))}
//                             </AnimatePresence>

//                             {/* No Results Message */}
//                             {filteredWidgets.length === 0 && (
//                                 <motion.div
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: 1 }}
//                                     className="col-span-full py-20 text-center space-y-4"
//                                 >
//                                     <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
//                                         <Search className="text-gray-400 w-8 h-8" />
//                                     </div>
//                                     <h3 className="text-xl font-bold text-gray-800">No widgets found</h3>
//                                     <p className="text-gray-500">Try a different category or search term.</p>
//                                     <button
//                                         onClick={() => { setActiveCategory('all'); setSearchQuery('') }}
//                                         className="text-magenta font-semibold hover:underline"
//                                     >
//                                         Clear all filters
//                                     </button>
//                                 </motion.div>
//                             )}

//                             {/* Call to Action Card */}
//                             {filteredWidgets.length > 0 && (
//                                 <motion.div
//                                     layout
//                                     className="col-span-full mt-8"
//                                 >
//                                     <div className="bg-magenta rounded-3xl p-8 md:p-12 text-center text-white space-y-6 overflow-hidden relative group">
//                                         {/* Decorative Blobs */}
//                                         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
//                                         <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-24 -mb-24 transition-transform duration-700 group-hover:scale-150" />

//                                         <h3 className="text-2xl md:text-3xl font-extrabold relative z-10">
//                                             Take Your Website Further With the Perfect Widget
//                                         </h3>
//                                         <div className="relative z-10">
//                                             <a
//                                                 href="#"
//                                                 className="inline-block bg-white text-magenta font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95"
//                                             >
//                                                 Explore All 97 Widgets
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             )}
//                         </div>
//                     </main>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import React, { useState, useMemo, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  Star,
  Sparkles,
  Flame,
  TrendingUp,
  Zap,
  LayoutGrid,
  Share2,
} from "lucide-react";

// --- Types ---
// Removed: e-commerce, chats, forms, video, audio, tools
type CategoryType =
  | "all"
  | "ai-powered"
  | "best-seller"
  | "trending"
  | "new"
  | "social"
  | "reviews";

interface Widget {
  id: string;
  name: string;
  caption: string;
  categories: CategoryType[];
  badge?: "Best Seller" | "New" | "Trending";
  rating: number;
  url: string;
  icon: React.ReactNode;
}

// --- Data ---
const CATEGORIES: { id: CategoryType; name: string; icon: React.ReactNode }[] =
  [
    {
      id: "all",
      name: "All Widgets",
      icon: <LayoutGrid className="w-4 h-4" />,
    },
    {
      id: "ai-powered",
      name: "AI-Powered",
      icon: <Sparkles className="w-4 h-4 text-purple-500" />,
    },
    {
      id: "best-seller",
      name: "Best Sellers",
      icon: <Flame className="w-4 h-4 text-orange-500" />,
    },
    {
      id: "trending",
      name: "Trending",
      icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
    },
    {
      id: "new",
      name: "New Apps",
      icon: <Zap className="w-4 h-4 text-yellow-500" />,
    },
    { id: "social", name: "Social", icon: <Share2 className="w-4 h-4" /> },
    { id: "reviews", name: "Reviews", icon: <Star className="w-4 h-4" /> },
  ];

const WIDGETS: Widget[] = [
  {
    id: "google-reviews",
    name: "Google Reviews",
    caption: "Display customer reviews from Google about your business.",
    categories: ["reviews", "ai-powered", "best-seller"],
    badge: "Best Seller",
    rating: 5,
    url: "#",
    icon: (
      <path d="M25.429 4.598A19.61 19.61 0 0139.08 9.905l-5.825 5.825-.403-.366a11.091 11.091 0 00-7.424-2.693c-5.323 0-9.844 3.59-11.455 8.426a12.218 12.218 0 000 7.81c1.626 4.828 6.14 8.419 11.462 8.419 2.752 0 5.113-.705 6.943-1.949l-.01.004a9.457 9.457 0 003.975-5.7l.105-.503H25.43v-7.856h19.244a23.99 23.99 0 01.353 4.145c0 2.418-.337 4.69-.976 6.774-1.3-.497-2.925 0-3.572 1.491l-1.723 3.974-4.312.41c-2.427.232-3.408 3.249-1.58 4.863l.919.811c-2.276.963-4.841 1.519-7.64 1.6l-.713.01A20.406 20.406 0 017.196 34.162l-.299-.622a20.416 20.416 0 01.3-17.7l.296-.568A20.4 20.4 0 0125.43 4.598z" />
    ),
  },
  {
    id: "instagram-feed",
    name: "Instagram Feed",
    caption: "Display photos, reels, and posts from your Instagram account.",
    categories: ["social", "best-seller"],
    badge: "Best Seller",
    rating: 5,
    url: "#",
    icon: (
      <path d="M44.192 12.985C46.484 14.612 48 17.292 48 20.325v18.672C48 43.95 43.951 48 38.997 48H20.324c-3.013 0-5.712-1.516-7.34-3.808h25.587c3.088 0 5.62-2.533 5.62-5.62V12.984zM31.676 4c4.954 0 9.003 4.049 9.003 9.003v18.673c0 4.954-4.049 9.003-9.003 9.003H13.003C8.05 40.679 4 36.63 4 31.676V13.003C4 8.05 8.049 4 13.003 4h18.673zm-.426 3.808H13.43c-3.088 0-5.62 2.533-5.62 5.62V31.25c0 3.088 2.532 5.62 5.62 5.62h17.84c3.087 0 5.62-2.532 5.62-5.62h-.018V13.43c0-3.088-2.533-5.62-5.62-5.62zm-9.114 5.14c5.177 0 9.373 4.215 9.373 9.373 0 5.158-4.215 9.373-9.373 9.373-5.158 0-9.373-4.215-9.373-9.373 0-5.158 4.197-9.373 9.373-9.373zm0 4.049c-2.94 0-5.343 2.403-5.343 5.343 0 2.939 2.404 5.342 5.343 5.342 2.94 0 5.343-2.403 5.343-5.342 0-2.94-2.403-5.343-5.343-5.343zm9.392-6.138a2.07 2.07 0 110 4.141 2.07 2.07 0 010-4.141z" />
    ),
  },
  {
    id: "social-feed",
    name: "Social Feed",
    caption:
      "Display posts from Instagram, Facebook, Twitter and more in one feed.",
    categories: ["social", "trending"],
    badge: "Trending",
    rating: 5,
    url: "#",
    icon: (
      <path d="M22.518 26.758c1.21 0 2.191.943 2.205 2.11v15.926l-.005.128c-.08 1.108-1.035 1.983-2.2 1.983H8.205C6.987 46.905 6 45.949 6 44.769V28.894c0-1.18.987-2.136 2.205-2.136h14.313zm21.248 0c1.234 0 2.234.947 2.234 2.115V44.79c0 1.168-1 2.115-2.234 2.115H29.51c-1.233 0-2.233-.947-2.233-2.115V28.873c0-1.168 1-2.115 2.233-2.115h14.256z" />
    ),
  },
];

// --- Sub-components ---

const WidgetCard = forwardRef<HTMLDivElement, { widget: Widget }>(
  ({ widget }, ref) => {
    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
      >
        <a href={widget.url} className="flex flex-col h-full space-y-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-magenta-50 transition-colors">
            <svg
              viewBox="0 0 52 52"
              className="w-8 h-8 fill-gray-800 group-hover:fill-magenta-600 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
            >
              {widget.icon}
            </svg>
          </div>

          <div className="space-y-2 flex-grow">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-lg text-gray-900 leading-tight">
                {widget.name}
              </h3>
              {widget.badge && (
                <span
                  className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                    widget.badge === "Best Seller"
                      ? "border-orange-200 bg-orange-50 text-orange-600"
                      : widget.badge === "New"
                        ? "border-green-200 bg-green-50 text-green-600"
                        : "border-blue-200 bg-blue-50 text-blue-600"
                  }`}
                >
                  {widget.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 line-clamp-2">
              {widget.caption}
            </p>
          </div>

          <div className="flex items-center gap-0.5 mt-auto">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < widget.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
        </a>
      </motion.div>
    );
  },
);

WidgetCard.displayName = "WidgetCard";

// --- Main App Component ---

export default function WidgetSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWidgets = useMemo(() => {
    return WIDGETS.filter((widget) => {
      const matchesCategory =
        activeCategory === "all" || widget.categories.includes(activeCategory);
      const matchesSearch =
        widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        widget.caption.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-magenta-100 selection:text-magenta-900">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root { --magenta: #FF008A; }
        .text-magenta { color: var(--magenta); }
        .bg-magenta { background-color: var(--magenta); }
        .border-magenta { border-color: var(--magenta); }
        .bg-magenta-50 { background-color: #FFF0F7; }
        .bg-magenta-100 { background-color: #FFE1F0; }
        .hover\\:bg-magenta-600:hover { background-color: #E6007C; }
        .fill-magenta-600 { fill: var(--magenta); }
      `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-4xl font-medium tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <span className="text-black"> 97 </span>
            <motion.span
              className="px-4 py-1 text-black inline-block"
              style={{
                borderLeft: "3px solid #db6e1a",
                background:
                  "linear-gradient(90deg, rgba(219, 110, 26, 0) 16%, rgba(219, 110, 26, 0.15) 100%)",
              }}
            >
              No-Code
            </motion.span>
            <span className="text-black"> Widgets</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1D322D]/70 max-w-2xl mx-auto"
          >
            All the Widgets Your Website Needs
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1D322D]/70 max-w-2xl mx-auto"
          >
            Whatever your website goal, there’s a widget for it. No coding, no
            hassle, just results.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 md:gap-10 items-start">
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-8 space-y-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-white shadow-md text-gray-900 "
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                <span
                  className={`${
                    activeCategory === cat.id ? "text-magenta" : "text-gray-400"
                  }`}
                >
                  {cat.icon}
                </span>
                {cat.name}
              </button>
            ))}
          </aside>

          <div className="lg:hidden w-full relative mb-4">
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) =>
                  setActiveCategory(e.target.value as CategoryType)
                }
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-4 pr-10 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent shadow-sm"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
            </div>
          </div>

          <main className="flex-grow space-y-4 w-full">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-magenta" />
              <input
                type="text"
                placeholder="Search for widgets (e.g. Google Reviews, Chat...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-100 py-4 pl-12 pr-4 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-2">
              <AnimatePresence mode="popLayout">
                {filteredWidgets.map((widget) => (
                  <WidgetCard key={widget.id} widget={widget} />
                ))}
              </AnimatePresence>

              {filteredWidgets.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-10 text-center space-y-4"
                >
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Search className="text-gray-400 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    No widgets found
                  </h3>
                  <p className="text-gray-500">
                    Try a different category or search term.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchQuery("");
                    }}
                    className="text-magenta font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}

              {filteredWidgets.length > 0 && (
                <motion.div layout className="col-span-full mt-4">
                  <div className="bg-[#c05f42] rounded-3xl p-8 md:p-12 text-center text-white space-y-6 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#c05f42] rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c05f42] rounded-full blur-2xl -ml-24 -mb-24 transition-transform duration-700 group-hover:scale-150" />

                    <h3 className="text-2xl md:text-3xl font-medium relative z-10">
                      Take Your Website Further With the Perfect Widget
                    </h3>
                    <div className="relative z-10">
                      <a
                        href="#"
                        className="inline-block bg-white text-[#c05f42] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        Explore All 97 Widgets
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
