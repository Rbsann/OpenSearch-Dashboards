/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react';
import { AranciaButton } from './arancia_button';

const meta: Meta<typeof AranciaButton> = {
  title: 'Components/Button',
  component: AranciaButton,
  args: {
    children: 'Primary button',
  },
  argTypes: {
    iconType: {
      control: 'text',
      description: 'EUI icon name (e.g. "arrowRight", "plus", "check")',
    },
    iconSide: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AranciaButton>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary button' },
};

export const CTA: Story = {
  args: { variant: 'cta', children: 'Call to action', iconType: 'arrowRight', iconSide: 'right' },
};

export const Disabled: Story = {
  args: { isDisabled: true, children: 'Disabled' },
};

export const Small: Story = {
  args: { size: 's', children: 'Small button' },
};
