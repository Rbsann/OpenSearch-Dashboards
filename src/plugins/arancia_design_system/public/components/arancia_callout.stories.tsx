/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable import/no-default-export */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AranciaCallout } from './arancia_callout';
import { AranciaButton } from '../index';

const meta: Meta<typeof AranciaCallout> = {
  title: 'Components/Callout',
  component: AranciaCallout,
  args: {
    title: 'Security posture updated',
    children: 'Threat hunting rules were refreshed successfully.',
  },
};

export default meta;
type Story = StoryObj<typeof AranciaCallout>;

export const Info: Story = { args: { tone: 'info' } };
export const Success: Story = { args: { tone: 'success' } };
export const Warning: Story = { args: { tone: 'warning' } };
export const Danger: Story = { args: { tone: 'danger' } };

export const AllTones: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <AranciaCallout
        {...args}
        tone="brand"
        title="Arancia update available"
        actions={<AranciaButton size="s">Review</AranciaButton>}
      >
        New design tokens were applied successfully.
      </AranciaCallout>
      <AranciaCallout {...args} tone="info" title="FYI: Data source added">
        You can now query this data source from Discover.
      </AranciaCallout>
      <AranciaCallout {...args} tone="success" title="Saved">
        Your changes were saved and will take effect immediately.
      </AranciaCallout>
      <AranciaCallout {...args} tone="warning" title="Check your permissions">
        Some features may be unavailable with your current role.
      </AranciaCallout>
      <AranciaCallout
        {...args}
        tone="danger"
        title="Action required"
        actions={
          <>
            <AranciaButton size="s" variant="secondary">
              View details
            </AranciaButton>
            <AranciaButton size="s">Fix now</AranciaButton>
          </>
        }
      >
        We couldn’t reach OpenSearch. Verify the cluster is running and try again.
      </AranciaCallout>
      <AranciaCallout {...args} tone="neutral" title="Heads up">
        This is a neutral callout for non-status messaging.
      </AranciaCallout>
    </div>
  ),
};
