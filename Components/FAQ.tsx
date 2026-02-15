'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "When should I start preparing my study abroad project?",
    answer: "Ideally, start 12 to 18 months before your desired departure date. This gives you time to research programs, prepare language tests, gather documents, and submit your applications. For some competitive destinations and programs, a longer timeline may be necessary."
  },
  {
    question: "What documents are generally required for an application?",
    answer: "Documents vary by country and institution, but generally include: diplomas and transcripts (translated and certified), letters of recommendation, CV, motivation letter, language test results (TOEFL, IELTS, DELF, etc.), and sometimes a portfolio or specific aptitude tests. We help you identify exactly what you need."
  },
  {
    question: "How important are grades in the admission process?",
    answer: "Grades are important but not the only criterion. Universities also evaluate your motivation letter, recommendation letters, experience, and overall profile. A well-prepared application can compensate for average grades. We help you highlight all your strengths."
  },
  {
    question: "What language level (French/English) is required?",
    answer: "This depends on the destination and program. For studies in English, a B2-C1 level (TOEFL 80-100, IELTS 6.5-7.5) is generally required. For French, a B2-C1 level (DELF B2, DALF C1) is often required. Some programs accept lower levels with a preparatory year. We assess your level and propose suitable solutions."
  },
  {
    question: "Does Qoodwa guarantee admission or visa approval?",
    answer: "No, we do not guarantee admission or visa approval, as these decisions depend on institutions and competent authorities. However, we maximize your chances by preparing strong applications, guiding you in best practices, and accompanying you throughout the process. We do not promise legal immigration representation, but offer high-level administrative guidance."
  },
  {
    question: "How does follow-up with Qoodwa work?",
    answer: "We offer continuous and personalized follow-up. After the initial needs analysis, we establish an action plan with clear deadlines. You have access to your advisor for questions, and we keep you regularly informed of your application progress. Follow-up continues until your departure and even after, if necessary."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-7xl mx-auto flex flex-col gap-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col gap-4 items-center text-center">
        <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit">
          Frequently Asked Questions
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#2d0f47] tracking-tight leading-tight">
          Have{' '}
          <span className="text-[#ff8c42]">Questions</span> ?
        </h2>
        <p className="text-xl font-medium text-gray-600 max-w-2xl">
          Find clear and realistic answers to your questions about studying abroad
        </p>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`
              bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(107,58,143,0.3)]
              ${openIndex === index ? 'border-[#6b3a8f] shadow-[8px_8px_0px_0px_rgba(107,58,143,0.5)]' : 'border-gray-200 hover:border-[#8b5fb3] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.42)]'}
            `}
          >
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl md:text-2xl font-black text-[#2d0f47] pr-4">{faq.question}</h3>
              <div className={`text-2xl font-black text-[#4a1a6b] transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </div>
            
            <div 
              className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="text-lg font-medium text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <p className="text-lg font-medium text-gray-600 mb-4">
          Can't find the answer to your question?
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-[#ff8c42] hover:bg-[#ffc947] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
