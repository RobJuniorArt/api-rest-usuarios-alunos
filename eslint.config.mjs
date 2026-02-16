import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node }
  },
  {
    rules: {
      'class-methods-use-this': 'off',
      // Permite no máximo 1 linha em branco consecutiva
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],

      // Outras regras que já tínhamos:
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    }
  },
]);
