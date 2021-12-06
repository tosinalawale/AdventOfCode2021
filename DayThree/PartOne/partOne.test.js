const { test } = require('@jest/globals');
const { calculateGammaRate, calculateEpsilonRate, solve } = require('./partOne');

test.skip('Day One, Part One: calculate gamma rate(made of most common bits)', () => {

  const input =
    [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "01111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010"
    ];

  expect(calculateGammaRate(input)).toBe(22);
});

test.skip('Day One, Part One: calculate epsilon rate(made of most least bits)', () => {

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

  expect(calculateEpsilonRate(input)).toBe(9);
});

test.skip('Day One, Part One: solve simple example', () => {

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

  expect(solve(input)).toBe(198);
});

test.skip('Day Three, Part One: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(0);
});