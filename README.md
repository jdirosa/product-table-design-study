# Product Table

A product table UI built with React, TypeScript, and vanilla CSS. No component libraries, no CSS frameworks, no runtime dependencies beyond React.

## Stack

- React 19
- TypeScript
- Vite 5
- Vanilla CSS with custom properties

## Running

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Architecture

Three-layer component structure:

```
Page (layout, title, action buttons)
  ProductTable (domain: columns, filtering, product-specific styling)
    SelectableTable (behavior: selection state, checkbox injection, search)
      Table / TableHeader / TableRow / TableCell (generic primitives)
```

- **Table primitives** know nothing about products or selection. Semantic HTML + styling.
- **SelectableTable** adds selection state, checkbox columns, a selection bar overlay, and search.
- **ProductTable** defines product columns, maps product data to table rows, and handles search filtering.
- **Page** provides the layout shell with title and action buttons.


## Build

```bash
npm run build
```

Output goes to `dist/`.
