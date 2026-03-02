'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "Do I need prior experience?",
    answer: "For our Basic Video Editing course, no prior experience is needed. We start from scratch. For Advanced and Motion Design, some familiarity with the software is recommended."
  },
  {
    question: "What software do I need?",
    answer: "You will need a computer capable of running Adobe Premiere Pro and After Effects. We will guide you on how to set up your workspace in the first session."
  },
  {
    question: "Are the sessions live or recorded?",
    answer: "It depends on the program. Basic is mostly recorded with weekly check-ins. Advanced and Motion Design feature a mix of live workshops and recorded modules for flexibility."
  },
  {
    question: "Do you help with job placement?",
    answer: "Yes! Our top students are recommended to our agency partners. We also dedicate a full module to building your portfolio and finding your first freelance clients."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-7xl mx-auto flex flex-col gap-12">
      <div className="flex flex-col gap-4 items-center text-center">
        <div className="inline-block bg-[#963fdb] text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
          Got Questions?
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
          Frequently Asked <br/>
          <span className="text-[#963fdb] decoration-8 underline underline-offset-8 decoration-[#963fdb]">Questions</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`
              bg-[#17052b] border-4  border-[#963fdb] rounded-2xl p-6 cursor-pointer transition-all duration-300
              ${openIndex === index ? 'shadow-[8px_8px_0px_0px_rgba(70,4,88,1)] translate-x-[-4px] translate-y-[-4px]' : 'shadow-none hover:shadow-[4px_4px_0px_0px_rgba(70,4,88,1)]'}
            `}
          >
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl md:text-2xl font-black uppercase text-white">{faq.question}</h3>
              <div className={`text-2xl font-black transition-transform duration-300 text-white ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </div>
            
            <div 
              className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="text-lg font-medium text-purple-800 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
