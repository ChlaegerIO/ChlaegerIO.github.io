import { TimelineHorizontal } from "./library/timeline/timeline-horizontal.js";

const SUPPORTED_LANGUAGES = ["de", "en"];

const stationTimelineData = [
  {
    id: "station-installed",
    date: "2013-12-07",
    content: {
      de: {
        title: "Erste Wetterdaten",
        description:
          "Abgeschlossene Montage der Davis Vantage Pro 2 auf dem Dach.",
      },
      en: {
        title: "First weather data",
        description:
          "Finished mounting of the Davis Vantage Pro 2 on the rooftop.",
      },
    },
    media: { type: "image", src: "images/Wetterstation1.jpg", alt: "Wetterstation auf dem Dach" },
  },
  {
    id: "rain-sensor-upgrade",
    date: "2025-12-13",
    content: {
      de: {
        title: "Neuer Regensensor eingebaut",
        description:
          "Austausch des defekten Regensensors gegen ein neues genaueres und hoffentlich weniger fehleranfälliges Modell.",
      },
      en: {
        title: "New rain sensor installed",
        description:
          "Replaced the faulty rain sensor with a new, more accurate, and hopefully less error-prone model.",
      },
    },
    media: { type: "image", src: "images/Wetterstation_pano.jpg", alt: "Panorama mit Windmast" },
  }
];

const getActiveLanguage = () => {
  const stored = typeof localStorage !== "undefined" ? localStorage.getItem("language") : null;
  if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
    return stored;
  }
  const htmlLang = document.documentElement.lang;
  return SUPPORTED_LANGUAGES.includes(htmlLang) ? htmlLang : "de";
};

const buildLocalizedItems = (language) => {
  const safeLang = SUPPORTED_LANGUAGES.includes(language) ? language : "de";
  return stationTimelineData.map((entry) => ({
    id: entry.id,
    date: entry.date,
    title: entry.content[safeLang]?.title || entry.content.de.title,
    description: entry.content[safeLang]?.description || entry.content.de.description,
    media: entry.media,
  }));
};

const languageToLocale = (language) => (language === "en" ? "en-GB" : "de-CH");

document.addEventListener("DOMContentLoaded", () => {
  const mountNode = document.getElementById("stationTimeline");
  if (!mountNode) return;

  let currentLanguage = getActiveLanguage();

  const timeline = new TimelineHorizontal(mountNode, {
    items: buildLocalizedItems(currentLanguage),
    locale: languageToLocale(currentLanguage),
  });

  const updateLanguage = () => {
    const nextLanguage = getActiveLanguage();
    if (nextLanguage === currentLanguage) return;
    currentLanguage = nextLanguage;
    timeline.core.setItems(buildLocalizedItems(currentLanguage));
  };

  const langObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "lang") {
        updateLanguage();
      }
    });
  });

  langObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"],
  });

  window.addEventListener("beforeunload", () => langObserver.disconnect());
});
