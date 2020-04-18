module.exports = {
  reporters: [
    'default',
    [
      '../../node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
      },
    ],
  ],
  unmockedModulePathPatterns: ['react', 'enzyme', 'jest-enzyme'],
  transform: {
    '^.+\\.(j|t)s?$': 'ts-jest',
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
      diagnostics: false,
    },
  },
  // https://stackoverflow.com/questions/42260218/jest-setup-syntaxerror-unexpected-token-export
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  verbose: true,
  testURL: 'http://localhost/',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?|js?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
