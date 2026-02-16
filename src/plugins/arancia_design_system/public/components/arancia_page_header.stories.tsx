/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable import/no-default-export */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AranciaButton } from '../index';
import { AranciaPageHeader } from './arancia_page_header';

const meta: Meta<typeof AranciaPageHeader> = {
  title: 'Components/Page header',
  component: AranciaPageHeader,
  args: {
    title: 'Manage your data',
    description: 'Create index patterns, ingest data, and connect data sources.',
  },
};

export default meta;
type Story = StoryObj<typeof AranciaPageHeader>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    rightSideItems: [
      <AranciaButton key="cta" variant="cta" iconType="plusInCircle">
        Add data
      </AranciaButton>,
    ],
  },
};
