import React from "react";
import { Timeline } from "./timeline";

const timeline = [
  {
    date: "2015",
    description:
      "**Data:** 27 a 30 de outubro\n**Local:** Hotel Blue Tree Tower Rio Poty, Teresina\n**Nome de destaque:** Glória Coelho\n**Marcas e estilistas locais:** Otávio Menezes, Kalina Rameiro, Deura Melo, Gilvana Lima, Igor Leite, La Vertu, Vesture, Pintos, Villa Dellux e outros.",
  },
  {
    date: "2016",
    description:
      "**Data:** 29 de novembro\n**Local:** Audi Center Teresina\n**Nome do evento:** Piauí Moda House Fashion Day\n**Nome de destaque:** Ronaldo Fraga.",
  },
  {
    date: "2017",
    description:
      "**Data:** 9 a 11 de maio\n**Local:** Mansão Bliss, Teresina\n**Tema:** Identidade – ID\n**Nomes de destaque:** Sadi Consanti e Mônica Salgado\n**Atividades:** Desfiles de marcas locais atendidas pelo Sebrae como Vell Bizz, Flor da Pele, Deura Melo, Grupo Grota, Gil Lima; talk shows e exposições com foco em identidade regional.",
  },
  {
    date: "2018",
    description:
      "**Data:** 8 a 10 de maio\n**Local:** Espaço Bliss – Favorito Buffet\n**Tema:** Essência – Natural é ser\n**Nomes de destaque:** Dudu Bertholini, Marzio Fiorini e Felipe Moreira\n**Destaques:** Desfile de estudantes da UFPI e comunidades de matriz africana; participação de marcas regionais e nacionais.",
  },
  {
    date: "2019",
    description:
      "**Data:** 14 a 16 de maio\n**Local:** Bliss – Favorito Buffet, Teresina\n**Tema:** Nova Era – Viva o novo tempo da moda\n**Nomes de destaque:** Eric Gutmann, Simone Rech, Amir Slama, Renata Abranchs.",
  },
  {
    date: "2020",
    description:
      "**Data:** 13 de dezembro\n**Formato:** Edição online – Piauí Moda House On\n**Destaque:** Desfiles com transmissão ao vivo por múltiplas plataformas devido à pandemia.\n**Obs:** Em junho do mesmo ano ocorreu também o PMH Fashion Line como parte da nova fase digital, com transmissão ao vivo para rádio e TV. Nomes como o de Dani Dornellas foram destaque.",
  },
  {
    date: "2022",
    description:
      "**Data:** 14 e 15 de junho\n**Local:** Centro de Convenções de Teresina\n**Tema:** Conexões\n**Nomes de destaque:** Arlindo Grund, Flávia Aranha, Eduardo Cezário\n**Foco:** Negócios, desfiles e networking.",
  },
  {
    date: "2023",
    description:
      "**Data:** 22 a 24 de agosto\n**Local:** Centro de Convenções de Teresina\n**Tema:** Movimento\n**Nomes de destaque:** Natalia Beauty, Isa Silva, Charllene Oliveira.",
  },
  {
    date: "2024",
    description:
      "**Data:** 21 e 22 de agosto\n**Local:** Centro de Convenções de Teresina\n**Tema:** Originalidade\n**Nomes de destaque:** Mônica Salgado, Dani Falcão, Tatiane Alves.",
  },
];

export default function TimelineSection() {
  return (
    <section className="px-6 py-32 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        Linha do Tempo
      </h2>

      <Timeline items={timeline} className="mt-16" />
    </section>
  );
}
