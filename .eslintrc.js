module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {},
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
