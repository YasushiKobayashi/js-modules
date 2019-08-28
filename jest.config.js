module.exports = {
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    // '@/(.*)$': '<rootDir>/src/$1',
  },
  verbose: true,
  testURL: 'http://localhost/',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?|js?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
