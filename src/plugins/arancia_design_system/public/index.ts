/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import './index.scss';

import { PluginInitializerContext } from 'src/core/public';

export function plugin(initializerContext: PluginInitializerContext) {
  return new AranciaDesignSystemPlugin(initializerContext);
}

export { AranciaDesignSystemPlugin as Plugin } from './plugin';
export type { AranciaDesignSystemSetup, AranciaDesignSystemStart } from './plugin';

export type { AranciaSize, AranciaTone } from './types';

export { AranciaButton } from './components/arancia_button';
export type { AranciaButtonProps, AranciaButtonVariant } from './components/arancia_button';

export { AranciaIconButton } from './components/arancia_icon_button';
export type { AranciaIconButtonProps } from './components/arancia_icon_button';

export { AranciaCard, AranciaPanel } from './components/arancia_card';
export type { AranciaCardProps, AranciaPanelProps } from './components/arancia_card';

export { AranciaPageHeader } from './components/arancia_page_header';
export type { AranciaPageHeaderProps } from './components/arancia_page_header';

export { AranciaSidebarNavItem } from './components/arancia_sidebar_nav_item';
export type { AranciaSidebarNavItemProps } from './components/arancia_sidebar_nav_item';

export {
  AranciaFormRow,
  AranciaTextInput,
  AranciaSelect,
  AranciaSwitch,
} from './components/arancia_form';
export type {
  AranciaFormRowProps,
  AranciaTextInputProps,
  AranciaSelectProps,
  AranciaSwitchProps,
} from './components/arancia_form';

export { AranciaCallout } from './components/arancia_callout';
export type { AranciaCalloutProps } from './components/arancia_callout';

// Export plugin after all other imports
import { AranciaDesignSystemPlugin } from './plugin';
