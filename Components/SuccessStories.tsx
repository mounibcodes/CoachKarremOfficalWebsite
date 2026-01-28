import React from 'react';

const testimonials = [
  {
    name: "SARAH M.",
    role: "Marathon Runner",
    quote: "I shaved 20 minutes off my marathon time. The strength training was the missing piece.",
    result: "-12% Body Fat"
  },
  {
    name: "DAVID K.",
    role: "Former Collegiate Athlete",
    quote: "Finally found a program that respects my athletic background but pushes me further.",
    result: "+15lbs Muscle"
  },
  {
    name: "JESSICA T.",
    role: "Corporate Lawyer",
    quote: "Efficient, intense, and effective. Fits perfectly into my 60-hour work week.",
    result: "Energy Levels 2x"
  }
];

export default function SuccessStories() {
  return (
    <section id="stories" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center gap-6 mb-16">
        <div className="inline-block bg-black text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[2deg]">
          Real Results
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
          Train Real. <br/>
          <span className="decoration-8 underline underline-offset-8 decoration-black">Get Real Results</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((story, i) => (
          <div key={i} className="bg-white border-4 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6 relative hover:-translate-y-1 transition-transform">
             <div className="text-6xl font-black text-gray-200 absolute top-4 right-6 pointer-events-none">"</div>
            <p className="text-xl font-medium relative z-10">"{story.quote}"</p>
            
            <div className="mt-auto border-t-2 border-black pt-4 flex flex-col gap-1">
              <h4 className="font-black uppercase text-xl">{story.name}</h4>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">{story.role}</p>
              <div className="bg-black text-white px-3 py-1 rounded text-sm font-bold w-fit mt-2">
                {story.result}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
