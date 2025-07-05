import js from '@eslint/js';
import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

const nodeGlobals = {
  require: 'readonly',
  module: 'readonly',
  process: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
  exports: 'readonly',
  console: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  setInterval: 'readonly',
  clearInterval: 'readonly',
  fetch: 'readonly',
  window: 'readonly',
  document: 'readonly',
};

export default [
  // Node config for config files
  {
    files: [
      'postcss.config.js',
      'tailwind.config.js',
      'vite.config.js',
      'vite.config.ts',
      '*.config.js',
      '*.config.ts',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: nodeGlobals,
    },
    rules: {},
  },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: { react, '@typescript-eslint': tseslint, prettier },
    rules: {
      'no-prototype-builtins': 'off',
      'no-unused-vars': 'warn',
      'no-cond-assign': 'error',
      'no-fallthrough': 'error',
      'no-empty': 'warn',
      'prettier/prettier': 'error',
    },
  },
  // React and TypeScript config for .tsx files
  {
    files: ['**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: { react, '@typescript-eslint': tseslint, prettier },
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
