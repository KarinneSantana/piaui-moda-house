import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export const partners = [
  {
    logo: "/senac.png",
    name: "Senac",
  },
  {
    logo: "/polo-piaui-center.png",
    name: "Polo Piauí Center",
  },
  {
    logo: "/piaui.png",
    name: "Governo do Piauí",
  },
  {
    logo: "/setur.png",
    name: "Setur",
  },
];

// {
//   logo: "/sebrae.png",
//   name: "Sebrae",
// },
// {
//   logo: "/sebrae-moda.png",
//   name: "Sebrae Moda",
// },

export const apoio = [
  {
    logo: "/sebrae.png",
    name: "Sebrae",
  },
  {
    logo: "/fashionmeeting.png",
    name: "Fashion Meeting",
  },
  {
    logo: "/logo-dom.png",
    name: "Dom Concept",
  },
];

export function PartnerSection() {
  return (
    <section className="px-6 py-24 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        Parceiros
      </h2>

      <div className="w-full max-w-6xl mx-auto mt-12">
        <div className="flex flex-col sm:flex-row items-center gap-8 px-8 py-6 justify-center bg-[#E3E3E3] rounded-xl">
          {partners.map((partner, index) => (
            <div key={`${index}-${partner.name}`} className="">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={140}
                className=" w-[100px]"
              />
            </div>
          ))}
        </div>
      </div>

      <h2 className="font-medium tracking-widest text-xl uppercase mt-28">
        Apoio
      </h2>

      <div className="w-full max-w-6xl mx-auto mt-12">
        <div className="flex flex-col sm:flex-row items-center gap-12 px-8 py-8 sm:py-16 justify-center bg-[#E3E3E3] rounded-xl">
          {apoio.map((partner, index) => (
            <div key={`${index}-${partner.name}`} className="">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={140}
                className="object-cover w-[100px]"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center flex-col mt-18 gap-4">
          <h2 className=" tracking-widest text-sm">
            Associe sua marca à cultura, inovação e a moda que faz história
          </h2>
          <Button variant="secondary">
            <Link href="https://wa.me/558694435307" target="_blank">
              Seja um parceiro
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
