import React from 'react';

// Load EUI theme CSS so EUI components (EuiButtonIcon/EuiIcon/etc) render with correct base sizing.
// Our webpack SCSS rule only targets `.scss`, so this `.css` file is safe to import.
import '@elastic/eui/dist/eui_theme_dark.css';

// Load Arancia design tokens (dark-first) so DS component styles resolve `var(--ar-*)`.
import '../src/core/public/core_app/styles/arancia/_arancia_theme_dark.scss';

// Load Arancia DS component styling.
import '../src/plugins/arancia_design_system/public/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  a11y: {
    // Keep defaults; we’ll rely on the addon’s UI.
  },
  backgrounds: {
    default: 'Arancia dark',
    values: [
      { name: 'Arancia dark', value: '#0B0F14' },
      { name: 'White', value: '#FFFFFF' },
    ],
  },
};

export const decorators = [
  (Story) => (
    <div className="aranciaDs" style={{ padding: 24, background: 'var(--ar-surface-app)' }}>
      <Story />
    </div>
  ),
];


