// // E:\woneview\app\component\Faq.tsx

// "use client";

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Plus, Minus } from 'lucide-react';

// interface FAQItem {
//     question: string;
//     answer: string;
// }

// const faqData: FAQItem[] = [
//     {
//         question: "Template styling and Support",
//         answer: "Our templates are designed with flexibility in mind. We provide comprehensive documentation and 24/7 support to help you customize every aspect of your site's style."
//     },
//     {
//         question: "Troubleshooting Animation Issues",
//         answer: "Animations are built using Framer Motion. If you encounter issues, ensure all dependencies are updated or check the performance tab in your browser's dev tools."
//     },
//     {
//         question: "How to choose the right font license for Framer",
//         answer: "Choosing a license depends on your monthly page views and project scope. We recommend checking the specific foundry's terms for web use within Framer."
//     },
//     {
//         question: "Is my personal information secure?",
//         answer: "Security is our top priority. We use industry-standard encryption and never store sensitive data beyond what is strictly necessary for service operation."
//     },
//     {
//         question: "What does the Free plan include?",
//         answer: "The free plan includes basic template access, community support, and standard hosting. Advanced features like custom domains require a premium upgrade."
//     },
//     {
//         question: "Does this Framer template is responsive?",
//         answer: "Yes, every template is fully responsive and optimized for mobile, tablet, and desktop viewports out of the box."
//     }
// ];

// interface AccordionItemProps extends FAQItem {
//     isOpen: boolean;
//     onClick: () => void;
// }

// const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
//     return (
//         <motion.div
//             initial={false}
//             className={`border border-white/10 rounded-[8px] overflow-hidden mb-2 transition-colors duration-300 ${isOpen ? 'bg-white/[0.05]' : 'bg-transparent hover:bg-white/[0.03]'
//                 }`}
//         >
//             <button
//                 onClick={onClick}
//                 className="w-full flex cursor-pointer items-center justify-between p-2 md:p-3 text-left focus:outline-none group"
//             >
//                 <span className="text-lg md:text-xl font-light text-white/90 tracking-wide group-hover:text-white transition-colors">
//                     {question}
//                 </span>
//                 <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
//                     <motion.div
//                         animate={{ rotate: isOpen ? 180 : 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                     >
//                         {isOpen ? (
//                             <Minus className="w-5 h-5 text-[#db6e1a]" />
//                         ) : (
//                             <Plus className="w-5 h-5 text-white/60" />
//                         )}
//                     </motion.div>
//                 </div>
//             </button>

//             <AnimatePresence initial={false}>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
//                     >
//                         <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed text-base md:text-lg border-t border-white/5 pt-4 mt-1">
//                             {answer}
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.div>
//     );
// };

// export default function Faq() {
//     const [openIndex, setOpenIndex] = useState<number | null>(0);

//     return (
//         <div className=" bg-[#0e0e10] text-white flex flex-col items-center py-20 px-4 md:px-8 selection:bg-[#db6e1a]/30">
//             <motion.section
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//                 className="max-w-4xl w-full"
//             >

//                 {/* Heading Section */}
//                 <div className="text-center mb-4">
//                     <h2 className="text-4xl md:text-4xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
//                         <span className="text-white">Frequently</span>
//                         <motion.span
//                             whileHover={{ scale: 1.05 }}
//                             className=" px-4 py-1  text-white inline-block "
//                             style={{
//                                 borderLeft: '3px solid #db6e1a',

//                                 background: 'linear-gradient(90deg, #080d2900 16%, rgba(230, 110, 50, 0.50) 100%)',
//                             }}
//                         >
//                             asked
//                         </motion.span>
//                         <span className="text-white">questions</span>
//                     </h2>
//                 </div>

//                 {/* Subtext */}
//                 <p className="text-[#cecece] text-center text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
//                     Providing the best solution, Get answers of your common questions.
//                 </p>

//                 {/* Accordion List */}
//                 <motion.div
//                     layout
//                     className="w-full space-y-2"
//                 >
//                     {faqData.map((item, index) => (
//                         <AccordionItem
//                             key={index}
//                             question={item.question}
//                             answer={item.answer}
//                             isOpen={openIndex === index}
//                             onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                         />
//                     ))}
//                 </motion.div>
//             </motion.section>

//         </div>
//     );
// }

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Template styling and Support",
    answer:
      "Our templates are designed with flexibility in mind. We provide comprehensive documentation and 24/7 support to help you customize every aspect of your site's style.",
  },
  {
    question: "Troubleshooting Animation Issues",
    answer:
      "Animations are built using Framer Motion. If you encounter issues, ensure all dependencies are updated or check the performance tab in your browser's dev tools.",
  },
  {
    question: "How to choose the right font license for Framer",
    answer:
      "Choosing a license depends on your monthly page views and project scope. We recommend checking the specific foundry's terms for web use within Framer.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Security is our top priority. We use industry-standard encryption and never store sensitive data beyond what is strictly necessary for service operation.",
  },
  {
    question: "What does the Free plan include?",
    answer:
      "The free plan includes basic template access, community support, and standard hosting. Advanced features like custom domains require a premium upgrade.",
  },
  {
    question: "Does this Framer template is responsive?",
    answer:
      "Yes, every template is fully responsive and optimized for mobile, tablet, and desktop viewports out of the box.",
  },
];

interface AccordionItemProps extends FAQItem {
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <motion.div
      initial={false}
      className={`border border-black/10 rounded-[8px] overflow-hidden mb-2 transition-colors duration-300 ${
        isOpen ? "bg-black/[0.03]" : "bg-transparent hover:bg-black/[0.01]"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex cursor-pointer items-center justify-between p-2 md:p-3 text-left focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-normal text-black/80 tracking-wide group-hover:text-black transition-colors">
          {question}
        </span>
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-black/5 group-hover:bg-black/10 transition-colors">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-[#db6e1a]" />
            ) : (
              <Plus className="w-5 h-5 text-black/40" />
            )}
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 text-gray-600 font-normal leading-relaxed text-base md:text-lg border-t border-black/5 pt-4 mt-1">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="templateContainer">
      <div className="bg-white text-black flex flex-col items-center py-12 md:py-20 px-0 md:px-8 selection:bg-[#db6e1a]/20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          {/* Heading Section */}
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-4xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
              <span className="text-black">Frequently</span>
              <motion.span
                className="px-4 py-1 text-black inline-block"
                style={{
                  borderLeft: "3px solid #db6e1a",
                  background:
                    "linear-gradient(90deg, rgba(219, 110, 26, 0) 16%, rgba(219, 110, 26, 0.15) 100%)",
                }}
              >
                asked
              </motion.span>
              <span className="text-black">questions</span>
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-gray-500 text-center text-lg md:text-xl font-normal mb-8 max-w-2xl mx-auto leading-relaxed">
            Providing the best solution, Get answers of your common questions.
          </p>

          {/* Accordion List */}
          <motion.div layout className="w-full space-y-2">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
