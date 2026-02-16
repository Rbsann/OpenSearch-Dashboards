/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import classNames from 'classnames';
import { EuiCallOut, EuiCallOutProps } from '@elastic/eui';
import { AranciaTone } from '../types';

const toneToColor: Record<AranciaTone, EuiCallOutProps['color']> = {
  neutral: 'primary',
  brand: 'primary',
  info: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
};

const toneToDefaultIcon: Partial<Record<AranciaTone, EuiCallOutProps['iconType']>> = {
  brand: 'starFilled',
  info: 'iInCircle',
  success: 'checkInCircleFilled',
  warning: 'alert',
  danger: 'alert',
};

export interface AranciaCalloutProps {
  title: React.ReactNode;
  tone?: AranciaTone;
  iconType?: EuiCallOutProps['iconType'];
  children?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  'data-test-subj'?: string;
}

export const AranciaCallout = ({
  title,
  tone = 'info',
  iconType,
  children,
  actions,
  className,
  'data-test-subj': dataTestSubj,
}: AranciaCalloutProps) => {
  const resolvedIconType = iconType ?? toneToDefaultIcon[tone];

  return (
    <EuiCallOut
      className={classNames('arCallout', `arCallout--${tone}`, className)}
      title={title}
      iconType={resolvedIconType}
      color={toneToColor[tone]}
      data-test-subj={dataTestSubj}
    >
      {(children || actions) && (
        <div className="arCallout__content">
          {children && <div className="arCallout__body">{children}</div>}
          {actions && <div className="arCallout__actions">{actions}</div>}
        </div>
      )}
    </EuiCallOut>
  );
};
