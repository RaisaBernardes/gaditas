'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    title: 'Construção Residencial',
    description:
      'Construímos casas do seu jeito. Estruturas sólidas, acabamentos impecáveis e cada detalhe pensando no seu conforto e segurança.',
    image: '/images/servicos/img-casa.png',
  },
  {
    title: 'Reforma e Ampliação',
    description:
      'Sua casa evolui com você. Atualizamos espaços, ampliamos ambientes e transformamos seu lar em algo ainda melhor.',
    image: '/images/servicos/img-reforma.png',
  },
  {
    title: 'Quadras e Pavimentações',
    description:
      'Infraestrutura para esportes e bem-estar. Construímos quadras esportivas e pequenas pavimentações com qualidade e segurança.',
    image: '/images/servicos/img-esportivo.png',
  },
  {
    title: 'Pequenos Projetos Comerciais',
    description:
      'Negócios que crescem com bases sólidas. Construímos e reformamos pequenos pontos comerciais.',
    image: '/images/servicos/img-comercial.png',
  },
  {
    title: 'Projetos e Reformas Menores',
    description:
      'Execução de cercas, muros, áreas externas com churrasqueira, pergolados e mais. O cuidado com cada detalhe faz a diferença.',
    image: '/images/servicos/img-pequeno.png',
  },
  {
    title: 'Áreas de Lazer',
    description:
      'Espaços projetados para relaxar e conviver. Criamos áreas de lazer que valorizam o bem-estar e a beleza do seu ambiente.',
    image: '/images/servicos/img-lazer.png',
  },
  
];

export default function ServicesParallax() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const y = useTransform(scrollYProgress, [0, 2], ['0%', '-100%']);

  return (
    <section className="flex bg-white dark:bg-neutral-900 py-24 items-start">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 sticky top-24 px-4 md:px-16 flex flex-col justify-start max-w-[600px] ml-auto">
        <h3 className="uppercase tracking-widest text-xs pb-4 text-neutral-400 font-[family-name:var(--font-geist-mono)]">
          Nossos Serviços
        </h3>
        <h2 className="text-4xl md:text-4xl font-semibold text-black dark:text-white leading-tight">
          Transformamos projetos em realidade com precisão e excelência.
        </h2>
        <p className="mt-6 text-base text-neutral-600 dark:text-gray-300">
          Da fundação ao acabamento, criamos obras pensadas para durar e encantar.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
          <a
            className="font-[family-name:var(--font-geist-mono)] rounded-full border border-solid border-transparent transition-colors flex items-center justify-center text-background gap-2 hover:bg-neutral-700 bg-[#0F172B] text-sm sm:text-sm h-8 sm:h-10 px-4 sm:px-5 sm:w-auto"
            href="#orcamento"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>


      {/* RIGHT SIDE */}
      <div ref={scrollRef} className="w-1/2 h-[200vh] overflow-hidden pr-4 md:pr-16">
        <motion.div style={{ y }} className="space-y-16 sticky top-0 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden flex flex-col gap-6 md:gap-0 md:flex-row items-center p-6 max-w-2xl"
            >
              <div className="relative w-full md:w-3/5 h-40 md:h-48 dark:bg-neutral-700 rounded-md p-2 md:mr-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <div className="md:w-3/5 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold text-[#0F172B] dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
