/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable import/no-default-export */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EuiListGroup } from '@elastic/eui';
import { AranciaSidebarNavItem } from './arancia_sidebar_nav_item';

const meta: Meta = {
  title: 'Components/Sidebar nav item',
};

export default meta;
type Story = StoryObj;

export const List: Story = {
  render: () => (
    <EuiListGroup gutterSize="none" bordered>
      <AranciaSidebarNavItem label="Home" iconType="home" onClick={() => {}} />
      <AranciaSidebarNavItem label="Discover" iconType="discoverApp" onClick={() => {}} />
      <AranciaSidebarNavItem
        label="Dashboards"
        iconType="dashboardApp"
        isActive
        onClick={() => {}}
      />
      <AranciaSidebarNavItem label="Management" iconType="managementApp" onClick={() => {}} />
    </EuiListGroup>
  ),
};
