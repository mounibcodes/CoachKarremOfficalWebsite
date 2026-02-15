'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');

  // Update HTML lang attribute when language changes
  const handleLangChange = (newLang: string) => {
    setLang(newLang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
      if (newLang === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }
  };

  return (
    <>
      <nav className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-4">
        <div className="bg-gradient-to-b from-[#4a1a6b] to-[#6b3a8f] border-2 border-[#8b5fb3] rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center gap-2 sm:gap-4 md:gap-8 shadow-[6px_6px_0px_0px_rgba(107,58,143,0.5)] w-auto max-w-[95vw] sm:max-w-fit">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 group-hover:bg-white/20 transition-all">
              <Image 
                src="/qoodwa.jpg" 
                alt="Qoodwa Logo" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-base sm:text-lg md:text-xl font-black text-white tracking-tighter uppercase hidden sm:inline">
              Qoodwa
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-bold text-sm uppercase tracking-wide">
            <Link href="/" className="text-white hover:text-[#ffc947] hover:underline decoration-2 underline-offset-4 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#ffc947] hover:underline decoration-2 underline-offset-4 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-[#ffc947] hover:underline decoration-2 underline-offset-4 transition-colors">
              Services
            </Link>
            <Link href="/etudes-a-l-etranger" className="text-white hover:text-[#ffc947] hover:underline decoration-2 underline-offset-4 transition-colors">
              Study Abroad
            </Link>
            <Link href="/etudiants-parents" className="text-white hover:text-[#ffc947] hover:underline decoration-2 underline-offset-4 transition-colors">
              Students & Parents
            </Link>
            <Link href="/carrieres" className="text-white hover:text-[#ffc947] hover:underline decoration-2 underline-offset-4 transition-colors">
              Careers
            </Link>
            <Link href="/blog" className="text-white hover:text-[#ffc947] hover:underline decoration-2 underline-offset-4 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-[#ffc947] hover:underline decoration-2 underline-offset-4 transition-colors">
              Contact
            </Link>
          </div>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border-2 border-white/20">
              <button 
                onClick={() => handleLangChange('fr')}
                className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                  lang === 'fr' ? 'bg-white text-[#4a1a6b]' : 'text-white hover:text-[#ffc947]'
                }`}
              >
                FR
              </button>
              <button 
                onClick={() => handleLangChange('ar')}
                className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                  lang === 'ar' ? 'bg-white text-[#4a1a6b]' : 'text-white hover:text-[#ffc947]'
                }`}
              >
                AR
              </button>
              <button 
                onClick={() => handleLangChange('en')}
                className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                  lang === 'en' ? 'bg-white text-[#4a1a6b]' : 'text-white hover:text-[#ffc947]'
                }`}
              >
                EN
              </button>
            </div>

            <Link 
              href="/contact" 
              className="bg-[#ff8c42] hover:bg-[#ffc947] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-bold uppercase text-xs sm:text-sm border-2 border-transparent hover:border-white transition-all active:scale-95 hover:shadow-[4px_4px_0px_0px_rgba(255,140,66,0.3)] whitespace-nowrap shrink-0"
            >
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 shrink-0"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Positioned separately */}
      {isMenuOpen && (
        <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-40 md:hidden bg-gradient-to-b from-[#4a1a6b] to-[#6b3a8f] border-2 border-[#8b5fb3] rounded-2xl px-6 py-6 shadow-[6px_6px_0px_0px_rgba(107,58,143,0.5)] w-[calc(100%-2rem)] max-w-sm">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-white hover:text-[#ffc947] transition-colors font-semibold text-center py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#ffc947] transition-colors font-semibold text-center py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" className="text-white hover:text-[#ffc947] transition-colors font-semibold text-center py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/etudes-a-l-etranger" className="text-white hover:text-[#ffc947] transition-colors font-semibold text-center py-2" onClick={() => setIsMenuOpen(false)}>
              Study Abroad
            </Link>
            <Link href="/etudiants-parents" className="text-white hover:text-[#ffc947] transition-colors font-semibold text-center py-2" onClick={() => setIsMenuOpen(false)}>
              Students & Parents
            </Link>
            <Link href="/carrieres" className="text-white hover:text-[#ffc947] transition-colors font-semibold text-center py-2" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>
            <Link href="/blog" className="text-white hover:text-[#ffc947] transition-colors font-semibold text-center py-2" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-[#ffc947] transition-colors font-semibold text-center py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
