"use client";

import { FaHammer, FaHome, FaSwimmer, FaWarehouse, FaStore } from "react-icons/fa";

export default function ServicosSection() {
  return (
    <section className="px-4 py-24 md:py-32 bg-neutral-100 dark:bg-neutral-700">
      <div className="max-w-7xl mx-auto bg-[#0F172B] text-white p-12 md:p-20 rounded-[3rem]">
        
        {/* TÍTULOS */}
        <div className="text-left mb-16 max-w-3xl">
          <h3 className="uppercase tracking-widest text-sm text-[#B1ADA1] font-[family-name:var(--font-geist-mono)]">Serviços</h3>
          <h2 className="text-4xl md:text-6xl font-semibold mt-2">O que fazemos</h2>
        </div>

        {/* SERVIÇOS */}
        <div className="grid gap-12 md:grid-cols-2 text-lg text-white">
          {/* 1 */}
          <div className="space-y-2">
            <h4 className="text-lg font-medium flex items-center gap-2">
              <FaHome className="text-[#d1d5db] " /> Construção Residencial
            </h4>
            <p className="text-gray-300">
              Construímos casas do seu jeito. Estruturas sólidas, acabamentos impecáveis e cada detalhe pensando no seu conforto e segurança.
            </p>
          </div>

          {/* 2 */}
          <div className="space-y-2">
            <h4 className="text-lg font-medium flex items-center gap-2">
              <FaHammer className="text-[#d1d5db]" /> Reforma e Ampliação
            </h4>
            <p className="text-gray-300">
              Sua casa evolui com você. Atualizamos espaços, ampliamos ambientes e transformamos seu lar em algo ainda melhor.
            </p>
          </div>

          {/* 3 */}
          <div className="space-y-2">
            <h4 className="text-lg font-medium flex items-center gap-2">
              <FaSwimmer className="text-[#d1d5db]" /> Áreas de Lazer
            </h4>
            <p className="text-gray-300">
              Piscinas, churrasqueiras e áreas gourmet. Criamos espaços para viver momentos inesquecíveis com quem você ama.
            </p>
          </div>

          {/* 4 */}
          <div className="space-y-2">
            <h4 className="text-lg font-medium flex items-center gap-2">
              <FaWarehouse className="text-[#d1d5db]" /> Quadras e Pavimentações
            </h4>
            <p className="text-gray-300">
              Infraestrutura para esportes e bem-estar. Construímos quadras esportivas e pequenas pavimentações com qualidade e segurança.
            </p>
          </div>

          {/* 5 */}
          <div className="space-y-2 md:col-span-2">
            <h4 className="text-lg font-medium flex items-center gap-2">
              <FaStore className="text-[#d1d5db]" /> Pequenos Projetos Comerciais
            </h4>
            <p className="text-gray-300 text-md">
              Negócios que crescem com bases sólidas. Construímos e reformamos pequenos pontos comerciais.
            </p>
          </div>
        </div>

        {/* BOTÃO */}
        <div className="mt-12">
          <a
            href="#contato"
            className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Quero um orçamento personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
