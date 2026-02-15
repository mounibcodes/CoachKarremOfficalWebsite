import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2d0f47] to-[#4a1a6b] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 group-hover:bg-white/20 transition-all">
                <Image 
                  src="/qoodwa.jpg" 
                  alt="Qoodwa Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight lowercase">qoodwa</span>
            </Link>
            <p className="font-medium text-white/80 text-sm leading-relaxed">
              Multidisciplinary hub specialized in education and supporting young talents in their study abroad journey.
            </p>
            <div className="flex flex-col gap-2 text-sm font-medium text-white/70">
              <p>Bab Ezzouar, Algiers</p>
              <p>Algeria</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-black text-lg uppercase">Navigation</h3>
            <div className="flex flex-col gap-2 font-medium text-sm">
              <Link href="/" className="hover:text-[#ffc947] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#ffc947] transition-colors">About</Link>
              <Link href="/services" className="hover:text-[#ffc947] transition-colors">Services</Link>
              <Link href="/etudes-a-l-etranger" className="hover:text-[#ffc947] transition-colors">Study Abroad</Link>
              <Link href="/etudiants-parents" className="hover:text-[#ffc947] transition-colors">Students & Parents</Link>
            </div>
          </div>

          {/* More Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-black text-lg uppercase">Learn More</h3>
            <div className="flex flex-col gap-2 font-medium text-sm">
              <Link href="/carrieres" className="hover:text-[#ffc947] transition-colors">Careers</Link>
              <Link href="/blog" className="hover:text-[#ffc947] transition-colors">Blog & Resources</Link>
              <Link href="/contact" className="hover:text-[#ffc947] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-black text-lg uppercase">Contact</h3>
            <div className="flex flex-col gap-3 font-medium text-sm">
              <a href="mailto:contact@qoodwa.com" className="hover:text-[#ffc947] transition-colors">
                contact@qoodwa.com
              </a>
              <a href="tel:+213XXXXXXXXX" className="hover:text-[#ffc947] transition-colors">
                +213 XXX XXX XXX
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              <a 
                href="https://instagram.com/qoodwa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <Link 
              href="/contact" 
              className="bg-[#ff8c42] hover:bg-[#ffc947] text-white px-6 py-3 rounded-full font-black text-sm text-center transition-all hover:shadow-lg mt-4"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-white/70">
            © {new Date().getFullYear()} SARL QOODWA INTERNATIONAL EDUCATION. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-white/70">
            <Link href="#" className="hover:text-[#ffc947] transition-colors">Legal Notice</Link>
            <Link href="#" className="hover:text-[#ffc947] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
