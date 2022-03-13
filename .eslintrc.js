module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    warnOnUnsupportedTypeScriptVersion: false
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'vue'
  ],
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.test.js'
      ],
      env: {
        jest: true
      }
    }
  ],
  rules: {}
}
