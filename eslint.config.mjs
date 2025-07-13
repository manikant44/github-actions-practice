import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      // 👇 Override the default "error" and make it a warning
      'no-unused-vars': 'warn',
    },
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.test.js'],
    plugins: { jest },
    languageOptions: {
      globals: globals.jest,
    },
    rules: {
      // Optional: enable Jest rules
      'jest/no-disabled-tests': 'warn',
      'jest/no-identical-title': 'error',
    },
  },
]);
