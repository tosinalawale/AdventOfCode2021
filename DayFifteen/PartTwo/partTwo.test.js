const { test } = require('@jest/globals');
const { findTotalRiskForShortestPath, getExtendedGrid } = require('./partTwo');


test('Day Fifteen, Part Two: can extend out the grid 5 times in both dimensions', () => {

  const input =
    [
      "116",
      "138"
    ];

  expect(getExtendedGrid(input).map(row => row.map(c => c.weight).join(""))).toEqual(
    [
      "116227338449551",
      "138249351462573",
      "227338449551662",
      "249351462573684",
      "338449551662773",
      "351462573684795",
      "449551662773884",
      "462573684795816",
      "551662773884995",
      "573684795816927",
    ]
  );
});

test('Day Fifteen, Part Two: can find path with lowest total risk for extended grid', () => {

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

  expect(findTotalRiskForShortestPath(input)).toEqual(315);
});

test('Day Fifteen, Part Two: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(findTotalRiskForShortestPath(input)).toBe(2885);
});