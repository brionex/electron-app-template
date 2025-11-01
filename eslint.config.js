import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ['**/node_modules', '**/dist', '**/.vite', '**/out']
  },
  {
    files: ['src/main/**/*.ts', 'src/preload/**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        project: ['./tsconfig.main.json', './tsconfig.preload.json'],
        sourceType: 'module'
      },
      globals: globals.node
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules
    }
  },
  {
    files: ['src/renderer/**/*.{ts,tsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        project: ['./tsconfig.renderer.json'],
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module'
      },
      globals: globals.browser
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  }
]
