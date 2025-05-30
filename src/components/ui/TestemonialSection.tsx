"use client";
import ScrollFadeSection from "@/components/animations/ScrollFadeSectionFramer";

export default function TestimonialSection() {
  return (
    <section className="bg-neutral-100 dark:bg-neutral-900 py-24 px-4 md:px-8 mt-20 md:pb-36">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        
        {/* TÍTULO E DESCRIÇÃO */}
        <div className="space-y-4 z-20 max-w-lg mb-16">
          <ScrollFadeSection offsetY={20}>
          <h3 className="uppercase tracking-widest text-xs text-neutral-400 geist-mono-400 pb-2">
            DEPOIMENTOS
          </h3>
          </ScrollFadeSection>
          <ScrollFadeSection offsetY={20}>
          <h2 className="text-5xl md:text-6xl text-stone-800 dark:text-white teko-title md:hidden">
            O que nossos clientes  
            <span><br/> dizem sobre nós</span> 
          </h2>
          </ScrollFadeSection>
          <ScrollFadeSection offsetY={20}>
          <h2 className="text-4xl md:text-6xl text-stone-800 dark:text-white teko-title hidden md:block">
            O que nossos clientes dizem sobre nós
          </h2>
          </ScrollFadeSection>
          <ScrollFadeSection offsetY={20}>
          <p className="text-neutral-600 dark:text-gray-300 text-base md:text-lg max-w-100">
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
          <div className="p-8 flex flex-col justify-between bg-white">
            <div></div>
            <div>
              <p className="text-xs font-semibold text-neutral-500 dark:text-gray-400 uppercase mb-1">
                Serviço realizado:
              </p>
              <p className="text-md text-stone-800 dark:text-white font-medium">
                Nome do serviço
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="bg-neutral-300 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="text-4xl text-stone-800 ">“</p>
              <p className="text-md md:text-xl text-stone-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida magna id ipsum
                lacinia, sit amet ullamcorper enim bibendum. Phasellus leo ligula, feugiat sit amet nisl
                at, hendrerit dictum elit. Duis et cursus magna, sed suscipit diam.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-base font-semibold text-stone-800 roboto-condensed-700">
                Simon Levinson
              </p>
              <p className="text-sm text-stone-800">
                Aqui é a ocupação da pessoa
              </p>
            </div>
          </div>
        </div>
        </ScrollFadeSection>
      </div>
    </section>
  );
}
