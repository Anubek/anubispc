import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import logoImage from "./assets/anubis-mark.webp";
import { builds } from "./builds.js";
import { BuildStrip } from "./components/BuildStrip.jsx";

const checks = [
  "aktualizacja BIOS-u i konfiguracja profilu EXPO/XMP",
  "test pamięci RAM",
  "test obciążeniowy procesora i karty",
  "kontrola temperatur",
  "instalacja sterowników",
  "zabezpieczenie wnętrza do transportu",
];

const services = [
  {
    title: "Czyszczenie i konserwacja",
    text: "Czyszczenie wnętrza, wymiana pasty i kontrola temperatur.",
  },
  {
    title: "Modernizacja komputera",
    text: "Dobór i montaż podzespołów bez wymieniania całego zestawu.",
  },
  {
    title: "Instalacja i konfiguracja systemu",
    text: "Windows, sterowniki, aktualizacje oraz konfiguracja BIOS-u i profilu EXPO/XMP.",
  },
  {
    title: "Diagnoza problemów",
    text: "Sprawdzenie temperatur, stabilności i przyczyny spadków wydajności.",
  },
];

const orderSteps = [
  {
    title: "Kontakt",
    text: "Napisz na kontakt@anubispc.pl albo zadzwoń pod 732 997 597. Podaj budżet, gry, monitor i wymagania lub wybierz gotowy zestaw. Jeżeli chcesz podmienić część albo mieć konkretną obudowę, daj znać.",
  },
  {
    title: "Dobór zestawu",
    text: "Dostajesz pełną konfigurację razem z ceną do akceptacji przed zamówieniem części.",
  },
  {
    title: "Montaż i testy",
    text: "Komputer zostaje złożony, skonfigurowany i sprawdzony pod obciążeniem.",
  },
  {
    title: "Odbiór lub wysyłka",
    text: "Odbierasz zestaw w Elblągu albo dostajesz go zabezpieczonego kurierem.",
  },
];

const includedItems = [
  "Dobór kompatybilnych podzespołów",
  "Montaż i uporządkowanie okablowania",
  "Konfigurację BIOS-u i profilu EXPO/XMP",
  "Instalację sterowników",
  "Testy stabilności i temperatur",
  "Instalację systemu Windows z rynku wtórnego wraz z certyfikatem legalności",
  "Przygotowanie komputera do odbioru lub wysyłki",
];

const navLinks = [
  { href: "#zamowienie", label: "Zamówienie" },
  { href: "#w-cenie", label: "W cenie" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#kontakt", label: "Kontakt" },
];

const contactMethods = [
  {
    label: "E-mail",
    value: "kontakt@anubispc.pl",
    href: "mailto:kontakt@anubispc.pl",
  },
  { label: "Telefon", value: "732 997 597", href: "tel:+48732997597" },
];

const consentKey = "anubispc-analytics-consent";

function isLiveSite() {
  return window.location.hostname === "anubispc.pl" || window.location.hostname === "www.anubispc.pl";
}

function getSavedChoice() {
  try {
    return window.localStorage.getItem(consentKey);
  } catch {
    return null;
  }
}

function saveChoice(value) {
  try {
    window.localStorage.setItem(consentKey, value);
  } catch {
    // Brak localStorage nie może blokować korzystania ze strony.
  }
}

async function loadUsageStats() {
  try {
    return await import("./siteMetrics.js");
  } catch {
    // Blokada statystyk przez przeglądarkę lub rozszerzenie nie może zatrzymać strony.
    return null;
  }
}

function SettingsPanel({ forceOpen, onClose }) {
  const [choice, setChoice] = useState(() => getSavedChoice());

  useEffect(() => {
    if (choice === "granted" && isLiveSite()) {
      void loadUsageStats().then((stats) => stats?.enableUsageStats());
    }
  }, []);

  const choose = (value) => {
    saveChoice(value);
    setChoice(value);

    if (value === "granted" && isLiveSite()) {
      void loadUsageStats().then((stats) => stats?.enableUsageStats());
    } else if (choice === "granted" && isLiveSite()) {
      void loadUsageStats().then((stats) => stats?.disableUsageStats());
    }

    onClose();
  };

  if (!forceOpen && choice !== null) return null;

  return (
    <aside className="privacy-panel" role="dialog" aria-label="Ustawienia prywatności">
      <div>
        <strong>Pomóż nam rozwijać Anubis PC</strong>
        <p>
          Za Twoją zgodą korzystamy z Google Analytics, aby sprawdzać, jak użytkownicy korzystają
          ze strony i dzięki temu ją ulepszać. Dane służą wyłącznie do zbiorczych statystyk i nie
          wpływają na działanie serwisu.
        </p>
        <a href="/polityka-prywatnosci.html">Polityka prywatności</a>
      </div>
      <div className="privacy-panel__actions">
        <button type="button" className="privacy-panel__secondary" onClick={() => choose("denied")}>
          ❌ Odrzuć
        </button>
        <button type="button" className="privacy-panel__primary" onClick={() => choose("granted")}>
          ✅ Akceptuję
        </button>
      </div>
    </aside>
  );
}

export function App() {
  const [openId, setOpenId] = useState(builds[0].id);
  const [privacySettingsOpen, setPrivacySettingsOpen] = useState(false);

  return (
    <main>
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="Start">
          <img src={logoImage} alt="" width="240" height="253" decoding="async" fetchPriority="high" />
          <span>Anubis PC</span>
        </a>
        <div className="nav-links" aria-label="Sekcje strony">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="contact-link" href="#kontakt">
          <Mail size={16} /> Zapytaj
        </a>
      </nav>

      <header className="hero" id="top">
        <div className="hero__copy">
          <p className="eyebrow">anubis pc</p>
          <h1>
            Komputery składane z głową
            <span>Bez przypadkowych części i pustego marketingu</span>
          </h1>
          <p>
            Wybierz gotową konfigurację albo napisz, czego potrzebujesz.
          </p>
          <p className="hero__proof">
            <span>Dobór części bez przepłacania</span>
            <span>Testy przed wysyłką</span>
            <span>Możliwość personalizacji</span>
          </p>
        </div>
      </header>

      <section className="builds" aria-label="Lista komputerów">
        {builds.map((build, index) => (
          <BuildStrip
            key={build.id}
            build={build}
            isPriority={index === 0}
            isOpen={openId === build.id}
            onToggle={() => setOpenId(openId === build.id ? "" : build.id)}
          />
        ))}
      </section>

      <section className="notice-section">
        <strong>
          Zdjęcia zestawów mają charakter poglądowy i zostały przygotowane
          cyfrowo.
        </strong>
        <p>
          Rzeczywisty wygląd komputera może się różnić w zależności od
          dostępności konkretnych modeli podzespołów, obudowy i podświetlenia.
          Przed realizacją zawsze potwierdzamy pełną konfigurację.
        </p>
      </section>

      <section className="info-section" id="zamowienie">
        <div className="section-heading">
          <p className="eyebrow">zamówienie</p>
          <h2>Jak zamówić komputer?</h2>
        </div>
        <p className="delivery-note">
          <span>
            Termin realizacji zależy od dostępności części i jest potwierdzany
            przed zamówieniem.
          </span>
          <strong>Zwykle 7–14 dni.</strong>
        </p>
        <div className="step-grid">
          {orderSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="info-section info-section--split" id="w-cenie">
        <div className="section-heading">
          <p className="eyebrow">w cenie</p>
          <h2>Co zawiera cena?</h2>
          <p>
            W cenie zestawu otrzymujesz komplet usług potrzebnych do
            przygotowania gotowego komputera.
          </p>
        </div>
        <div>
          <ul className="included-list">
            {includedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="info-section" id="uslugi">
        <div className="section-heading">
          <p className="eyebrow">przed wysyłką</p>
          <h2>Każdy zestaw przechodzi podstawowe sprawdzenie.</h2>
        </div>
        <ul className="check-list">
          {checks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="info-section">
        <div className="section-heading">
          <p className="eyebrow">usługi</p>
          <h2>Nie tylko nowe komputery</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bottom-cta" id="kontakt">
        <div>
          <p className="eyebrow">kontakt</p>
          <h2>Nie wiesz, który zestaw wybrać?</h2>
          <p>
            Napisz, jaki masz budżet, monitor i w co grasz. Dobiorę gotowy
            wariant albo przygotuję konfigurację od zera.
          </p>
          <small>Odpowiedź nie zobowiązuje do zakupu.</small>
          <div className="contact-panel" id="contact-methods">
            <div className="contact-methods">
              {contactMethods.map((method) => (
                <p key={method.label}>
                  <span>{method.label}</span>
                  <a href={method.href}>{method.value}</a>
                </p>
              ))}
            </div>
          </div>
        </div>
        <a href="mailto:kontakt@anubispc.pl">
          Zapytaj o zestaw <Mail size={18} />
        </a>
      </section>

      <footer className="site-footer">
        <span>© 2026 Anubis PC</span>
        <div>
          <a href="/polityka-prywatnosci.html">Polityka prywatności</a>
          <button type="button" onClick={() => setPrivacySettingsOpen(true)}>
            Ustawienia prywatności
          </button>
        </div>
      </footer>

      <SettingsPanel
        forceOpen={privacySettingsOpen}
        onClose={() => setPrivacySettingsOpen(false)}
      />
    </main>
  );
}
