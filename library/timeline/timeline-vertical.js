import { TimelineCore } from "./timeline-core.js";

/*
 * TimelineVertical: orientation-specific renderer for a vertical timeline.
 * It reuses TimelineCore for data normalization, selection, and formatting.
 */
export class TimelineVertical {
  constructor(container, options = {}) {
    if (!container) {
      throw new Error("TimelineVertical requires a container element");
    }

    const defaultOptions = {
      items: [],
      locale: "de-CH",
      sortDirection: "desc",
      cardDateFormatter: (item, core) =>
        core.formatDate(item.date, { year: "numeric", month: "long", day: "numeric" }),
      linkLabel: "Mehr erfahren",
      emptyText: "Noch keine Timeline-Eintraege vorhanden.",
    };

    this.options = { ...defaultOptions, ...options };
    this.container = container;
    this.core = new TimelineCore(this.options);
    this.elements = { cards: [] };

    this.#render();
    this.core.on("change", () => this.#renderCards());
    this.core.on("select", (id) => this.#highlightSelection(id));
  }

  #render() {
    this.container.classList.add("timeline-root", "timeline-vertical");
    this.container.innerHTML = "";

    if (!this.core.getItems().length) {
      this.container.innerHTML = `<p class="timeline-empty">${this.options.emptyText}</p>`;
      return;
    }

    this.#renderCards();
    const selected = this.core.getSelectedItem();
    if (selected) {
      this.#highlightSelection(selected.id);
    }
  }

  #renderCards() {
    this.container.innerHTML = "";
    this.elements.cards = [];

    const items = this.core.getItems();
    if (!items.length) {
      this.container.innerHTML = `<p class="timeline-empty">${this.options.emptyText}</p>`;
      return;
    }

    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "timeline-card timeline-vertical-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.dataset.timelineId = item.id;

      const link = item.raw.link || item.metadata?.link || "#";
      const linkLabel = item.raw.linkLabel || item.metadata?.linkLabel || this.options.linkLabel;
      const description = item.description || "";
      const title = item.title || "";
      const dateLabel = this.options.cardDateFormatter(item, this.core);

      card.innerHTML = `
        <div class="timeline-card-inner">
          <time class="timeline-date" datetime="${item.date.toISOString()}">${dateLabel}</time>
          <h3 class="timeline-card-title">${title}</h3>
          <p class="timeline-card-description">${description}</p>
          <a href="${link}" class="timeline-card-link btn btn-small">${linkLabel}</a>
        </div>
      `;

      card.addEventListener("click", () => this.core.selectItem(item.id));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          this.core.selectItem(item.id);
        }
      });

      this.container.appendChild(card);
      this.elements.cards.push(card);
    });
  }

  #highlightSelection(selectedId) {
    this.elements.cards.forEach((card) => {
      const isActive = card.dataset.timelineId === selectedId;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }

  destroy() {
    this.container.innerHTML = "";
    this.core.destroy();
    this.elements = { cards: [] };
  }
}
