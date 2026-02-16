/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plugin, PluginInitializerContext, CoreSetup, CoreStart } from 'src/core/public';

export type AranciaDesignSystemSetup = Record<string, never>;
export type AranciaDesignSystemStart = Record<string, never>;

export class AranciaDesignSystemPlugin
  implements Plugin<AranciaDesignSystemSetup, AranciaDesignSystemStart> {
  constructor(initializerContext: PluginInitializerContext) {}

  public setup(core: CoreSetup): AranciaDesignSystemSetup {
    return {};
  }

  public start(core: CoreStart): AranciaDesignSystemStart {
    return {};
  }

  public stop() {}
}
