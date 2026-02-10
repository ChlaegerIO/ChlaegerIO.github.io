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
    id: "maintanance-work-2022",
    date: "2022-04-11",
    content: {
      de: {
        title: "Wartungsarbeiten",
        description: "Wetterstation wurde vom Dach hinuntergeholt, um den verstopften und gealterten Regensensor zu reinigen.",
      },
      en: {
        title: "Maintenance work",
        description: "The weather station was taken down from the roof to clean the clogged and aged rain sensor.",
      },
    },
    media: { type: "image", src: "images/wartung-2022.jpeg", alt: "Wetterstation in Wartung" },
  },
  {
    id: "unavailable-period-2023-09",
    date: "2023-09-01",
    content: {
      de: {
        title: "Wetterdaten nicht verfügbar",
        description: "Vom 1. September 23:10 bis 3. September 23:00 2023 waren keine Wetterdaten verfügbar.",
      },
      en: {
        title: "Weather data unavailable",
        description: "From September 1st 11:10 PM to September 3rd 11:00 PM 2023, no weather data was available.",
      },
    },
    media: { type: "image", src: "images/wetterdaten-nicht-verfügbar.jpg", alt: "Keine Wetterdaten verfügbar" },
  },
  {
    id: "unavailable-period-2023-09-2",
    date: "2023-09-06",
    content: {
      de: {
        title: "Wetterdaten nicht verfügbar",
        description: "Vom 6. September 23:10 bis 7. September 23:00 2023 waren keine Wetterdaten verfügbar.",
      },
      en: {
        title: "Weather data unavailable",
        description: "From September 6th 11:10 PM to September 7th 11:00 PM 2023, no weather data was available.",
      },
    },
    media: { type: "image", src: "images/wetterdaten-nicht-verfügbar.jpg", alt: "Keine Wetterdaten verfügbar" },
  },
  {
    id: "unavailable-period-2023-09-3",
    date: "2023-09-15",
    content: {
      de: {
        title: "Wetterdaten nicht verfügbar",
        description: "Vom 15. September 20:10 bis 25. September 21:20 2023 waren keine Wetterdaten verfügbar.",
      },
      en: {
        title: "Weather data unavailable",
        description: "From September 15th 8:10 PM to September 25th 9:20 PM 2023, no weather data was available.",
      },
    },
    media: { type: "image", src: "images/wetterdaten-nicht-verfügbar.jpg", alt: "Keine Wetterdaten verfügbar" },
  },
  {
    id: "unavailable-rain-2024-06",
    date: "2024-06-25",
    content: {
      de: {
        title: "Regendaten nicht verfügbar",
        description: "Vom 25. Juni 00:00 bis 15. November 23:50 2024 waren keine Regendaten verfügbar.",
      },
      en: {
        title: "Rain data unavailable",
        description: "From June 25th 12:00 AM to November 15th 11:50 PM 2024, no rain data was available.",
      },
    },
    media: { type: "image", src: "images/kein-regen.jpg", alt: "Keine Regendaten verfügbar" },
  },
  {
    id: "unavailable-period-2024-08",
    date: "2024-08-28",
    content: {
      de: {
        title: "Wetterdaten nicht verfügbar",
        description: "Vom 28. August 23:10 bis 1. September 01:30 2024 waren keine Wetterdaten verfügbar.",
      },
      en: {
        title: "Weather data unavailable",
        description: "From August 28th 11:10 PM to September 1st 1:30 AM 2024, no weather data was available.",
      },
    },
    media: { type: "image", src: "images/wetterdaten-nicht-verfügbar.jpg", alt: "Keine Wetterdaten verfügbar" },
  },
  {
    id: "unavailable-period-2024-10",
    date: "2024-10-24",
    content: {
      de: {
        title: "Wetterdaten nicht verfügbar",
        description: "Vom 24. Oktober 17:40 bis 29. Oktober 14:30 2024 waren keine Wetterdaten verfügbar.",
      },
      en: {
        title: "Weather data unavailable",
        description: "From October 24th 5:40 PM to October 29th 2:30 PM 2024, no weather data was available.",
      },
    },
    media: { type: "image", src: "images/wetterdaten-nicht-verfügbar.jpg", alt: "Keine Wetterdaten verfügbar" },
  },
  {
    id: "inprecise-rain-2025-06",
    date: "2025-06-01",
    content: {
      de: {
        title: "Ungenaue Regendaten",
        description: "Vom Sommer 2025 bis 13. Dezember 2025 waren keine genauen Regendaten verfügbar. Die Daten waren zum Teil viel zu hoch und zum Teil nicht vorhanden.",
      },
      en: {
        title: "Inaccurate rain data",
        description: "From summer 2025 to December 13th 2025, no accurate rain data was available. The data was sometimes much too high and sometimes not available at all.",
      },
    },
    media: { type: "image", src: "images/kein-regen.jpg", alt: "Keine Regendaten verfügbar" },
  },
  {
    id: "move-weather-station",
    date: "2025-08-20",
    content: {
      de: {
        title: "Verlegung Wetterstation",
        description: "Die Wetterstation (Regen und Temperatur) wurde im August vom Dach in den Garten verlegt auf 2 Meter Messhöhe. Der Wind blieb unverändert auf dem Dach.",
      },
      en: {
        title: "Relocation of weather station",
        description: "The weather station (rain and temperature) was relocated from the roof to the garden in August, at a height of 2 meters. The wind measurements remained unchanged on the roof.",
      },
    },
    media: { type: "image", src: "images/wartung-2022.jpeg", alt: "Verlegung der Wetterstation" },
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
    media: { type: "image", src: "images/neuer-regensensor-2025.jpeg", alt: "Panorama mit Windmast" },
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
