require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser', // Especifica o analisador ESLint
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaVersion: 2021, // Permite a análise de recursos modernos do ECMAScript
    sourceType: 'module' // Permite o uso de imports
  },
  env: {
    es6: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/eslint-config-typescript'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0
  }
}
