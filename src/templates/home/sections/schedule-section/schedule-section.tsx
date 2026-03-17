import { CardSchedule } from "./card-schedule";

const schedules = [
  {
    date: "28 de outubro",
    location: "São Paulo - SP",
    description: "Evento Investe Piauí – Made in Piauí.",
  },
  {
    date: "29 de outubro",
    location: "São Paulo - SP",
    description: "Desfile Fashion Meeting.",
  },
  {
    date: "30 de outubro",
    location: "São Paulo - SP",
    description: "Talk Show Fashion Meeting.",
  },

  {
    date: "03 de novembro",
    location: "Piauí - PI",
    description:
      "CCT Sebrae Moda + PMH Business\n\nPROGRAMAÇÃO\n•	Almoço de Networking – Negócios de Moda\n•	Desfiles\n•	Palestras com nomes nacionais\n•	Talk PMH – com Raquel Dias e grandes nomes da moda piauiense\n•	Encerramento com atração musical no Grande Hall",
  },
  {
    date: "04 de novembro",
    location: "Piauí - PI",
    description: "DESFILE CONCEITUAL/ ESTAÇÃO IPHAN",
  },
];

export function ScheduleSection() {
  return (
    <section className="px-6 py-4 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        PROGRAMAÇÃO
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mt-16 mx-auto">
        {schedules.map((schedule, index) => (
          <CardSchedule key={index} {...schedule} />
        ))}
      </div>
    </section>
  );
}
