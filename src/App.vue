<template>
  <div id="app">
    <div class="header">
      <h1>Vue-Case - Vue 3 + TypeScript Demo</h1>
      <p>Try different case transformations with the input below</p>
    </div>
    
    <div class="input-section">
      <label for="text-input">Input Text:</label>
      <textarea 
        id="text-input"
        v-model="text" 
        placeholder="Enter text to transform..."
      ></textarea>
    </div>

    <div class="tabs">
      <button 
        :class="{ active: activeTab === 'options' }"
        @click="activeTab = 'options'"
      >
        Options API Example
      </button>
      <button 
        :class="{ active: activeTab === 'composition' }"
        @click="activeTab = 'composition'"
      >
        Composition API Example
      </button>
    </div>

    <div v-if="activeTab === 'options'" class="results">
      <h2>Using Options API (this.$case)</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Method</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>camelCase</td>
            <td>{{ $camelCase(text) }}</td>
          </tr>
          <tr>
            <td>pascalCase</td>
            <td>{{ $pascalCase(text) }}</td>
          </tr>
          <tr>
            <td>capitalCase</td>
            <td>{{ $capitalCase(text) }}</td>
          </tr>
          <tr>
            <td>headerCase</td>
            <td>{{ $headerCase(text) }}</td>
          </tr>
          <tr>
            <td>titleCase</td>
            <td>{{ $titleCase(text) }}</td>
          </tr>
          <tr>
            <td>pathCase</td>
            <td>{{ $pathCase(text) }}</td>
          </tr>
          <tr>
            <td>paramCase</td>
            <td>{{ $paramCase(text) }}</td>
          </tr>
          <tr>
            <td>dotCase</td>
            <td>{{ $dotCase(text) }}</td>
          </tr>
          <tr>
            <td>snakeCase</td>
            <td>{{ $snakeCase(text) }}</td>
          </tr>
          <tr>
            <td>constantCase</td>
            <td>{{ $constantCase(text) }}</td>
          </tr>
          <tr>
            <td>lowerCase</td>
            <td>{{ $lowerCase(text) }}</td>
          </tr>
          <tr>
            <td>lowerCaseFirst</td>
            <td>{{ $lowerCaseFirst(text) }}</td>
          </tr>
          <tr>
            <td>upperCase</td>
            <td>{{ $upperCase(text) }}</td>
          </tr>
          <tr>
            <td>upperCaseFirst</td>
            <td>{{ $upperCaseFirst(text) }}</td>
          </tr>
          <tr>
            <td>swapCase</td>
            <td>{{ $swapCase(text) }}</td>
          </tr>
          <tr>
            <td>sentenceCase</td>
            <td>{{ $sentenceCase(text) }}</td>
          </tr>
          <tr>
            <td>noCase</td>
            <td>{{ $noCase(text) }}</td>
          </tr>
          <tr>
            <td>isLowerCase</td>
            <td>{{ $isLowerCase(text) }}</td>
          </tr>
          <tr>
            <td>isUpperCase</td>
            <td>{{ $isUpperCase(text) }}</td>
          </tr>
          <tr>
            <td>truncate(10)</td>
            <td>{{ $truncate(text, 10) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="activeTab === 'composition'" class="results">
      <h2>Using Composition API (useCase)</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Method</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>camelCase</td>
            <td>{{ camelCase(text) }}</td>
          </tr>
          <tr>
            <td>pascalCase</td>
            <td>{{ pascalCase(text) }}</td>
          </tr>
          <tr>
            <td>capitalCase</td>
            <td>{{ capitalCase(text) }}</td>
          </tr>
          <tr>
            <td>headerCase</td>
            <td>{{ headerCase(text) }}</td>
          </tr>
          <tr>
            <td>titleCase</td>
            <td>{{ titleCase(text) }}</td>
          </tr>
          <tr>
            <td>pathCase</td>
            <td>{{ pathCase(text) }}</td>
          </tr>
          <tr>
            <td>paramCase</td>
            <td>{{ paramCase(text) }}</td>
          </tr>
          <tr>
            <td>dotCase</td>
            <td>{{ dotCase(text) }}</td>
          </tr>
          <tr>
            <td>snakeCase</td>
            <td>{{ snakeCase(text) }}</td>
          </tr>
          <tr>
            <td>constantCase</td>
            <td>{{ constantCase(text) }}</td>
          </tr>
          <tr>
            <td>lowerCase</td>
            <td>{{ lowerCase(text) }}</td>
          </tr>
          <tr>
            <td>lowerCaseFirst</td>
            <td>{{ lowerCaseFirst(text) }}</td>
          </tr>
          <tr>
            <td>upperCase</td>
            <td>{{ upperCase(text) }}</td>
          </tr>
          <tr>
            <td>upperCaseFirst</td>
            <td>{{ upperCaseFirst(text) }}</td>
          </tr>
          <tr>
            <td>swapCase</td>
            <td>{{ swapCase(text) }}</td>
          </tr>
          <tr>
            <td>sentenceCase</td>
            <td>{{ sentenceCase(text) }}</td>
          </tr>
          <tr>
            <td>noCase</td>
            <td>{{ noCase(text) }}</td>
          </tr>
          <tr>
            <td>isLowerCase</td>
            <td>{{ isLowerCase(text) }}</td>
          </tr>
          <tr>
            <td>isUpperCase</td>
            <td>{{ isUpperCase(text) }}</td>
          </tr>
          <tr>
            <td>truncate(10)</td>
            <td>{{ truncate(text, 10) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCase } from './index';

// Composition API: Use the composable
const {
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
  truncate,
} = useCase();

// Reactive state
const text = ref('I LOVE vue-case');
const activeTab = ref<'options' | 'composition'>('composition');
</script>

<style lang="scss" scoped>
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

  .header {
    text-align: center;
    margin-bottom: 30px;

    h1 {
      color: #42b883;
      margin-bottom: 10px;
    }

    p {
      color: #666;
      font-size: 16px;
    }
  }

  .input-section {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #333;
    }

    textarea {
      padding: 12px 16px;
      width: 100%;
      display: block;
      box-sizing: border-box;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      font-family: inherit;
      min-height: 80px;
      transition: border-color 0.3s;

      &:focus {
        outline: none;
        border-color: #42b883;
      }
    }
  }

  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    button {
      flex: 1;
      padding: 12px 24px;
      background: #f5f5f5;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: #e8e8e8;
      }

      &.active {
        background: #42b883;
        color: white;
        border-color: #42b883;
      }
    }
  }

  .results {
    h2 {
      color: #333;
      margin-bottom: 20px;
      font-size: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      thead {
        background: #42b883;
        color: white;

        th {
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid #eee;

          &:last-child {
            border-bottom: none;
          }

          &:hover {
            background: #f9f9f9;
          }

          td {
            padding: 12px 16px;

            &:first-child {
              font-weight: 600;
              color: #555;
              width: 180px;
            }

            &:last-child {
              color: #333;
              font-family: 'Monaco', 'Courier New', monospace;
            }
          }
        }
      }
    }
  }
}
</style>
