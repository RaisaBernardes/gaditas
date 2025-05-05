"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-24 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-start">
        
        {/* TÍTULO E DESCRIÇÃO */}
        <div className="space-y-4 z-20 max-w-lg mb-16">
          <h3 className="uppercase tracking-widest text-xs text-neutral-400 font-[family-name:var(--font-geist-mono)]">
            DEPOIMENTOS
          </h3>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0F172B] dark:text-white">
            O que nossos clientes dizem
          </h2>
          <p className="text-neutral-600 dark:text-gray-300 text-base md:text-lg">
            Depoimentos de quem viveu a experiência de um projeto feito com excelência.
          </p>
        </div>

        {/* BLOCO DEPOIMENTO */}
        <div className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 grid md:grid-cols-2">
          {/* COLUNA ESQUERDA */}
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

          {/* COLUNA DIREITA */}
          <div className="bg-slate-200 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="text-4xl text-[#0F172B] mb-6">“</p>
              <p className="text-xl text-[#0F172B] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida magna id ipsum
                lacinia, sit amet ullamcorper enim bibendum. Phasellus leo ligula, feugiat sit amet nisl
                at, hendrerit dictum elit. Duis et cursus magna, sed suscipit diam.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-base font-semibold text-[#0F172B]">
                Simon Levinson
              </p>
              <p className="text-sm text-[#0F172B]">
                Aqui é a ocupação da pessoa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
