import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
          Train Like An <span className="italic">Athlete</span>.
          <br />
          Build A <span className="underline decoration-8 underline-offset-8">Hybrid</span> Body.
        </h1>
        
        <p className="text-xl md:text-2xl font-bold text-black max-w-2xl uppercase tracking-wide">
          Stop choosing between strength and endurance. Master both.
        </p>

        <Link 
          href="/Contact" 
          className="group flex items-center gap-3 bg-black text-white px-12 py-6 rounded-full font-black uppercase text-xl border-4 border-black hover:bg-white hover:text-black transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
        >
          Start Your Transformation
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 group-hover:translate-x-2 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Video/Image Placeholder */}
      <div className="relative w-full aspect-[4/5] lg:aspect-square bg-white border-4 border-black rounded-[2rem] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden group cursor-pointer hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transition-all">
        <Image 
            src="/karremhoops.jpg" 
            alt="Coach Kareem" 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
         />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 ml-1">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            </div>
        </div>
        
        <div className="absolute bottom-6 left-6 bg-white border-2 border-black px-6 py-3 rounded-xl font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] z-20">
            Watch: Who is Coach Karrem?
        </div>
      </div>

    </section>
  )
}
