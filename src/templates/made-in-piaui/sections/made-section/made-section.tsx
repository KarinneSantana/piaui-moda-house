import { Button } from "@/components/button";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function MadeSection() {
  return (
    <section className="px-6 py-32 w-full max-w-6xl text-center flex flex-col items-center justify-center mx-auto">
      <Image
        src="/logo-made-in-piaui.png"
        alt="Logo PM"
        width={471}
        height={174}
        className="object-contain w-[210px]"
      />

      <p className="mt-12 max-w-2xl">
        O Made In Piauí e um programa dedicado a valorizar a cultura local,
        destacando as qualidades únicas dos produtos piauienses. Ao agregar
        valor, o programa aumenta a visibilidade e a competitividade desses
        produtos no mercado. Alem de promover o crescimento econômico, o Made In
        Piaui celebra a beleza e a grandeza dos produtos do estado, respeitando
        e honrando suas origens geográficas e características especiais.
      </p>

      <Link
        href="https://madeinpiaui.com.br/"
        target="_blank"
        className="mt-16"
      >
        <Button variant="gradient" size="lg">
          Site Oficial
        </Button>
      </Link>
    </section>
  );
}
