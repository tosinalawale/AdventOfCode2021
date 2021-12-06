const { test, expect } = require('@jest/globals');
const solve = require('./partTwo');

test('Day Two, Part Two: solve simple example', () => {

  const input =
    [
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2"
    ];

  expect(solve(input)).toBe(900);
});

test.skip('Day Two, Part Two: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(0);
});