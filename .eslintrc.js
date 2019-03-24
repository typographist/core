module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'jest'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'no-restricted-syntax': 0,
    'no-restricted-properties': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'no-restricted-globals': 0,
    'no-unused-vars': 1,
  },
};
