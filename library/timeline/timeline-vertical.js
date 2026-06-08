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
      linkLabelEN: "Learn more",
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

      const esc = (value) =>
        String(value ?? "")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");

      const link = item.raw.link || item.metadata?.link || "#";
      const dateLabel = this.options.cardDateFormatter(item, this.core);

      // German (default) and English variants, so the shared language toggle
      // (data-de/data-en) can switch the card text without a rebuild.
      const titleDe = item.title || "";
      const titleEn = item.raw.titleEN || item.metadata?.titleEN || titleDe;
      const descDe = item.description || "";
      const descEn = item.raw.descriptionEN || item.metadata?.descriptionEN || descDe;
      const linkLabelDe = item.raw.linkLabel || item.metadata?.linkLabel || this.options.linkLabel;
      const linkLabelEn = item.raw.linkLabelEN || item.metadata?.linkLabelEN || this.options.linkLabelEN;
      const authors = item.raw.authors || item.metadata?.authors || "";
      const tag = item.raw.tag || item.metadata?.tag || "";

      const image = item.raw.image || item.metadata?.image || "";
      const imageAlt = item.raw.imageAlt || item.metadata?.imageAlt || titleDe;

      const linkHtml = `<a href="${esc(link)}" class="timeline-card-link" data-de="${esc(linkLabelDe)}" data-en="${esc(linkLabelEn)}">${esc(linkLabelDe)}</a>`;

      // With an image: image + link live in a left column; text sits on the right.
      // Without an image: the link drops to the bottom of the text body.
      const mediaHtml = image
        ? `<div class="timeline-card-media">
             <img src="${esc(image)}" alt="${esc(imageAlt)}" loading="lazy" />
             ${linkHtml}
           </div>`
        : "";

      const authorsHtml = authors
        ? `<p class="timeline-card-authors">${esc(authors)}</p>`
        : "";

      const tagHtml = tag
        ? `<div class="timeline-card-tags"><span class="timeline-card-tag">${esc(tag)}</span></div>`
        : "";

      card.innerHTML = `
        <div class="timeline-card-inner">
          ${mediaHtml}
          <div class="timeline-card-body">
            <time class="timeline-date" datetime="${item.date.toISOString()}">${dateLabel}</time>
            ${tagHtml}
            <h3 class="timeline-card-title" data-de="${esc(titleDe)}" data-en="${esc(titleEn)}">${esc(titleDe)}</h3>
            ${authorsHtml}
            <p class="timeline-card-description" data-de="${esc(descDe)}" data-en="${esc(descEn)}">${esc(descDe)}</p>
            ${image ? "" : linkHtml}
          </div>
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
