/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import classNames from 'classnames';
import { EuiButton, IconType } from '@elastic/eui';
import { AranciaSize } from '../types';

export type AranciaButtonVariant = 'primary' | 'secondary' | 'cta';

export interface AranciaButtonProps {
  children: React.ReactNode;
  variant?: AranciaButtonVariant;
  size?: AranciaSize;
  iconType?: IconType;
  iconSide?: 'left' | 'right';
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | React.MouseEventHandler<HTMLAnchorElement>;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  'data-test-subj'?: string;
}

type EuiButtonComponentProps = React.ComponentProps<typeof EuiButton>;

const toEuiButtonSize = (size: AranciaSize): EuiButtonComponentProps['size'] =>
  // EuiButton supports at least `s` and `m` in this repo.
  size === 'm' ? 'm' : 's';

export const AranciaButton = ({
  children,
  variant = 'primary',
  size = 'm',
  iconType,
  iconSide = 'left',
  isLoading,
  isDisabled,
  onClick,
  href,
  target,
  rel,
  className,
  'data-test-subj': dataTestSubj,
}: AranciaButtonProps) => {
  const classes = classNames(
    'arButton',
    {
      'arButton--cta': variant === 'cta',
      'arButton--brand': variant === 'primary' || variant === 'cta',
      'arButton--secondary': variant === 'secondary',
    },
    className
  );

  const props: EuiButtonComponentProps = {
    size: toEuiButtonSize(size),
    iconType,
    iconSide,
    isLoading,
    isDisabled,
    onClick: href ? (onClick as React.MouseEventHandler<HTMLAnchorElement>) : (onClick as any),
    href,
    target,
    rel,
    className: classes,
    'data-test-subj': dataTestSubj,
    fill: true,
    color: variant === 'secondary' ? 'text' : 'primary',
  };

  return <EuiButton {...props}>{children}</EuiButton>;
};
