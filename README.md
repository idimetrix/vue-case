<div align="center">

# 🔤 vue-case

### Professional Case Transformation Library for Vue 3

[![npm version](https://img.shields.io/npm/v/vue-case.svg?style=flat-square)](https://www.npmjs.com/package/vue-case)
[![npm downloads](https://img.shields.io/npm/dm/vue-case.svg?style=flat-square)](https://www.npmjs.com/package/vue-case)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/vue-case?style=flat-square)](https://bundlephobia.com/package/vue-case)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Test Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg?style=flat-square)](https://github.com/idimetrix/vue-case)

<p align="center">
  <strong>Transform strings between 19+ case formats with full TypeScript support</strong>
</p>

[Features](#-features) •
[Installation](#-installation) •
[Quick Start](#-quick-start) •
[API Reference](#-available-methods) •
[Examples](#-examples) •
[Documentation](#-usage-guide) •
[Live Demo](https://github.com/idimetrix/vue-case)

</div>

---

## 🌟 Highlights

> **⚠️ Version 2.0** - Complete rewrite for **Vue 3** with full **TypeScript** support and **100% test coverage**. For Vue 2, use version 1.x.

```typescript
import { camelCase, pascalCase, snakeCase } from 'vue-case';

camelCase('hello world')    // → 'helloWorld'
pascalCase('hello world')   // → 'HelloWorld'
snakeCase('hello world')    // → 'hello_world'
```

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 **Core Features**
- ✅ **19+ Case Transformations**
- ✅ **100% Test Coverage**
- ✅ **Full TypeScript Support**
- ✅ **Zero Configuration**
- ✅ **Tree Shakeable**

</td>
<td width="50%">

### 🚀 **Vue 3 Integration**
- ✅ **Composition API** with `useCase()`
- ✅ **Options API** with global `$methods`
- ✅ **Direct Imports** for flexibility
- ✅ **Plugin System** for global access
- ✅ **CDN Support** for quick prototyping

</td>
</tr>
</table>

## 📦 Installation

<table>
<tr>
<td>

**npm**
```bash
npm install vue-case
```

</td>
<td>

**pnpm**
```bash
pnpm add vue-case
```

</td>
<td>

**yarn**
```bash
yarn add vue-case
```

</td>
</tr>
</table>

### CDN Usage

```html
<!-- Vue 3 -->
<script src="https://unpkg.com/vue@3"></script>
<!-- vue-case -->
<script src="https://unpkg.com/vue-case@2"></script>

<script>
  const { createApp } = Vue;
  const app = createApp({
    template: '<div>{{ $camelCase("hello world") }}</div>'
  });
  app.use(VueCase);
  app.mount('#app');
</script>
```

## 🚀 Quick Start

### 🔵 Composition API (Recommended)

```vue
<template>
  <div class="converter">
    <input v-model="text" placeholder="Enter text..." />
    <div class="results">
      <p>camelCase: <code>{{ camelCase(text) }}</code></p>
      <p>PascalCase: <code>{{ pascalCase(text) }}</code></p>
      <p>snake_case: <code>{{ snakeCase(text) }}</code></p>
      <p>kebab-case: <code>{{ paramCase(text) }}</code></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCase } from 'vue-case';

const { camelCase, pascalCase, snakeCase, paramCase } = useCase();
const text = ref('Hello World');
</script>
```

### 🟢 Options API

```vue
<template>
  <div>
    <p>{{ $camelCase(username) }}</p>
    <p>{{ $snakeCase(username) }}</p>
    <p>{{ $truncate(description, 50) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      username: 'John Doe',
      description: 'A very long description text...'
    };
  }
});
</script>
```

### 🟣 Direct Imports (Tree-Shakeable)

```typescript
import { camelCase, pascalCase, snakeCase, constantCase } from 'vue-case';

// Use anywhere in your code
const apiEndpoint = camelCase('user profile');     // 'userProfile'
const className = pascalCase('my component');      // 'MyComponent'
const dbColumn = snakeCase('user name');          // 'user_name'
const envVar = constantCase('api key');           // 'API_KEY'
```

## 📖 Usage Guide

### 1️⃣ Plugin Installation (Global Access)

**Setup in `main.ts`:**

```typescript
import { createApp } from 'vue';
import VueCase from 'vue-case';
import App from './App.vue';

const app = createApp(App);

// Install plugin globally
app.use(VueCase);

app.mount('#app');
```

**Use in any component:**

```vue
<template>
  <div>
    <!-- Available as $camelCase, $pascalCase, $snakeCase, etc. -->
    <h1>{{ $titleCase(pageTitle) }}</h1>
    <p>{{ $truncate(content, 100) }}</p>
  </div>
</template>
```

### 2️⃣ Composition API with `useCase()`

```vue
<script setup lang="ts">
import { useCase } from 'vue-case';
import { ref, computed } from 'vue';

// Get all transformation methods
const { camelCase, pascalCase, snakeCase, constantCase, truncate } = useCase();

const inputText = ref('user profile settings');

// Use in computed properties
const apiRoute = computed(() => camelCase(inputText.value));
const component = computed(() => pascalCase(inputText.value));
const database = computed(() => snakeCase(inputText.value));
const environment = computed(() => constantCase(inputText.value));
</script>

<template>
  <div>
    <input v-model="inputText" />
    <ul>
      <li>API: {{ apiRoute }}</li>
      <li>Component: {{ component }}</li>
      <li>Database: {{ database }}</li>
      <li>Environment: {{ environment }}</li>
    </ul>
  </div>
</template>
```

### 3️⃣ TypeScript Integration

```typescript
import type { 
  CaseMethods, 
  CaseTransformFn,
  CaseCheckFn,
  TruncateFn,
  VueCaseOptions
} from 'vue-case';
import { camelCase, pascalCase, useCase } from 'vue-case';

// Type-safe function
const transformUserInput: CaseTransformFn = (input: string) => {
  return camelCase(input);
};

// Type-safe composable usage
const caseMethods: CaseMethods = useCase();

// Use in classes
class StringTransformer {
  private transform: CaseTransformFn;

  constructor() {
    this.transform = pascalCase;
  }

  process(input: string): string {
    return this.transform(input);
  }
}
```

## 🎨 Available Methods

### 📋 Complete Transformation Reference

| Method | Input | Output | Use Case |
|--------|-------|--------|----------|
| **`camelCase`** | `'hello world'` | `'helloWorld'` | JavaScript variables, object keys |
| **`pascalCase`** | `'hello world'` | `'HelloWorld'` | Component names, class names |
| **`snakeCase`** | `'hello world'` | `'hello_world'` | Database columns, Python variables |
| **`constantCase`** | `'hello world'` | `'HELLO_WORLD'` | Environment variables, constants |
| **`paramCase`** | `'hello world'` | `'hello-world'` | URLs, CSS classes, file names |
| **`dotCase`** | `'hello world'` | `'hello.world'` | Object paths, configuration keys |
| **`pathCase`** | `'hello world'` | `'hello/world'` | File paths, routes |
| **`headerCase`** | `'hello world'` | `'Hello-World'` | HTTP headers |
| **`capitalCase`** | `'hello world'` | `'Hello World'` | Titles, display names |
| **`titleCase`** | `'hello world'` | `'Hello World'` | Book titles, headings |
| **`sentenceCase`** | `'HELLO WORLD'` | `'Hello world'` | Sentences, descriptions |
| **`noCase`** | `'helloWorld'` | `'hello world'` | Remove formatting |
| **`lowerCase`** | `'HELLO WORLD'` | `'hello world'` | Normalize to lowercase |
| **`upperCase`** | `'hello world'` | `'HELLO WORLD'` | Normalize to uppercase |
| **`lowerCaseFirst`** | `'Hello'` | `'hello'` | Lowercase first letter |
| **`upperCaseFirst`** | `'hello'` | `'Hello'` | Capitalize first letter |
| **`swapCase`** | `'Hello World'` | `'hELLO wORLD'` | Toggle case |

### 🛠️ Utility Methods

| Method | Signature | Description | Example |
|--------|-----------|-------------|---------|
| **`truncate`** | `(text: string, length?: number)` | Truncate text with "..." | `truncate('Hello World', 5)` → `'Hello...'` |
| **`isLowerCase`** | `(text: string): boolean` | Check if lowercase | `isLowerCase('hello')` → `true` |
| **`isUpperCase`** | `(text: string): boolean` | Check if uppercase | `isUpperCase('HELLO')` → `true` |

## 💡 Real-World Examples

### 🔹 Example 1: API Request/Response Transformer

```typescript
import { camelCase, snakeCase } from 'vue-case';

// Transform snake_case API responses to camelCase
function transformResponse<T extends Record<string, any>>(data: T): Record<string, any> {
  return Object.entries(data).reduce((acc, [key, value]) => {
    acc[camelCase(key)] = value;
    return acc;
  }, {} as Record<string, any>);
}

// Transform camelCase to snake_case for API requests
function transformRequest<T extends Record<string, any>>(data: T): Record<string, any> {
  return Object.entries(data).reduce((acc, [key, value]) => {
    acc[snakeCase(key)] = value;
    return acc;
  }, {} as Record<string, any>);
}

// Usage with Axios
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  transformResponse: [(data) => {
    const parsed = JSON.parse(data);
    return transformResponse(parsed);
  }],
  transformRequest: [(data) => {
    return JSON.stringify(transformRequest(data));
  }]
});

// Now your API calls work seamlessly:
const response = await api.get('/user_profile'); // API returns user_name
console.log(response.data.userName); // Access as userName
```

### 🔹 Example 2: Dynamic Component Generator

```vue
<template>
  <component 
    :is="getComponent(type)" 
    :class="getClassName(type)"
  >
    {{ content }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { pascalCase, paramCase } from 'vue-case';

interface Props {
  type: string;
  content: string;
}

const props = defineProps<Props>();

// Convert 'user card' → 'UserCard' for component name
const getComponent = (type: string) => {
  return pascalCase(type);
};

// Convert 'user card' → 'user-card' for CSS class
const getClassName = (type: string) => {
  return `component-${paramCase(type)}`;
};
</script>
```

### 🔹 Example 3: Form Field Generator

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="field in formFields" :key="field.name">
      <label :for="field.id">{{ field.label }}</label>
      <input 
        :id="field.id"
        :name="field.name"
        v-model="formData[field.name]"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { camelCase, paramCase, capitalCase } from 'vue-case';

const fieldNames = ['user name', 'email address', 'phone number'];

const formFields = computed(() => 
  fieldNames.map(name => ({
    name: camelCase(name),        // 'userName' for v-model
    id: paramCase(name),           // 'user-name' for id/for
    label: capitalCase(name)       // 'User Name' for display
  }))
);

const formData = ref(
  fieldNames.reduce((acc, name) => {
    acc[camelCase(name)] = '';
    return acc;
  }, {} as Record<string, string>)
);

const handleSubmit = () => {
  console.log(formData.value);
  // { userName: '...', emailAddress: '...', phoneNumber: '...' }
};
</script>
```

### 🔹 Example 4: URL Slug Generator

```vue
<template>
  <div class="blog-editor">
    <input 
      v-model="title" 
      placeholder="Blog post title"
      @input="generateSlug"
    />
    <p class="slug-preview">
      URL: <code>{{ baseUrl }}/{{ slug }}</code>
    </p>
    <button @click="copySlug">Copy URL</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { paramCase } from 'vue-case';

const title = ref('');
const baseUrl = 'https://myblog.com/posts';

const slug = computed(() => paramCase(title.value));

const generateSlug = () => {
  // Automatically updates via computed property
};

const copySlug = async () => {
  await navigator.clipboard.writeText(`${baseUrl}/${slug.value}`);
  alert('URL copied!');
};
</script>
```

### 🔹 Example 5: Environment Variable Manager

```typescript
import { constantCase, camelCase } from 'vue-case';

class EnvironmentConfig {
  private config: Record<string, string> = {};

  // Load from process.env
  loadFromEnv() {
    this.config = {
      [camelCase('API_KEY')]: process.env.API_KEY || '',
      [camelCase('DATABASE_URL')]: process.env.DATABASE_URL || '',
      [camelCase('APP_NAME')]: process.env.APP_NAME || '',
    };
    return this.config;
  }

  // Generate .env content
  generateEnvFile(config: Record<string, string>): string {
    return Object.entries(config)
      .map(([key, value]) => `${constantCase(key)}=${value}`)
      .join('\n');
  }
}

// Usage
const env = new EnvironmentConfig();
const config = {
  apiKey: 'secret123',
  databaseUrl: 'postgresql://...',
  appName: 'My App'
};

console.log(env.generateEnvFile(config));
// Output:
// API_KEY=secret123
// DATABASE_URL=postgresql://...
// APP_NAME=My App
```

### 🔹 Example 6: CSS Class Generator

```vue
<template>
  <div :class="bem('container')">
    <div :class="bem('header')">
      <h1 :class="bem('title', 'large')">{{ title }}</h1>
    </div>
    <div :class="bem('content', isActive && 'active')">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { paramCase } from 'vue-case';
import { ref } from 'vue';

const componentName = 'UserProfile';
const blockName = paramCase(componentName); // 'user-profile'

// BEM (Block Element Modifier) helper
const bem = (element: string, modifier?: string | boolean) => {
  const base = `${blockName}__${paramCase(element)}`;
  if (modifier && typeof modifier === 'string') {
    return `${base} ${base}--${paramCase(modifier)}`;
  }
  return base;
};

const title = ref('User Profile');
const isActive = ref(true);

// Generates classes like:
// user-profile__container
// user-profile__header
// user-profile__title user-profile__title--large
// user-profile__content user-profile__content--active
</script>
```

### 🔹 Example 7: Database Query Builder

```typescript
import { snakeCase } from 'vue-case';

interface QueryFilters {
  [key: string]: any;
}

class QueryBuilder {
  private tableName: string;
  private filters: Record<string, any> = {};

  constructor(tableName: string) {
    this.tableName = snakeCase(tableName);
  }

  where(filters: QueryFilters) {
    this.filters = Object.entries(filters).reduce((acc, [key, value]) => {
      acc[snakeCase(key)] = value;
      return acc;
    }, {} as Record<string, any>);
    return this;
  }

  build(): string {
    const conditions = Object.entries(this.filters)
      .map(([key, value]) => `${key} = '${value}'`)
      .join(' AND ');
    
    return `SELECT * FROM ${this.tableName} WHERE ${conditions}`;
  }
}

// Usage
const query = new QueryBuilder('UserProfile')
  .where({
    firstName: 'John',
    emailAddress: 'john@example.com'
  })
  .build();

console.log(query);
// SELECT * FROM user_profile WHERE first_name = 'John' AND email_address = 'john@example.com'
```

### 🔹 Example 8: Internationalization Key Generator

```typescript
import { dotCase } from 'vue-case';

interface TranslationKeys {
  [key: string]: string | TranslationKeys;
}

function generateI18nKeys(prefix: string, keys: string[]): TranslationKeys {
  return keys.reduce((acc, key) => {
    const i18nKey = dotCase(`${prefix} ${key}`);
    acc[i18nKey] = `${prefix}.${key}`;
    return acc;
  }, {} as TranslationKeys);
}

// Generate translation keys
const userKeys = generateI18nKeys('user', [
  'profile settings',
  'account details',
  'privacy settings'
]);

console.log(userKeys);
// {
//   'user.profile.settings': 'user.profile settings',
//   'user.account.details': 'user.account details',
//   'user.privacy.settings': 'user.privacy settings'
// }

// Use in Vue components
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const title = t(userKeys['user.profile.settings']);
```

## 🧪 Testing

Full support for all major testing frameworks:

```typescript
import { describe, it, expect } from 'vitest'; // or jest
import { camelCase, pascalCase, snakeCase } from 'vue-case';

describe('vue-case transformations', () => {
  it('transforms to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('hello-world')).toBe('helloWorld');
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  it('transforms to PascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
  });

  it('handles edge cases', () => {
    expect(camelCase('')).toBe('');
    expect(camelCase('a')).toBe('a');
    expect(camelCase('hello@world')).toBe('helloWorld');
  });
});
```

## 📊 Performance

- ⚡ **Minimal Bundle Size**: ~22KB minified
- 🚀 **Tree Shakeable**: Import only what you need
- 🎯 **Zero Dependencies**: Built on lightweight `text-case` library
- 💨 **Fast Execution**: Optimized for performance
- 📦 **Efficient**: No runtime overhead

## 🌐 Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
|:---:|:---:|:---:|:---:|
| Latest ✅ | Latest ✅ | Latest ✅ | Latest ✅ |

## 🔧 Advanced Configuration

### Custom Plugin Options

```typescript
import { createApp } from 'vue';
import VueCase from 'vue-case';
import type { VueCaseOptions } from 'vue-case';

const app = createApp(App);

// Custom options (currently all methods are included by default)
const options: VueCaseOptions = {
  // Future: Configure which methods to include
};

app.use(VueCase, options);
```

### Method Chaining

```typescript
import { camelCase, upperCaseFirst, lowerCase } from 'vue-case';

// Create custom transformations
const customTransform = (text: string) => {
  return upperCaseFirst(camelCase(lowerCase(text)));
};

customTransform('HELLO WORLD'); // 'HelloWorld'
```

## 📚 Type Definitions

```typescript
// All available types exported
export type CaseTransformFn = (value: string) => string;
export type TruncateFn = (value: string, length?: number) => string;
export type CaseCheckFn = (value: string) => boolean;

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

export interface VueCaseOptions {
  // Plugin configuration options
}

// Global property types for Options API
declare module 'vue' {
  interface ComponentCustomProperties {
    $case: CaseMethods;
    $camelCase: CaseTransformFn;
    $pascalCase: CaseTransformFn;
    // ... all other methods
  }
}
```

## ❓ FAQ

<details>
<summary><strong>Q: Can I use this with Vue 2?</strong></summary>

A: No, version 2.0+ is for Vue 3 only. For Vue 2, use version 1.x:
```bash
npm install vue-case@1
```
</details>

<details>
<summary><strong>Q: Does this work with Nuxt 3?</strong></summary>

A: Yes! Just install and use it like any other Vue 3 plugin:
```typescript
// plugins/vue-case.ts
import VueCase from 'vue-case';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueCase);
});
```
</details>

<details>
<summary><strong>Q: Can I use this without Vue?</strong></summary>

A: Yes! Use direct imports:
```typescript
import { camelCase, snakeCase } from 'vue-case';
// Works in any JavaScript/TypeScript project
```
</details>

<details>
<summary><strong>Q: Is this tree-shakeable?</strong></summary>

A: Yes! When you use direct imports, only the methods you import will be included in your bundle.
</details>

<details>
<summary><strong>Q: What's the difference between paramCase and kebab-case?</strong></summary>

A: They're the same! `paramCase` produces kebab-case format (`hello-world`).
</details>

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🔧 **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. ✅ **Test** your changes (`pnpm test`)
4. 💾 **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
5. 📤 **Push** to the branch (`git push origin feature/AmazingFeature`)
6. 🎉 **Open** a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/idimetrix/vue-case.git
cd vue-case

# Install dependencies
pnpm install

# Run tests
pnpm test

# Run tests with coverage
pnpm test --coverage

# Build library
pnpm run build

# Type check
pnpm run typecheck

# Run dev server
pnpm serve
```

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed release notes.

## 📄 License

[MIT](LICENSE) © [Dmitry Selikhov](https://www.linkedin.com/in/dimetrix)

## 🔗 Links

<table>
<tr>
<td align="center" width="25%">

### 📦 Package
[npm](https://www.npmjs.com/package/vue-case)

</td>
<td align="center" width="25%">

### 💻 Repository
[GitHub](https://github.com/idimetrix/vue-case)

</td>
<td align="center" width="25%">

### 🐛 Issues
[Report Bug](https://github.com/idimetrix/vue-case/issues)

</td>
<td align="center" width="25%">

### 💡 Discussions
[Ideas & Questions](https://github.com/idimetrix/vue-case/discussions)

</td>
</tr>
</table>

## 💝 Support the Project

If you find **vue-case** helpful, please consider:

- ⭐ **Star** the repository on GitHub
- 🐛 **Report** any bugs you find
- 📝 **Contribute** to documentation
- 💡 **Suggest** new features
- 📢 **Share** with the community
- 💖 **Sponsor** the development

## 🏆 Credits

Built with ❤️ using:
- [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [text-case](https://www.npmjs.com/package/text-case) - Text transformation utilities

## 📊 Stats

![Alt](https://repobeats.axiom.co/api/embed/yourstatshere.svg "Repobeats analytics image")

---

<div align="center">

**Made with ❤️ for the Vue.js community**

[⬆ Back to Top](#-vue-case)

</div>
