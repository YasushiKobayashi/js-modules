const jest = require('../../jest.config.js')

jest.moduleNameMapper = {
  ...jest.moduleNameMapper,
  '@/(.*)$': '<rootDir>/src/$1',
}

module.exports = jest
