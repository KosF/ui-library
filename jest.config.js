import * as aliases from 'alias-hq';

export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/types.ts',
    '!src/index.tsx',
    '!src/lib/index.ts',
    '!src/common/**/*',
  ],
  coverageReporters: ['text'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  modulePaths: ['<rootDir>/src'],
  testMatch: [
    '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '.(css|sass|scss)$',
  ],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.ts',
    ...aliases.get('jest'), // Gets paths (alias) from `tsconfig.json` file
  },
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    'tsx',
    'ts',
    'js',
    'json',
    'jsx',
    'node',
  ],
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
};
