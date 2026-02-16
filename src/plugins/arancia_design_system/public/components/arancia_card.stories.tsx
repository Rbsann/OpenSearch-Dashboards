/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
/* eslint-disable prettier/prettier */

/* eslint-disable import/no-default-export */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EuiIcon } from '@elastic/eui';
import { AranciaCard } from './arancia_card';

const meta: Meta<typeof AranciaCard> = {
  title: 'Components/Card',
  component: AranciaCard,
  argTypes: {
    onClick: { action: 'card.click' },
  },
  args: {
    title: 'Create your first dashboard',
    description: 'Build a dashboard from your saved visualizations and start exploring your data.',
    icon: <EuiIcon type="dashboardApp" color="text" size="l" />,
  },
};

export default meta;
type Story = StoryObj<typeof AranciaCard>;

export const Default: Story = {};

export const Clickable: Story = {
  args: {
    onClick: () => { },
  },
};

export const Link: Story = {
  args: {
    href: 'https://example.com',
  },
};

export const NoIcon: Story = {
  args: {
    icon: undefined,
  },
};

export const Grid: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 16,
      }}
    >
      <AranciaCard
        title="Add data"
        description="Ingest logs, metrics, and traces from your environment."
        icon={<EuiIcon type="indexOpen" color="text" size="l" />}
        onClick={() => { }}
      />
      <AranciaCard
        title="Explore"
        description="Query and visualize quickly with a streamlined workflow."
        icon={<EuiIcon type="discoverApp" color="text" size="l" />}
        onClick={() => { }}
      />
      <AranciaCard
        title="Dashboards"
        description="Create operational dashboards for your teams."
        icon={<EuiIcon type="dashboardApp" color="text" size="l" />}
        href="https://example.com"
      />
    </div>
  ),
};
