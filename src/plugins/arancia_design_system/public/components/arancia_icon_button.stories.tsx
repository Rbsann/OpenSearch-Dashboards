/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable import/no-default-export */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AranciaIconButton } from './arancia_icon_button';

const meta: Meta<typeof AranciaIconButton> = {
  title: 'Components/Icon button',
  component: AranciaIconButton,
  args: {
    iconType: 'gear',
    ariaLabel: 'Settings',
  },
};

export default meta;
type Story = StoryObj<typeof AranciaIconButton>;

export const Default: Story = {};

export const Brand: Story = {
  args: { variant: 'brand' },
};

export const Danger: Story = {
  args: { variant: 'danger', iconType: 'trash', ariaLabel: 'Delete' },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <AranciaIconButton iconType="gear" ariaLabel="Settings" />
      <AranciaIconButton iconType="pencil" ariaLabel="Edit" />
      <AranciaIconButton iconType="trash" ariaLabel="Delete" variant="danger" />
      <AranciaIconButton iconType="starFilled" ariaLabel="Favorite" variant="brand" />
      <AranciaIconButton iconType="popout" ariaLabel="Open in new" variant="brand" />
      <AranciaIconButton iconType="help" ariaLabel="Help" isDisabled />
    </div>
  ),
};
