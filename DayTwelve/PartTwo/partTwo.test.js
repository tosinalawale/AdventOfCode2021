const { test } = require('@jest/globals');
const { solve } = require('./partTwo');

test('Day Twelve, Part Two: can solve first example', () => {

  const input =
    [
      "start-A",
      "start-b",
      "A-c",
      "A-b",
      "b-d",
      "A-end",
      "b-end"
    ];

  expect(solve(input)).toBe(36);
});

test('Day Twelve, Part Two: solve bigger example', () => {

  const input =
    [
      "fs-end",
      "he-DX",
      "fs-he",
      "start-DX",
      "pj-DX",
      "end-zg",
      "zg-sl",
      "zg-pj",
      "pj-he",
      "RW-he",
      "fs-DX",
      "pj-RW",
      "zg-RW",
      "start-pj",
      "he-WI",
      "zg-he",
      "pj-fs",
      "start-RW"
    ];

  expect(solve(input)).toBe(3509);
});

test('Day Twelve, Part Two: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(93858);
});