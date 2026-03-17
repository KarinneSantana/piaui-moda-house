import Image from "next/image";
import Link from "next/link";

const socialMedias = [
  {
    icon: "/icons/instagram-black.svg",
    link: "https://www.instagram.com/piauimodahouse/",
    alt: "Instagram",
  },
  {
    icon: "/icons/youtube-black.svg",
    link: "https://www.youtube.com/channel/UCPWqQT7eBVR-4-HP0cSx3rQ",
    alt: "Youtube",
  },
  {
    icon: "/icons/tiktok-black.svg",
    link: "https://www.tiktok.com/@piauimodahouse?_t=ZM-8z49IPaQJYj&_r=1",
    alt: "Tiktok",
  },
  {
    icon: "/icons/whatsapp-black.svg",
    link: "https://wa.me/558694435307",
    alt: "Whatsapp",
  },
];

const links = [
  {
    text: "Política de Privacidade",
    link: "/politica-de-privacidade",
  },
  {
    text: "Política de Cookies",
    link: "/politica-de-cookies",
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white px-4 md:px-8 py-18 z-10">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo-pmh-branca.png"
            alt="Logo PM"
            width={180}
            height={180}
            className="object-contain"
          />
        </Link>
        {/* Redes socias */}
        <div className="flex gap-1.5">
          {socialMedias.map((socialMedia) => (
            <Link
              href={socialMedia.link}
              key={socialMedia.alt}
              target="_blank"
              className="cursor-pointer bg-white p-1 rounded-full transition-all  ease-in hover:opacity-80"
            >
              <Image
                key={socialMedia.alt}
                src={socialMedia.icon}
                alt={socialMedia.alt}
                width={18}
                height={18}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-white my-8" />
      <div className="flex items-start justify-between">
        <span className="text-xs">Copyright &copy; 2025 PMH</span>

        <div className="flex flex-col gap-px text-end">
          {links.map((link, index) => (
            <Link
              prefetch
              href={link.link}
              key={`politicas-${index}`}
              className="text-xs font-light cursor-pointer hover:underline"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
