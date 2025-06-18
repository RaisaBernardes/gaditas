import ContactForm from "./ContactForm";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ScrollFadeSection from "@/components/animations/ScrollFadeSectionFramer";

export default function ContactSection() {
  return (
    <section id="contato" className="bg-white dark:bg-neutral-900 px-4 md:px-10 py-24 md:py-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-3 md:gap-12">
        
        {/* LEFT SIDE */}
       
        <div className="space-y-3 md:space-y-6">
           <ScrollFadeSection  
              delay = {0.2}
              duration = {0.6}
              offsetY={10}>
          <h2 className="text-5xl md:text-7xl text-stone-800 dark:text-white teko-title">
          Vamos tirar seu <br/> projeto do papel?
          </h2>
          </ScrollFadeSection>
          <p className="text-lg text-stone-800 dark:text-gray-300 max-w-md">
            Preencha o formulário e receba um atendimento claro, ágil e alinhado com o que você realmente precisa.
          </p>

          <div className="pt-6 text-base md:text-sm text-stone-800 dark:text-gray-200 space-y-4">
            <p className="roboto-condensed-700 tracking-tight">Detalhes de Contato</p>
            <address className="not-italic space-y-3">
              
              {/* Localização */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-stone-800" />
                <span>Campo Grande - MS</span>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-stone-800" />
                <a
                  href="https://wa.me/5571981065728" // numero whatsapp
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-stone-800"
                >
                  (71) 9.8106-5728
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-stone-800" />
                <span>orçamento@gaditascontato.com</span>
              </div>
            </address>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div>
          <ScrollFadeSection  
              delay = {0.2}
              duration = {0.4}
              offsetY={10}>
            <ContactForm />
          </ScrollFadeSection>
        </div>
      </div>
    </section>
  );
}
