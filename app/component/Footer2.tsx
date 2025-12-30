// "use client";
// import React from 'react';
// import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

// /**
//  * Enhanced Footer Component for Peace Power PVT LTD
//  * Matches the provided design layout and aesthetic precisely.
//  */
// const Footer2 = () => {
//     return (
//         <footer className="bg-[#151619] text-white pt-20 md:pt-32 pb-12 px-8 md:px-16 border relative overflow-hidden m-3 rounded-[20px]">
//             {/* Background Decorative Text - "Peace Power" Watermark */}
//             <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
//                 <div className="text-[12vw] text-center mt-3 md:-mt-2 font-semibold uppercase tracking-tight whitespace-nowrap overflow-hidden">
//                     Peace Power
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto relative z-10">
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

//                     {/* Brand Info */}
//                     <div className="md:col-span-4 space-y-4">
//                         <p className="text-gray-300 font-semibold text-[13px] leading-relaxed max-w-xs">
//                             Peace Power diversified its business from energy cables to power cables by
//                             engaging in manufacturing of Cable Laying Equipment & Accessories.
//                         </p>

//                         <div className="space-y-3 pt-4">
//                             <div className="flex items-center gap-3">
//                                 <Phone className="h-4 w-4 text-gray-200 shrink-0" />
//                                 <a href="tel:+912235111968" className="text-gray-200 hover:text-white transition-colors text-[13px]">+91 22 35111968</a>
//                             </div>
//                             <div className="flex items-center gap-3">
//                                 <Phone className="h-4 w-4 text-gray-200 shrink-0" />
//                                 <a href="tel:+919769085565" className="text-gray-200 hover:text-white transition-colors text-[13px]">+91 9769085565</a>
//                             </div>
//                             <div className="flex items-center gap-3">
//                                 <Mail className="h-4 w-4 text-gray-200 shrink-0" />
//                                 <a href="mailto:info@peacepower.com" className="text-gray-200 hover:text-white transition-colors text-[13px]">info@peacepower.com</a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Company Links */}
//                     <div className="md:col-span-2">
//                         <div className="relative inline-block mb-8">
//                             <h3 className="font-semibold text-white text-[14px] tracking-wide uppercase">COMPANY</h3>
//                             <div className="absolute left-1 mt-1 flex items-center">
//                                 <span className="block w-[50px] h-[2px] bg-gray-600 rounded-full"></span>
//                                 <span className="w-[2px]"></span>
//                                 <span className="block w-[5px] h-[4px] bg-gray-600 rounded-full"></span>
//                             </div>
//                         </div>
//                         <ul className="space-y-4 text-[13px]">
//                             <li><a href="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
//                             <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
//                             <li><a href="/approval-test" className="text-gray-400 hover:text-white transition-colors">Approval & Test</a></li>
//                             <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
//                         </ul>
//                     </div>

//                     {/* Products Links */}
//                     <div className="md:col-span-2">
//                         <div className="relative inline-block mb-8">
//                             <h3 className="font-semibold text-white text-[14px] tracking-wide uppercase">PRODUCTS</h3>
//                             <div className="absolute left-1 mt-1 flex items-center">
//                                 <span className="block w-[50px] h-[2px] bg-gray-600 rounded-full"></span>
//                                 <span className="w-[2px]"></span>
//                                 <span className="block w-[5px] h-[4px] bg-gray-600 rounded-full"></span>
//                             </div>
//                         </div>
//                         <ul className="space-y-4 text-[13px]">
//                             <li><a href="/products/link-boxes" className="text-gray-400 hover:text-white transition-colors">Link Box</a></li>
//                             <li><a href="/products/cable-cleats-clamps" className="text-gray-400 hover:text-white transition-colors">Cable Cleats and Clamps</a></li>
//                             <li><a href="/products/sheath-voltage-limiters" className="text-gray-400 hover:text-white transition-colors">Sheath Voltage Limiters</a></li>
//                             <li><a href="/products/cable-rollers" className="text-gray-400 hover:text-white transition-colors">Cable Rollers</a></li>
//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div className="md:col-span-4">
//                         <div className="relative inline-block mb-8">
//                             <h3 className="font-semibold text-white text-[14px] tracking-wide uppercase">CONTACT</h3>
//                             <div className="absolute left-1 mt-1 flex items-center">
//                                 <span className="block w-[50px] h-[2px] bg-gray-600 rounded-full"></span>
//                                 <span className="w-[2px]"></span>
//                                 <span className="block w-[5px] h-[4px] bg-gray-600 rounded-full"></span>
//                             </div>
//                         </div>
//                         <ul className="space-y-5">
//                             <li className="flex items-start gap-2">
//                                 <p className="text-gray-400 text-[13px] leading-relaxed">
//                                     <span className="text-white font-semibold">Head Office</span>: Office # 1001-02-03, 20th Floor, Kalpataru Summit, LBS Road, Opposite Friends Academy School, Mulund (West), Mumbai - 400080
//                                 </p>
//                             </li>
//                             <li className="flex items-start gap-2">
//                                 <p className="text-gray-400 text-[13px] leading-relaxed">
//                                     <span className="text-white font-semibold">Factory</span>: Building B-2A, Unit No.11, Bhumi World Industrial Park, Pimplas, Bhiwandi, Maharashtra 421302
//                                 </p>
//                             </li>
//                         </ul>

//                         {/* Social Icons */}
//                         <div className="flex gap-6 mt-6">
//                             <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
//                                 <Facebook className="h-5 w-5" />
//                             </a>
//                             <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
//                                 <Instagram className="h-5 w-5" />
//                             </a>
//                             <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
//                                 <Linkedin className="h-5 w-5" />
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Footer Section */}
//                 <div className="border-t border-gray-800 my-8"></div>
//                 <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-[12px] gap-4">
//                     <p>© 2025 PeacePower PVT LTD</p>
//                     <div className="flex gap-6">
//                         <a className="hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a>
//                         <a className="hover:text-white transition-colors" href="/terms-and-conditions">Terms of Service</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer2;

"use client";
import React from "react";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

/**
 * Enhanced Footer Component for Woneview PVT LTD
 * Features: Absolute watermark, responsive grid, and custom decorative headers.
 */
const Footer2 = () => {
  return (
    <footer className="bg-[#151619] text-white pt-20 md:pt-32 pb-12 px-8 md:px-16 border relative overflow-hidden m-2 rounded-[20px]">
      {/* Background Decorative Text - "Woneview" Watermark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="text-[12vw] text-center mt-3 md:-mt-2 font-semibold uppercase tracking-tight whitespace-nowrap overflow-hidden">
          Woneview
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-gray-300 font-semibold text-[13px] leading-relaxed max-w-xs">
              Woneview diversified its business from energy cables to power
              cables by engaging in manufacturing of Cable Laying Equipment &
              Accessories.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-200 shrink-0" />
                <a
                  href="tel:+912235111968"
                  className="text-gray-200 hover:text-white transition-colors text-[13px]"
                >
                  +91 22 35111968
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-200 shrink-0" />
                <a
                  href="tel:+919769085565"
                  className="text-gray-200 hover:text-white transition-colors text-[13px]"
                >
                  +91 9769085565
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-200 shrink-0" />
                <a
                  href="mailto:info@woneview.com"
                  className="text-gray-200 hover:text-white transition-colors text-[13px]"
                >
                  info@woneview.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <div className="relative inline-block mb-8">
              <h3 className="font-semibold text-white text-[14px] tracking-wide uppercase">
                COMPANY
              </h3>
              <div className="absolute left-1 mt-1 flex items-center">
                <span className="block w-[50px] h-[2px] bg-gray-600 rounded-full"></span>
                <span className="w-[2px]"></span>
                <span className="block w-[5px] h-[4px] bg-gray-600 rounded-full"></span>
              </div>
            </div>
            <ul className="space-y-4 text-[13px]">
              <li>
                <a
                  href="/about-us"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/approval-test"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Approval & Test
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="md:col-span-2">
            <div className="relative inline-block mb-8">
              <h3 className="font-semibold text-white text-[14px] tracking-wide uppercase">
                PRODUCTS
              </h3>
              <div className="absolute left-1 mt-1 flex items-center">
                <span className="block w-[50px] h-[2px] bg-gray-600 rounded-full"></span>
                <span className="w-[2px]"></span>
                <span className="block w-[5px] h-[4px] bg-gray-600 rounded-full"></span>
              </div>
            </div>
            <ul className="space-y-4 text-[13px]">
              <li>
                <a
                  href="/products/link-boxes"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Link Box
                </a>
              </li>
              <li>
                <a
                  href="/products/cable-cleats-clamps"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cable Cleats and Clamps
                </a>
              </li>
              <li>
                <a
                  href="/products/sheath-voltage-limiters"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sheath Voltage Limiters
                </a>
              </li>
              <li>
                <a
                  href="/products/cable-rollers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cable Rollers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <div className="relative inline-block mb-8">
              <h3 className="font-semibold text-white text-[14px] tracking-wide uppercase">
                CONTACT
              </h3>
              <div className="absolute left-1 mt-1 flex items-center">
                <span className="block w-[50px] h-[2px] bg-gray-600 rounded-full"></span>
                <span className="w-[2px]"></span>
                <span className="block w-[5px] h-[4px] bg-gray-600 rounded-full"></span>
              </div>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-2">
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  <span className="text-white font-semibold">Head Office</span>:
                  Office # 1001-02-03, 20th Floor, Kalpataru Summit, LBS Road,
                  Opposite Friends Academy School, Mulund (West), Mumbai -
                  400080
                </p>
              </li>
              <li className="flex items-start gap-2">
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  <span className="text-white font-semibold">Factory</span>:
                  Building B-2A, Unit No.11, Bhumi World Industrial Park,
                  Pimplas, Bhiwandi, Maharashtra 421302
                </p>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gray-800 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-[12px] gap-4">
          <p>© 2025 Woneview PVT LTD</p>
          <div className="flex gap-6">
            <a
              className="hover:text-white transition-colors"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-white transition-colors"
              href="/terms-and-conditions"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
