module.exports = {
  coverageDirectory: './coverage',
  collectCoverageFrom: ['packages/*/src/**/*.{js,jsx}'],
  coverageReporters: ['lcov'],
  globals: {
    __DEV__: true,
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  roots: ['<rootDir>/packages'],
  setupFiles: [],
  testMatch: ['**/?(*.)+(spec|test).{js,jsx}'],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  verbose: true,
};
