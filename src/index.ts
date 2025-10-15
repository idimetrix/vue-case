import type { App } from 'vue';
import * as textCase from 'text-case';
import type {
  CaseMethods,
  VueCaseOptions,
  VueCasePlugin,
  TruncateFn,
} from './types';

/**
 * Utility function for truncating strings
 * @param value - The string to truncate
 * @param length - Maximum length before truncation (default: 15)
 * @returns Truncated string with "..." if exceeds length
 */
const truncate: TruncateFn = (value: string, length: number = 15): string => {
  if (!value || typeof value !== 'string') return '';
  if (value.length <= length) return value;
  return value.substring(0, length) + '...';
};

/**
 * All case transformation methods
 */
export const caseMethods: CaseMethods = {
  camelCase: textCase.camelCase,
  pascalCase: textCase.pascalCase,
  capitalCase: textCase.capitalCase,
  headerCase: textCase.headerCase,
  titleCase: textCase.titleCase,
  pathCase: textCase.pathCase,
  paramCase: textCase.paramCase,
  dotCase: textCase.dotCase,
  snakeCase: textCase.snakeCase,
  constantCase: textCase.constantCase,
  lowerCase: textCase.lowerCase,
  lowerCaseFirst: textCase.lowerCaseFirst,
  upperCase: textCase.upperCase,
  upperCaseFirst: textCase.upperCaseFirst,
  swapCase: textCase.swapCase,
  sentenceCase: textCase.sentenceCase,
  noCase: textCase.noCase,
  isLowerCase: textCase.isLowerCase,
  isUpperCase: textCase.isUpperCase,
  truncate,
};

/**
 * Vue 3 Composable for case transformations
 * @returns Object containing all case transformation methods
 * @example
 * ```typescript
 * import { useCase } from 'vue-case';
 * 
 * const { camelCase, pascalCase, truncate } = useCase();
 * const result = camelCase('hello world'); // 'helloWorld'
 * ```
 */
export function useCase(): CaseMethods {
  return {
    ...caseMethods,
  };
}

/**
 * Vue 3 Plugin for case transformations
 * Adds global properties and provides methods throughout the app
 * 
 * @example
 * ```typescript
 * import { createApp } from 'vue';
 * import VueCase from 'vue-case';
 * 
 * const app = createApp(App);
 * app.use(VueCase);
 * ```
 */
const VueCase: VueCasePlugin = {
  install(app: App, options: VueCaseOptions = {}): void {
    // Add global properties (accessible via this.$case in Options API)
    app.config.globalProperties.$case = caseMethods;

    // Add global methods as individual properties for backward compatibility
    Object.keys(caseMethods).forEach((key) => {
      const methodKey = key as keyof CaseMethods;
      app.config.globalProperties[`$${key}` as any] = caseMethods[methodKey];
    });

    // Provide for Composition API
    app.provide('vueCase', caseMethods);
  },
};

export default VueCase;

// Auto-install for browser
if (typeof window !== 'undefined' && (window as any).Vue) {
  const { createApp } = (window as any).Vue;
  createApp({}).use(VueCase);
  (window as any).VueCase = VueCase;
}

// Export individual functions for direct import
export const {
  camelCase,
  pascalCase,
  capitalCase,
  headerCase,
  titleCase,
  pathCase,
  paramCase,
  dotCase,
  snakeCase,
  constantCase,
  lowerCase,
  lowerCaseFirst,
  upperCase,
  upperCaseFirst,
  swapCase,
  sentenceCase,
  noCase,
  isLowerCase,
  isUpperCase,
} = caseMethods;

export { truncate };

// Export types
export type * from './types';

