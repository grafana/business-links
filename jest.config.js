// force timezone to UTC to allow tests to work regardless of local timezone
// generally used by snapshots, but can affect specific tests
process.env.TZ = 'UTC';

const { nodeModulesToTransform, grafanaESModules } = require('./.config/jest/utils');

module.exports = {
  // Jest configuration provided by Grafana scaffolding
  ...require('./.config/jest.config'),
  moduleNameMapper: {
    ...require('./.config/jest.config').moduleNameMapper,
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@grafana/llm$': '<rootDir>/src/__mocks__/@grafana/llm.ts',
  },
  transformIgnorePatterns: [
    nodeModulesToTransform([
      ...grafanaESModules,
      '@grafana/llm',
      '@modelcontextprotocol/sdk',
      'pkce-challenge',
      'eventsource-parser',
    ]),
  ],

  /**
   * Reset mocks implementation between tests
   */
  resetMocks: true,

  /**
   * Randomize the order of the tests to exclude dependencies between tests
   */
  randomize: true,
};
