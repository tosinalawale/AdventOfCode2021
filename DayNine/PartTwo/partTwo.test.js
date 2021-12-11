const { test } = require('@jest/globals');
const { solve } = require('./partTwo');

test('Day Nine, Part Two: solve simple example', () => {

  const input =
    [
      "2199943210",
      "3987894921",
      "9856789892",
      "8767896789",
      "9899965678"
    ];

  expect(solve(input)).toBe(1134);
});

test('Day Nine, Part Two: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(1558722);
});