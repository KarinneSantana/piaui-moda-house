import { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { MadeInPiaui } from "@/templates/made-in-piaui";

export const metadata: Metadata = {
  title: "Made in Piauí | Piauí Moda House",
  description:
    "O Made In Piauí e um programa dedicado a valorizar a cultura local, destacando as qualidades únicas dos produtos piauienses.",
  icons: {
    icon: "/pmh-black.png",
    shortcut: "/pmh-black.png",
  },
  keywords: ["Moda", "Piauí", "House", "Piauí Moda House"],
  openGraph: {
    title: "Piauí Moda House",
    description:
      "O Made In Piauí e um programa dedicado a valorizar a cultura local, destacando as qualidades únicas dos produtos piauienses.",
    url: "https://www.piauimodahouse.com/image-4.jpg",
    siteName: "Piauí Moda House",
    images: [
      {
        url: "https://www.piauimodahouse.com/image-4.jpg",
        width: 800,
        height: 600,
        alt: "Piauí Moda House",
      },
    ],
  },
};

export default function MadeInPiauiPage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <Navbar ignore />
      <main className="flex-1 flex flex-col bg-[#EEEBE4]">
        <MadeInPiaui />
      </main>
      <Footer />
    </div>
  );
}
