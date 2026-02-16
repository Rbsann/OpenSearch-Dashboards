/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import classNames from 'classnames';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiPanel,
  EuiPanelProps,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

export interface AranciaCardProps {
  title: NonNullable<React.ReactNode>;
  description?: Exclude<React.ReactNode, null>;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  'data-test-subj'?: string;
}

export const AranciaCard = ({
  title,
  description,
  icon,
  onClick,
  href,
  target,
  rel,
  className,
  'data-test-subj': dataTestSubj,
}: AranciaCardProps) => {
  const interactive = Boolean(onClick || href);

  const cardBody = (
    <EuiFlexGroup gutterSize="m" alignItems="flexStart" responsive={false}>
      {icon ? (
        <EuiFlexItem grow={false} className="arCard__icon">
          <span className="arCard__iconInner" aria-hidden="true">
            {icon}
          </span>
        </EuiFlexItem>
      ) : null}

      <EuiFlexItem>
        <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
          <EuiFlexItem>
            <EuiTitle size="s">
              <h3 className="arCard__title">{title}</h3>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>

        {description ? (
          <EuiText size="s">
            <p className="arCard__description">{description}</p>
          </EuiText>
        ) : null}
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  if (href) {
    return (
      <EuiPanel
        paddingSize="none"
        style={{ padding: 10 }}
        className={classNames('arCard', { 'arCard--interactive': interactive }, className)}
        data-test-subj={dataTestSubj}
        hasShadow={false}
      >
        <EuiLink
          href={href}
          target={target}
          rel={rel}
          className="arCard__overlayLink"
          aria-label={typeof title === 'string' ? title : 'Open'}
        />
        {cardBody}
      </EuiPanel>
    );
  }

  if (onClick) {
    return (
      <EuiPanel
        element="button"
        type="button"
        onClick={onClick}
        paddingSize="m"
        className={classNames('arCard', { 'arCard--interactive': interactive }, className)}
        data-test-subj={dataTestSubj}
        hasShadow={false}
      >
        {cardBody}
      </EuiPanel>
    );
  }

  return (
    <EuiPanel
      paddingSize="m"
      className={classNames('arCard', { 'arCard--interactive': interactive }, className)}
      data-test-subj={dataTestSubj}
      hasShadow={false}
    >
      {cardBody}
    </EuiPanel>
  );
};

export type AranciaPanelProps = EuiPanelProps & { children: React.ReactNode };

export const AranciaPanel = ({ children, className, ...props }: AranciaPanelProps) => {
  return (
    <EuiPanel className={classNames('arPanel', className)} {...props}>
      {children}
    </EuiPanel>
  );
};
