const { test } = require('@jest/globals');
const { solve } = require('./partOne');

test('Day Seven, Part One: solve simple example', () => {

  const input =
    [
      "16,1,2,0,4,2,7,1,2,14"
    ];

  expect(solve(input)).toEqual({ horizonalPos: 2, totalFuelCost: 37 });
});

test('Day Seven, Part One: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(0);
});