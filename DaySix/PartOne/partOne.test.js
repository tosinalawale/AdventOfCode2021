const { test } = require('@jest/globals');
const { solve } = require('./partOne');

test('Day Six, Part One: solve simple example', () => {

  const input =
    [
      "3,4,3,1,2"
    ];

  expect(solve(input)).toBe(5934);
});

test('Day Six, Part One: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(0);
});