module.exports = {
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    'node_modules/',
    'public/',
    'esm/',
    'build/',
    'lib/',
    'tmp/',
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
