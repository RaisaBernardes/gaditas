import ContactSection from "@/components/ui/ContactSection";
import Finalizadora from "@/components/ui/Finalizadora";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import ServicosSection from "@/components/ui/ServicosSection";
import TestimonialSection from "@/components/ui/TestemonialSection";
import ValorSection from "@/components/ui/ValorSection";
import ValorSection2 from "@/components/ui/ValorSection2";


export default function Home() {
  return (
    <div className="">
      <main className="">
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
