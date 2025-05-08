import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background image with cover and responsiveness */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-hero3.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className="object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-black">
        <h1 className="text-4xl md:text-6xl font-light leading-tight text-[#0F172B]">
        Sua <span className="font-semibold">obra.</span> <br/>  Nosso <span className="font-semibold">compromisso.</span>
 
        </h1>
        <p className="mt-6 text-sm md:text-base tracking-wide text-neutral-700 max-w-xl font-[family-name:var(--font-geist-mono)]">
        Projetos residenciais, reformas, áreas de lazer, pavimentações e muito mais — feitos com rigor técnico,
         comunicação direta e um nível de cuidado que você sente do início ao fim.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center text-background gap-2 hover:bg-neutral-700 bg-[#0F172B] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="#orcamento"
          >
            Começar seu projeto
          </a>
        </div>
      </div>
    </section>
  );
}
