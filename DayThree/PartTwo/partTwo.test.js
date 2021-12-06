const { test, expect } = require('@jest/globals');
const { solve } = require('./partTwo');
const readInputFile = require('../../readInputFile');

test('Day Three, Part Two: solve simple example', () => {

  const input =
    [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010"
    ];

  expect(solve(input)).toBe(230);
});

test('Day Three, Part Two: Calculate result', () => {

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(0);
});