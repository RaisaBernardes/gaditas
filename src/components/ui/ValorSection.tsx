"use client";

import Image from "next/image";

export default function ValuesSplitLeftText() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-20 md:py-40 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-4 z-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0F172B] dark:text-white ">
            Comprometimento que se transforma em obra pronta
          </h2>
          <p className="text-neutral-600 dark:text-gray-300 text-base md:text-lg ">
            Somos uma construtora enxuta, ágil e pessoal. Você não é apenas mais
            um cliente: você é parceiro na jornada. Cada detalhe é tratado com
            atenção e transparência.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-10 -mt-10 md:-mt-20 md:-ml-20">
          <Image
            src="/images/estrutura.png"
            alt="Estrutura"
            width={1400}
            height={1000}
            className="object-contain w-[130%] max-w-none h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
