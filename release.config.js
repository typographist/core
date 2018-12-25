require('dotenv').config();

module.exports = {
  branch: 'master',
  plugins: [
    '@semantic-release/changelog',
    '@semantic-release/commit-analyzer',
    '@semantic-release/git',
    '@semantic-release/github',
    '@semantic-release/npm',
    '@semantic-release/release-notes-generator',
  ],
};
