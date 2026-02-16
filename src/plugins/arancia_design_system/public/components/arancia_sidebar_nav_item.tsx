/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import classNames from 'classnames';
import { EuiListGroupItem, EuiListGroupItemProps } from '@elastic/eui';

export interface AranciaSidebarNavItemProps extends EuiListGroupItemProps {
  isActive?: boolean;
}

export const AranciaSidebarNavItem = ({
  className,
  isActive,
  ...rest
}: AranciaSidebarNavItemProps) => {
  return (
    <EuiListGroupItem
      className={classNames(
        'arSidebarNavItem',
        { 'arSidebarNavItem--active': isActive },
        className
      )}
      isActive={isActive}
      {...rest}
    />
  );
};
