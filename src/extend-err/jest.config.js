const jest = require('../../jest.config.js');

jest.reporters = [
  'default',
  [
    '../../node_modules/jest-html-reporter',
    {
      pageTitle: 'Test Report',
    },
  ],
];

module.exports = jest;
