# vue-case

[![npm version](https://badge.fury.io/js/vue-case.svg)](https://badge.fury.io/js/vue-case)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **⚠️ Version 2.0.0** - This is a major rewrite for **Vue 3** with full **TypeScript** support. For Vue 2, use version 1.x.

A comprehensive collection of case transformation utilities for **Vue 3** with full **TypeScript** support. Convert strings between camelCase, snake_case, PascalCase, and many more formats.

## ✨ Features

- 🚀 **Vue 3 Ready** - Built for Vue 3 with Composition API and Options API support
- 📘 **TypeScript** - Full TypeScript support with complete type definitions
- 🎯 **Multiple Usage Patterns** - Use as plugin, composable, or direct imports
- 🔧 **20+ Transformations** - Comprehensive set of case transformation methods
- 🎨 **Zero Config** - Works out of the box
- 📦 **Tree Shakeable** - Import only what you need
- ⚡ **Lightweight** - Minimal footprint

## 📦 Installation

### NPM

```bash
npm install vue-case
```

### PNPM

```bash
pnpm add vue-case
```

### Yarn

```bash
yarn add vue-case
```

### CDN

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-case"></script>
```

## 🚀 Quick Start

### Vue 3 with Composition API (Recommended)

```vue
<template>
  <div>
    <p>{{ camelCase(text) }}</p>
    <p>{{ pascalCase(text) }}</p>
    <p>{{ snakeCase(text) }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCase } from 'vue-case';

const { camelCase, pascalCase, snakeCase } = useCase();
const text = ref('Hello World');
</script>
```

### Vue 3 with Options API

```vue
<template>
  <div>
    <p>{{ $camelCase(text) }}</p>
    <p>{{ $pascalCase(text) }}</p>
    <p>{{ $snakeCase(text) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      text: 'Hello World'
    };
  }
});
</script>
```

### TypeScript

```typescript
import { createApp } from 'vue';
import VueCase, { camelCase, pascalCase, useCase } from 'vue-case';
import type { CaseMethods } from 'vue-case';

const app = createApp(App);

// Install plugin globally
app.use(VueCase);

// Or use direct imports
const result = camelCase('hello world'); // 'helloWorld'
const result2 = pascalCase('hello world'); // 'HelloWorld'

// Or use composable
const methods: CaseMethods = useCase();
```

## 📖 Usage Guide

### 1. Plugin Installation (Global)

Install the plugin to make methods available throughout your app:

```typescript
// main.ts
import { createApp } from 'vue';
import VueCase from 'vue-case';
import App from './App.vue';

const app = createApp(App);
app.use(VueCase);
app.mount('#app');
```

Now you can use methods in any component:

```vue
<template>
  <div>{{ $camelCase('hello world') }}</div>
</template>
```

### 2. Composition API with `useCase()`

The recommended approach for Composition API:

```vue
<script setup lang="ts">
import { useCase } from 'vue-case';

const { 
  camelCase, 
  pascalCase, 
  snakeCase,
  truncate 
} = useCase();

// Use in template or script
const myText = camelCase('hello world'); // 'helloWorld'
</script>
```

### 3. Direct Imports

Import only the methods you need for optimal tree-shaking:

```typescript
import { camelCase, pascalCase, snakeCase } from 'vue-case';

const result1 = camelCase('hello world');     // 'helloWorld'
const result2 = pascalCase('hello world');    // 'HelloWorld'
const result3 = snakeCase('hello world');     // 'hello_world'
```

### 4. TypeScript Usage

Full TypeScript support with type definitions:

```typescript
import type { 
  CaseMethods, 
  CaseTransformFn,
  TruncateFn 
} from 'vue-case';

// Use types in your components
const transform: CaseTransformFn = (text: string) => {
  return camelCase(text);
};

const shortenText: TruncateFn = (text: string, length?: number) => {
  return truncate(text, length);
};
```

## 🎨 Available Methods

### Case Transformations

| Method | Input Example | Output | Description |
|--------|--------------|--------|-------------|
| `camelCase` | `'hello world'` | `'helloWorld'` | Converts to camelCase |
| `pascalCase` | `'hello world'` | `'HelloWorld'` | Converts to PascalCase |
| `snakeCase` | `'hello world'` | `'hello_world'` | Converts to snake_case |
| `constantCase` | `'hello world'` | `'HELLO_WORLD'` | Converts to CONSTANT_CASE |
| `paramCase` | `'hello world'` | `'hello-world'` | Converts to param-case (kebab-case) |
| `dotCase` | `'hello world'` | `'hello.world'` | Converts to dot.case |
| `pathCase` | `'hello world'` | `'hello/world'` | Converts to path/case |
| `headerCase` | `'hello world'` | `'Hello-World'` | Converts to Header-Case |
| `capitalCase` | `'hello world'` | `'Hello World'` | Converts to Capital Case |
| `titleCase` | `'hello world'` | `'Hello World'` | Converts to Title Case |
| `sentenceCase` | `'hello world'` | `'Hello world'` | Converts to Sentence case |
| `noCase` | `'helloWorld'` | `'hello world'` | Removes all casing |
| `lowerCase` | `'HELLO WORLD'` | `'hello world'` | Converts to lowercase |
| `upperCase` | `'hello world'` | `'HELLO WORLD'` | Converts to UPPERCASE |
| `lowerCaseFirst` | `'Hello'` | `'hello'` | Lowercase first character |
| `upperCaseFirst` | `'hello'` | `'Hello'` | Uppercase first character |
| `swapCase` | `'Hello World'` | `'hELLO wORLD'` | Swaps case of each character |

### Utility Methods

| Method | Parameters | Description | Example |
|--------|-----------|-------------|---------|
| `truncate` | `(text: string, length: number = 15)` | Truncates text with "..." | `truncate('Hello World', 5)` → `'Hello...'` |
| `isLowerCase` | `(text: string)` | Checks if text is lowercase | `isLowerCase('hello')` → `true` |
| `isUpperCase` | `(text: string)` | Checks if text is uppercase | `isUpperCase('HELLO')` → `true` |

## 📝 Examples

### Example 1: Form Input Formatter

```vue
<template>
  <div>
    <input v-model="username" @input="formatUsername" />
    <p>Formatted: {{ formattedUsername }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCase } from 'vue-case';

const { snakeCase } = useCase();
const username = ref('');
const formattedUsername = ref('');

const formatUsername = () => {
  formattedUsername.value = snakeCase(username.value);
};
</script>
```

### Example 2: Dynamic Class Names

```vue
<template>
  <div :class="getClassName(componentName)">
    Content
  </div>
</template>

<script setup lang="ts">
import { paramCase } from 'vue-case';

const componentName = 'MyAwesomeComponent';

const getClassName = (name: string) => {
  return `component-${paramCase(name)}`; // 'component-my-awesome-component'
};
</script>
```

### Example 3: API Response Transformation

```typescript
import { camelCase } from 'vue-case';

interface ApiResponse {
  user_name: string;
  user_email: string;
  created_at: string;
}

function transformKeys(obj: ApiResponse) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[camelCase(key)] = value;
    return acc;
  }, {} as Record<string, any>);
}

// Usage
const apiData = {
  user_name: 'John',
  user_email: 'john@example.com',
  created_at: '2024-01-01'
};

const transformed = transformKeys(apiData);
// { userName: 'John', userEmail: 'john@example.com', createdAt: '2024-01-01' }
```

### Example 4: URL Slug Generator

```vue
<script setup lang="ts">
import { paramCase } from 'vue-case';
import { computed, ref } from 'vue';

const title = ref('My Amazing Blog Post!');
const slug = computed(() => paramCase(title.value));
// 'my-amazing-blog-post'
</script>
```

### Example 5: Constants Generator

```typescript
import { constantCase } from 'vue-case';

const createConstants = (keys: string[]) => {
  return keys.reduce((acc, key) => {
    acc[constantCase(key)] = key;
    return acc;
  }, {} as Record<string, string>);
};

const ACTION_TYPES = createConstants([
  'fetch user',
  'update profile',
  'delete account'
]);

// {
//   FETCH_USER: 'fetch user',
//   UPDATE_PROFILE: 'update profile',
//   DELETE_ACCOUNT: 'delete account'
// }
```

### Example 6: Text Preview with Truncate

```vue
<template>
  <div>
    <p class="preview">{{ $truncate(longText, 50) }}</p>
    <button @click="showFull = !showFull">
      {{ showFull ? 'Show Less' : 'Show More' }}
    </button>
    <p v-if="showFull">{{ longText }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const longText = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');
const showFull = ref(false);
</script>
```

## 🔧 Advanced Usage

### Custom Composable

Create your own composable with custom logic:

```typescript
import { useCase } from 'vue-case';
import { computed, ref, Ref } from 'vue';

export function useTextTransform(initialText: string = '') {
  const text = ref(initialText);
  const { camelCase, pascalCase, snakeCase } = useCase();

  const transformations = computed(() => ({
    camel: camelCase(text.value),
    pascal: pascalCase(text.value),
    snake: snakeCase(text.value),
  }));

  return {
    text,
    transformations,
  };
}
```

### Method Chaining

```typescript
import { camelCase, upperCaseFirst } from 'vue-case';

const transform = (text: string) => {
  return upperCaseFirst(camelCase(text));
};

transform('hello world api'); // 'HelloWorldApi'
```

## 🧪 Testing

```typescript
import { describe, it, expect } from 'vitest';
import { camelCase, pascalCase, snakeCase } from 'vue-case';

describe('case transformations', () => {
  it('converts to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  it('converts to PascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
  });

  it('converts to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
  });
});
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 API Reference

### Plugin

```typescript
app.use(VueCase, options?: VueCaseOptions)
```

### Composable

```typescript
useCase(): CaseMethods
```

Returns an object with all case transformation methods.

### Type Definitions

```typescript
type CaseTransformFn = (value: string) => string;
type TruncateFn = (value: string, length?: number) => string;
type CaseCheckFn = (value: string) => boolean;

interface CaseMethods {
  camelCase: CaseTransformFn;
  pascalCase: CaseTransformFn;
  capitalCase: CaseTransformFn;
  // ... all other methods
  truncate: TruncateFn;
  isLowerCase: CaseCheckFn;
  isUpperCase: CaseCheckFn;
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

[MIT](LICENSE) © [Dmitry Selikhov](https://www.linkedin.com/in/dimetrix)

## 🔗 Links

- [GitHub Repository](https://github.com/idimetrix/vue-case)
- [NPM Package](https://www.npmjs.com/package/vue-case)
- [Issue Tracker](https://github.com/idimetrix/vue-case/issues)

## 💝 Support

If you find this package helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 📝 Improving documentation
- 💡 Suggesting new features

---

Made with ❤️ for the Vue.js community
