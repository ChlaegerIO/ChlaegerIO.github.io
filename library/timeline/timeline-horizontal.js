import { TimelineCore } from "./timeline-core.js";

/*
 * TimelineHorizontal: orientation-specific renderer that layers small article
 * cards above a snappy horizontal axis. Cards are scrollable, keyboard
 * accessible, and synced with tick buttons on the axis.
 */
export class TimelineHorizontal {
  constructor(container, options = {}) {
    if (!container) {
      throw new Error("TimelineHorizontal requires a container element");
    }

    const defaultOptions = {
      items: [],
      cardMinWidth: 320,
      cardMaxWidth: 480,
      gap: 32,
      navigation: true,
      cardDateFormatter: (item, core) => core.formatDate(item.date),
      axisLabelFormatter: (item, core) => core.formatDate(item.date, { year: "numeric" }),
    };

    this.options = { ...defaultOptions, ...options };
    this.container = container;
    this.core = new TimelineCore(this.options);
    this.elements = {};
    this.#render();
  }

  #render() {
    this.container.classList.add("timeline-root", "timeline-horizontal");
    this.container.innerHTML = "";

    if (!this.core.getItems().length) {
      this.container.innerHTML = "<p class=\"timeline-empty\">No timeline entries yet.</p>";
      return;
    }

    const controls = document.createElement("div");
    controls.className = "timeline-controls";
    controls.innerHTML = `
      <button type="button" class="timeline-nav timeline-nav-prev" aria-label="Previous entry">
        <span aria-hidden="true">&#8592;</span>
      </button>
      <button type="button" class="timeline-nav timeline-nav-next" aria-label="Next entry">
        <span aria-hidden="true">&#8594;</span>
      </button>
    `;

    const scroll = document.createElement("div");
    scroll.className = "timeline-scroll";

    const track = document.createElement("div");
    track.className = "timeline-track";
    track.style.setProperty("--timeline-card-min", `${this.options.cardMinWidth}px`);
    track.style.setProperty("--timeline-card-max", `${this.options.cardMaxWidth}px`);
    track.style.setProperty("--timeline-card-gap", `${this.options.gap}px`);

    scroll.appendChild(track);

    const axis = document.createElement("div");
    axis.className = "timeline-axis";
    const axisTrack = document.createElement("div");
    axisTrack.className = "timeline-axis-track";
    axis.appendChild(axisTrack);

    this.container.appendChild(scroll);
    this.container.appendChild(axis);

    if (this.options.navigation) {
      this.container.appendChild(controls);
      this.elements.prevButton = controls.querySelector(".timeline-nav-prev");
      this.elements.nextButton = controls.querySelector(".timeline-nav-next");
      this.elements.prevButton.addEventListener("click", () => this.#focusRelative(-1));
      this.elements.nextButton.addEventListener("click", () => this.#focusRelative(1));
    }

    this.elements.scroll = scroll;
    this.elements.track = track;
    this.elements.axisTrack = axisTrack;

    this.#renderCards();
    this.#renderAxisTicks();
    // Prevent auto-scroll on initial render
    this.#highlightSelection(false);

    this.core.on("change", () => {
      this.#renderCards();
      this.#renderAxisTicks();
      // Do not scroll on data change (e.g. language switch)
      this.#highlightSelection(false);
    });

    this.core.on("select", () => {
      // Scroll when user selects a card
      this.#highlightSelection(true);
    });

    this.resizeObserver = new ResizeObserver(() => {
      this.#renderAxisTicks();
    });
    this.resizeObserver.observe(this.container);
  }

  #renderCards() {
    this.elements.track.innerHTML = "";
    const fragment = document.createDocumentFragment();

    this.core.getItems().forEach((item, index) => {
      const cardDate = this.options.cardDateFormatter(item, this.core);
      const article = document.createElement("article");
      article.className = "timeline-card";
      article.dataset.id = item.id;
      article.tabIndex = 0;
      article.setAttribute("role", "group");
      article.setAttribute(
        "aria-label",
        `${item.title || "Timeline entry"} - ${cardDate}`
      );
      article.innerHTML = `
        <time>${cardDate}</time>
        <h3>${item.title || "Untitled"}</h3>
        <p>${item.description || ""}</p>
        ${item.media ? this.#renderMedia(item.media) : ""}
      `;

      article.addEventListener("click", () => this.core.selectItem(item.id));
      article.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          this.core.selectItem(item.id);
        }
        if (event.key === "ArrowRight") {
          this.#focusRelative(1);
        }
        if (event.key === "ArrowLeft") {
          this.#focusRelative(-1);
        }
      });

      fragment.appendChild(article);

      if (index === this.core.getItems().length - 1) {
        const spacer = document.createElement("div");
        spacer.className = "timeline-track-spacer";
        fragment.appendChild(spacer);
      }
    });

    this.elements.track.appendChild(fragment);
  }

  #renderMedia(media) {
    if (typeof media === "string") {
      return `<figure><img src="${media}" alt="" loading="lazy" /></figure>`;
    }

    if (media?.type === "image") {
      const alt = media.alt ?? "";
      return `<figure><img src="${media.src}" alt="${alt}" loading="lazy" /></figure>`;
    }

    if (media?.type === "video") {
      return `
        <figure class="timeline-card-video">
          <video controls preload="metadata">
            <source src="${media.src}" type="${media.mime || "video/mp4"}" />
            Your browser does not support the video tag.
          </video>
        </figure>
      `;
    }

    return "";
  }

  #renderAxisTicks() {
    const items = this.core.getItems();
    const range = this.core.getRange();
    if (!range) return;

    this.elements.axisTrack.innerHTML = "";
    const total = range.span || 1;
    const fragment = document.createDocumentFragment();
    const ticksByPosition = new Map();

    items.forEach((item) => {
      const tick = document.createElement("button");
      tick.type = "button";
      tick.className = "timeline-axis-tick";
      const position = ((item.date - range.start) / total) * 100;
      tick.style.left = `${position}%`;
      tick.dataset.id = item.id;
      tick.textContent = this.options.axisLabelFormatter(item, this.core);
      tick.addEventListener("click", () => this.core.selectItem(item.id));
      fragment.appendChild(tick);

      const positionKey = position.toFixed(4);
      if (!ticksByPosition.has(positionKey)) {
        ticksByPosition.set(positionKey, []);
      }
      ticksByPosition.get(positionKey).push(tick);
    });

    // Spread labels that share the exact same timeline position so more can remain visible.
    ticksByPosition.forEach((ticksAtSamePosition) => {
      if (ticksAtSamePosition.length <= 1) return;
      const step = 25;
      const center = (ticksAtSamePosition.length - 1) / 2;
      ticksAtSamePosition.forEach((tick, index) => {
        const offset = (index - center) * step;
        tick.style.setProperty("--timeline-tick-offset", `${offset}px`);
      });
    });

    this.elements.axisTrack.appendChild(fragment);

    // Use requestAnimationFrame to ensure elements are rendered before checking collisions
    requestAnimationFrame(() => {
      this.#resolveTickLabelCollisions();
    });
  }

  #resolveTickLabelCollisions() {
    const ticks = Array.from(this.elements.axisTrack.querySelectorAll(".timeline-axis-tick"));
    
    // Show all by default
    ticks.forEach((tick) => {
      tick.style.visibility = "visible";
      tick.style.opacity = "1";
      tick.style.pointerEvents = "auto";
    });

    if (ticks.length <= 1) return;

    // Get bounding rectangles for collision detection
    const tickRects = ticks.map((tick) => ({
      tick,
      rect: tick.getBoundingClientRect(),
    }));

    const hiddenTicks = new Set();

    // This greedy approach: if label[i] overlaps label[i+1], hide label[i+1]
    for (let i = 0; i < tickRects.length - 1; i++) {
      if (hiddenTicks.has(tickRects[i].tick)) continue;

      const rect1 = tickRects[i].rect;
      const rect2 = tickRects[i + 1].rect;

      // Only check horizontal overlap - this is a timeline axis
      const horizontalOverlap = rect1.right > rect2.left && rect1.left < rect2.right;

      if (horizontalOverlap) {
        // Hide the next label to keep earlier ones visible
        hiddenTicks.add(tickRects[i + 1].tick);
      }
    }

    // Apply visibility based on actual collisions
    hiddenTicks.forEach((tick) => {
      tick.style.visibility = "hidden";
      tick.style.opacity = "0";
      tick.style.pointerEvents = "none";
    });
  }

  // scrollToCard: true = scroll, false = don't scroll
  #highlightSelection(scrollToCard = false) {
    const selected = this.core.getSelectedItem();
    if (!selected) return;

    this.elements.track.querySelectorAll(".timeline-card").forEach((card) => {
      if (card.dataset.id === selected.id) {
        card.classList.add("is-active");
        card.setAttribute("aria-current", "true");
      } else {
        card.classList.remove("is-active");
        card.removeAttribute("aria-current");
      }
    });

    this.elements.axisTrack.querySelectorAll(".timeline-axis-tick").forEach((tick) => {
      tick.classList.toggle("is-active", tick.dataset.id === selected.id);
    });

    if (scrollToCard) {
      const activeCard = this.elements.track.querySelector(`.timeline-card[data-id="${selected.id}"]`);
      if (activeCard) {
        activeCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }

  #focusRelative(offset) {
    const items = this.core.getItems();
    const current = this.core.getSelectedItem();
    if (!current) return;
    const index = items.findIndex((item) => item.id === current.id);
    const nextIndex = Math.min(Math.max(index + offset, 0), items.length - 1);
    const nextItem = items[nextIndex];
    this.core.selectItem(nextItem.id);
  }

  destroy() {
    this.resizeObserver?.disconnect();
    this.core.destroy();
    this.container.innerHTML = "";
  }
}
