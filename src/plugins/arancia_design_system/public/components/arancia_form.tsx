/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import classNames from 'classnames';
import { EuiFormRow, EuiFieldText, EuiSelect, EuiSwitch } from '@elastic/eui';

type EuiFieldTextComponentProps = React.ComponentProps<typeof EuiFieldText>;
type EuiSelectComponentProps = React.ComponentProps<typeof EuiSelect>;
type EuiSwitchComponentProps = React.ComponentProps<typeof EuiSwitch>;

// EuiFormRow props are a fairly complex discriminated union in this codebase’s EUI version.
// For the design-system wrapper we keep a typed, opinionated surface and forward the rest.
export interface AranciaFormRowProps {
  label?: React.ReactNode;
  helpText?: React.ReactNode;
  error?: React.ReactNode | React.ReactNode[];
  isInvalid?: boolean;
  fullWidth?: boolean;
  describedByIds?: string[];
  className?: string;
  children: React.ReactElement;
  [key: string]: unknown;
}

export const AranciaFormRow = ({ children, className, ...rest }: AranciaFormRowProps) => {
  const { fullWidth = true, ...forwarded } = rest;
  return (
    <EuiFormRow
      className={classNames('arFormRow', className)}
      fullWidth={fullWidth}
      {...(forwarded as any)}
    >
      {children}
    </EuiFormRow>
  );
};

export type AranciaTextInputProps = EuiFieldTextComponentProps;

export const AranciaTextInput = ({
  className,
  fullWidth = true,
  ...rest
}: AranciaTextInputProps) => {
  return (
    <EuiFieldText
      className={classNames('arTextInput', className)}
      fullWidth={fullWidth}
      {...rest}
    />
  );
};

export type AranciaSelectProps = EuiSelectComponentProps;

export const AranciaSelect = ({ className, fullWidth = true, ...rest }: AranciaSelectProps) => {
  return (
    <EuiSelect className={classNames('arSelect', className)} fullWidth={fullWidth} {...rest} />
  );
};

export type AranciaSwitchProps = EuiSwitchComponentProps;

export const AranciaSwitch = ({ className, ...rest }: AranciaSwitchProps) => {
  return <EuiSwitch className={classNames('arSwitch', className)} {...rest} />;
};
