import Link from 'next/link';

export default function Programs() {
  return (
    <section id="programs" className="py-20 px-4 max-w-7xl mx-auto flex flex-col gap-16">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6">
        <div className="inline-block bg-black text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
          Invest In Your Game
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
          Choose Your <br/>
          <span className="decoration-8 underline underline-offset-8 decoration-black">Path To Pro</span>.
        </h2>
        <p className="text-xl font-medium text-black max-w-2xl">
          Whether you're just starting or looking to dominate the league, we have a program built for your goals.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        
        {/* Program 1: Starter */}
        <div className="bg-white border-4 border-black rounded-[2.5rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col gap-6 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border-2 border-black px-4 py-1 rounded-full font-black uppercase text-xs tracking-widest">
            The Foundation
          </div>
          <div className="text-center border-b-2 border-black pb-6">
            <h3 className="text-2xl font-black uppercase mb-2">Starter</h3>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black tracking-tighter">€100</span>
              <span className="text-sm font-bold text-black uppercase">~24,000 DZD</span>
            </div>
          </div>
          <ul className="flex flex-col gap-4 font-bold text-sm uppercase">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>4-Week Training Block</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Basic Skills & Drills</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Intro to Strength</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Video Demonstrations</span>
            </li>
          </ul>
          <Link 
            href="/Contact" 
            className="bg-white text-black border-2 border-black px-6 py-3 rounded-full font-black uppercase text-center hover:bg-black hover:text-white transition-colors mt-auto"
          >
            Get Started
          </Link>
        </div>

        {/* Program 2: Hybrid (Most Popular) */}
        <div className="bg-black text-white border-4 border-black rounded-[2.5rem] p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,0.3)] transition-all flex flex-col gap-6 relative scale-105 z-10">
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black border-2 border-black px-4 py-1 rounded-full font-black uppercase text-xs tracking-widest shadow-sm">
            Most Popular
          </div>
          <div className="text-center border-b-2 border-white pb-6">
            <h3 className="text-2xl font-black uppercase mb-2">Hybrid Athlete</h3>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black tracking-tighter">€250</span>
              <span className="text-sm font-bold text-white uppercase">~60,000 DZD</span>
            </div>
          </div>
          <ul className="flex flex-col gap-4 font-bold text-sm uppercase">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>12-Week Full Program</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Advanced Skills & IQ</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Explosive Plyometrics</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Weekly Check-ins</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Nutrition Guide</span>
            </li>
          </ul>
          <Link 
            href="/Contact" 
            className="bg-white text-black px-6 py-4 rounded-full font-black uppercase text-center hover:bg-black hover:text-white hover:border-white border-2 border-transparent transition-colors mt-auto shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
          >
            Join The Team
          </Link>
        </div>

        {/* Program 3: Pro */}
        <div className="bg-white border-4 border-black rounded-[2.5rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col gap-6 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border-2 border-black px-4 py-1 rounded-full font-black uppercase text-xs tracking-widest">
            Elite Access
          </div>
          <div className="text-center border-b-2 border-black pb-6">
            <h3 className="text-2xl font-black uppercase mb-2">Pro Mentorship</h3>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black tracking-tighter">€350</span>
              <span className="text-sm font-bold text-black uppercase">~84,000 DZD</span>
            </div>
          </div>
          <ul className="flex flex-col gap-4 font-bold text-sm uppercase">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>1-on-1 Coaching</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Custom Game Analysis</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Daily Direct Access</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Full Season Planning</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0 text-xs">✓</div>
              <span>Recruiting Advice</span>
            </li>
          </ul>
          <Link 
            href="/Contact" 
            className="bg-black text-white px-6 py-3 rounded-full font-black uppercase text-center hover:bg-white hover:text-black hover:border-black border-2 border-transparent transition-colors mt-auto"
          >
            Apply Now
          </Link>
        </div>

      </div>

    </section>
  )
}
