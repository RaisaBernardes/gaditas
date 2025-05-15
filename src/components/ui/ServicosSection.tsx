'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';

const services = [
  {
    title: 'Construção Residencial',
    description:
      'Projetos residenciais personalizados, executados com estrutura sólida, acabamento técnico e foco total no seu conforto, estilo de vida e segurança. Sua casa, do jeito certo, do início ao fim.',
    image: '/images/servicos/img-casa.png',
  },
  {
    title: 'Reforma e Ampliação',
    description:
      'Atualizamos, transformamos e expandimos ambientes com técnica, visão e planejamento. Sua casa acompanha sua fase de vida com mais funcionalidade, beleza e valor agregado.',
    image: '/images/servicos/img-reforma.png',
  },
  {
    title: 'Quadras e Pavimentações',
    description:
      'Quadras esportivas e pequenas pavimentações com técnica, nivelamento preciso e foco total em durabilidade. Qualidade que você vê, conforto que você sente.',
    image: '/images/servicos/img-esportivo.png',
  },
  {
    title: 'Projetos Comerciais',
    description:
      'Construímos e reformamos pequenos comércios com agilidade, planejamento e atenção ao uso inteligente dos espaços. Espaços bem pensados, prontos para gerar valor desde o primeiro dia.',
    image: '/images/servicos/img-comercial.png',
  },
  {
    title: 'Projetos e Reformas Menores',
    description:
      'Muros, cercas, pergolados, escadas, áreas gourmet, e outros acabamentos externos com precisão e cuidado. Soluções sob medida que valorizam seu imóvel e seu dia a dia.',
    image: '/images/servicos/img-pequeno.png',
  },
  {
    title: 'Áreas de Lazer',
    description:
      'Espaços de lazer que combinam conforto, estética e durabilidade. Do playground ao espaço gourmet, criamos ambientes que reúnem, acolhem e encantam.',
    image: '/images/servicos/img-lazer.png',
  },
];

export default function ServicesParallax() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const y = useTransform(scrollYProgress, [0, 2], ['0%', '-100%']);

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="servicos" className="flex flex-col md:flex-row bg-white dark:bg-neutral-900 px-4 py-8 md:py-24 md:pt-40 items-start mx-auto gap-8 max-w-[1380px]">
      
      {/* LEFT SIDE */}
      <div className="md:space-y-2 w-full justify-start md:w-1/2 md:sticky top-24 md:px-8 flex flex-col max-w-[600px] mx-auto md:mx-0">
        <h3 className="uppercase tracking-widest text-xs pb-2 text-neutral-400 geist-mono-400 ">
          Nossos Serviços
        </h3>
        <h2 className="text-4xl md:text-5xl  text-stone-800 dark:text-white teko-title">
          Construção sob medida e execução com excelência.
        </h2>
        <p className="mt-2 text-base md:text-lg text-neutral-600 dark:text-gray-300 max-w-100">
          Da fundação ao acabamento, criamos obras pensadas para durar e encantar.
        </p>
        <div className="flex gap-2 items-start flex-col sm:flex-row mt-6">
          <a
            className="geist-mono-400 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center text-background gap-2 hover:bg-neutral-700 bg-stone-800 text-sm sm:text-sm h-8 sm:h-10 px-4 sm:px-5 sm:w-auto"
            href="#orcamento"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        ref={scrollRef}
        className="w-full md:w-1/2 pr-0 md:pr-16  md:mt-180 lg:mt-100"
      >
        <motion.div
          style={{ y: isMobile ? undefined : y }}
          className="space-y-10 relative"
        >

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row items-center p-4 md:p-6 lg:gap-4 md:max-w-2xl max-w-[600px] mx-auto"
            >
              <div className="relative w-full h-40 md:w-3/5 md:h-48 dark:bg-neutral-700 rounded-md p-2 xl:mr-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <div className="md:w-3/5 text-center md:text-left">
                <h3 className="text-2xl text-stone-800 dark:text-white teko-subtitle">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 pt-1 md:pt-2 max-w-100">
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
