import js from '@eslint/js';
import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  // Add at the end of your config array
{
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
  ignores: ['node_modules', 'dist', 'build'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: './tsconfig.eslint.json',
      sourceType: 'module',
      ecmaVersion: 2020,
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: { react, '@typescript-eslint': tseslint, prettier },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}

];
