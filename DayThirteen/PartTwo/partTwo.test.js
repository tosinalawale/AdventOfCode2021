const { test } = require('@jest/globals');
const { displayGrid, buildGrid, solve } = require('./partTwo');


test('Day Thirteen, Part Two: can build and display grid', () => {

  const input =
    [
      "6,10",
      "0,14",
      "9,10",
      "0,3",
      "10,4",
      "4,11",
      "6,0",
      "6,12",
      "4,1",
      "0,13",
      "10,12",
      "3,4",
      "3,0",
      "8,4",
      "1,10",
      "2,14",
      "8,10",
      "9,0",
      "",
      "fold along y=7",
      "fold along x=5"
    ];

  let grid = buildGrid(input);

  expect(displayGrid(grid)).toEqual(
`...#..#..#.
....#......
...........
#..........
...#....#.#
...........
...........
...........
...........
...........
.#....#.##.
....#......
......#...#
#..........
#.#........`
  );
});

test('Day Thirteen, Part One: can process all fold instruction', () => {

  const input =
    [
      "6,10",
      "0,14",
      "9,10",
      "0,3",
      "10,4",
      "4,11",
      "6,0",
      "6,12",
      "4,1",
      "0,13",
      "10,12",
      "3,4",
      "3,0",
      "8,4",
      "1,10",
      "2,14",
      "8,10",
      "9,0",
      "",
      "fold along y=7",
      "fold along x=5"
    ];

  expect(solve(input)).toBe(17);
});

test.only('Day Thirteen, Part Two: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(716);
});