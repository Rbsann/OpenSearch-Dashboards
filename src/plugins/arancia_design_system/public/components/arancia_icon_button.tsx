/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import classNames from 'classnames';
import { EuiButtonIcon, IconType } from '@elastic/eui';
import { AranciaSize } from '../types';

export type AranciaIconButtonVariant = 'default' | 'brand' | 'danger';

export interface AranciaIconButtonProps {
  iconType: IconType;
  ariaLabel: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  variant?: AranciaIconButtonVariant;
  size?: AranciaSize;
  className?: string;
  'data-test-subj'?: string;
}

export const AranciaIconButton = ({
  iconType,
  ariaLabel,
  onClick,
  isDisabled,
  variant = 'default',
  size = 's',
  className,
  'data-test-subj': dataTestSubj,
}: AranciaIconButtonProps) => {
  const euiColor: React.ComponentProps<typeof EuiButtonIcon>['color'] =
    variant === 'danger' ? 'danger' : variant === 'brand' ? 'primary' : 'text';

  const euiDisplay: React.ComponentProps<typeof EuiButtonIcon>['display'] = 'empty';

  return (
    <EuiButtonIcon
      iconType={iconType}
      aria-label={ariaLabel}
      onClick={onClick}
      isDisabled={isDisabled}
      color={euiColor}
      display={euiDisplay}
      size={size === 'm' ? 'm' : 's'}
      className={classNames('arIconButton', `arIconButton--${variant}`, className)}
      data-test-subj={dataTestSubj}
    />
  );
};
