module.exports = {
  setupFilesAfterEnv: ['<rootDir>/tools/testSetup.js'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(css|scss)$': '<rootDir>/tools/fileTransform.js',
  },
  moduleNameMapper: { '\\.(css|scss|sass|jpg|jpeg|gif|svg|png|ico)$': '<rootDir>/tools/fileTransform.js' },
  collectCoverageFrom: [
    '!src/app/*.spec.js',
    '!src/app/test/**',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  testURL: 'http://localhost',
};
