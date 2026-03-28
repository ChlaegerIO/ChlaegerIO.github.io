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
          "Abgeschlossene Montage der Davis Vantage Pro 2, Wetterdaten:\n• Alle 10 min\n• Auf 593 m.ü.M.\n• 8.5 m über Boden\n• Messungen neben Dachrand\n• Und 1.5 m über dem Dach",
      },
      en: {
        title: "First weather data",
        description:
          "Completed installation of the Davis Vantage Pro 2, weather data:\n• Every 10 min\n• At 593 m.a.s.l.\n• 8.5 m above ground\n• Measurements near roof edge\n• And 1.5 m above the roof",
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
        description: "Die Wetterstation wurde zum reinigen des verstopften Regensensor vom Dach hinuntergeholt.",
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
    date: "2023",
    content: {
      de: {
        title: "Wetterdaten nicht verfügbar",
        description: "• 01.09 23:10 - 03.09 23:00\n• 06.09 23:10 - 07.09 23:00\n• 15.09 20:10 - 25.09 21:20",
      },
      en: {
        title: "Weather data unavailable",
        description: "• 01.09 11:10 PM - 03.09 11:00 PM\n• 06.09 11:10 PM - 07.09 11:00 PM\n• 15.09 08:10 PM - 25.09 09:20 PM",
      },
    },
    media: { type: "image", src: "images/wetterdaten-nicht-verfügbar.jpg", alt: "Keine Wetterdaten verfügbar" },
  },
  {
    id: "unavailable-rain-2024-06",
    date: "2024",
    content: {
      de: {
        title: "Regendaten nicht verfügbar",
        description: "• 25.06 00:00 bis 15.11 23:50",
      },
      en: {
        title: "Rain data unavailable",
        description: "• 25.06 12:00 AM - 15.11 11:50 PM",
      },
    },
    media: { type: "image", src: "images/kein-regen.jpg", alt: "Keine Regendaten verfügbar" },
  },
  {
    id: "unavailable-period-2024-08",
    date: "2024",
    content: {
      de: {
        title: "Wetterdaten nicht verfügbar",
        description: "• 28.08 23:10 - 01.09 01:30\n• 24.10 17:40 - 29.10 14:30",
      },
      en: {
        title: "Weather data unavailable",
        description: "• 28.08 11:10 PM - 01.09 01:30 AM\n• 24.10 05:40 PM - 29.10 02:30 PM",
      },
    },
    media: { type: "image", src: "images/wetterdaten-nicht-verfügbar.jpg", alt: "Keine Wetterdaten verfügbar" },
  },
  {
    id: "inprecise-rain-2025-06",
    date: "2025",
    content: {
      de: {
        title: "Ungenaue Regendaten",
        description: "Die Daten waren zum Teil viel zu hoch oder nicht vorhanden.\n• Sommer - 13.12",
      },
      en: {
        title: "Inaccurate rain data",
        description: "The data was sometimes far too high or missing.\n• Summer - 13.12",
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
        description: "Die Wetterstation (Regen und Temperatur) wurde am 20. August vom Dach in den Garten verlegt\nWetterdaten:\n• Neu: Messhöhe allgemein 2 m\n• Alt: Messhöhe Wind 8.5 m",
      },
      en: {
        title: "Relocation of weather station",
        description: "The weather station (rain and temperature) was moved from the roof to the garden on 20. August\nWeather data:\n• New: Measurement general 2 m\n• Old: Measurement wind 8.5 m",
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
        description: "Austausch des defekten Regensensors mit einem genaueren und weniger fehlerhaftem Modell.",
      },
      en: {
        title: "New rain sensor installed",
        description: "Replacement of the faulty rain sensor with a more accurate and less error-prone model.",
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

const parsePartialTimelineDate = (value) => {
  if (value instanceof Date) {
    return value;
  }

  if (typeof value !== "string") {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      throw new Error(`Unable to parse date value: ${value}`);
    }
    return parsed;
  }

  const trimmed = value.trim();
  const yearMatch = trimmed.match(/^(\d{4})$/);
  if (yearMatch) {
    const year = Number.parseInt(yearMatch[1], 10);
    return new Date(year, 0, 1);
  }

  const monthMatch = trimmed.match(/^(\d{4})-(\d{2})$/);
  if (monthMatch) {
    const year = Number.parseInt(monthMatch[1], 10);
    const monthIndex = Number.parseInt(monthMatch[2], 10) - 1;
    return new Date(year, monthIndex, 1);
  }

  const dayMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (dayMatch) {
    const year = Number.parseInt(dayMatch[1], 10);
    const monthIndex = Number.parseInt(dayMatch[2], 10) - 1;
    const day = Number.parseInt(dayMatch[3], 10);
    return new Date(year, monthIndex, day);
  }

  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Unable to parse date value: ${value}`);
  }
  return parsed;
};

const formatTimelineDateByPrecision = (item, core) => {
  const rawDate = item?.raw?.date;
  if (typeof rawDate !== "string") {
    return core.formatDate(item.date);
  }

  const trimmed = rawDate.trim();
  if (/^\d{4}$/.test(trimmed)) {
    return trimmed;
  }

  if (/^\d{4}-\d{2}$/.test(trimmed)) {
    return core.formatDate(item.date, { month: "long", year: "numeric" });
  }

  return core.formatDate(item.date);
};

document.addEventListener("DOMContentLoaded", () => {
  const mountNode = document.getElementById("stationTimeline");
  if (!mountNode) return;

  let currentLanguage = getActiveLanguage();

  const timeline = new TimelineHorizontal(mountNode, {
    items: buildLocalizedItems(currentLanguage),
    locale: languageToLocale(currentLanguage),
    dateParser: parsePartialTimelineDate,
    cardDateFormatter: formatTimelineDateByPrecision,
    axisLabelFormatter: formatTimelineDateByPrecision,
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
