import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Hero() {
  return (
    <section className=" min-h-screen grid grid-cols-1 sm:grid-cols-2 ">
      {/* Left side */}
      <div className="relative flex flex-col justify-center items-center px-6 ">
        <div className="w-full sm:max-w-[300px] flex flex-col justify-center items-center sm:items-start">
          <Image
            src="/logo-made-in-piaui.png"
            alt="Logo PM"
            width={471}
            height={174}
            className="object-contain w-[180px] sm:w-[210px]"
          />

          <h1 className="text-3xl font-bold mt-8 text-center sm:text-left">
            Adquira produtos <br />
            autênticos do Piauí <br />e valorize a{" "}
            <span className="underline">
              {" "}
              moda
              <br />
              local.
            </span>
          </h1>

          <Link href="https://madeinpiaui.com.br/" target="_blank">
            <Button variant="gradient" size="lg" className="mt-8">
              Site Oficial
            </Button>
          </Link>
        </div>

        <Image
          src="/w.png"
          alt="Letra W"
          width={1025}
          height={369}
          className="absolute -left-12 -bottom-6 object-cover z-0 w-[280px] sm:w-[400px] sm:-left-18 sm:-bottom-10 md:w-[520px] md:-left-28 md:-bottom-10"
        />
      </div>

      {/* Rigth side */}
      <div className="relative hidden sm:block">
        <Image
          src="/image-4.jpg"
          alt="Imagem da Hero"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
