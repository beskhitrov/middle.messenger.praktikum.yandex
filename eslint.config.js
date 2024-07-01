import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier';
// import stylelint from 'eslint-plugin-stylelint';

const compat = new FlatCompat({
  baseDirectory: './', // Укажите корневую директорию для корректного разрешения путей
});

export default [
  {
    ignores: ['node_modules/**', 'dist/**'], // Ignore common directories
  },
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: '@typescript-eslint/parser', // Use TypeScript parser
      parserOptions: {
        project: './tsconfig.json', // Specify the TypeScript config file
        tsconfigRootDir: './', // Ensure paths are resolved correctly
      },
      ecmaVersion: 'latest', // Use the latest ECMAScript version
      sourceType: 'module', // Use ES modules
    },
    plugins: {
      // '@typescript-eslint': '@typescript-eslint/eslint-plugin', // Use TypeScript ESLint plugin
      prettier: prettier,
      // stylelint: stylelint,
    },
    rules: {
      // 'no-unused-vars': 'off', // Example: Turn off the no-unused-vars rule
      // '@typescript-eslint/no-unused-vars': ['error'], // Enable the TypeScript-specific no-unused-vars rule
      'prettier/prettier': 'error', // Enable Prettier formatting as an ESLint rule
      // 'stylelint/stylelint': [ 'error', { configFile: './.stylelintrc.json' } ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('plugin:prettier/recommended'),
];
