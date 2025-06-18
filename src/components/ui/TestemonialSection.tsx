"use client";
import ScrollFadeSection from "@/components/animations/ScrollFadeSectionFramer";

export default function TestimonialSection() {
  return (
    <section className="bg-[#EAECEF]] dark:bg-neutral-900 py-24 px-4 md:px-8 mt-20 md:pb-36">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        
        {/* TÍTULO E DESCRIÇÃO */}
        <div className="space-y-4 z-20 max-w-lg mb-16">
          <ScrollFadeSection offsetY={20}>
          <h3 className="uppercase tracking-widest text-xs text-[#8E9BA7] geist-mono-400 pb-2">
            DEPOIMENTOS
          </h3>
          </ScrollFadeSection>
          <ScrollFadeSection offsetY={20}>
          <h2 className="text-5xl md:text-6xl text-[#09223A] dark:text-white teko-title md:hidden">
            O que nossos clientes  
            <span><br/> dizem sobre nós</span> 
          </h2>
          </ScrollFadeSection>
          <ScrollFadeSection offsetY={20}>
          <h2 className="text-4xl md:text-6xl text-[#09223A] dark:text-white teko-title hidden md:block">
            O que nossos clientes dizem sobre nós
          </h2>
          </ScrollFadeSection>
          <ScrollFadeSection offsetY={20}>
          <p className="text-[#3B5166] dark:text-gray-300 text-base md:text-lg max-w-100">
            Depoimentos de quem viveu a experiência de um projeto feito com excelência.
          </p>
          </ScrollFadeSection>
        </div>

        {/* BLOCO DEPOIMENTO */}
        <ScrollFadeSection  
          delay = {0.2}
          duration = {0.5}
          offsetY={20}>
        <div className="w-full rounded-2xl overflow-hidden border border-gray-200 grid md:grid-cols-2">
          {/* COLUNA ESQUERDA */}
          <div className="p-8 flex flex-col justify-between bg-[#E7E9EC]]">
            <div></div>
            <div>
              <p className="text-xs font-semibold text-[#3B5166] dark:text-gray-400 uppercase mb-1">
                Serviço realizado:
              </p>
              <p className="text-md text-[#0A2540] dark:text-white font-medium">
                Reforma de casa
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="bg-[#283B59] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="text-4xl md:text-9xl text-[#E7E9EC] ">“</p>
              <p className="text-md md:text-lg text-[#E7E9EC] leading-relaxed">
                Desde o primeiro contato, senti que estava lidando com uma empresa séria e comprometida. A equipe da Gaditas nos acompanhou em cada etapa da obra, sempre com transparência, organização e atenção aos detalhes. O resultado ficou além do que imaginávamos! Recomendo muito!
              </p>
            </div>
            <div className="mt-8">
              <p className="text-base font-semibold text-[#E7E9EC] roboto-condensed-700">
                Mariana Ferreira
              </p>
              <p className="text-sm text-[#E7E9EC]">
                Cliente residencial
              </p>
            </div>
          </div>
        </div>
        </ScrollFadeSection>
      </div>
    </section>
  );
}
