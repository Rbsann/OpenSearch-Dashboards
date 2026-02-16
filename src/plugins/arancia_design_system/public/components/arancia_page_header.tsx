/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import classNames from 'classnames';
import {
  EuiBreadcrumb,
  EuiPageHeader,
  EuiPageHeaderProps,
  EuiSimplifiedBreadcrumbs,
  EuiText,
} from '@elastic/eui';

export interface AranciaPageHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  rightSideItems?: EuiPageHeaderProps['rightSideItems'];
  breadcrumbs?: EuiBreadcrumb[];
  className?: string;
  'data-test-subj'?: string;
}

export const AranciaPageHeader = ({
  title,
  description,
  rightSideItems,
  breadcrumbs,
  className,
  'data-test-subj': dataTestSubj,
}: AranciaPageHeaderProps) => {
  return (
    <div className={classNames('arPageHeader', className)} data-test-subj={dataTestSubj}>
      {breadcrumbs?.length ? (
        <EuiSimplifiedBreadcrumbs breadcrumbs={breadcrumbs} responsive hideTrailingSeparator />
      ) : null}
      <EuiPageHeader
        pageTitle={title}
        description={
          description ? (
            <EuiText size="s" color="subdued">
              {description}
            </EuiText>
          ) : undefined
        }
        rightSideItems={rightSideItems}
      />
    </div>
  );
};
