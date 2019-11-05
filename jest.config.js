module.exports = {
  collectCoverage: false,
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testRegex: '((\\.|/)(test|spec))\\.js$',
  coveragePathIgnorePatterns: ['/node_modules/'],
};
