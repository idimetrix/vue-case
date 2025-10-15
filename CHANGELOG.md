# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-01-01

### 🎉 Major Release - Vue 3 + TypeScript Rewrite

This is a complete rewrite of vue-case for Vue 3 with full TypeScript support.

### ⚠️ Breaking Changes

- **Vue 3 Required**: Now requires Vue 3.x (previously Vue 2.x)
- **Filter Syntax Removed**: Vue 3 removed filters, use methods or composables instead
  - Old: `{{ text | camelCase }}`
  - New: `{{ $camelCase(text) }}` or `{{ camelCase(text) }}` with `useCase()`
- **API Changes**: Plugin now uses Vue 3's `app.use()` instead of `Vue.use()`

### ✨ Added

- **TypeScript Support**: Full TypeScript rewrite with complete type definitions
- **Composition API**: New `useCase()` composable for Composition API
- **Multiple Usage Patterns**:
  - Plugin installation with global properties
  - Composable with `useCase()`
  - Direct imports for tree-shaking
- **Modern Build**: Updated to Vue 3.5.x with latest tooling
- **Enhanced Demo**: Interactive demo with both Options and Composition API examples
- **Type Exports**: All types are now exported for TypeScript users
- **Better Documentation**: Comprehensive README with examples for all use cases

### 🔧 Changed

- Migrated from Vue 2 to Vue 3
- Converted all JavaScript to TypeScript
- Updated all dependencies to latest versions
- Improved error handling and edge cases
- Better test coverage with TypeScript tests
- Modern UI for demo application

### 📚 Documentation

- Complete README rewrite with Vue 3 examples
- Added TypeScript usage examples
- Added CONTRIBUTING.md
- Added comprehensive API documentation
- Added multiple real-world examples

### 🛠️ Development

- Added ESLint with TypeScript support
- Added Prettier configuration
- Added Jest configuration for TypeScript
- Added TypeScript compiler configuration
- Added proper type declarations

### 📦 Dependencies

- Updated `vue` to ^3.5.22
- Updated `@vue/cli-service` to ^5.0.9
- Updated `@vue/test-utils` to ^2.4.6
- Added `typescript` ^5.7.2
- Added TypeScript ESLint plugins
- Removed deprecated Vue 2 dependencies

---

## [1.0.7] - 2023-xx-xx

### Fixed
- Bug fixes and improvements for Vue 2

## [1.0.0] - 2020-xx-xx

### Added
- Initial release with Vue 2 support
- Filter-based API
- 20+ case transformation methods

[2.0.0]: https://github.com/idimetrix/vue-case/compare/v1.0.7...v2.0.0
[1.0.7]: https://github.com/idimetrix/vue-case/compare/v1.0.0...v1.0.7
[1.0.0]: https://github.com/idimetrix/vue-case/releases/tag/v1.0.0

