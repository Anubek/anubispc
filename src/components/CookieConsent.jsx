import React, { useEffect, useState } from "react";
import {
  disableAnalytics,
  enableAnalytics,
  getAnalyticsConsent,
  initializeAnalyticsFromConsent,
  saveAnalyticsConsent,
} from "../analytics.js";

export function CookieConsent({ forceOpen, onClose }) {
  const [choice, setChoice] = useState(() => getAnalyticsConsent());

  useEffect(() => {
    initializeAnalyticsFromConsent();
  }, []);

  const choose = (value) => {
    saveAnalyticsConsent(value);
    setChoice(value);

    if (value === "granted") {
      enableAnalytics();
    } else {
      disableAnalytics();
    }

    onClose();
  };

  if (!forceOpen && choice !== null) return null;

  return (
    <aside className="cookie-consent" role="dialog" aria-label="Ustawienia prywatności">
      <div>
        <strong>Pomóż nam rozwijać Anubis PC</strong>
        <p>
          Za Twoją zgodą korzystamy z Google Analytics, aby sprawdzać, jak użytkownicy korzystają
          ze strony i dzięki temu ją ulepszać. Dane służą wyłącznie do zbiorczych statystyk i nie
          wpływają na działanie serwisu.
        </p>
        <a href="/polityka-prywatnosci.html">Polityka prywatności</a>
      </div>
      <div className="cookie-consent__actions">
        <button type="button" className="cookie-consent__secondary" onClick={() => choose("denied")}>
          ❌ Odrzuć
        </button>
        <button type="button" className="cookie-consent__primary" onClick={() => choose("granted")}>
          ✅ Akceptuję
        </button>
      </div>
    </aside>
  );
}
