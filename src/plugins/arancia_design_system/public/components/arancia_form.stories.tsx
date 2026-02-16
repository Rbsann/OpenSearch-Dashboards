/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable import/no-default-export */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AranciaFormRow, AranciaSelect, AranciaSwitch, AranciaTextInput } from '../index';

const meta: Meta = {
  title: 'Components/Form controls',
};

export default meta;
type Story = StoryObj;

const FormLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: 520, display: 'grid', gap: 16 }}>{children}</div>
);

const SwitchExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormLayout>
      <AranciaSwitch
        label="Enable advanced protection"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </FormLayout>
  );
};

export const TextInput: Story = {
  render: () => (
    <FormLayout>
      <AranciaFormRow label="Index name" helpText="Lowercase, no spaces" fullWidth>
        <AranciaTextInput fullWidth placeholder="logs-2026.02.13" />
      </AranciaFormRow>
    </FormLayout>
  ),
};

export const TextInputWithError: Story = {
  render: () => (
    <FormLayout>
      <AranciaFormRow label="Index name" isInvalid error="Index name is required" fullWidth>
        <AranciaTextInput fullWidth isInvalid placeholder="logs-*" />
      </AranciaFormRow>
    </FormLayout>
  ),
};

export const Select: Story = {
  render: () => (
    <FormLayout>
      <AranciaFormRow label="Theme" fullWidth>
        <AranciaSelect
          fullWidth
          options={[
            { value: 'dark', text: 'Arancia dark' },
            { value: 'light', text: 'Arancia light' },
          ]}
        />
      </AranciaFormRow>
    </FormLayout>
  ),
};

export const SelectInvalid: Story = {
  render: () => (
    <FormLayout>
      <AranciaFormRow label="Theme" isInvalid error="Select a theme" fullWidth>
        <AranciaSelect
          fullWidth
          isInvalid
          options={[
            { value: '', text: 'Choose…' },
            { value: 'dark', text: 'Arancia dark' },
            { value: 'light', text: 'Arancia light' },
          ]}
          value=""
        />
      </AranciaFormRow>
    </FormLayout>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormLayout>
      <AranciaFormRow label="Index name" helpText="Disabled state" fullWidth>
        <AranciaTextInput fullWidth disabled value="logs-2026.02.13" />
      </AranciaFormRow>
      <AranciaFormRow label="Theme" fullWidth>
        <AranciaSelect
          fullWidth
          disabled
          options={[
            { value: 'dark', text: 'Arancia dark' },
            { value: 'light', text: 'Arancia light' },
          ]}
          value="dark"
        />
      </AranciaFormRow>
      <AranciaSwitch
        label="Enable advanced protection"
        checked={false}
        disabled
        onChange={() => {}}
      />
    </FormLayout>
  ),
};

export const Switch: Story = {
  render: () => <SwitchExample />,
};
