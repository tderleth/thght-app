module.exports = {
  collectCoverage: true,
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  preset: 'react-native',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
      },
    },
  },
};
