module.exports = {
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/lib/',
    '/esm/',
    '/public/',
    '/dist/',
  ],
  coverageReporters: ['lcov'],
  globals: {
    __DEV__: true,
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  setupFiles: [],
  testMatch: ['**/?(*.)+(spec|test).{js,jsx}'],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  verbose: true,
};
