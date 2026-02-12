# React Flex Table

[![npm version](https://img.shields.io/npm/v/@nixtus/react-flextable.svg)](https://www.npmjs.com/package/@nixtus/react-flextable)
[![npm downloads](https://img.shields.io/npm/dm/@nixtus/react-flextable.svg)](https://www.npmjs.com/package/@nixtus/react-flextable)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A flexible, responsive React table component built with FlexBox and styled-components. Features expandable rows, customizable styling, and keyboard accessibility.

## Installation

```bash
npm install @nixtus/react-flextable
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react styled-components
```

## Requirements

- **React** >=16.8.0 (Hooks support required)
- **styled-components** ^6.0.0

## Features

* 🎨 **Styled Components** - Built with styled-components v6 for flexible, customizable styling
* 📱 **Responsive** - FlexBox-based layout adapts to different screen sizes
* ⚡ **React Hooks** - Modern React implementation using hooks
* ♿ **Accessible** - Keyboard navigation support (Enter key to expand/collapse)
* 🎯 **Smart Interactions** - Click-to-expand with text selection detection
* 🧪 **Well Tested** - Comprehensive test suite with Jest 30 and React Testing Library
* 📦 **ES6/ESNext** - Written in modern JavaScript, transpiled by Babel
* ✨ **TypeScript Ready** - PropTypes included for type checking
* 🔧 **No Minification** - Unminified output for easier debugging (minify in your app)

## Components

| Component          | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| `<FlexTable>`      | Outer table container                                            |
| `<FlexHeader>`     | Header row container (non-interactive styling by default)        |
| `<FlexFooter>`     | Footer row container (non-interactive)                           |
| `<FlexRow>`        | Table row with click-to-expand functionality                     |
| `<FlexItem>`       | Standard table cell                                              |
| `<FlexItemExpand>` | Expandable cell - hidden by default, visible when row is clicked |

## Basic Example

```jsx
import {
  FlexTable,
  FlexHeader,
  FlexFooter,
  FlexRow,
  FlexItem,
  FlexItemExpand,
} from '@nixtus/react-flextable';

function MyTable() {
  return (
    <FlexTable>
      <FlexHeader>
        <FlexItem>ID</FlexItem>
        <FlexItem>Company</FlexItem>
      </FlexHeader>

      <FlexRow>
        <FlexItem>fd3gt-1der</FlexItem>
        <FlexItem>Nixtus</FlexItem>
        <FlexItemExpand>
          {/* THIS WILL BE HIDDEN BY DEFAULT, THEN EXPANDED VISIBLE WHEN FlexRow IS CLICKED */}
          <h1>Company Details</h1>
          <p>Additional information goes here...</p>
        </FlexItemExpand>
      </FlexRow>

      <FlexRow>
        <FlexItem>gh8jk-2xyz</FlexItem>
        <FlexItem>Acme Corp</FlexItem>
        {/* Rows without FlexItemExpand won't have expand functionality */}
      </FlexRow>

      <FlexFooter>
        <FlexItem>&copy; Nixtus</FlexItem>
      </FlexFooter>
    </FlexTable>
  );
}
```

## Custom Styling

All components accept standard React props including `className` and `style`:

```jsx
<FlexTable style={{ maxWidth: '1200px', margin: '0 auto' }}>
  <FlexHeader className="my-custom-header" style={{ backgroundColor: '#f5f5f5' }}>
    <FlexItem style={{ fontWeight: 'bold', color: '#333' }}>Name</FlexItem>
    <FlexItem style={{ fontWeight: 'bold', color: '#333' }}>Status</FlexItem>
  </FlexHeader>

  <FlexRow className="data-row">
    <FlexItem>John Doe</FlexItem>
    <FlexItem>Active</FlexItem>
  </FlexRow>
</FlexTable>
```

## Props API

### All Components

| Prop        | Type   | Default | Description              |
| ----------- | ------ | ------- | ------------------------ |
| `children`  | node   | -       | Child elements to render |
| `className` | string | `''`    | CSS class name(s)        |
| `style`     | object | `{}`    | Inline styles            |

### FlexItemExpand

| Prop           | Type   | Default     | Description                                             |
| -------------- | ------ | ----------- | ------------------------------------------------------- |
| `itemexpanded` | number | `undefined` | Controls expanded state (managed internally by FlexRow) |

## Interaction Behavior

### Click to Expand

- Click any `<FlexItem>` within a `<FlexRow>` to toggle expansion
- Only works when the row contains `<FlexItemExpand>` children
- Rows with expandable content show a pointer cursor
- Content inside `<FlexItemExpand>` only renders when expanded (performance optimization)

### Text Selection Detection

- Clicking won't toggle expansion if text is currently selected
- Allows users to select and copy text without triggering expansion

### Keyboard Navigation

- Press `Enter` key on a FlexItem to toggle expansion
- Improves accessibility for keyboard-only users

### Multiple Expandable Sections

```jsx
<FlexRow>
  <FlexItem>Data 1</FlexItem>
  <FlexItem>Data 2</FlexItem>
  <FlexItemExpand>
    <div>First expandable section</div>
  </FlexItemExpand>
  <FlexItemExpand>
    <div>Second expandable section</div>
  </FlexItemExpand>
</FlexRow>
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build for production
npm run build

# Lint code
npm run lint

# Run all quality checks
npm run prepare
```

## Browser Compatibility

Modern browsers supporting:
- ES6/ESNext features
- CSS FlexBox
- React 16.8+ (Hooks)

## Migration from v4 styled-components

If upgrading from a version using styled-components v4, note that v6 uses **transient props** (prefixed with `$`) to prevent prop forwarding to DOM elements. This is handled internally - no action required from consumers.

## License

MIT © Andrew Ninneman
MIT © Nixtus LLC

## Links

- [GitHub Repository](https://github.com/nixtus/react-flextable)
- [Issues](https://github.com/nixtus/react-flextable/issues)
- [NPM Package](https://www.npmjs.com/package/@nixtus/react-flextable)

