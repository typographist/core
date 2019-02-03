module.exports = {
  'lint-staged': {
    linters: {
      '*.{js,json}': ['eslint --fix', 'prettier --write', 'git add'],
    },
  },
};
