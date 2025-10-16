import { defineComponent, createApp } from 'vue';
import { mount } from '@vue/test-utils';
import VueCase, {
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
  useCase,
} from '@/index';

describe('vue-case', () => {
  describe('Direct imports', () => {
    it('camelCase converts text correctly', () => {
      expect(camelCase('hello world')).toBe('helloWorld');
      expect(camelCase('HELLO WORLD')).toBe('helloWorld');
      expect(camelCase('hello-world')).toBe('helloWorld');
    });

    it('pascalCase converts text correctly', () => {
      expect(pascalCase('hello world')).toBe('HelloWorld');
      expect(pascalCase('HELLO WORLD')).toBe('HelloWorld');
      expect(pascalCase('hello-world')).toBe('HelloWorld');
    });

    it('capitalCase converts text correctly', () => {
      expect(capitalCase('hello world')).toBe('Hello World');
      expect(capitalCase('HELLO WORLD')).toBe('Hello World');
      expect(capitalCase('hello-world')).toBe('Hello World');
    });

    it('snakeCase converts text correctly', () => {
      expect(snakeCase('hello world')).toBe('hello_world');
      expect(snakeCase('HELLO WORLD')).toBe('hello_world');
      expect(snakeCase('helloWorld')).toBe('hello_world');
    });

    it('constantCase converts text correctly', () => {
      expect(constantCase('hello world')).toBe('HELLO_WORLD');
      expect(constantCase('helloWorld')).toBe('HELLO_WORLD');
      expect(constantCase('hello-world')).toBe('HELLO_WORLD');
    });

    it('truncate shortens text correctly', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
      expect(truncate('hi', 5)).toBe('hi');
      expect(truncate('hello world')).toBe('hello world'); // default 15
    });

    it('headerCase converts text correctly', () => {
      expect(headerCase('hello world')).toBe('Hello-World');
      expect(headerCase('hello_world')).toBe('Hello-World');
    });

    it('titleCase converts text correctly', () => {
      expect(titleCase('hello world')).toBe('Hello World');
      expect(titleCase('hello_world')).toBe('Hello World');
    });

    it('pathCase converts text correctly', () => {
      expect(pathCase('hello world')).toBe('hello/world');
      expect(pathCase('hello-world')).toBe('hello/world');
    });

    it('paramCase converts text correctly', () => {
      expect(paramCase('hello world')).toBe('hello-world');
      expect(paramCase('helloWorld')).toBe('hello-world');
    });

    it('dotCase converts text correctly', () => {
      expect(dotCase('hello world')).toBe('hello.world');
      expect(dotCase('helloWorld')).toBe('hello.world');
    });

    it('lowerCase converts text correctly', () => {
      expect(lowerCase('HELLO WORLD')).toBe('hello world');
      expect(lowerCase('Hello World')).toBe('hello world');
    });

    it('lowerCaseFirst converts text correctly', () => {
      expect(lowerCaseFirst('HELLO')).toBe('hELLO');
      expect(lowerCaseFirst('Hello')).toBe('hello');
    });

    it('upperCase converts text correctly', () => {
      expect(upperCase('hello world')).toBe('HELLO WORLD');
      expect(upperCase('Hello World')).toBe('HELLO WORLD');
    });

    it('upperCaseFirst converts text correctly', () => {
      expect(upperCaseFirst('hello')).toBe('Hello');
      expect(upperCaseFirst('HELLO')).toBe('HELLO');
    });

    it('swapCase converts text correctly', () => {
      expect(swapCase('Hello World')).toBe('hELLO wORLD');
      expect(swapCase('hello WORLD')).toBe('HELLO world');
    });

    it('sentenceCase converts text correctly', () => {
      expect(sentenceCase('hello world')).toBe('Hello world');
      expect(sentenceCase('HELLO WORLD')).toBe('Hello world');
    });

    it('noCase converts text correctly', () => {
      expect(noCase('helloWorld')).toBe('hello world');
      expect(noCase('hello-world')).toBe('hello world');
    });

    it('isLowerCase checks if text is lowercase', () => {
      expect(isLowerCase('hello')).toBe(true);
      expect(isLowerCase('Hello')).toBe(false);
    });

    it('isUpperCase checks if text is uppercase', () => {
      expect(isUpperCase('HELLO')).toBe(true);
      expect(isUpperCase('Hello')).toBe(false);
    });
  });

  describe('useCase composable', () => {
    it('returns all case methods', () => {
      const methods = useCase();
      
      expect(typeof methods.camelCase).toBe('function');
      expect(typeof methods.pascalCase).toBe('function');
      expect(typeof methods.snakeCase).toBe('function');
      
      expect(methods.camelCase('test case')).toBe('testCase');
      expect(methods.pascalCase('test case')).toBe('TestCase');
      expect(methods.snakeCase('test case')).toBe('test_case');
    });
  });

  describe('Vue plugin', () => {
    it('plugin has install method', () => {
      expect(typeof VueCase).toBe('object');
      expect(typeof VueCase.install).toBe('function');
    });

    it('adds global properties to Vue instance', () => {
      const app = createApp({});
      app.use(VueCase);
      
      // Verify plugin was installed (properties are added to config.globalProperties)
      expect(app.config.globalProperties.$case).toBeDefined();
      expect(typeof app.config.globalProperties.$camelCase).toBe('function');
    });

    it('global properties work in components', () => {
      const TestComponent = defineComponent({
        template: '<div>{{ result }}</div>',
        computed: {
          result() {
            return (this as any).$camelCase('hello world');
          }
        }
      });

      const wrapper = mount(TestComponent, {
        global: {
          plugins: [VueCase],
        },
      });

      expect(wrapper.text()).toBe('helloWorld');
    });

    it('works with multiple case transformations', () => {
      const TestComponent = defineComponent({
        template: `
          <div>
            <span class="camel">{{ camelResult }}</span>
            <span class="pascal">{{ pascalResult }}</span>
            <span class="snake">{{ snakeResult }}</span>
          </div>
        `,
        computed: {
          camelResult() {
            return (this as any).$camelCase('hello world');
          },
          pascalResult() {
            return (this as any).$pascalCase('hello world');
          },
          snakeResult() {
            return (this as any).$snakeCase('hello world');
          }
        }
      });

      const wrapper = mount(TestComponent, {
        global: {
          plugins: [VueCase],
        },
      });

      expect(wrapper.find('.camel').text()).toBe('helloWorld');
      expect(wrapper.find('.pascal').text()).toBe('HelloWorld');
      expect(wrapper.find('.snake').text()).toBe('hello_world');
    });
  });

  describe('Edge cases', () => {
    it('handles empty strings', () => {
      expect(camelCase('')).toBe('');
      expect(pascalCase('')).toBe('');
      expect(truncate('')).toBe('');
    });

    it('handles single words', () => {
      expect(camelCase('hello')).toBe('hello');
      expect(pascalCase('hello')).toBe('Hello');
      expect(snakeCase('hello')).toBe('hello');
    });

    it('handles special characters', () => {
      expect(camelCase('hello@world')).toBe('helloWorld');
      expect(snakeCase('hello@world')).toBe('hello_world');
    });

    it('handles null and undefined in truncate', () => {
      expect(truncate(null as any)).toBe('');
      expect(truncate(undefined as any)).toBe('');
    });
  });

  describe('Browser auto-install', () => {
    it('installs plugin when window.Vue is available', () => {
      // Save original window state
      const originalVue = (window as any).Vue;
      const originalVueCase = (window as any).VueCase;
      
      // Mock window.Vue with createApp
      (window as any).Vue = { createApp };
      (window as any).VueCase = undefined;
      
      // Re-import to trigger auto-install
      jest.isolateModules(() => {
        const module = require('@/index');
        
        // Verify VueCase is exposed on window
        expect((window as any).VueCase).toBeDefined();
        expect(typeof (window as any).VueCase).toBe('object');
        expect(typeof (window as any).VueCase.install).toBe('function');
      });
      
      // Restore original window state
      (window as any).Vue = originalVue;
      (window as any).VueCase = originalVueCase;
    });

    it('does not auto-install when window.Vue is not available', () => {
      // This is the normal test environment - window.Vue doesn't exist
      // Just verify the module can be imported without errors
      expect(VueCase).toBeDefined();
      expect(typeof VueCase.install).toBe('function');
    });
  });
});
