'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ScrollToSectionLink from '../ScrollToSectionLink'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur shadow-lg shadow-[#f0f1f3]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left - Brand + Links */}
          <ul className="flex gap-6 text-sm font-light text-[#8E9BA7] geist-mono-400 uppercase">
            <li><ScrollToSectionLink sectionId="inicio" className="text-[#071A2D] font-medium">GADITAS</ScrollToSectionLink></li>
            <li className="hidden md:block"><ScrollToSectionLink sectionId="inicio" className="hover:text-[#061423]">Início</ScrollToSectionLink></li>
            <li className="hidden md:block"><ScrollToSectionLink sectionId="sobre" className="hover:text-[#061423]">Sobre</ScrollToSectionLink></li>
            <li className="hidden md:block"><ScrollToSectionLink sectionId="servicos" className="hover:text-[#061423]">Serviços</ScrollToSectionLink></li>
          </ul>

      

          {/* Right - Desktop Button & Mobile Menu Icon */}
          <div className="flex items-center gap-4">
            <Link
              href="#contato"
              scroll={true}
              className="hidden md:block text-sm font-light bg-white text-[#071A2D] px-4 py-2 rounded-4xl hover:bg-neutral-100 hover:text-neutral-800 border-1 transition geist-mono-400"
            >
              Contato
            </Link>

            <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start mt-4 gap-6 px-2 pb-6 text-sm font-light text-neutral-800">
            <ScrollToSectionLink sectionId="inicio"  onClick={closeMenu} className="hover:text-black geist-mono-400 uppercase">Início</ScrollToSectionLink>
            <ScrollToSectionLink sectionId="sobre" onClick={closeMenu} className="hover:text-black geist-mono-400 uppercase">Sobre</ScrollToSectionLink>
            <ScrollToSectionLink sectionId="servicos" onClick={closeMenu} className="hover:text-black geist-mono-400 uppercase">Serviços</ScrollToSectionLink>
            <ScrollToSectionLink sectionId="contato" onClick={closeMenu} className="hover:text-black geist-mono-400 uppercase">Contato</ScrollToSectionLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar