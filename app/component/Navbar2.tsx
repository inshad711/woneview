// // E:\woneview\app\component\Navbar2.tsx

// "use client";
// import React, { useState, useEffect } from 'react';
// import {
//     Phone,
//     Mail,
//     MapPin,
//     Facebook,
//     Twitter,
//     Instagram,
//     Linkedin,
//     Search,
//     ChevronDown,
//     Menu,
//     X,
//     Plus,
//     Minus
// } from 'lucide-react';

// // Types for Navigation
// type MenuItem = {
//     label: string;
//     href: string;
//     children?: MenuItem[];
// };

// const NAVIGATION_DATA: MenuItem[] = [
//     {
//         label: 'Home',
//         href: '/',
//         children: [
//             { label: 'Home 2', href: '/index-v2' },
//         ]
//     },
//     {
//         label: 'Tour',
//         href: '#',
//         children: [
//             { label: 'Destination', href: '/destination' },
//             { label: 'Tour Packages', href: '/tour-packages' },
//             { label: 'Package Offer', href: '/package-offer' },
//             { label: 'Package Detail', href: '/package-detail' },
//             { label: 'Tour Cart', href: '/tour-cart' },
//             { label: 'Package Booking', href: '/booking' },
//             { label: 'Confirmation', href: '/confirmation' },
//         ]
//     },
//     {
//         label: 'Pages',
//         href: '#',
//         children: [
//             { label: 'About', href: '/about' },
//             { label: 'Service', href: '/service' },
//             { label: 'Career', href: '/career' },
//             { label: 'Tour Guide', href: '/tour-guide' },
//             { label: 'Gallery', href: '/gallery' },
//             { label: 'FAQ Page', href: '/faq' },
//             { label: 'Testimonial', href: '/testimonial' },
//             { label: 'Contact', href: '/contact' },
//         ]
//     },
//     {
//         label: 'Shop',
//         href: '#',
//         children: [
//             { label: 'Shop Archive', href: '/shop' },
//             { label: 'Shop Single', href: '/shop-single' },
//             { label: 'Shop Cart', href: '/cart' },
//             { label: 'Shop Checkout', href: '/checkout' },
//         ]
//     },
//     {
//         label: 'Blog',
//         href: '#',
//         children: [
//             { label: 'Blog List', href: '/blog' },
//             { label: 'Blog Single', href: '/blog-single' },
//         ]
//     },
//     {
//         label: 'Dashboard',
//         href: '#',
//         children: [
//             { label: 'User List', href: '/admin/user' },
//             { label: 'Booking', href: '/admin/booking' },
//             { label: 'Packages', href: '/admin/packages' },
//         ]
//     }
// ];

// const Navbar2: React.FC = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
//     const [isScrolled, setIsScrolled] = useState(false);

//     // Handle scroll for sticky header effect
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const toggleMobileSubmenu = (label: string) => {
//         setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
//     };

//     return (
//         <div className="">
//             {/* Header Container */}
//             <header className="w-full relative z-50">

//                 {/* Top Header Bar */}
//                 <div className="bg-[#071c35] text-white text-sm py-2 px-4 md:px-8 hidden lg:block">
//                     <div className="max-w-7xl mx-auto flex justify-between items-center">
//                         {/* Contact Info */}
//                         <div className="flex items-center gap-6">
//                             <a href="tel:+01977259912" className="flex items-center gap-2 hover:text-[#f56942] transition-colors">
//                                 <Phone size={14} className="text-[#f56942]" />
//                                 <span>+01 (977) 2599 12</span>
//                             </a>
//                             <a href="mailto:info@domain.com" className="flex items-center gap-2 hover:text-[#f56942] transition-colors">
//                                 <Mail size={14} className="text-[#f56942]" />
//                                 <span>company@domain.com</span>
//                             </a>
//                             <div className="flex items-center gap-2">
//                                 <MapPin size={14} className="text-[#f56942]" />
//                                 <span>3146 Koontz Lane, California</span>
//                             </div>
//                         </div>

//                         {/* Social & Search */}
//                         <div className="flex items-center gap-6">
//                             <div className="flex items-center gap-4">
//                                 <a href="#" className="hover:text-[#f56942] transition-colors"><Facebook size={16} /></a>
//                                 <a href="#" className="hover:text-[#f56942] transition-colors"><Twitter size={16} /></a>
//                                 <a href="#" className="hover:text-[#f56942] transition-colors"><Instagram size={16} /></a>
//                                 <a href="#" className="hover:text-[#f56942] transition-colors"><Linkedin size={16} /></a>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Header Bar */}
//                 <div className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-white shadow-lg py-2' : 'bg-white py-4'}`}>
//                     <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

//                         {/* Logo */}
//                         <div className="flex-shrink-0">
//                             <a href="/" className="flex items-center gap-2">
//                                 {/* Logo Placeholder - Matches the visual weight of the image logo */}
//                                 <div className="bg-[#f56942] w-10 h-10 rounded-full flex items-center justify-center">
//                                     <span className="text-white font-bold text-xl">T</span>
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <span className="text-2xl font-black text-[#071c35] tracking-tighter leading-none">TRAVELE</span>
//                                     <span className="text-[10px] text-gray-400 tracking-[0.2em] font-bold">EXPLORE THE WORLD</span>
//                                 </div>
//                             </a>
//                         </div>

//                         {/* Desktop Navigation */}
//                         <nav className="hidden lg:flex items-center gap-8">
//                             {NAVIGATION_DATA.map((item) => (
//                                 <div key={item.label} className="relative group py-2">
//                                     <a
//                                         href={item.href}
//                                         className="flex items-center gap-1 font-bold text-[#071c35] hover:text-[#f56942] transition-colors"
//                                     >
//                                         {item.label}
//                                         {item.children && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
//                                     </a>

//                                     {/* Dropdown */}
//                                     {item.children && (
//                                         <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-[#f56942] transform origin-top scale-95 group-hover:scale-100">
//                                             <ul className="py-2">
//                                                 {item.children.map((child) => (
//                                                     <li key={child.label}>
//                                                         <a
//                                                             href={child.href}
//                                                             className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#f56942] border-b border-gray-100 last:border-none transition-colors"
//                                                         >
//                                                             {child.label}
//                                                         </a>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* CTA Button & Mobile Trigger */}
//                         <div className="flex items-center gap-4">
//                             <a
//                                 href="#"
//                                 className="hidden md:block bg-[#f56942] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-[#071c35] transition-all transform hover:-translate-y-0.5 shadow-md active:scale-95"
//                             >
//                                 BUY NOW
//                             </a>

//                             <button
//                                 onClick={() => setIsMobileMenuOpen(true)}
//                                 className="lg:hidden p-2 text-[#071c35] hover:text-[#f56942]"
//                             >
//                                 <Menu size={28} />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Menu Overlay */}
//                 <div className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//                     <div className={`absolute top-0 right-0 w-[300px] h-full bg-white transition-transform duration-300 ease-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//                         <div className="flex flex-col h-full">
//                             {/* Mobile Header */}
//                             <div className="p-6 flex justify-between items-center border-b">
//                                 <span className="font-bold text-xl text-[#071c35]">Menu</span>
//                                 <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
//                                     <X size={24} />
//                                 </button>
//                             </div>

//                             {/* Mobile Nav Links */}
//                             <div className="flex-1 overflow-y-auto p-4">
//                                 <ul className="space-y-1">
//                                     {NAVIGATION_DATA.map((item) => (
//                                         <li key={item.label} className="border-b border-gray-50 last:border-none">
//                                             <div className="flex items-center justify-between py-3">
//                                                 <a href={item.href} className="font-semibold text-gray-800">{item.label}</a>
//                                                 {item.children && (
//                                                     <button
//                                                         onClick={() => toggleMobileSubmenu(item.label)}
//                                                         className="p-2 bg-gray-50 rounded"
//                                                     >
//                                                         {activeMobileSubmenu === item.label ? <Minus size={16} /> : <Plus size={16} />}
//                                                     </button>
//                                                 )}
//                                             </div>

//                                             {/* Mobile Submenu */}
//                                             {item.children && activeMobileSubmenu === item.label && (
//                                                 <ul className="pl-4 pb-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
//                                                     {item.children.map((child) => (
//                                                         <li key={child.label}>
//                                                             <a href={child.href} className="text-gray-500 text-sm hover:text-[#f56942] block py-1">
//                                                                 {child.label}
//                                                             </a>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             )}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             {/* Mobile CTA */}
//                             <div className="p-6 border-t bg-gray-50">
//                                 <a
//                                     href="#"
//                                     className="block w-full text-center bg-[#f56942] text-white py-3 rounded-lg font-bold shadow-lg"
//                                 >
//                                     BUY NOW
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default Navbar2;

// // E:\woneview\app\component\Navbar2.tsx
// "use client";
// import React, { useState, useEffect } from 'react';
// import {
//     Phone,
//     Mail,
//     MapPin,
//     Facebook,
//     Twitter,
//     Instagram,
//     Linkedin,
//     Menu,
//     X
// } from 'lucide-react';

// // Types for Navigation
// type MenuItem = {
//     label: string;
//     href: string;
// };

// const NAVIGATION_DATA: MenuItem[] = [
//     { label: 'Home', href: '/' },
//     { label: 'Tour', href: '#' },
//     { label: 'Pages', href: '#' },
//     { label: 'Shop', href: '#' },
//     { label: 'Blog', href: '#' },
//     { label: 'Dashboard', href: '#' }
// ];

// const Navbar2: React.FC = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);

//     // Handle scroll for sticky header effect
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="">
//             <header className="w-full relative z-50">
//                 {/* Top Header Bar */}
//                 <div className="bg-[#071c35] text-white text-sm py-2 px-4 md:px-8 hidden lg:block">
//                     <div className="max-w-7xl mx-auto flex justify-between items-center">
//                         <div className="flex items-center gap-6">
//                             <a href="tel:+01977259912" className="flex items-center gap-2 hover:text-[#f56942] transition-colors">
//                                 <Phone size={14} className="text-[#f56942]" />
//                                 <span>+01 (977) 2599 12</span>
//                             </a>
//                             <a href="mailto:info@domain.com" className="flex items-center gap-2 hover:text-[#f56942] transition-colors">
//                                 <Mail size={14} className="text-[#f56942]" />
//                                 <span>company@domain.com</span>
//                             </a>
//                             <div className="flex items-center gap-2">
//                                 <MapPin size={14} className="text-[#f56942]" />
//                                 <span>3146 Koontz Lane, California</span>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-6">
//                             <div className="flex items-center gap-4">
//                                 <a href="#" className="hover:text-[#f56942] transition-colors"><Facebook size={16} /></a>
//                                 <a href="#" className="hover:text-[#f56942] transition-colors"><Twitter size={16} /></a>
//                                 <a href="#" className="hover:text-[#f56942] transition-colors"><Instagram size={16} /></a>
//                                 <a href="#" className="hover:text-[#f56942] transition-colors"><Linkedin size={16} /></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Header Bar */}
//                 <div className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-white shadow-lg py-2' : 'bg-white py-4'}`}>
//                     <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//                         {/* Logo */}
//                         <div className="flex-shrink-0">
//                             <a href="/" className="flex items-center gap-2">
//                                 <div className="bg-[#f56942] w-10 h-10 rounded-full flex items-center justify-center">
//                                     <span className="text-white font-bold text-xl">T</span>
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <span className="text-2xl font-black text-[#071c35] tracking-tighter leading-none">TRAVELE</span>
//                                     <span className="text-[10px] text-gray-400 tracking-[0.2em] font-bold">EXPLORE THE WORLD</span>
//                                 </div>
//                             </a>
//                         </div>

//                         {/* Desktop Navigation (Dropdowns Removed) */}
//                         <nav className="hidden lg:flex items-center gap-8">
//                             {NAVIGATION_DATA.map((item) => (
//                                 <div key={item.label} className="relative py-2">
//                                     <a
//                                         href={item.href}
//                                         className="flex items-center gap-1 font-bold text-[#071c35] hover:text-[#f56942] transition-colors"
//                                     >
//                                         {item.label}
//                                     </a>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* CTA Button & Mobile Trigger */}
//                         <div className="flex items-center gap-4">
//                             <a
//                                 href="#"
//                                 className="hidden md:block bg-[#f56942] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-[#071c35] transition-all transform hover:-translate-y-0.5 shadow-md active:scale-95"
//                             >
//                                 BUY NOW
//                             </a>

//                             <button
//                                 onClick={() => setIsMobileMenuOpen(true)}
//                                 className="lg:hidden p-2 text-[#071c35] hover:text-[#f56942]"
//                             >
//                                 <Menu size={28} />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Menu Overlay */}
//                 <div className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//                     <div className={`absolute top-0 right-0 w-[300px] h-full bg-white transition-transform duration-300 ease-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//                         <div className="flex flex-col h-full">
//                             {/* Mobile Header */}
//                             <div className="p-6 flex justify-between items-center border-b">
//                                 <span className="font-bold text-xl text-[#071c35]">Menu</span>
//                                 <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
//                                     <X size={24} />
//                                 </button>
//                             </div>

//                             {/* Mobile Nav Links (Submenus Removed) */}
//                             <div className="flex-1 overflow-y-auto p-4">
//                                 <ul className="space-y-1">
//                                     {NAVIGATION_DATA.map((item) => (
//                                         <li key={item.label} className="border-b border-gray-50 last:border-none">
//                                             <div className="flex items-center justify-between py-3">
//                                                 <a href={item.href} className="font-semibold text-gray-800">{item.label}</a>
//                                             </div>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             {/* Mobile CTA */}
//                             <div className="p-6 border-t bg-gray-50">
//                                 <a
//                                     href="#"
//                                     className="block w-full text-center bg-[#f56942] text-white py-3 rounded-lg font-bold shadow-lg"
//                                 >
//                                     BUY NOW
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default Navbar2;

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     Phone,
//     Mail,
//     MapPin,
//     Facebook,
//     Twitter,
//     Instagram,
//     Linkedin,
//     Menu,
//     X
// } from 'lucide-react';

// // Types for Navigation
// type MenuItem = {
//     label: string;
//     href: string;
// };

// const NAVIGATION_DATA: MenuItem[] = [
//     { label: 'Home', href: '/' },
//     { label: 'Tour', href: '#' },
//     { label: 'Pages', href: '#' },
//     { label: 'Shop', href: '#' },
//     { label: 'Blog', href: '#' },
//     { label: 'Dashboard', href: '#' }
// ];

// const Navbar2: React.FC = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isVisible, setIsVisible] = useState(true);
//     const [isAtTop, setIsAtTop] = useState(true);

//     // Ref to track scroll position without triggering re-renders
//     const lastScrollY = useRef(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             // 1. Detect if we are at the very top (to show top-bar space)
//             setIsAtTop(currentScrollY < 40);

//             // 2. Logic for show/hide based on direction
//             if (currentScrollY <= 0) {
//                 setIsVisible(true);
//             } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//                 // Scrolling DOWN - Hide Navbar
//                 setIsVisible(false);
//             } else if (currentScrollY < lastScrollY.current) {
//                 // Scrolling UP - Show Navbar
//                 setIsVisible(true);
//             }

//             lastScrollY.current = currentScrollY;
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="relative w-full">
//             {/* 1. TOP HEADER BAR (Static) */}
//             <div className="bg-[#071c35] text-white text-sm py-2 px-4 md:px-8 hidden lg:block">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center">
//                     <div className="flex items-center gap-6">
//                         <a href="tel:+01977259912" className="flex items-center gap-2 hover:text-[#f56942] transition-colors">
//                             <Phone size={14} className="text-[#f56942]" />
//                             <span>+01 (977) 2599 12</span>
//                         </a>
//                         <a href="mailto:info@domain.com" className="flex items-center gap-2 hover:text-[#f56942] transition-colors">
//                             <Mail size={14} className="text-[#f56942]" />
//                             <span>company@domain.com</span>
//                         </a>
//                         <div className="flex items-center gap-2">
//                             <MapPin size={14} className="text-[#f56942]" />
//                             <span>3146 Koontz Lane, California</span>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <a href="#" className="hover:text-[#f56942] transition-colors"><Facebook size={16} /></a>
//                         <a href="#" className="hover:text-[#f56942] transition-colors"><Twitter size={16} /></a>
//                         <a href="#" className="hover:text-[#f56942] transition-colors"><Instagram size={16} /></a>
//                         <a href="#" className="hover:text-[#f56942] transition-colors"><Linkedin size={16} /></a>
//                     </div>
//                 </div>
//             </div>

//             {/* 2. MAIN NAVIGATION (Smart Floating) */}
//             <motion.nav
//                 initial={{ y: 0 }}
//                 animate={{
//                     y: isVisible ? 0 : -100,
//                     // When at top, offset it so top bar shows. When scrolled, snap to top.
//                     top: isAtTop ? "36px" : "0px"
//                 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                 className="w-full fixed left-0 right-0 bg-white shadow-lg z-[100] border-b border-gray-100 hidden lg:block"
//             >
//                 <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
//                     {/* Logo */}
//                     <a href="/" className="flex items-center gap-2 group">
//                         <div className="bg-[#f56942] w-10 h-10 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
//                             <span className="text-white font-bold text-xl">T</span>
//                         </div>
//                         <div className="flex flex-col">
//                             <span className="text-2xl font-black text-[#071c35] tracking-tighter leading-none">TRAVELE</span>
//                             <span className="text-[10px] text-gray-400 tracking-[0.2em] font-bold">EXPLORE THE WORLD</span>
//                         </div>
//                     </a>

//                     {/* Desktop Menu */}
//                     <ul className="flex items-center gap-8">
//                         {NAVIGATION_DATA.map((item) => (
//                             <li key={item.label}>
//                                 <a href={item.href} className="font-bold text-[#071c35] hover:text-[#f56942] transition-colors text-sm uppercase tracking-wide">
//                                     {item.label}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* CTA */}
//                     <a href="#" className="bg-[#f56942] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-[#071c35] transition-all shadow-md">
//                         BUY NOW
//                     </a>
//                 </div>
//             </motion.nav>

//             {/* 3. MOBILE NAVIGATION (Simpler sticky behavior for phones) */}
//             <div className={`lg:hidden w-full fixed top-0 left-0 bg-white z-[100] px-4 py-3 shadow-md flex justify-between items-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
//                 <a href="/" className="flex items-center gap-2">
//                     <div className="bg-[#f56942] w-8 h-8 rounded-full flex items-center justify-center">
//                         <span className="text-white font-bold text-lg">T</span>
//                     </div>
//                     <span className="font-black text-lg text-[#071c35]">TRAVELE</span>
//                 </a>
//                 <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-[#071c35]">
//                     <Menu size={28} />
//                 </button>
//             </div>

//             {/* Spacer: Prevents content from jumping under the fixed navbar */}
//             <div className="h-[70px] lg:h-[90px]"></div>

//             {/* 4. MOBILE MENU OVERLAY */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <>
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="fixed inset-0 bg-black/60 z-[110] backdrop-blur-sm lg:hidden"
//                         />
//                         <motion.div
//                             initial={{ x: "100%" }}
//                             animate={{ x: 0 }}
//                             exit={{ x: "100%" }}
//                             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//                             className="fixed top-0 right-0 w-[280px] h-full bg-white z-[120] shadow-2xl lg:hidden"
//                         >
//                             <div className="p-6 flex justify-between items-center border-b">
//                                 <span className="font-bold text-xl text-[#071c35]">Navigation</span>
//                                 <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                                     <X size={24} />
//                                 </button>
//                             </div>
//                             <div className="p-4">
//                                 {NAVIGATION_DATA.map((item) => (
//                                     <a key={item.label} href={item.href} className="block py-4 px-2 font-semibold text-gray-800 border-b border-gray-50 hover:text-[#f56942]">
//                                         {item.label}
//                                     </a>
//                                 ))}
//                             </div>
//                             <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-50">
//                                 <a href="#" className="block w-full text-center bg-[#f56942] text-white py-3 rounded-lg font-bold shadow-lg">BUY NOW</a>
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Navbar2;

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     Phone,
//     Mail,
//     MapPin,
//     Facebook,
//     Twitter,
//     Instagram,
//     Linkedin,
//     Menu,
//     X
// } from 'lucide-react';

// type MenuItem = { label: string; href: string; };

// const NAVIGATION_DATA: MenuItem[] = [
//     { label: 'Home', href: '/' },
//     { label: 'Tour', href: '#' },
//     { label: 'Pages', href: '#' },
//     { label: 'Shop', href: '#' },
//     { label: 'Blog', href: '#' },
//     { label: 'Dashboard', href: '#' }
// ];

// const Navbar2: React.FC = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isVisible, setIsVisible] = useState(true);
//     const [isScrolled, setIsScrolled] = useState(false);

//     const lastScrollY = useRef(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             // 1. Lock the navbar to top:0 after scrolling past the blue bar (40px)
//             setIsScrolled(currentScrollY > 40);

//             // 2. Hide on Scroll Down / Show on Scroll Up
//             if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
//                 setIsVisible(false); // Hide
//             } else {
//                 setIsVisible(true);  // Show
//             }

//             lastScrollY.current = currentScrollY;
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="relative w-full">
//             {/* 1. TOP HEADER BAR (Static) */}
//             <div className="bg-[#071c35] text-white text-sm py-2 px-4 md:px-8 hidden lg:block h-[40px]">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
//                     <div className="flex items-center gap-6">
//                         <div className="flex items-center gap-2">
//                             <Phone size={14} className="text-[#f56942]" />
//                             <span>+01 (977) 2599 12</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Mail size={14} className="text-[#f56942]" />
//                             <span>company@domain.com</span>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <Facebook size={16} className="hover:text-[#f56942] cursor-pointer" />
//                         <Twitter size={16} className="hover:text-[#f56942] cursor-pointer" />
//                         <Instagram size={16} className="hover:text-[#f56942] cursor-pointer" />
//                     </div>
//                 </div>
//             </div>

//             {/* 2. MAIN NAVIGATION (Smart Logic) */}
//             <motion.nav
//                 initial={{ y: 0 }}
//                 animate={{
//                     y: isVisible ? 0 : -100,
//                     position: isScrolled ? 'fixed' : 'relative',
//                     top: 0
//                 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                 className={`w-full bg-white z-[100] left-0 right-0 ${isScrolled ? 'shadow-lg' : 'border-b border-gray-100'}`}
//             >
//                 <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
//                     {/* Logo */}
//                     <a href="/" className="flex items-center gap-2">
//                         <div className="bg-[#f56942] w-10 h-10 rounded-full flex items-center justify-center">
//                             <span className="text-white font-bold text-xl">T</span>
//                         </div>
//                         <div className="flex flex-col">
//                             <span className="text-2xl font-black text-[#071c35] tracking-tighter leading-none">TRAVELE</span>
//                             <span className="text-[10px] text-gray-400 tracking-[0.2em] font-bold">EXPLORE THE WORLD</span>
//                         </div>
//                     </a>

//                     {/* Desktop Menu */}
//                     <ul className="hidden lg:flex items-center gap-8">
//                         {NAVIGATION_DATA.map((item) => (
//                             <li key={item.label}>
//                                 <a href={item.href} className="font-bold text-[#071c35] hover:text-[#f56942] transition-colors text-sm uppercase">
//                                     {item.label}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* CTA */}
//                     <div className="flex items-center gap-4">
//                         <button className="hidden md:block bg-[#f56942] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#071c35] transition-all">
//                             BUY NOW
//                         </button>
//                         <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-[#071c35]">
//                             <Menu size={28} />
//                         </button>
//                     </div>
//                 </div>
//             </motion.nav>

//             {/* 3. SPACER (Important to prevent content jump) */}
//             {isScrolled && <div className="h-[72px] lg:h-[80px]"></div>}

//             {/* 4. MOBILE MENU OVERLAY */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <>
//                         <motion.div
//                             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="fixed inset-0 bg-black/60 z-[150] backdrop-blur-sm lg:hidden"
//                         />
//                         <motion.div
//                             initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
//                             transition={{ type: "tween", duration: 0.3 }}
//                             className="fixed top-0 right-0 w-[280px] h-full bg-white z-[160] shadow-2xl lg:hidden"
//                         >
//                             <div className="p-6 flex justify-between items-center border-b">
//                                 <span className="font-bold text-xl text-[#071c35]">Menu</span>
//                                 <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
//                             </div>
//                             <div className="p-4">
//                                 {NAVIGATION_DATA.map((item) => (
//                                     <a key={item.label} href={item.href} className="block py-4 font-semibold text-gray-800 border-b border-gray-50">
//                                         {item.label}
//                                     </a>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Navbar2;

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Phone, Mail, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react';

// type MenuItem = { label: string; href: string; };

// const NAVIGATION_DATA: MenuItem[] = [
//     { label: 'Home', href: '/' },
//     { label: 'Tour', href: '#' },
//     { label: 'Pages', href: '#' },
//     { label: 'Shop', href: '#' },
//     { label: 'Blog', href: '#' },
//     { label: 'Dashboard', href: '#' }
// ];

// const Navbar2: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isVisible, setIsVisible] = useState(true);
//     const lastScrollY = useRef(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             // Hide navbar only after scrolling down 200px
//             if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
//                 setIsVisible(false); // Scrolling Down
//             } else {
//                 setIsVisible(true);  // Scrolling Up
//             }
//             lastScrollY.current = currentScrollY;
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="relative w-full flex flex-col">
//             {/* 1. TOP BAR (Static - stays at the very top) */}
//             <div className="bg-[#071c35] text-white text-sm py-2 px-4 md:px-8 hidden lg:block h-[40px]">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
//                     <div className="flex items-center gap-6">
//                         <div className="flex items-center gap-2">
//                             <Phone size={14} className="text-[#f56942]" />
//                             <span>+01 (977) 2599 12</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Mail size={14} className="text-[#f56942]" />
//                             <span>company@domain.com</span>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <Facebook size={16} className="hover:text-[#f56942] cursor-pointer transition-colors" />
//                         <Twitter size={16} className="hover:text-[#f56942] cursor-pointer transition-colors" />
//                         <Instagram size={16} className="hover:text-[#f56942] cursor-pointer transition-colors" />
//                     </div>
//                 </div>
//             </div>

//             {/* 2. MAIN NAVIGATION (Sticky - No layout jump) */}
//             <header
//                 className={`sticky top-0 z-[100] w-full transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
//                     }`}
//             >
//                 <nav className="bg-white border-b border-gray-100 shadow-sm">
//                     <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
//                         {/* Logo */}
//                         <a href="/" className="flex items-center gap-2 group">
//                             <div className="bg-[#f56942] w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
//                                 <span className="text-white font-bold text-xl">T</span>
//                             </div>
//                             <div className="flex flex-col">
//                                 <span className="text-2xl font-black text-black tracking-tighter leading-none">TRAVELE</span>
//                                 <span className="text-[10px] text-gray-500 tracking-[0.2em] font-bold">EXPLORE THE WORLD</span>
//                             </div>
//                         </a>

//                         {/* Desktop Menu */}
//                         <ul className="hidden lg:flex items-center gap-8">
//                             {NAVIGATION_DATA.map((item) => (
//                                 <li key={item.label}>
//                                     <a href={item.href} className="font-bold text-black hover:text-[#f56942] transition-colors text-sm uppercase">
//                                         {item.label}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>

//                         {/* CTA */}
//                         <div className="flex items-center gap-4">
//                             <button className="hidden md:block bg-[#f56942] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#071c35] transition-all transform active:scale-95">
//                                 BUY NOW
//                             </button>
//                             <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-black">
//                                 <Menu size={28} />
//                             </button>
//                         </div>
//                     </div>
//                 </nav>
//             </header>

//             {/* 3. HOME PAGE CONTENT (Shows inside the wrapper) */}
//             <main className="flex-1 w-full">
//                 {children}
//             </main>

//             {/* 4. MOBILE MENU OVERLAY */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <>
//                         <motion.div
//                             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="fixed inset-0 bg-black/60 z-[150] backdrop-blur-sm lg:hidden"
//                         />
//                         <motion.div
//                             initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
//                             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//                             className="fixed top-0 right-0 w-[280px] h-full bg-white z-[160] shadow-2xl lg:hidden"
//                         >
//                             <div className="p-6 flex justify-between items-center border-b">
//                                 <span className="font-bold text-xl text-black">Menu</span>
//                                 <button onClick={() => setIsMobileMenuOpen(false)} className="text-black"><X size={24} /></button>
//                             </div>
//                             <div className="p-4">
//                                 {NAVIGATION_DATA.map((item) => (
//                                     <a key={item.label} href={item.href} className="block py-4 font-semibold text-black border-b border-gray-50 hover:pl-2 transition-all">
//                                         {item.label}
//                                     </a>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Navbar2;

// // E:\woneview\app\component\Navbar2.tsx
// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Phone, Mail, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react';

// type MenuItem = { label: string; href: string; };

// const NAVIGATION_DATA: MenuItem[] = [
//     { label: 'Home', href: '/' },
//     { label: 'Tour', href: '#' },
//     { label: 'Pages', href: '#' },
//     { label: 'Shop', href: '#' },
//     { label: 'Blog', href: '#' },
//     { label: 'Dashboard', href: '#' }
// ];

// const Navbar2: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isVisible, setIsVisible] = useState(true);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const lastScrollY = useRef(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             // 1. Detect if scrolled for background styling
//             setIsScrolled(currentScrollY > 50);

//             // 2. Hide/Show logic
//             if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
//                 setIsVisible(false);
//             } else {
//                 setIsVisible(true);
//             }
//             lastScrollY.current = currentScrollY;
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="relative w-full">
//             {/* WRAPPER FOR NAVIGATION */}
//             <div className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
//                 }`}>

//                 {/* 1. TOP BAR (Now Transparent) */}
//                 <div className={`transition-colors duration-300 border-b border-black/10 hidden lg:block ${isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
//                     }`}>
//                     <div className="max-w-7xl mx-auto flex justify-between items-center h-[40px] px-8 text-black">
//                         <div className="flex items-center gap-6 text-xs font-medium">
//                             <div className="flex items-center gap-2">
//                                 <Phone size={14} className="text-[#f56942]" />
//                                 <span>+01 (977) 2599 12</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Mail size={14} className="text-[#f56942]" />
//                                 <span>company@domain.com</span>
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-4">
//                             <Facebook size={14} className="hover:text-[#f56942] cursor-pointer" />
//                             <Twitter size={14} className="hover:text-[#f56942] cursor-pointer" />
//                             <Instagram size={14} className="hover:text-[#f56942] cursor-pointer" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* 2. MAIN NAVIGATION */}
//                 <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white  py-4' : 'bg-transparent py-4'
//                     }`}>
//                     <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
//                         {/* Logo */}
//                         <a href="/" className="flex items-center gap-2 group">
//                             <div className="bg-[#f56942] w-10 h-10 rounded-full flex items-center justify-center">
//                                 <span className="text-white font-bold text-xl">T</span>
//                             </div>
//                             <div className="flex flex-col">
//                                 <span className="text-2xl font-black text-black tracking-tighter leading-none">TRAVELE</span>
//                                 <span className="text-[10px] text-gray-600 tracking-[0.2em] font-bold uppercase">Explore the world</span>
//                             </div>
//                         </a>

//                         {/* Desktop Menu */}
//                         <ul className="hidden lg:flex items-center gap-8">
//                             {NAVIGATION_DATA.map((item) => (
//                                 <li key={item.label}>
//                                     <a href={item.href} className="font-bold text-black hover:text-[#f56942] transition-colors text-sm uppercase tracking-wide">
//                                         {item.label}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>

//                         {/* CTA */}
//                         <div className="flex items-center gap-4">
//                             <button className="hidden md:block bg-[#f56942] text-white px-7 py-2.5 rounded-full font-bold text-xs hover:bg-[#071c35] transition-all">
//                                 BUY NOW
//                             </button>
//                             <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-black">
//                                 <Menu size={28} />
//                             </button>
//                         </div>
//                     </div>
//                 </nav>
//             </div>

//             {/* 3. CONTENT AREA */}
//             <main className="w-full">
//                 {children}
//             </main>

//             {/* 4. MOBILE MENU OVERLAY (remains same) */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <>
//                         <motion.div
//                             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm lg:hidden"
//                         />
//                         <motion.div
//                             initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
//                             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//                             className="fixed top-0 right-0 w-[280px] h-full bg-white z-[210] shadow-2xl lg:hidden"
//                         >
//                             <div className="p-6 flex justify-between items-center border-b">
//                                 <span className="font-bold text-xl text-black">Menu</span>
//                                 <button onClick={() => setIsMobileMenuOpen(false)} className="text-black"><X size={24} /></button>
//                             </div>
//                             <div className="p-4">
//                                 {NAVIGATION_DATA.map((item) => (
//                                     <a key={item.label} href={item.href} className="block py-4 font-semibold text-black border-b border-gray-50">
//                                         {item.label}
//                                     </a>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Navbar2;

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Phone, Mail, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react';
// // 1. Import Link from next/link
// import Link from 'next/link';

// type MenuItem = { label: string; href: string; };

// const NAVIGATION_DATA: MenuItem[] = [
//     { label: 'Home', href: '/' },
//     { label: 'Tour', href: '#' },
//     { label: 'Pages', href: '#' },
//     { label: 'Shop', href: '#' },
//     { label: 'Blog', href: '#' },
//     { label: 'Dashboard', href: '#' }
// ];

// const Navbar2: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isVisible, setIsVisible] = useState(true);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const lastScrollY = useRef(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             // 1. Detect if scrolled for background styling
//             setIsScrolled(currentScrollY > 50);

//             // 2. Hide/Show logic
//             if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
//                 setIsVisible(false);
//             } else {
//                 setIsVisible(true);
//             }
//             lastScrollY.current = currentScrollY;
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="relative w-full">
//             {/* WRAPPER FOR NAVIGATION */}
//             <div className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
//                 }`}>

//                 {/* 1. TOP BAR (Now Transparent) */}
//                 <div className={`transition-colors duration-300 border-b border-black/10 hidden lg:block ${isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
//                     }`}>
//                     <div className="max-w-7xl mx-auto flex justify-between items-center h-[40px] px-8 text-black">
//                         <div className="flex items-center gap-6 text-xs font-medium">
//                             <div className="flex items-center gap-2">
//                                 <Phone size={14} className="text-[#f56942]" />
//                                 <span>+01 (977) 2599 12</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Mail size={14} className="text-[#f56942]" />
//                                 <span>company@domain.com</span>
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-4">
//                             <Facebook size={14} className="hover:text-[#f56942] cursor-pointer" />
//                             <Twitter size={14} className="hover:text-[#f56942] cursor-pointer" />
//                             <Instagram size={14} className="hover:text-[#f56942] cursor-pointer" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* 2. MAIN NAVIGATION */}
//                 <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white  py-4' : 'bg-transparent py-4'
//                     }`}>
//                     <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
//                         {/* Logo - Changed to Link */}
//                         <Link href="/" className="flex items-center gap-2 group">
//                             <div className="bg-[#f56942] w-10 h-10 rounded-full flex items-center justify-center">
//                                 <span className="text-white font-bold text-xl">T</span>
//                             </div>
//                             <div className="flex flex-col">
//                                 <span className="text-2xl font-black text-black tracking-tighter leading-none">TRAVELE</span>
//                                 <span className="text-[10px] text-gray-600 tracking-[0.2em] font-bold uppercase">Explore the world</span>
//                             </div>
//                         </Link>

//                         {/* Desktop Menu - Changed to Link */}
//                         <ul className="hidden lg:flex items-center gap-8">
//                             {NAVIGATION_DATA.map((item) => (
//                                 <li key={item.label}>
//                                     <Link href={item.href} className="font-bold text-black hover:text-[#f56942] transition-colors text-sm uppercase tracking-wide">
//                                         {item.label}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>

//                         {/* CTA */}
//                         <div className="flex items-center gap-4">
//                             <button className="hidden md:block bg-[#f56942] text-white px-7 py-2.5 rounded-full font-bold text-xs hover:bg-[#071c35] transition-all">
//                                 BUY NOW
//                             </button>
//                             <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-black">
//                                 <Menu size={28} />
//                             </button>
//                         </div>
//                     </div>
//                 </nav>
//             </div>

//             {/* 3. CONTENT AREA */}
//             <main className="w-full">
//                 {children}
//             </main>

//             {/* 4. MOBILE MENU OVERLAY - Changed to Link */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <>
//                         <motion.div
//                             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm lg:hidden"
//                         />
//                         <motion.div
//                             initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
//                             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//                             className="fixed top-0 right-0 w-[280px] h-full bg-white z-[210] shadow-2xl lg:hidden"
//                         >
//                             <div className="p-6 flex justify-between items-center border-b">
//                                 <span className="font-bold text-xl text-black">Menu</span>
//                                 <button onClick={() => setIsMobileMenuOpen(false)} className="text-black"><X size={24} /></button>
//                             </div>
//                             <div className="p-4">
//                                 {NAVIGATION_DATA.map((item) => (
//                                     <Link
//                                         key={item.label}
//                                         href={item.href}
//                                         className="block py-4 font-semibold text-black border-b border-gray-50"
//                                         onClick={() => setIsMobileMenuOpen(false)}
//                                     >
//                                         {item.label}
//                                     </Link>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Navbar2;

// // E:\woneview\app\component\Navbar2.tsx
// "use client";
// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronRight } from 'lucide-react';

// const Header = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isVisible, setIsVisible] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Scroll logic for sticky behavior and hide/show direction
//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             // 1. Background styling (Sirf opacity aur border ke liye)
//             setIsScrolled(currentScrollY > 20);

//             // 2. Visibility handling
//             if (currentScrollY > lastScrollY && currentScrollY > 100) {
//                 // Scrolling Down - Hide Header
//                 if (!isMobileMenuOpen) setIsVisible(false);
//             } else {
//                 // Scrolling Up - Show Header
//                 setIsVisible(true);
//             }

//             setLastScrollY(currentScrollY);
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [lastScrollY, isMobileMenuOpen]);

//     const navLinks = [
//         { name: 'Features', href: '#features' },
//         { name: 'Benefits', href: '#benefits' },
//         { name: 'Services', href: '#service' },
//         { name: 'Upgrade', href: '#upgrade-1' },
//         { name: 'FAQs', href: '#faq' },
//     ];

//     return (
//         <header
//             // Padding ko 'py-4' par fix rakha hai taaki height change na ho
//             className={`fixed top-0 left-0  right-0 z-50 transition-all duration-500 border-b py-4 ${isVisible ? 'translate-y-0' : '-translate-y-full'
//                 } ${isScrolled
//                     ? 'bg-[#fff] shadow-sm backdrop-blur-md border-white/10'
//                     : 'bg-[#fff] shadow-xs border-transparent'
//                 }`}
//         >
//             <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

//                 {/* Logo Section */}
//                 <div className="flex items-center gap-2">
//                     <a href="/" className="flex items-center transition-opacity hover:opacity-80">
//                         <img
//                             src="/wonview-01.png"
//                             alt="Brand Logo"
//                             className="h-8 w-auto md:h-10"
//                             onError={(e) => { e.target.src = 'https://via.placeholder.com/150x40?text=LOGO'; }}
//                         />
//                     </a>
//                 </div>

//                 {/* Desktop Navigation Links */}
//                 <nav className="hidden md:flex items-center gap-8">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link.name}
//                             href={link.href}
//                             className="text-md font-medium text-black/70 hover:text-[#f15b2b] transition-colors duration-200"
//                         >
//                             {link.name}
//                         </a>
//                     ))}
//                 </nav>

//                 {/* Call to Action Button */}
//                 <div className="hidden md:block">
//                     <a
//                         href="https://calendly.com/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-[#ffffff] px-6 py-2 rounded"
//                     >
//                         Book a Call
//                     </a>
//                 </div>

//                 {/* Mobile Menu Toggle */}
//                 <button
//                     className="md:hidden text-white p-2"
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 >
//                     {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* Mobile Navigation Drawer */}
//             <div
//                 className={`fixed inset-0 top-[72px] bg-[#000510] z-40 transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//                     } md:hidden p-6`}
//             >
//                 <div className="flex flex-col gap-6">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link.name}
//                             href={link.href}
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="text-xl font-medium text-white border-b border-white/5 pb-4 flex justify-between items-center"
//                         >
//                             {link.name}
//                             <ChevronRight size={18} className="text-white/30" />
//                         </a>
//                     ))}
//                     <a
//                         href="https://calendly.com/"
//                         className="mt-4 bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-[#ffffff] px-6 py-2 rounded"
//                     >
//                         Book a Call
//                     </a>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default function Navbar2() {
//     return (
//         <div className="">
//             <Header />

//         </div>
//     );
// }

// // E:\woneview\app\component\Navbar2.tsx
// "use client";
// import React, { useState, useEffect } from "react";
// import { Menu, X, ChevronRight } from "lucide-react";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Scroll logic for sticky behavior and hide/show direction
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // 1. Background styling
//       setIsScrolled(currentScrollY > 20);

//       // 2. Visibility handling
//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         // Scrolling Down - Hide Header
//         if (!isMobileMenuOpen) setIsVisible(false);
//       } else {
//         // Scrolling Up - Show Header
//         setIsVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, isMobileMenuOpen]);

//   const navLinks = [
//     { name: "Features", href: "#features" },
//     { name: "Benefits", href: "#benefits" },
//     { name: "Services", href: "#service" },
//     { name: "Upgrade", href: "#upgrade-1" },
//     { name: "FAQs", href: "#faq" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b py-4 ${
//         isVisible ? "translate-y-0" : "-translate-y-full"
//       } ${
//         isScrolled
//           ? "bg-[#fff] shadow-sm backdrop-blur-md border-white/10"
//           : "bg-[#fff] shadow-xs border-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex items-center gap-2">
//           <a
//             href="/"
//             className="flex items-center transition-opacity hover:opacity-80"
//           >
//             <img
//               src="/wonview-01.png"
//               alt="Brand Logo"
//               className="h-8 w-auto md:h-10"
//               onError={(e) => {
//                 // FIXED: Explicitly cast target to HTMLImageElement to solve build error
//                 (e.target as HTMLImageElement).src =
//                   "https://via.placeholder.com/150x40?text=LOGO";
//               }}
//             />
//           </a>
//         </div>

//         {/* Desktop Navigation Links */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-md font-medium text-black/70 hover:text-[#f15b2b] transition-colors duration-200"
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>

//         {/* Call to Action Button */}
//         <div className="hidden md:block">
//           <a
//             href="https://calendly.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-[#ffffff] px-6 py-2 rounded"
//           >
//             Book a Call
//           </a>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-black p-2 focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Navigation Drawer */}
//       <div
//         className={`fixed inset-0 top-[72px] bg-[#000510] z-40 transition-transform duration-300 ease-in-out transform ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden p-6`}
//       >
//         <div className="flex flex-col gap-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-xl font-medium text-white border-b border-white/5 pb-4 flex justify-between items-center"
//             >
//               {link.name}
//               <ChevronRight size={18} className="text-white/30" />
//             </a>
//           ))}
//           <a
//             href="https://calendly.com/"
//             className="mt-4 bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-[#ffffff] px-6 py-3 rounded text-center font-medium"
//           >
//             Book a Call
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default function Navbar2() {
//   return (
//     <div className="">
//       <Header />
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (!isMobileMenuOpen) setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "Services", href: "#service" },
    { name: "Upgrade", href: "#upgrade-1" },
    { name: "FAQs", href: "#faq" },
  ];

  const Logo = ({ className }: { className?: string }) => (
    <img
      src="/wonview-01.png"
      alt="Woneview Logo"
      className={className || "h-8 w-auto md:h-10"}
      onError={(e) => {
        (e.target as HTMLImageElement).src =
          "https://via.placeholder.com/150x40?text=LOGO";
      }}
    />
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white py-4" : "py-4 border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Main Logo */}
        <a
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-[#f15b2b] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-black p-2 z-[110]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- Mobile Navigation Drawer --- */}
      <div
        className={`fixed inset-0 h-screen bg-white z-[105] transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col`}
      >
        {/* 1. Mobile Menu Top Bar (Shows Logo + Close Icon) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <Logo className="h-8 w-auto" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
            <X size={28} />
          </button>
        </div>

        {/* 2. Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-normal text-gray-900 py-4 border-b border-gray-50 flex justify-between items-center group active:text-[#f15b2b]"
              >
                {link.name}
                <ChevronRight
                  size={24}
                  className="text-gray-300 group-active:text-[#f15b2b]"
                />
              </a>
            ))}
          </nav>

          {/* 3. Mobile Footer (CTA + Copyright) */}
          <div className="mt-auto pt-10 pb-6">
            <a
              href="#"
              className="w-full block bg-gradient-to-r from-[#f15b2b] to-[#1e1e1e] text-white px-6 py-4 rounded-xl text-center font-bold text-lg shadow-lg"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default function Navbar2() {
  return <Header />;
}
