"use client";
import { useEffect, useState } from "react";
import { Button } from "../button";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentData = localStorage.getItem("@phm-cookie");

    if (!consentData) {
      setShowBanner(true);
      return;
    }

    try {
      const parsed = JSON.parse(consentData);
      const consentDate = new Date(parsed.timestamp);
      const now = new Date();
      const monthsAgo = new Date();
      monthsAgo.setMonth(now.getMonth() - 12); // Expira em 12 meses

      // Verificar se consentimento expirou ou versão mudou
      if (consentDate < monthsAgo || parsed.version !== "1.0") {
        setShowBanner(true);
      }
    } catch (error) {
      // Se erro ao parsear, pedir consentimento novamente
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Salvar dados completos do consentimento
    const consentData = {
      accepted: true,
      timestamp: new Date().toISOString(),
      version: "1.0", // Versão das suas políticas de privacidade
      userAgent: navigator.userAgent, // Para rastreabilidade
      url: window.location.href, // Onde foi dado o consentimento
    };

    localStorage.setItem("@phm-cookie", JSON.stringify(consentData));

    setShowBanner(false);
  };

  // Não mostrar se já foi aceito
  if (!showBanner) {
    return null;
  }
  return (
    <div className="fixed bottom-0 w-full bg-white px-8 py-9 border border-t-2 transform transition-transform duration-300 ease-out">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-4">
        <p className="text-sm max-w-4xl text-center">
          Ao clicar em "Entendi", você concorda com o armazenamento de cookies
          no seu dispositivo para melhorar a navegação no site, analisar a
          utilização do site e ajudar nas nossas iniciativas de marketing.
          <Link
            href="/politica-de-privacidade"
            className="font-semibold hover:underline"
          >
            {" "}
            POLÍTICA DE PRIVACIDADE.
          </Link>
        </p>
        <Button onClick={handleAccept}>Entendi</Button>
      </div>
    </div>
  );
}
