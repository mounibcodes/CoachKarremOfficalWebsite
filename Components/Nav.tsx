import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white border-2 border-black rounded-full px-8 py-4 flex items-center gap-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Link href="/" className="text-xl font-black text-black tracking-tighter uppercase">
          Coach Karrem
        </Link>
        
        <div className="hidden md:flex items-center gap-6 font-bold text-sm uppercase tracking-wide">
          <Link href="#about" className="hover:underline text-black decoration-2 underline-offset-4">
            About Me
          </Link>
          <Link href="#programs" className="hover:underline text-black decoration-2 underline-offset-4">
            Programs
          </Link>
          <Link href="#stories" className="hover:underline text-black decoration-2 underline-offset-4">
            Success Stories
          </Link>
        </div>

        <Link 
          href="#contact" 
          className="bg-black text-white px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-neutral-800 transition-all active:scale-95 hover:shadow-lg"
        >
          Start Now
        </Link>
      </div>
    </nav>
  )
}
