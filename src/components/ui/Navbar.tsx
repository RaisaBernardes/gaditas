'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur shadow-lg shadow-[#f0f1f3]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left - Links */}
          <ul className="flex gap-6 text-sm font-light text-neutral-500 font-[family-name:var(--font-geist-mono)]">
            <li><Link href="#gaditas" scroll={false} className="text-black font-medium">GADITAS</Link></li>
            <li><Link href="#inicio" scroll={false} className="hover:text-neutral-800 hidden md:block">Início</Link></li>
            <li><Link href="#sobre" scroll={false} className="hover:text-neutral-800 hidden md:block">Sobre</Link></li>
            <li><Link href="#projetos" scroll={false} className="hover:text-neutral-800 hidden md:block">Projetos</Link></li>
          </ul>

       
          {/* Right - Button */}
          <div>
            <Link
              href="#contato"
              scroll={false}
              className="hidden md:block text-sm font-light bg-white text-black px-4 py-2 rounded-4xl hover:bg-neutral-700 hover:text-white border-1 transition font-[family-name:var(--font-geist-mono)]"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
