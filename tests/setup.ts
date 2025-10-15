// Jest setup file for Vue 3
import { config } from '@vue/test-utils';

// Suppress Vue warnings during tests
config.global.config.warnHandler = () => null;
config.global.config.errorHandler = () => null;

