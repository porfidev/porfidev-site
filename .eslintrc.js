module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: { version: 'detect' },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
