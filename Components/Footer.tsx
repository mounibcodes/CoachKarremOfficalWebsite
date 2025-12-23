import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-4 pb-8 flex justify-center mt-auto text-black">
      <div className="w-full max-w-6xl bg-white border-2 border-black rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between gap-8 items-start">
        
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-3xl font-black tracking-tighter uppercase">
            Coach Karrem
          </Link>
          <p className="font-medium text-sm max-w-xs">
            Helping you achieve your fitness goals with personalized coaching and proven strategies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-4">
            <h3 className="font-black uppercase text-lg">Menu</h3>
            <div className="flex flex-col gap-2 font-bold text-sm uppercase">
              <Link href="#about" className="hover:underline decoration-2 underline-offset-4">About Me</Link>
              <Link href="#programs" className="hover:underline decoration-2 underline-offset-4">Programs</Link>
              <Link href="#stories" className="hover:underline decoration-2 underline-offset-4">Success Stories</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-black uppercase text-lg">Connect</h3>
            <div className="flex flex-col gap-2 font-bold text-sm uppercase">
              <Link href="#" className="hover:underline decoration-2 underline-offset-4">Instagram</Link>
              <Link href="#" className="hover:underline decoration-2 underline-offset-4">Twitter</Link>
              <Link href="#" className="hover:underline decoration-2 underline-offset-4">Email</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start md:items-end">
           <Link 
            href="/Contact" 
            className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase text-sm border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all active:scale-95 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Start Now
          </Link>
          <p className="text-xs font-bold uppercase mt-auto">
            © {new Date().getFullYear()} Coach Karrem.
          </p>
        </div>

      </div>
    </footer>
  )
}
