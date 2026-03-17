"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const socialMedias = [
  {
    icon: "/icons/instagram.svg",
    link: "https://www.instagram.com/piauimodahouse/",
    alt: "Instagram",
  },
  {
    icon: "/icons/youtube.svg",
    link: "https://www.youtube.com/channel/UCPWqQT7eBVR-4-HP0cSx3rQ",
    alt: "Youtube",
  },
  {
    icon: "/icons/tiktok.svg",
    link: "https://www.tiktok.com/@piauimodahouse?_t=ZM-8z49IPaQJYj&_r=1",
    alt: "Tiktok",
  },
  {
    icon: "/icons/whatsapp.svg",
    link: "https://wa.me/558694435307",
    alt: "Whatsapp",
  },
];

type Props = {
  ignore?: boolean;
};

export function Navbar({ ignore }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const hanldeScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    hanldeScroll();

    window.addEventListener("scroll", hanldeScroll);

    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 text-white px-4 sm:px-8 py-6 items-center flex justify-between transition-all duration-300 ease-in-out",
        isScrolled ? "bg-black shadow-md" : "bg-transparent",
        ignore && "bg-black"
      )}
    >
      <nav className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <Link href="/">
          <Image
            src="/logo-pmh-branca.png"
            alt="Logo PM"
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-10">
          <Link
            href="/blog"
            className="uppercase text-sm sm:text-base hover:underline transition-all duration-300"
          >
            Blog
          </Link>
          <Link
            href="#inscricoes"
            className="uppercase text-sm sm:text-base hover:underline transition-all duration-300"
          >
            INSCREVA-SE
          </Link>
          <div className="hidden sm:flex gap-4">
            {socialMedias.map((socialMedia) => (
              <Link
                href={socialMedia.link}
                key={socialMedia.alt}
                target="_blank"
              >
                <Image
                  src={socialMedia.icon}
                  alt={socialMedia.alt}
                  width={18}
                  height={18}
                  className="cursor-pointer hover:opacity-85 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
