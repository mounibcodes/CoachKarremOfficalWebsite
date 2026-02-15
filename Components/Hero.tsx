import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#2d0f47] via-[#4a1a6b] to-[#6b3a8f] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Base grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)` ,
          backgroundSize: '48px 48px, 48px 48px',
        }}></div>

        {/* Fine dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)` ,
          backgroundSize: '12px 12px',
          opacity: 0.5
        }}></div>

        {/* Diagonal grid layer */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.03) 1px, transparent 1px)` ,
          backgroundSize: '80px 80px, 80px 80px',
          mixBlendMode: 'overlay',
          opacity: 0.6
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full font-bold text-sm w-fit">
            <span className="sf-arabic">🫆 فكرة قدوة</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Where Your{' '}
            <span className="text-[#ffc947]">Study Abroad Journey</span>{' '}
            Begins
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold text-white/90 max-w-2xl leading-relaxed">
            Multidisciplinary hub specialized in education and supporting young talents in every step of their study abroad journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/services" 
              className="group flex items-center justify-center gap-3 bg-[#ff8c42] hover:bg-[#ffc947] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Discover Our Services
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
            
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/20 w-full">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black">14.7K+</span>
                <span className="text-sm font-semibold text-white/80">on Instagram</span>
              </div>
            </div>
            <a 
              href="https://instagram.com/qoodwa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#ffc947] hover:underline"
            >
              Join the Community →
            </a>
          </div>
        </div>

        {/* Visual Element - Fingerprint/Icon Illustration */}
        <div className="relative w-full aspect-square flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Concentric circles representing fingerprint/signal */}
            <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-pulse"></div>
            <div className="absolute inset-8 rounded-full border-4 border-white/30"></div>
            <div className="absolute inset-16 rounded-full border-4 border-[#ffc947]/40"></div>
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-white/20 to-[#ff8c42]/30 backdrop-blur-sm flex items-center justify-center overflow-visible z-20">
              <div className="w-44 h-44 bg-white/5 rounded-full flex items-center justify-center">
                <img src="/qoodwa.jpg" alt="Qoodwa Logo" className="w-36 h-36 object-cover rounded-full shadow-[8px_8px_0px_0px_rgba(107,58,143,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
