/*
 * TimelineCore: shared logic for timeline visualizations.
 * Handles data normalization, selection state, event dispatching, and
 * locale-aware formatting so orientation-specific renderers can focus on UI.
 */
export class TimelineCore {
  constructor(options = {}) {
    const {
      items = [],
      locale = (typeof navigator !== "undefined" && navigator.language) || "en",
      dateParser,
      idKey = "id",
      dateKey = "date",
      titleKey = "title",
      descriptionKey = "description",
      mediaKey = "media",
      metadataKey = "metadata",
      sortDirection = "asc",
    } = options;

    this.config = {
      locale,
      idKey,
      dateKey,
      titleKey,
      descriptionKey,
      mediaKey,
      metadataKey,
      sortDirection,
    };

    this.dateParser =
      dateParser ||
      ((value) => {
        if (value instanceof Date) return value;
        const parsed = new Date(value);
        if (Number.isNaN(parsed.getTime())) {
          throw new Error(`Unable to parse date value: ${value}`);
        }
        return parsed;
      });

    this.items = this.#normalizeItems(items);
    this.events = new Map();
    this.state = {
      selectedId: this.items[0]?.id ?? null,
    };
  }

  #normalizeItems(items) {
    const normalized = items.map((item, index) => {
      const id = item[this.config.idKey] ?? `timeline-item-${index}`;
      const date = this.dateParser(item[this.config.dateKey]);
      return {
        id,
        date,
        title: item[this.config.titleKey] ?? "",
        description: item[this.config.descriptionKey] ?? "",
        media: item[this.config.mediaKey] ?? null,
        metadata: item[this.config.metadataKey] ?? {},
        raw: item,
      };
    });

    return normalized.sort((a, b) => {
      const direction = this.config.sortDirection === "desc" ? -1 : 1;
      return (a.date - b.date) * direction;
    });
  }

  getItems() {
    return [...this.items];
  }

  setItems(items) {
    this.items = this.#normalizeItems(items);
    this.#emit("change", this.items);
    return this.items;
  }

  addItem(item) {
    this.items = this.#normalizeItems([...this.items, item]);
    this.#emit("change", this.items);
    return this.items;
  }

  updateItem(id, changes) {
    const idx = this.items.findIndex((item) => item.id === id);
    if (idx === -1) return null;

    const merged = { ...this.items[idx].raw, ...changes };
    this.items[idx] = this.#normalizeItems([merged])[0];
    this.items = this.#normalizeItems(this.items);
    this.#emit("change", this.items);
    return this.items[idx];
  }

  removeItem(id) {
    const nextItems = this.items.filter((item) => item.id !== id);
    if (nextItems.length === this.items.length) return this.items;
    this.items = nextItems;

    if (this.state.selectedId === id) {
      this.state.selectedId = this.items[0]?.id ?? null;
      this.#emit("select", this.state.selectedId);
    }

    this.#emit("change", this.items);
    return this.items;
  }

  selectItem(id) {
    if (id === this.state.selectedId) return;
    const exists = this.items.some((item) => item.id === id);
    if (!exists) return;
    this.state.selectedId = id;
    this.#emit("select", id);
  }

  getSelectedItem() {
    return this.items.find((item) => item.id === this.state.selectedId) ?? null;
  }

  getRange() {
    if (!this.items.length) return null;
    const first = this.items[0].date;
    const last = this.items[this.items.length - 1].date;
    return { start: first, end: last, span: last - first };
  }

  formatDate(date, options = {}) {
    const formatter = new Intl.DateTimeFormat(this.config.locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
      ...options,
    });
    return formatter.format(date instanceof Date ? date : new Date(date));
  }

  on(eventName, handler) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }
    this.events.get(eventName).add(handler);
  }

  off(eventName, handler) {
    const handlers = this.events.get(eventName);
    if (!handlers) return;
    handlers.delete(handler);
  }

  #emit(eventName, payload) {
    const handlers = this.events.get(eventName);
    if (!handlers) return;
    handlers.forEach((handler) => handler(payload));
  }

  destroy() {
    this.events.clear();
    this.items = [];
    this.state.selectedId = null;
  }
}
