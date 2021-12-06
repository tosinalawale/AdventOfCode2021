const { test } = require('@jest/globals');
const solve = require('./partOne');

test('Day One, Part One: solve simple example', () => {

  const input =
    [
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2"
    ];

  expect(solve(input)).toBe(150);
});

test.skip('Day One, Part One: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(0);
});