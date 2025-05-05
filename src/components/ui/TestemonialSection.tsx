// src/components/ui/TestimonialSection.tsx
"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-24 px-4 md:px-8 mt-20">
      <div className="flex flex-col">
        <div className="space-y-4 z-20 max-w-lg mb-16">
        <h3 className="uppercase tracking-widest text-sm text-neutral-400 font-[family-name:var(--font-geist-mono)]">DEPOIMENTOS</h3>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0F172B] dark:text-white">
            O que nossos clientes dizem
          </h2>
          <p className="text-neutral-600 dark:text-gray-300 text-base md:text-lg">
            Somos uma construtora enxuta, ágil e pessoal. Você não é apenas mais
            um cliente: você é parceiro na jornada. Cada detalhe é tratado com
            atenção e transparência.
          </p>
        </div>
         
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 grid md:grid-cols-2">
        
        {/* LEFT COLUMN */}
        <div className="p-8 flex flex-col justify-between">
          <div></div>
          <div>
            <p className="text-xs font-semibold text-neutral-500 dark:text-gray-400 uppercase mb-1">
              Serviço realizado:
            </p>
            <p className="text-lg text-[#0F172B] dark:text-white font-medium">
              Nome do serviço
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-blue-100 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <p className="text-4xl text-blue-900 mb-6">“</p>
            <p className="text-xl text-blue-900 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida magna id ipsum lacinia, 
            sit amet ullamcorper enim bibendum. Phasellus leo ligula, feugiat sit amet nisl at, hendrerit 
            dictum elit. Duis et cursus magna, sed suscipit diam. 
            </p>
          </div>
          <div className="mt-8">
            <p className="text-base font-semibold text-blue-900">
              Simon Levinson
            </p>
            <p className="text-sm text-blue-900">
              Aqui é a ocupação da pessoa
            </p>
          </div>
        </div>
      </div>
      </div> 
    </section>
  );
}
