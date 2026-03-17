import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

import { Toaster } from "sonner";
import { CookieBanner } from "@/components/cookie-banner";
import { Providers } from "./providers";

const acuminPro = localFont({
  variable: "--font-acumin-sans",
  src: [
    {
      path: "../font/Acumin-Pro-Thin.otf",
      weight: "100",
    },
    {
      path: "../font/Acumin-Pro-ExtraLight.otf",
      weight: "200",
    },
    {
      path: "../font/Acumin-Pro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/Acumin-Pro-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Acumin-Pro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/Acumin-Pro-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/Acumin-Pro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/Acumin-Pro-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Piauí Moda House",
  description:
    "O Piauí Moda House celebra em 2025 uma década de resistência criativa e protagonismo cultural.",
  icons: {
    icon: "/pmh-black.png",
    shortcut: "/pmh-black.png",
  },
  keywords: ["Moda", "Piauí", "House", "Piauí Moda House"],
  openGraph: {
    title: "Piauí Moda House",
    description:
      "O Piauí Moda House celebra em 2025 uma década de resistência criativa e protagonismo cultural.",
    url: "https://www.piauimodahouse.com/pmh-black.png",
    siteName: "Piauí Moda House",
    images: [
      {
        url: "https://www.piauimodahouse.com/pmh-black.png",
        width: 800,
        height: 600,
        alt: "Piauí Moda House",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${acuminPro.variable} ${acuminPro.className} antialiased relative`}
      >
        <Providers>
          <Toaster position="bottom-right" />
          {children}
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
