/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { FC } from 'react';
import { AranciaPanel } from '../../../../../arancia_design_system/public';
import { RenderFn } from '../../../services/section_type/section_type';
import { LazyRender } from './lazy_render';

interface Props {
  render: RenderFn;
}

export const HeroSection: FC<Props> = ({ render }) => {
  return (
    <AranciaPanel data-test-subj="homepageHeroSection" hasShadow={false} className="homeAranciaHero">
      <LazyRender render={render} />
    </AranciaPanel>
  );
};
