"use client";

import { useState, useEffect } from "react";

type ConsentData = {
  accepted: boolean;
  timestamp: string;
  version: string;
  userAgent: string;
  url: string;
};

export function useCookieConsent() {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [consentData, setConsentData] = useState<ConsentData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("@phm-cookie");
    if (stored) {
      try {
        const parsed: ConsentData = JSON.parse(stored);
        const consentDate = new Date(parsed.timestamp);
        const now = new Date();
        const monthsAgo = new Date();
        monthsAgo.setMonth(now.getMonth() - 12);

        if (consentDate >= monthsAgo && parsed.version === "1.0") {
          setHasAccepted(true);
          setConsentData(parsed);
        }
      } catch (error) {
        console.error("Erro ao verificar consentimento:", error);
      }
    }
  }, []);

  const acceptCookies = () => {
    const data: ConsentData = {
      accepted: true,
      timestamp: new Date().toISOString(),
      version: "1.0",
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    localStorage.setItem("@phm-cookie", JSON.stringify(data));
    setHasAccepted(true);
    setConsentData(data);
  };

  const resetConsent = () => {
    localStorage.removeItem("@phm-cookie");
    setHasAccepted(false);
    setConsentData(null);
  };

  const getConsentInfo = () => consentData;

  return {
    hasAccepted,
    acceptCookies,
    resetConsent,
    getConsentInfo,
  };
}
