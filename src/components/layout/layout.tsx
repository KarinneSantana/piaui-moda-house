import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-white text-[#858585]">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
