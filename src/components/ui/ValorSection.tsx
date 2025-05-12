"use client";


import Image from "next/image";
import ScrollFadeSection from '../animations/ScrollFadeSection';


export default function ValuesSplitLeftText() {
  return (
    <section id="sobre" className="bg-white dark:bg-neutral-900 px-4 md:px-8 py-24 md:py-36">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        {/* LEFT CONTENT */}
        <div className="space-y-3 md:space-y-6 self-end">
          <ScrollFadeSection>
            <h2 className="text-4xl md:text-6xl  text-[#0F172B] dark:text-white teko-title ">
              Mais do que uma construtora. Um parceiro de confiança.
            </h2>
          </ScrollFadeSection>
          <ScrollFadeSection
            distance={5}
            threshold={0.3}
            duration ={0.8}
          >
          <p className="text-neutral-600 dark:text-gray-300 text-base md:text-lg">
            Somos uma construtora de Campo Grande comprometida com excelência, transparência e proximidade em 
            cada obra. Atuamos em todo tipo de projeto: residenciais, comerciais, reformas, ampliações, áreas 
            de lazer e muito mais. Aqui, você não é apenas cliente, é parte ativa da construção. Cada etapa é 
            executada com atenção aos detalhes, diálogo direto e respeito absoluto pelo que é mais importante 
            pra você: um resultado que gera orgulho.
          </p>
          </ScrollFadeSection>
        </div>

        {/* RIGHT IMAGE */}
        <ScrollFadeSection
          distance={5}
          threshold={0.3}
          duration ={0.8}
        >
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
