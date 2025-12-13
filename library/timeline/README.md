# Timeline Library

This folder contains a modular timeline system made for ChlaegerIO. It consists of a reusable core engine and a modern horizontal orientation with small article cards.

## Files

- `timeline-core.js`: data/state manager shared by all orientations.
- `timeline-core.css`: global theme tokens and shared card styling.
- `timeline-horizontal.js`: renderer that stacks interactive cards over a horizontal axis.
- `timeline-horizontal.css`: layout and animation rules for the horizontal experience.

## Quick start

```html
<link rel="stylesheet" href="library/timeline-core.css" />
<link rel="stylesheet" href="library/timeline-horizontal.css" />
<div id="weather-timeline"></div>
<script type="module">
  import { TimelineHorizontal } from "./library/timeline-horizontal.js";

  const milestones = [
    {
      id: "install",
      date: "2018-03-14",
      title: "Station Installed",
      description: "Mounted the Davis Vantage Pro 2 on the rooftop mast.",
      media: { type: "image", src: "images/Wetterstation1.jpg", alt: "Weather station" },
    },
    {
      id: "anemometer",
      date: "2019-07-04",
      title: "New Anemometer",
      description: "Upgraded to the sonic anemometer for better gust readings.",
    },
  ];

  const mountNode = document.getElementById("weather-timeline");
  const timeline = new TimelineHorizontal(mountNode, {
    items: milestones,
    locale: "de-CH",
    cardMaxWidth: 520,
  });
</script>
```

### Data shape

Each entry can include any properties you like, but the defaults expect:

```js
{
  id: "unique-id",          // optional (auto-generated if omitted)
  date: "2020-06-30",        // Date object or string parsable by Date
  title: "Sensor upgrade",   // optional
  description: "Details...", // optional
  media: "path/to/image.jpg" // optional string or { type, src, alt }
}
```

You can change which keys are read by passing `idKey`, `dateKey`, `titleKey`, `descriptionKey`, `mediaKey`, or `metadataKey` to the constructor options. Use `axisLabelFormatter` to customize the tick labels.

## Customization hints

- Override any CSS variable declared in `timeline-core.css` for brand colors.
- To change spacing or responsive behavior, adjust the `cardMinWidth`, `cardMaxWidth`, and `gap` options.
- The core exposes `addItem`, `setItems`, `selectItem`, and event hooks (`on("change")`, `on("select")`) for advanced interactions.

## Cleanup

Call `timeline.destroy()` when removing the component from the DOM to detach observers and event listeners.
