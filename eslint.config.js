import js from '@eslint/js'
import globals from 'globals'
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintReact.configs["recommended-typescript"],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // any type allowed
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // no unused variables
      "@eslint-react/no-missing-key": "warn", // keys in lists
      'react-hooks/rules-of-hooks': 'error', // hooks correct order
      'no-console': ['warn', { allow: ['warn', 'error'] }], //console.warn/error allowed in prod
      'no-var': 'error', // let/const used only
      'prefer-const': 'error', // immutable vars const
      'no-empty-function': 'warn', // empty functions warn
    },
  },
])
