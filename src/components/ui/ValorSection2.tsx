"use client";

import VerifiedIcon from "@mui/icons-material/Verified";
import HandymanIcon from "@mui/icons-material/Handyman";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TuneIcon from "@mui/icons-material/Tune";
import ScrollFadeSection from "@/components/animations/ScrollFadeSectionFramer";

const features = [
  {
    title: "Entrega sem surpresas",
    description: "Você recebe um orçamento realista, cronograma bem definido e uma entrega que respeita exatamente o que foi combinado.",
    icon: <VerifiedIcon className="text-stone-700" />,
  },
  {
    title: "Qualidade em cada detalhe",
    description: "Cuidamos de cada etapa como se fosse única, com precisão técnica e acabamento que fala por si.",
    icon: <HandymanIcon className="text-stone-700" />,
  },
  {
    title: "Transparência Total",
    description: "Você participa, entende e aprova cada passo com clareza.",
    icon: <ChatBubbleOutlineIcon className="text-stone-700" />,
  },
  {
    title: "Flexibilidade",
    description:
      "Projetos sob medida para a sua realidade. Residenciais, reformas, lazer ou infraestrutura: nos adaptamos ao que você precisa, com inteligência e compromisso.",
    icon: <TuneIcon className="text-stone-700" />,
  },
];

export default function ValuesSplitCentered() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-8 md:py-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <ScrollFadeSection offsetY={20}>
          <h2 className="text-5xl md:text-6xl text-stone-800 dark:text-white teko-title">
            Planejamento realista. <br /> Resultado pontual.
          </h2>
        </ScrollFadeSection>

        <ScrollFadeSection delay={0.2} offsetY={20}>
          <p className="text-neutral-600 dark:text-gray-300 text-base md:text-lg max-w-xl pt-2 md:pt-4">
            Cada obra começa com diálogo e termina com resultado. Alinhamos orçamento, cronograma e execução 
            de forma transparente com foco total na entrega, qualidade e na sua satisfação.
          </p>
        </ScrollFadeSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 w-full">
          {features.map((item, idx) => (
            <ScrollFadeSection key={idx} delay={0.1 * idx} offsetY={10} duration = {0.2}>
              <div className="flex w-full items-start text-left gap-4 border border-gray-300 dark:border-neutral-700 rounded-md p-6 bg-white shadow-sm h-full">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <p className="text-stone-700 dark:text-white teko-subtitle text-lg md:text-2xl">
                    {item.title}
                  </p>
                  <p className="text-neutral-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollFadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
