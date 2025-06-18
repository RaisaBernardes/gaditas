"use client";

import Image from "next/image";
import ScrollFadeSection from "@/components/animations/ScrollFadeSectionFramer";

export default function ValuesSplitLeftText() {
  return (
    <section
      id="sobre"
      className="bg-white dark:bg-neutral-900 px-4 md:px-10 py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-3 md:space-y-6">
          <ScrollFadeSection
            delay = {0.2}
            duration = {0.2}
            offsetY={10}>
            <h2 className="text-5xl md:text-6xl font-medium text-[#071A2D] dark:text-white font-['Teko']">
              Mais do que uma construtora. Um parceiro de confiança.
            </h2>
          </ScrollFadeSection>
          <ScrollFadeSection 
            delay = {0.2}
            duration = {0.4}
            offsetY={10}>
            <p className="text-[#5B6D7F] dark:text-gray-300 text-base md:text-lg">
              Somos uma construtora de Campo Grande-MS comprometida com
              excelência, transparência e proximidade em cada obra. Atuamos em
              todo tipo de projeto: residenciais, comerciais, reformas,
              ampliações, áreas de lazer, entre outros. Aqui, você não é apenas
              cliente, é parte ativa da construção. Cada etapa é executada com
              atenção aos detalhes, diálogo direto e respeito absoluto pelo que
              é mais importante pra você: um resultado de qualidade.
            </p>
          </ScrollFadeSection>
        </div>

        {/* RIGHT IMAGE */} 
        <ScrollFadeSection>          
        <div className="relative self-end -mb-4 md:-mb-20">
            <Image
              src="/images/estrutura.png"
              alt="Estrutura"
              width={1400}
              height={1000}
              className="object-contain w-[140%] max-w-none h-auto"
              priority
            />
          </div>
          </ScrollFadeSection>
      </div>
    </section>
  );
}
