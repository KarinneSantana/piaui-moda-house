"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  thirdParty: boolean;
  lastUpdated: string;
}

const defaultConsent: CookieConsent = {
  essential: true,
  analytics: false,
  thirdParty: false,
  lastUpdated: new Date().toISOString(),
};

export default function CookiePolicyPage() {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    // Load saved consent from localStorage
    const savedConsent = localStorage.getItem("piaui_cookie_consent");
    if (savedConsent) {
      setConsent(JSON.parse(savedConsent));
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    const consentData = {
      ...newConsent,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem("piaui_cookie_consent", JSON.stringify(consentData));
    setConsent(consentData);
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 3000);
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      thirdParty: true,
      lastUpdated: new Date().toISOString(),
    });
    setIsConfiguring(false);
  };

  const handleConfigure = () => {
    setIsConfiguring(true);
  };

  const handleSavePreferences = () => {
    saveConsent(consent);
    setIsConfiguring(false);
  };

  const toggleCookie = (type: keyof CookieConsent) => {
    if (type === "essential") return; // Essential cookies cannot be disabled
    setConsent((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 mt-16">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          POLÍTICA DE COOKIES
        </h1>
      </header>

      {/* Privacy Control Section */}
      <section className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Controle sua privacidade
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-4">
          O PIAUÍ MODA HOUSE faz uso de cookies para melhorar sua experiência de
          navegação, otimizar as funcionalidades do site, e trazer conteúdo
          personalizadas para você, baseadas em seu histórico de navegação.
        </p>
        <p className="text-sm md:text-base leading-relaxed mb-4">
          É importante que você entenda como funcionam os cookies para garantir
          sua privacidade enquanto usa nossos serviços.
        </p>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          Ao clicar em aceitar, você concorda em armazenar cookies em seu
          dispositivo. Para informações mais detalhadas a respeito de cookies,
          consulte nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            POLÍTICA DE PRIVACIDADE
          </Link>
          .
        </p>

        {/* Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <button
            onClick={handleAcceptAll}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Aceitar todos
          </button>
          <button
            onClick={handleConfigure}
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Configurar cookies
          </button>
        </div> */}

        {/* Success Message */}
        {showSaved && (
          <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded-lg">
            Suas preferências foram salvas com sucesso!
          </div>
        )}
      </section>

      {/* Cookie Configuration Panel */}
      {isConfiguring && (
        <section className="mb-8 p-6 bg-gray-50 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Configurar Cookies
          </h3>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="flex items-start justify-between">
              <div className="flex-1 mr-4">
                <h4 className="font-medium text-gray-900 mb-1">
                  Cookies estritamente necessários
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Sempre ativos - Estes cookies são necessários para que o
                  website funcione e não podem ser desligados nos nossos
                  sistemas.
                </p>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                <span className="sr-only">Cookies essenciais</span>
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between">
              <div className="flex-1 mr-4">
                <h4 className="font-medium text-gray-900 mb-1">
                  Cookies de análise
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Estes cookies permitem que o site forneça uma funcionalidade e
                  personalização melhoradas. Coletamos informações através do
                  Google Analytics e Facebook Ads.
                </p>
              </div>
              <button
                onClick={() => toggleCookie("analytics")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  consent.analytics ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span className="sr-only">Cookies de análise</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    consent.analytics ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Third Party Cookies */}
            <div className="flex items-start justify-between">
              <div className="flex-1 mr-4">
                <h4 className="font-medium text-gray-900 mb-1">
                  Cookies de Terceiros
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Utilizamos cookies de terceiros para medir o uso do nosso site
                  e para botões de mídia social e plugins.
                </p>
              </div>
              <button
                onClick={() => toggleCookie("thirdParty")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  consent.thirdParty ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span className="sr-only">Cookies de terceiros</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    consent.thirdParty ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleSavePreferences}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Salvar Preferências
            </button>
          </div>
        </section>
      )}

      {/* What are Cookies Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          O que são Cookies?
        </h2>
        <ul className="space-y-2 text-sm md:text-base leading-relaxed">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            Pequenos arquivos de texto que armazenam informações sobre sua
            navegação em nosso site.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            Não armazenam dados pessoais: apenas preferências e hábitos de
            navegação.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            Otimizam sua experiência: personalização de conteúdo e
            funcionalidades.
          </li>
        </ul>
      </section>

      {/* Types of Cookies Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Tipos de Cookies:
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
          <div className="space-y-3">
            <div>
              <strong>Proprietários:</strong> definidos pelo PIAUÍ MODA HOUSE ou
              por terceiros em nosso nome.
            </div>
            <div>
              <strong>De terceiros:</strong> definidos por outros sites
              confiáveis.
            </div>
            <div>
              <strong>Sessão ou temporários:</strong> apagados quando você fecha
              o navegador.
            </div>
            <div>
              <strong>Persistentes ou permanentes:</strong> armazenados no seu
              dispositivo por um período determinado.
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <strong>Necessários:</strong> essenciais para o bom funcionamento
              do site.
            </div>
            <div>
              <strong>Desempenho:</strong> coletam dados anônimos para otimizar
              o site.
            </div>
            <div>
              <strong>Funcionalidade:</strong> memorizam suas preferências para
              personalizar sua experiência.
            </div>
            <div>
              <strong>Publicidade:</strong> direcionam anúncios relevantes para
              você.
            </div>
          </div>
        </div>
      </section>

      {/* Why We Use Cookies Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Por que usamos Cookies?
        </h2>
        <ul className="space-y-2 text-sm md:text-base leading-relaxed">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <strong>Aprimorar sua experiência:</strong> personalização,
            navegação mais fluida e acesso facilitado.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <strong>Analisar dados:</strong> entender como você interage com o
            site e otimizar sua experiência.
          </li>
        </ul>
      </section>

      {/* Cookie Types We Use Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Que tipo de Cookies utilizamos?
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          Abaixo listamos todos os Cookies que podem ser utilizados pelo PIAUÍ
          MODA HOUSE. É importante lembrar que você pode gerenciar a permissão
          concedida para cada Cookie em seu navegador.
        </p>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          Além disso, uma vez que os Cookies capturam dados sobre você,
          aconselhamos a leitura de nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Política de Privacidade
          </Link>
          .
        </p>
      </section>

      {/* Cookie Management Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Gerenciamento de Cookies
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-4">
          Você pode bloquear, aceitar ou receber notificações sobre cookies.
          Contudo, a desativação de determinados cookies pode comprometer a
          experiência e o funcionamento de algumas funcionalidades do site.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-3">
            Links úteis para gerenciamento em navegadores comuns:
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&oco=1&hl=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Final Provisions Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Disposições Finais:
        </h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            Para o PIAUÍ MODA HOUSE, sua privacidade e confiança são nossa
            prioridade. Estamos sempre nos atualizando para manter os mais altos
            padrões de segurança.
          </p>
          <p>
            Assim, reservamo-nos o direito de alterar esta Política de Cookies a
            qualquer tempo. As mudanças entrarão em vigor logo após a
            publicação, e você será avisado.
          </p>
          <p>
            Em caso de dúvidas sobre esta Política de Cookies, consulte nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Política de Privacidade
            </Link>
            , ou entre em contato conosco pelos seguintes meios:
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Encarregada de Proteção de Dados
        </h3>
        <div className="text-sm md:text-base space-y-2">
          <p>
            <strong>Nome:</strong> Priscila Bezerra Dantas de Araújo
          </p>
          <p>
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:priscila.dantas@grupoativa.com.br"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              priscila.dantas@grupoativa.com.br
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}
