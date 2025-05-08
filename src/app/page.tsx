'use client'

import ContactSection from "@/components/ui/ContactSection";
import Finalizadora from "@/components/ui/Finalizadora";
import HeroSection from "@/components/ui/HeroSection";
import ServicosSection from "@/components/ui/ServicosSection";
import TestimonialSection from "@/components/ui/TestemonialSection";
import ValorSection from "@/components/ui/ValorSection";
import ValorSection2 from "@/components/ui/ValorSection2";
import Lenis from "lenis";
import { useEffect } from "react";
import Footer from "@/components/ui/Footer";
import ScrollToHashOnLoad from '@/components/ScrollToHashOnLoad'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <main>
        <ScrollToHashOnLoad />
        <HeroSection />
        <ValorSection />
        <ValorSection2 />
        <ServicosSection />
        <TestimonialSection />
        <ContactSection />
        <Finalizadora />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
