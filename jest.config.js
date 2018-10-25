module.exports = {
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/packages/*/node_modules/',
    '<rootDir>/packages/*/public/',
    '<rootDir>/packages/*/esm/',
    '<rootDir>/packages/*/build/',
    '<rootDir>/packages/*/lib/',
    '<rootDir>/packages/*/tmp/',
  ],
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
