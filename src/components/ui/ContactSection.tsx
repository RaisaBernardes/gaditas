import ContactForm from "./ContactForm";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contato" className="bg-white dark:bg-neutral-900 px-4 md:px-10 py-24 md:py-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-7xl text-stone-800 dark:text-white teko-title">
          Vamos tirar seu projeto do papel?
          </h2>
          <p className="text-lg text-stone-800 dark:text-gray-300 max-w-md">
            Preencha o formulário e receba um atendimento claro, ágil e alinhado com o que você realmente precisa.
          </p>

          <div className="pt-6 text-sm text-stone-800 dark:text-gray-200 space-y-4">
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
                  href="https://wa.me/5599999999999" // substitua pelo número real com DDI
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-stone-800"
                >
                  (99) 9.9999-9999
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
