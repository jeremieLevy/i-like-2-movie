import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['**/coverage', '**/dist'] },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
      eslintConfigPrettier
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      'vue/no-unused-vars': 'error', // Interdit l'utilisation de variable non lues
      '@typescript-eslint/no-explicit-any': 'warn', // Avertit si any est utilisé
      'vue/multi-word-component-names': 'off' // Nom de composant en une seule ligne
    },
  }
);