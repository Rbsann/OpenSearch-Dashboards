# Arancia Design System (Challenge)

This folder contains a lightweight design system implementation for the OpenSearch Dashboards UI challenge, inspired by the Arancia brand (`https://arancia.ca/`).

## What's included

- Design tokens (CSS variables) wired globally in Core theme entrypoints:
  - `src/core/public/core_app/styles/arancia/_arancia_theme_dark.scss`
  - `src/core/public/core_app/styles/arancia/_arancia_theme_light.scss`
- React wrapper components (EUI-based) under:
  - `src/plugins/arancia_design_system/public/components`
- Storybook:
  - `.storybook/`
  - Stories live next to the components and in `public/foundations/`

## Running Storybook

```bash
yarn storybook
```


