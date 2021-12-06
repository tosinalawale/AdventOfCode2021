const { test } = require('@jest/globals');
const { solve } = require('./partTwo');


test('Day Six, Part Two: solve simple example', () => {

  const input =
    [
      "3,4,3,1,2"
    ];

  expect(solve(input)).toBe(26984457539);
});

test('Day Six, Part Two: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(0);
});