import { defineComponent, createApp } from 'vue';
import { mount } from '@vue/test-utils';
import VueCase, {
  camelCase,
  pascalCase,
  capitalCase,
  snakeCase,
  constantCase,
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
  });
});
