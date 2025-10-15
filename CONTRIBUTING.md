# Contributing to Vue-Case

Thank you for your interest in contributing to Vue-Case! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/idimetrix/vue-case.git
   cd vue-case
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm serve
   # or
   npm run serve
   ```

## 🛠️ Development Workflow

### Project Structure

```
vue-case/
├── src/
│   ├── index.ts          # Main plugin entry point
│   ├── types.ts          # TypeScript type definitions
│   ├── main.ts           # Demo app entry
│   ├── App.vue           # Demo component
│   └── shims-vue.d.ts    # Vue type declarations
├── tests/
│   └── unit/
│       └── filters.spec.ts
├── public/
├── dist/                 # Build output
└── package.json
```

### Available Scripts

- `pnpm serve` - Start development server
- `pnpm build` - Build library for production
- `pnpm test:unit` - Run unit tests
- `pnpm lint` - Lint and fix files

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Provide proper type definitions
- Avoid using `any` type when possible
- Export types from `types.ts`

### Code Style

- Follow the existing code style
- Use Prettier for formatting (auto-formatted on commit)
- Use ESLint rules defined in `.eslintrc.js`
- Use meaningful variable and function names

### Commit Messages

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat: add kebabCase transformation method
fix: handle empty strings in truncate function
docs: update README with TypeScript examples
```

## 🧪 Testing

### Writing Tests

1. Add tests in `tests/unit/`
2. Use Jest and Vue Test Utils
3. Test all new functionality
4. Ensure edge cases are covered

Example:
```typescript
import { camelCase } from '@/index';

describe('camelCase', () => {
  it('converts text correctly', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  it('handles empty strings', () => {
    expect(camelCase('')).toBe('');
  });
});
```

### Running Tests

```bash
pnpm test:unit
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Reproduction**: Steps to reproduce
3. **Expected behavior**: What should happen
4. **Actual behavior**: What actually happens
5. **Environment**: Vue version, browser, OS
6. **Code sample**: Minimal reproduction code

## ✨ Feature Requests

For feature requests, please include:

1. **Use case**: Why is this feature needed?
2. **Proposed solution**: How should it work?
3. **Alternatives**: Other solutions considered
4. **Examples**: Code examples of usage

## 🔄 Pull Request Process

1. **Create a branch**
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make your changes**
   - Write code
   - Add tests
   - Update documentation

3. **Commit your changes**
   ```bash
   git commit -m "feat: add my feature"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/my-feature
   ```

5. **Create Pull Request**
   - Provide clear description
   - Reference related issues
   - Include screenshots if applicable

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] New tests added for new functionality
- [ ] Documentation updated
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Commit messages follow convention

## 📚 Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for new functions
- Update TypeScript types
- Include code examples

## 🤝 Code Review

- Be respectful and constructive
- Explain your suggestions
- Be open to feedback
- Review promptly

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions help make Vue-Case better for everyone. Thank you for taking the time to contribute!

## ❓ Questions?

Feel free to open an issue for questions or reach out to the maintainers.

---

Happy coding! 🎉

