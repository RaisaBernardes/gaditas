// src/components/FinalSection.tsx
import React from 'react';

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ }) => {
  return (
    <h1 className="text-4xl md:text-5xl oswald-regular mb-10 leading-tight">
      Toda grande obra começa com uma boa escolha.
      A sua começa aqui.
    </h1>
    
  );
};

const Finalizadora = () => {
  return (
    <section className="bg-stone-700 text-white px-4 py-24 md:py-36 text-center"
    >
      <div className="max-w-4xl mx-auto justify-center items-center text-center text-white">
        <Title text="Toda grande obra começa com uma boa escolha.
      A sua começa aqui." />
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
