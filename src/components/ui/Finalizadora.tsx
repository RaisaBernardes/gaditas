// src/components/FinalSection.tsx
import React from 'react';

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="text-4xl md:text-5xl oswald-regular mb-10 leading-tight">
      {text}
    </h1>
  );
};

const Finalizadora = () => {
  return (
    <section className="bg-[#0F172B] text-white py-40 px-8 text-center"
    >
      <div className="max-w-4xl mx-auto justify-center items-center text-center text-white">
        <Title text="Pronto para transformar seu projeto em realidade?" />
        <a
          href="https://wa.me/5581999458630"
          target="_blank"
          rel="noopener noreferrer"
         className="font-[family-name:var(--font-geist-mono)] inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          Solicitar orçamento
        </a>
      </div>
    </section>
  );
};

export default Finalizadora;
