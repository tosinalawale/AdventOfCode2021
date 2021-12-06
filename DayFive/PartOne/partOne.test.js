const { test } = require('@jest/globals');
const { parseInputIntoLines, findLargestCoords, displayLineDiagram, solve } = require('./partOne');


test('Day Five, Part One: can parse input into line objects', () => {

  const input =
    [
      "0,9 -> 5,9",
      "8,0 -> 0,8"
    ];

  expect(parseInputIntoLines(input)).toEqual(
    [
      { start: { x: 0, y: 9 }, end: { x: 5, y: 9 } },
      { start: { x: 8, y: 0 }, end: { x: 0, y: 8 } }
    ]
  );
});

test('Day Five, Part One: can find largest X and Y coordinates', () => {

  const input =
    [
      { start: { x: 0, y: 9 }, end: { x: 5, y: 9 } },
      { start: { x: 8, y: 0 }, end: { x: 0, y: 8 } }
    ];

  expect(findLargestCoords(input)).toEqual( { largestX: 8, largestY: 9 });
});

test('Day Five, Part One: can draw single vertical line', () => {

  const input =
    [
      "7,0 -> 7,4"
    ];

  expect(displayLineDiagram(input)).toBe(
`.......1
.......1
.......1
.......1
.......1`
  );
});

test('Day Five, Part One: can draw single horiontal line', () => {

  const input =
    [
      "3,4 -> 1,4"
    ];

  expect(displayLineDiagram(input)).toBe(
`....
....
....
....
.111`
  );
});


test('Day Five, Part One: can build line diagram', () => {

  const input =
    [
      "0,9 -> 5,9",
      "8,0 -> 0,8",
      "9,4 -> 3,4",
      "2,2 -> 2,1",
      "7,0 -> 7,4",
      "6,4 -> 2,0",
      "0,9 -> 2,9",
      "3,4 -> 1,4",
      "0,0 -> 8,8",
      "5,5 -> 8,2"
    ];

  expect(displayLineDiagram(input)).toBe(
`.......1..
..1....1..
..1....1..
.......1..
.112111211
..........
..........
..........
..........
222111....`
  );
});

test('Day Five, Part One: solve simple example', () => {

  const input =
    [
      "0,9 -> 5,9",
      "8,0 -> 0,8",
      "9,4 -> 3,4",
      "2,2 -> 2,1",
      "7,0 -> 7,4",
      "6,4 -> 2,0",
      "0,9 -> 2,9",
      "3,4 -> 1,4",
      "0,0 -> 8,8",
      "5,5 -> 8,2"
    ];

  expect(solve(input)).toBe(5);
});

test('Day Five, Part One: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(0);
});