const { test } = require('@jest/globals');
const { showResultAfterSteps, solve } = require('./partOne');


test('Day Eleven, Part One: can show result after 1 step', () => {

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

  expect(showResultAfterSteps(1, input)).toEqual(
    {
      grid: [
    "6594254334",
    "3856965822",
    "6375667284",
    "7252447257",
    "7468496589",
    "5278635756",
    "3287952832",
    "7993992245",
    "5957959665",
    "6394862637"
  ],
  flashes: 0});

});

test('Day Eleven, Part One: can show result after 2 steps', () => {

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

  expect(showResultAfterSteps(2, input)).toEqual(
    {
      grid: [
    "8807476555",
    "5089087054",
    "8597889608",
    "8485769600",
    "8700908800",
    "6600088989",
    "6800005943",
    "0000007456",
    "9000000876",
    "8700006848"
  ],
  flashes: 35});

});

test('Day Eleven, Part One: solve simple example', () => {

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

  expect(solve(input)).toBe(1656);
});

test('Day Eleven, Part One: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(1615);
});