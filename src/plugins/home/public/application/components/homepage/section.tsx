/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { FC, useState, useMemo } from 'react';
import { i18n } from '@osd/i18n';
import {
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiLink,
  EuiText,
} from '@elastic/eui';
import { AranciaIconButton, AranciaPanel } from '../../../../../arancia_design_system/public';
import { RenderFn, Section as SectionType } from '../../../services/section_type/section_type';
import { LazyRender } from './lazy_render';

interface Props {
  render: RenderFn;
  title: SectionType['title'];
  description?: SectionType['description'];
  links?: SectionType['links'];
}

export const Section: FC<Props> = ({ render, title, description, links }) => {
  const [isExpanded, setExpanded] = useState(true);

  const hasDescription = !!description;
  const hasLinks = Array.isArray(links) && links.length > 0;
  const hasDescriptionSection = hasDescription || hasLinks;
  const hasDescriptionSpacer = hasDescription && hasLinks;

  const toggleExpanded = () => setExpanded((expanded) => !expanded);

  const memoizedContent = useMemo(
    () => (
      <EuiFlexGroup direction="row" data-test-subj="homepageSectionContent">
        {hasDescriptionSection && (
          <EuiFlexItem grow={1}>
            <EuiText>{description}</EuiText>
            {hasDescriptionSpacer && <EuiSpacer />}
            {hasLinks &&
              links.map(({ label, url, props }, i) => (
                <EuiLink key={i} {...props} href={url}>
                  {label}
                </EuiLink>
              ))}
          </EuiFlexItem>
        )}
        <EuiFlexItem grow={3}>
          <LazyRender render={render} />
        </EuiFlexItem>
      </EuiFlexGroup>
    ),
    [description, hasDescriptionSection, hasDescriptionSpacer, hasLinks, links, render]
  );

  return (
    <AranciaPanel
      paddingSize="m"
      hasShadow={false}
      className="homeAranciaSection"
      data-test-subj="homepageSection"
    >
      <EuiFlexGroup
        direction="row"
        alignItems="center"
        gutterSize="s"
        responsive={false}
        className="homeAranciaSection__header"
      >
        <EuiFlexItem grow={false}>
          <AranciaIconButton
            iconType={isExpanded ? 'arrowDown' : 'arrowRight'}
            onClick={toggleExpanded}
            size="s"
            ariaLabel={
              isExpanded
                ? i18n.translate('home.section.collapse', { defaultMessage: 'Collapse section' })
                : i18n.translate('home.section.expand', { defaultMessage: 'Expand section' })
            }
          />
        </EuiFlexItem>
        <EuiFlexItem grow>
          <EuiTitle size="m">
            <h2 className="homeAranciaSection__title">{title}</h2>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGroup>
      {isExpanded && memoizedContent}
    </AranciaPanel>
  );
};
