import type { App } from 'vue';

/**
 * Case transformation function type
 */
export type CaseTransformFn = (value: string) => string;

/**
 * Truncate function type
 */
export type TruncateFn = (value: string, length?: number) => string;

/**
 * Boolean check function type
 */
export type CaseCheckFn = (value: string) => boolean;

/**
 * All case methods interface
 */
export interface CaseMethods {
  camelCase: CaseTransformFn;
  pascalCase: CaseTransformFn;
  capitalCase: CaseTransformFn;
  headerCase: CaseTransformFn;
  titleCase: CaseTransformFn;
  pathCase: CaseTransformFn;
  paramCase: CaseTransformFn;
  dotCase: CaseTransformFn;
  snakeCase: CaseTransformFn;
  constantCase: CaseTransformFn;
  lowerCase: CaseTransformFn;
  lowerCaseFirst: CaseTransformFn;
  upperCase: CaseTransformFn;
  upperCaseFirst: CaseTransformFn;
  swapCase: CaseTransformFn;
  sentenceCase: CaseTransformFn;
  noCase: CaseTransformFn;
  isLowerCase: CaseCheckFn;
  isUpperCase: CaseCheckFn;
  truncate: TruncateFn;
}

/**
 * Plugin options interface
 */
export interface VueCaseOptions {
  prefix?: string;
  postfix?: string;
}

/**
 * Vue plugin interface
 */
export interface VueCasePlugin {
  install(app: App, options?: VueCaseOptions): void;
}

/**
 * Extend Vue's ComponentCustomProperties for global properties
 */
declare module 'vue' {
  export interface ComponentCustomProperties {
    $case: CaseMethods;
    $camelCase: CaseTransformFn;
    $pascalCase: CaseTransformFn;
    $capitalCase: CaseTransformFn;
    $headerCase: CaseTransformFn;
    $titleCase: CaseTransformFn;
    $pathCase: CaseTransformFn;
    $paramCase: CaseTransformFn;
    $dotCase: CaseTransformFn;
    $snakeCase: CaseTransformFn;
    $constantCase: CaseTransformFn;
    $lowerCase: CaseTransformFn;
    $lowerCaseFirst: CaseTransformFn;
    $upperCase: CaseTransformFn;
    $upperCaseFirst: CaseTransformFn;
    $swapCase: CaseTransformFn;
    $sentenceCase: CaseTransformFn;
    $noCase: CaseTransformFn;
    $isLowerCase: CaseCheckFn;
    $isUpperCase: CaseCheckFn;
    $truncate: TruncateFn;
  }
}

