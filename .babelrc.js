module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
  ],
  env: {
    test: {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-export-default-from'],
    },
  },
};
