import Image from "next/image";

export function OtherSection() {
  return (
    <section className="py-24 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        Outras edições
      </h2>

      <div className="grid grid-cols-4 gap-3 mt-16 h-96 lg:h-[28rem]">
        <div className="bg-gray-500 rounded-xl rounded-tl-none rounded-bl-none relative overflow-hidden">
          <Image
            src="/foto-1.png"
            alt="Foto 1"
            fill
            className="object-cover scale-105"
          />
        </div>

        <div className="bg-gray-500 row-span-2 rounded-xl relative overflow-hidden">
          <Image
            src="/foto-3.png"
            alt="Foto 1"
            fill
            className="object-cover scale-105"
          />
        </div>

        <div className="bg-gray-500 col-span-2 rounded-xl rounded-tr-none rounded-br-none relative overflow-hidden">
          <Image
            src="/foto-4.png"
            alt="Foto 1"
            fill
            className="object-cover scale-105"
          />
        </div>
        <div className=" bg-gray-500 rounded-xl rounded-tl-none rounded-bl-none relative overflow-hidden">
          <Image
            src="/foto-2.png"
            alt="Foto 1"
            fill
            className="object-cover scale-105"
          />
        </div>
        <div className="bg-gray-500 rounded-xl relative overflow-hidden">
          <Image
            src="/foto-5.png"
            alt="Foto 1"
            fill
            className="object-cover scale-105"
          />
        </div>
        <div className="bg-gray-500 rounded-xl rounded-tr-none rounded-br-none relative overflow-hidden">
          <Image
            src="/foto-6.png"
            alt="Foto 1"
            fill
            className="object-cover scale-105"
          />
        </div>
      </div>
    </section>
  );
}
