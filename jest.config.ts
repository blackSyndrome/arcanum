import type { Config } from 'jest';
const nextJest = require('next/jest.js');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  
  // Module name mapper to resolve path aliases
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust this according to your directory structure
  },
};

module.exports = createJestConfig(config);
