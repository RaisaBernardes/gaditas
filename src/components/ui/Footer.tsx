import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
    className="bg-[#0F172B] relative dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 text-sm py-12 px-4"
   
  >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-6">

        {/* Follow us + Socials */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm text-neutral-300">Gaditas</p>
          <div className="flex gap-3 text-xl text-neutral-300">
            <a href="https://instagram.com/gaditas" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-neutral-800 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="hover:text-neutral-800 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-neutral-800 transition" />
            </a>
           
            
             
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-center text-xs text-neutral-300">
          © {new Date().getFullYear()} Gaditas Engenharia. Todos os direitos reservados.
        </div>

        {/* Links */}
        <div className="flex flex-col items-end gap-2 text-right text-xs">
          <a href="/politica-de-privacidade" className="underline hover:text-white transition text-neutral-300">
            Política de Privacidade
          </a>

          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-white" />
            <span className="text-neutral-300">Campo Grande - MS</span>
        </div>
        </div>
      </div>

      <hr className="border-neutral-500 my-4" />

      {/* Acknowledgment */}
      <div className="max-w-5xl mx-auto text-center text-neutral-400 text-sm">
        A Gaditas Engenharia reconhece e valoriza as comunidades locais e o solo onde construímos nossos projetos. 
        Nosso compromisso é desenvolver com respeito, responsabilidade e impacto positivo duradouro para todos que 
        compartilham este espaço conosco.
      </div>

      {/* Site credit */}
      <div className="text-right text-xs mt-4 text-neutral-400">
        <a href="https://www.instagram.com/raisabernardes/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Site por Raisa Bernardes
        </a>
      </div>
    </footer>
  );
}
