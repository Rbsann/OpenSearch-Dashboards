/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable import/no-default-export */
import React from 'react';

export default {
  title: 'Foundations/Colors',
};

const swatches: Array<{ name: string; value: string; sampleText?: string }> = [
  { name: 'Accent / Primary', value: 'var(--ar-accent-primary)' },
  { name: 'Accent / Primary (hover)', value: 'var(--ar-accent-primary-hover)' },
  { name: 'Accent / Primary (active)', value: 'var(--ar-accent-primary-active)' },
  { name: 'Accent / Link', value: 'var(--ar-accent-link)' },
  { name: 'Accent / Link (hover)', value: 'var(--ar-accent-link-hover)' },
  { name: 'Focus', value: 'var(--ar-focus)' },

  { name: 'Surface / App', value: 'var(--ar-surface-app)' },
  { name: 'Surface / 1', value: 'var(--ar-surface-1)' },
  { name: 'Surface / 2', value: 'var(--ar-surface-2)' },

  { name: 'Border / Subtle', value: 'var(--ar-border-subtle)' },

  { name: 'Text / Primary', value: 'var(--ar-text-primary)', sampleText: 'Primary text' },
  { name: 'Text / Secondary', value: 'var(--ar-text-secondary)', sampleText: 'Secondary text' },
  { name: 'Text / Tertiary', value: 'var(--ar-text-tertiary)', sampleText: 'Tertiary text' },

  { name: 'Success', value: 'var(--ar-success)' },
  { name: 'Warning', value: 'var(--ar-warning)' },
  { name: 'Danger', value: 'var(--ar-danger)' },
];

const ResolvedValue = ({ cssValue }: { cssValue: string }) => {
  const [resolved, setResolved] = React.useState<string>('');
  const ref = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    if (!ref.current) return;
    const computed = window.getComputedStyle(ref.current);
    setResolved(computed.color);
  }, [cssValue]);

  // Use `color` so we can read back a resolved string like "rgb(189, 64, 29)".
  return (
    <>
      <span ref={ref} style={{ color: cssValue }} />
      {resolved || '—'}
    </>
  );
};

const SwatchCard = ({
  name,
  value,
  sampleText,
}: {
  name: string;
  value: string;
  sampleText?: string;
}) => {
  return (
    <div
      style={{
        border: '1px solid var(--ar-border-subtle)',
        borderRadius: 'var(--ar-radius-md)',
        background: 'var(--ar-surface-1)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: 64,
          background: value,
          display: 'flex',
          alignItems: 'center',
          padding: 12,
        }}
      >
        {sampleText ? (
          <div
            style={{
              color: value,
              fontWeight: 600,
              filter: 'drop-shadow(0 1px 0 rgba(0,0,0,.35))',
            }}
          >
            {sampleText}
          </div>
        ) : null}
      </div>
      <div style={{ padding: 12 }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>{name}</div>
        <div style={{ fontFamily: 'monospace', color: 'var(--ar-text-secondary)' }}>{value}</div>
        <div style={{ fontFamily: 'monospace', color: 'var(--ar-text-tertiary)', marginTop: 6 }}>
          resolved: <ResolvedValue cssValue={value} />
        </div>
      </div>
    </div>
  );
};

export const Swatches = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 16,
    }}
  >
    {swatches.map((s) => (
      <SwatchCard key={s.name} name={s.name} value={s.value} sampleText={s.sampleText} />
    ))}
  </div>
);

export const ContrastPreview = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 16,
    }}
  >
    <div
      style={{
        border: '1px solid var(--ar-border-subtle)',
        borderRadius: 'var(--ar-radius-md)',
        background: 'var(--ar-surface-app)',
        padding: 16,
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Text on App surface</div>
      <div style={{ color: 'var(--ar-text-primary)', marginBottom: 6 }}>
        Primary text — “Trust is built over years…”
      </div>
      <div style={{ color: 'var(--ar-text-secondary)', marginBottom: 6 }}>
        Secondary text — muted supporting copy (rgba-based)
      </div>
      <div style={{ color: 'var(--ar-text-tertiary)' }}>Tertiary text — captions / metadata</div>
    </div>

    <div
      style={{
        border: '1px solid var(--ar-border-subtle)',
        borderRadius: 'var(--ar-radius-md)',
        background: 'var(--ar-surface-1)',
        padding: 16,
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Accents on Surface 1</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <span
          style={{
            padding: '6px 10px',
            borderRadius: 999,
            background: 'var(--ar-accent-primary)',
            color: '#fff',
            fontWeight: 700,
          }}
        >
          Primary
        </span>
        <span style={{ color: 'var(--ar-accent-link)', fontWeight: 600 }}>Link / info</span>
        <span style={{ color: 'var(--ar-success)', fontWeight: 600 }}>Success</span>
        <span style={{ color: 'var(--ar-warning)', fontWeight: 600 }}>Warning</span>
        <span style={{ color: 'var(--ar-danger)', fontWeight: 600 }}>Danger</span>
      </div>
    </div>
  </div>
);
