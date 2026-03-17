import Image from "next/image";

const products = [
  {
    image: "/image-2.png",
    title: "Bolsa em Palha",
    description:
      "Bolsa em Palha Tiracolo\nCasa do Artesão com Fecho\ne Aplicação em Casca Coco\n- Tamanho Único",
  },
  {
    image: "/image-1.png",
    title: "Colar Casa do Artesão",
    description: "Colar Casa do Artesão em\nOpala e Prata Mosaico",
  },
  {
    image: "/image-3.png",
    title: "Bolsa em Palha Casa",
    description: "Bolsa em Palha Casa\ndo Artesão Dressa G -\nCuricacas",
  },
];

export function ProductsSection() {
  return (
    <section className="relative bg-[#101010] py-32 sm:py-48">
      <Image
        src="/w-2.png"
        width={953}
        height={361}
        alt="Letra W 2"
        className="absolute top-12 -right-24 w-[380px]"
      />
      <Image
        src="/w-2.png"
        width={1025}
        height={369}
        alt="Letra W 2"
        className="absolute bottom-1/2 -left-24 w-[380px]"
      />
      <div className="relative w-full max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 justify-items-center">
          {products.map((product, index) => (
            <div
              key={`${product.title}-${index}`}
              className="w-full max-w-[310px]"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={800}
                height={800}
                className="object-cover w-[310px] mx-auto"
              />

              <p className="whitespace-pre-line text-white font-light mt-6 mx-4 ">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
