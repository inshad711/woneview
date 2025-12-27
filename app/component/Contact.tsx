// // E:\woneview\app\component\Contact.tsx
// "use client";
// import React, { useState } from 'react';
// import { Mail, Phone } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const ContactSection = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Submitted:', formData);
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     return (
//         <section className='templateContainer'>
//             <div
//                 id="contact"
//                 className="py-24 px-6 md:px-12 lg:px-24 bg-white" // Main page background is white in your snippet
//             >
//                 <div className="max-w-7xl mx-auto">
//                     {/* Header Section */}
//                     <div className="flex flex-col items-center text-center">
//                         {/* Badge Component */}

//                         <div className="text-center mb-4">
//                             <h2 className="text-4xl md:text-4xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
//                                 <span className="text-black"> Let’s </span>
//                                 <motion.span

//                                     className="px-4 py-1 text-black inline-block"
//                                     style={{
//                                         borderLeft: '3px solid #db6e1a',
//                                         background: 'linear-gradient(90deg, rgba(219, 110, 26, 0) 16%, rgba(219, 110, 26, 0.15) 100%)',
//                                     }}
//                                 >
//                                     Connect
//                                 </motion.span>
//                                 <span className="text-black">With Us</span>
//                             </h2>
//                             <p
//                                 className="text-lg max-w-2xl leading-relaxed"
//                                 style={{ color: 'rgb(99, 99, 99)' }}
//                             >
//                                 Tools, strategies, and updates for teams scaling ESG and climate reporting
//                             </p>
//                         </div>


//                     </div>

//                     {/* Content Layout */}
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">

//                         {/* Left Side: Info Cards */}
//                         <div className="lg:col-span-5 space-y-8">
//                             {/* Card: Reach Out */}
//                             <div
//                                 className="p-10 rounded-[20px] border border-[#f2f2f2]"
//                                 style={{
//                                     backgroundColor: 'rgb(246, 246, 246)',
//                                     boxShadow: '0px 2px 4px rgba(0,0,0,0.02), 0px 50px 30px -2.5px rgba(204, 204, 204, 0.13)'
//                                 }}
//                             >
//                                 <div
//                                     className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
//                                     style={{ backgroundColor: 'rgb(1, 71, 36)' }}
//                                 >
//                                     <Mail className="w-7 h-7 text-white" />
//                                 </div>
//                                 <h4 className="text-2xl font-bold mb-4" style={{ color: 'rgb(41, 41, 41)' }}>
//                                     Reach Out to Us
//                                 </h4>
//                                 <p className="text-base mb-8 leading-relaxed" style={{ color: 'rgb(99, 99, 99)' }}>
//                                     Have questions, ideas, or feedback? We’d love to hear from you. Our team usually replies within 1–2 business days.
//                                 </p>
//                                 <a
//                                     href="mailto:hello@emitra.com"
//                                     className="text-lg font-semibold border-b border-black/10 hover:border-black transition-all inline-block"
//                                     style={{ color: 'rgb(41, 41, 41)' }}
//                                 >
//                                     hello@emitra.com
//                                 </a>
//                             </div>

//                             {/* Card: Call Us */}
//                             <div
//                                 className="p-10 rounded-[20px] border border-[#f2f2f2]"
//                                 style={{
//                                     backgroundColor: 'rgb(246, 246, 246)',
//                                     boxShadow: '0px 2px 4px rgba(0,0,0,0.02), 0px 50px 30px -2.5px rgba(204, 204, 204, 0.13)'
//                                 }}
//                             >
//                                 <div
//                                     className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
//                                     style={{ backgroundColor: 'rgb(1, 71, 36)' }}
//                                 >
//                                     <Phone className="w-7 h-7 text-white" />
//                                 </div>
//                                 <h4 className="text-2xl font-bold mb-4" style={{ color: 'rgb(41, 41, 41)' }}>
//                                     Call Us
//                                 </h4>
//                                 <p className="text-base mb-8 leading-relaxed" style={{ color: 'rgb(99, 99, 99)' }}>
//                                     Need help with your project or want to discuss ideas? We’re here to support you.
//                                 </p>
//                                 <a
//                                     href="tel:+1554328821"
//                                     className="text-lg font-semibold border-b border-black/10 hover:border-black transition-all inline-block"
//                                     style={{ color: 'rgb(41, 41, 41)' }}
//                                 >
//                                     +1 (555) 432-8821
//                                 </a>
//                             </div>
//                         </div>

//                         {/* Right Side: Contact Form */}
//                         <form
//                             onSubmit={handleSubmit}
//                             className="lg:col-span-7 bg-white p-10 md:p-8 rounded-[24px] border border-[#eee] flex flex-col gap-8"
//                             style={{
//                                 boxShadow: '0px 50px 30px -2.5px rgba(204, 204, 204, 0.13)'
//                             }}
//                         >
//                             <div className="flex flex-col gap-3">
//                                 <label className="text-base font-semibold" style={{ color: 'rgb(41, 41, 41)' }}>Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     placeholder="Your Name"
//                                     className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#014724] transition-all"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div className="flex flex-col gap-3">
//                                 <label className="text-base font-semibold" style={{ color: 'rgb(41, 41, 41)' }}>Email</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     required
//                                     placeholder="Your Email"
//                                     className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#014724] transition-all"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div className="flex flex-col gap-3">
//                                 <label className="text-base font-semibold" style={{ color: 'rgb(41, 41, 41)' }}>Message</label>
//                                 <textarea
//                                     name="message"
//                                     placeholder="Write your message here..."
//                                     rows={5}
//                                     className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#014724] transition-all resize-none"
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div className="pt-2">
//                                 <button
//                                     type="submit"
//                                     className="w-full py-5 text-lg font-bold text-white rounded-[16px] transition-all hover:brightness-110 active:scale-[0.98] shadow-2xl"
//                                     style={{
//                                         backgroundColor: 'rgb(1, 71, 36)',
//                                         boxShadow: 'inset 0px 0px 20px 1.64px rgba(255, 255, 255, 0.16), 0px 50px 30px -2.5px rgba(24, 66, 42, 0.13)'
//                                     }}
//                                 >
//                                     Send Message
//                                 </button>
//                             </div>

//                             <p className="text-sm leading-relaxed text-center" style={{ color: 'rgb(99, 99, 99)' }}>
//                                 By submitting this form, you agree to receive communication from our team. Your data stays private — no spam.
//                             </p>
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default function Contact() {
//     return <ContactSection />;
// }


"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Define the shape of your form data for better type safety
interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactSection = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    // Explicitly type the form submission event
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    // Explicitly type the change event for both input and textarea elements
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className='templateContainer'>
            <div
                id="contact"
                className="py-24 px-6 md:px-12 lg:px-24 bg-white"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center">
                        <div className="text-center mb-4">
                            <h2 className="text-4xl md:text-4xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                                <span className="text-black"> Let’s </span>
                                <motion.span
                                    className="px-4 py-1 text-black inline-block"
                                    style={{
                                        borderLeft: '3px solid #db6e1a',
                                        background: 'linear-gradient(90deg, rgba(219, 110, 26, 0) 16%, rgba(219, 110, 26, 0.15) 100%)',
                                    }}
                                >
                                    Connect
                                </motion.span>
                                <span className="text-black">With Us</span>
                            </h2>
                            <p
                                className="text-lg max-w-2xl leading-relaxed"
                                style={{ color: 'rgb(99, 99, 99)' }}
                            >
                                Tools, strategies, and updates for teams scaling ESG and climate reporting
                            </p>
                        </div>
                    </div>

                    {/* Content Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">

                        {/* Left Side: Info Cards */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Card: Reach Out */}
                            <div
                                className="p-6 rounded-[20px] border border-[#f2f2f2]"
                                style={{
                                    backgroundColor: 'rgb(246, 246, 246)',
                                    boxShadow: '0px 2px 4px rgba(0,0,0,0.02), 0px 50px 30px -2.5px rgba(204, 204, 204, 0.13)'
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: 'rgb(1, 71, 36)' }}
                                >
                                    <Mail className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold mb-4" style={{ color: 'rgb(41, 41, 41)' }}>
                                    Reach Out to Us
                                </h4>
                                <p className="text-base mb-8 leading-relaxed" style={{ color: 'rgb(99, 99, 99)' }}>
                                    Have questions, ideas, or feedback? We’d love to hear from you. Our team usually replies within 1–2 business days.
                                </p>
                                <a
                                    href="mailto:hello@emitra.com"
                                    className="text-lg font-semibold border-b border-black/10 hover:border-black transition-all inline-block"
                                    style={{ color: 'rgb(41, 41, 41)' }}
                                >
                                    hello@emitra.com
                                </a>
                            </div>

                            {/* Card: Call Us */}
                            <div
                                className="p-6 rounded-[20px] border border-[#f2f2f2]"
                                style={{
                                    backgroundColor: 'rgb(246, 246, 246)',
                                    boxShadow: '0px 2px 4px rgba(0,0,0,0.02), 0px 50px 30px -2.5px rgba(204, 204, 204, 0.13)'
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: 'rgb(1, 71, 36)' }}
                                >
                                    <Phone className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold mb-4" style={{ color: 'rgb(41, 41, 41)' }}>
                                    Call Us
                                </h4>
                                <p className="text-base mb-8 leading-relaxed" style={{ color: 'rgb(99, 99, 99)' }}>
                                    Need help with your project or want to discuss ideas? We’re here to support you.
                                </p>
                                <a
                                    href="tel:+1554328821"
                                    className="text-lg font-semibold border-b border-black/10 hover:border-black transition-all inline-block"
                                    style={{ color: 'rgb(41, 41, 41)' }}
                                >
                                    +1 (555) 432-8821
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="lg:col-span-7 bg-white p-10 md:p-8 rounded-[24px] border border-[#eee] flex flex-col gap-4"
                            style={{
                                boxShadow: '0px 50px 30px -2.5px rgba(204, 204, 204, 0.13)'
                            }}
                        >
                            <div className="flex flex-col gap-3">
                                <label className="text-base font-semibold" style={{ color: 'rgb(41, 41, 41)' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#014724] transition-all"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-base font-semibold" style={{ color: 'rgb(41, 41, 41)' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#014724] transition-all"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-base font-semibold" style={{ color: 'rgb(41, 41, 41)' }}>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Write your message here..."
                                    rows={5}
                                    className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#014724] transition-all resize-none"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full py-3 text-lg font-bold cursor-pointer text-white rounded-[6px] transition-all hover:brightness-110 active:scale-[0.98] shadow-2xl"
                                    style={{
                                        backgroundColor: 'rgb(1, 71, 36)',
                                        boxShadow: 'inset 0px 0px 20px 1.64px rgba(255, 255, 255, 0.16), 0px 50px 30px -2.5px rgba(24, 66, 42, 0.13)'
                                    }}
                                >
                                    Send Message
                                </button>
                            </div>

                            <p className="text-sm leading-relaxed text-center" style={{ color: 'rgb(99, 99, 99)' }}>
                                By submitting this form, you agree to receive communication from our team. Your data stays private — no spam.
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Contact() {
    return <ContactSection />;
}