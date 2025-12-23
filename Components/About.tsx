import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto flex flex-col gap-20">
      
      {/* Header & Bio */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 flex flex-col gap-8">
          <div className="inline-block bg-black text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
            Who is Coach Karrem?
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            An Athlete Who <br/>
            <span className="text-black decoration-8 underline underline-offset-8 decoration-black">Trains Athletes</span>.
          </h2>
          <p className="text-xl font-medium text-black max-w-xl leading-relaxed">
            I don't just hold a clipboard—I'm in the gym, on the court, and in the trenches with you. My philosophy is simple: <span className="font-black text-black">build complete basketball players</span>. We combine elite skill work with explosive strength and conditioning to create a hybrid athlete who dominates on both ends of the floor.
          </p>
          
          {/* Stats */}
          <div className="flex gap-8 md:gap-12 border-t-2 border-black pt-8 mt-4">
            <div className="flex flex-col">
              <span className="text-4xl font-black">18.1K+</span>
              <span className="text-sm font-bold uppercase text-black">Followers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black">100%</span>
              <span className="text-sm font-bold uppercase text-black">Hooper</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black">24/7</span>
              <span className="text-sm font-bold uppercase text-black">Grind</span>
            </div>
          </div>
        </div>

        {/* Image/Visual Placeholder - Could be another action shot */}
        <div className="flex-1 w-full">
           <div className="bg-white border-4 border-black rounded-[2.5rem] p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6 rotate-[2deg] hover:rotate-0 transition-transform duration-300">
              <h3 className="text-3xl font-black uppercase text-center border-b-4 text-black border-black pb-4">The Formula</h3>
              <ul className="flex flex-col gap-4 font-bold text-lg uppercase">
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shrink-0">1</div>
                  <span className='text-black'>Basketball Skills & IQ</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shrink-0">2</div>
                  <span className='text-black'>Explosive Strength</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shrink-0">3</div>
                  <span className='text-black'>Athletic Mobility</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shrink-0">4</div>
                  <span className='text-black'>Injury Prevention</span>
                </li>
              </ul>
              <div className="bg-white p-4 rounded-xl border-2 border-black text-black text-center font-bold text-sm mt-2">
                "More explosive jumps, faster first step, better balance."
              </div>
           </div>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col gap-4">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>
          </div>
          <h3 className="text-2xl font-black uppercase">Skills & Shooting</h3>
          <p className="font-medium text-black">
            Handle & jab workouts, P&R reads, snatch dribble series, and mid-range mastery. We build a bag that translates to real games.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black text-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] transition-all flex flex-col gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h3 className="text-2xl font-black uppercase">Strength & Athleticism</h3>
          <p className="font-medium text-white">
            Plyometrics, heavy squats, single-leg stability, and beach sprints. Build the engine to run faster and jump higher.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col gap-4">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <h3 className="text-2xl font-black uppercase">Recovery & Mobility</h3>
          <p className="font-medium text-neutral-600">
            Foam rolling, isometrics, and joint-health sessions. Because you can't dominate if you're on the bench with an injury.
          </p>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="bg-neutral-100 border-4 border-black rounded-full p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col px-4 text-center md:text-left">
          <h4 className="text-2xl font-black uppercase">Ready to transform?</h4>
          <p className="font-bold text-neutral-600">DM me "TRAIN" on Instagram to get started.</p>
        </div>
        <Link 
          href="/Contact" 
          className="bg-black text-white px-8 py-4 rounded-full font-black uppercase text-lg hover:bg-neutral-800 transition-all active:scale-95 hover:shadow-lg whitespace-nowrap"
        >
          Apply Now
        </Link>
      </div>

    </section>
  )
}
