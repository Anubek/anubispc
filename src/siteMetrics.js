export const GA_MEASUREMENT_ID = "G-EY6JDR6JVX";

function isProductionDomain() {
  return window.location.hostname === "anubispc.pl" || window.location.hostname === "www.anubispc.pl";
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!window.__anubisConsentDefaultsSet) {
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });
    window.__anubisConsentDefaultsSet = true;
  }
}

export function enableUsageStats() {
  ensureGtag();
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (!isProductionDomain() || window.__anubisAnalyticsInitialized) {
    return;
  }

  const script = document.createElement("script");
  script.id = "google-analytics-tag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  window.__anubisAnalyticsInitialized = true;
}

function removeAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;

    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.anubispc.pl; SameSite=Lax`;
  });
}

export function disableUsageStats() {
  ensureGtag();
  window.gtag("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  removeAnalyticsCookies();
}
