'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "What age groups do you train?",
    answer: "I train athletes of all ages, from youth players just starting out to high school, college, and professional athletes looking to refine their game."
  },
  {
    question: "Do you offer online coaching?",
    answer: "Yes! My online coaching programs are designed to give you the same elite-level training plans, nutrition guidance, and mentorship, no matter where you are in the world."
  },
  {
    question: "How do I book a session?",
    answer: "You can book a session directly through the 'Programs' section on this website. Choose the package that fits your needs and schedule your time slot."
  },
  {
    question: "What equipment do I need?",
    answer: "For skill training, a basketball and a hoop are essential. For strength and conditioning, access to a gym is recommended, but I also provide bodyweight programs for home workouts."
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
        <div className="inline-block bg-black text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
          Got Questions?
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
          Frequently Asked <br/>
          <span className="text-black decoration-8 underline underline-offset-8 decoration-black">Questions</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`
              bg-white border-4  border-black rounded-2xl p-6 cursor-pointer transition-all duration-300
              ${openIndex === index ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] translate-x-[-4px] translate-y-[-4px]' : 'shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}
            `}
          >
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl md:text-2xl font-black uppercase text-black">{faq.question}</h3>
              <div className={`text-2xl font-black transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </div>
            
            <div 
              className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="text-lg font-medium text-black leading-relaxed">
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
