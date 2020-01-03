# vue-case [![Build Status](https://travis-ci.org/freearhey/vue-case.svg?branch=master)](https://travis-ci.org/freearhey/vue-case)

A collection of Vue.js case filters

## Installation

### Direct include

Simply include `vue-case` after Vue and it will install itself automatically:

```html
<script src="vue.js"></script>
<script src="vue-case.min.js"></script>
```

### CDN [![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/vue-case/badge?style=rounded)](https://www.jsdelivr.com/package/npm/vue-case)

```html
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-case"></script>
```

### NPM [![npm](https://img.shields.io/npm/dm/vue-case.svg)](https://www.npmjs.com/package/vue-case)

```
npm install vue-case
```

When used with a module system, you must explicitly install the filters via `Vue.use()`:

```js
import Vue from 'vue'
import VueCase from 'vue-case'

Vue.use(VueCase)
```

You don't need to do this when using global script tags.

### Nuxt.js

```
npm install vue-case
```

When create file `plugins/vue-case.js`:

```js
import Vue from 'vue'
import VueCase from 'vue-case'

Vue.use(VueCase)
```

Then, add the file inside the `plugins` key of `nuxt.config.js`:

```js
module.exports = {
  //...
  plugins: [
    '~/plugins/vue-case'
  ],
  //...
}
```

## Available Filters

- [camelCase](#camelCase)
- [pascalCase](#pascalCase)
- [capitalCase](#capitalCase)
- [headerCase](#headerCase)
- [titleCase](#titleCase)
- [pathCase](#pathCase)
- [paramCase](#paramCase)
- [dotCase](#dotCase)
- [snakeCase](#snakeCase)
- [constantCase](#constantCase)
- [lowerCase](#lowerCase)
- [lowerCaseFirst](#lowerCaseFirst)
- [upperCase](#upperCase)
- [upperCaseFirst](#upperCaseFirst)
- [swapCase](#swapCase)
- [sentenceCase](#sentenceCase)
- [noCase](#noCase)
- [isLowerCase](#isLowerCase)
- [isUpperCase](#isUpperCase)
- [truncate](#truncate)

## Usage

#### camelCase

+ Example:

  ```js
  {{ msg | camelCase }} // 'I LOVE vue-case' => 'iLoveVueCase'
  ```
  
#### pascalCase 

+ Example:

  ```js
  {{ msg | pascalCase }} // 'I LOVE vue-case' => 'ILoveVueCase'
  ```
  
#### capitalCase 

+ Example:

  ```js
  {{ msg | capitalCase }} // 'I LOVE vue-case' => '	I Love Vue Case'
  ```
  
#### headerCase

+ Example:

  ```js
  {{ msg | headerCase }} // 'I LOVE vue-case' => 'I-Love-Vue-Case'
  ```
  
#### titleCase

+ Example:

  ```js
  {{ msg | titleCase }} // 'I LOVE vue-case' => 'I LOVE Vue-Case'
  ```
  
#### pathCase

+ Example:

  ```js
  {{ msg | pathCase }} // 'I LOVE vue-case' => 'i/love/vue/case'
  ```
  
#### paramCase

+ Example:

  ```js
  {{ msg | paramCase }} // 'I LOVE vue-case' => 'i-love-vue-case'
  ```
  
#### dotCase

+ Example:

  ```js
  {{ msg | dotCase }} // 'I LOVE vue-case' => 'i.love.vue.case'
  ```
  
#### snakeCase

+ Example:

  ```js
  {{ msg | snakeCase }} // 'I LOVE vue-case' => 'i_love_vue_case'
  ```
  
#### constantCase

+ Example:

  ```js
  {{ msg | constantCase }} // 'I LOVE vue-case' => 'I_LOVE_VUE_CASE'
  ```
  
#### lowerCase

+ Example:

  ```js
  {{ msg | lowerCase }} // 'I LOVE vue-case' => 'i love vue-case'
  ```
  
#### lowerCaseFirst

+ Example:

  ```js
  {{ msg | lowerCaseFirst }} // 'I LOVE vue-case' => 'i LOVE vue-case'
  ```
  
#### upperCase

+ Example:

  ```js
  {{ msg | upperCase }} // 'I LOVE vue-case' => 'I LOVE VUE-CASE'
  ```
  
#### upperCaseFirst

+ Example:

  ```js
  {{ msg | upperCaseFirst }} // 'I LOVE vue-case' => 'I LOVE vue-case'
  ```
  
#### swapCase

+ Example:

  ```js
  {{ msg | swapCase }} // 'I LOVE vue-case' => 'i love VUE-CASE'
  ```
  
#### sentenceCase

+ Example:

  ```js
  {{ msg | sentenceCase }} // 'I LOVE vue-case' => 'I love vue case'
  ```
  
#### noCase

+ Example:

  ```js
  {{ msg | noCase }} // 'I LOVE vue-case' => 'i love vue case'
  ```

#### isLowerCase

+ Example:

  ```js
  {{ msg | isLowerCase }} // 'I LOVE vue-case' => 'false'
  ```
  
#### isUpperCase

+ Example:

  ```js
  {{ msg | isUpperCase }} // 'I LOVE vue-case' => 'false'
  ```
  
#### truncate

+ Example:

  ```js
  {{ msg | truncate(10) }} // 'I LOVE vue-case' => 'I LOVE vue...'
  ```

## Programmatic Usage

Aside from using filters inside templates you can do this programmatically using default filters object:

```js
this.$options.filters.filterName(value)
```

For example, here's how you can use the `truncate` filter:

```js
this.$options.filters.truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 17) // => Lorem ipsum dolor...
```

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/idimetrix/vue-case/issues) or a [pull request](https://github.com/idimetrix/vue-case/pulls).

## License

[MIT](http://opensource.org/licenses/MIT)