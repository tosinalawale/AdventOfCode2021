const { test } = require('@jest/globals');
const { solve } = require('./partTwo');


test('Day Eleven, Part Two: can correctly solve grid where all octopuses flash after one step', () => {

  const input =
    [
      "9999999999",
      "9999999999",
      "9999999999",
      "9999999999",
      "9999999999",
      "9999999999",
      "9999999999",
      "9999999999",
      "9999999999",
      "9999999999"
    ];

  expect(solve(input)).toEqual(1);

});

test('Day Eleven, Part Two: solve simple example', () => {

  const input =
    [
      "5483143223",
      "2745854711",
      "5264556173",
      "6141336146",
      "6357385478",
      "4167524645",
      "2176841721",
      "6882881134",
      "4846848554",
      "5283751526"
    ];

  expect(solve(input)).toBe(195);
});

test('Day Eleven, Part Two: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(249);
});