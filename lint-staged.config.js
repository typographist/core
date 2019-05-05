module.exports = {
  linters: {
    '*.{js,json}': ['eslint --fix', 'prettier --write', 'git add'],
  },
};
