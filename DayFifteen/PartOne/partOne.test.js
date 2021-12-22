const { test } = require('@jest/globals');
const { findTotalRiskForShortestPath } = require('./partOne');

test('Day Fifteen, Part One: can find path with lowest total risk', () => {

  const input =
    [
      "1163751742",
      "1381373672",
      "2136511328",
      "3694931569",
      "7463417111",
      "1319128137",
      "1359912421",
      "3125421639",
      "1293138521",
      "2311944581"
    ];

  expect(findTotalRiskForShortestPath(input)).toEqual(40);
});

test('Day Fifteen, Part One: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(findTotalRiskForShortestPath(input)).toBe(589);
});
