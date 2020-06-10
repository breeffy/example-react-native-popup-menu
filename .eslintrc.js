module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-dangle': 'off',
    'react-native/no-inline-styles': 'off',
    curly: 'off'
  }
};
