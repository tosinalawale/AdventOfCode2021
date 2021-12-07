const { test } = require('@jest/globals');
const { solve } = require('./partTwo');

test('Day Seven, Part Two: solve simple example', () => {

  const input =
    [
      "16,1,2,0,4,2,7,1,2,14"
    ];

  expect(solve(input)).toEqual({ horizonalPos: 5, totalFuelCost: 168 });
});

test('Day Seven, Part Two: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(0);
});