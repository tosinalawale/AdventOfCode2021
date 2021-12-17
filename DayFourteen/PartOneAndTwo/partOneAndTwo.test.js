const { test } = require('@jest/globals');
const { resultAfterStepsProcessed } = require('./partOneAndTwo');

test('Day Fourteen, Part One: can process one step and return most common - least common element', () => {

  const input =
    [
      "NNCB",
      "",
      "CH -> B",
      "HH -> N",
      "CB -> H",
      "NH -> C",
      "HB -> C",
      "HC -> B",
      "HN -> C",
      "NN -> C",
      "BH -> H",
      "NC -> B",
      "NB -> B",
      "BN -> B",
      "BB -> N",
      "BC -> B",
      "CC -> N",
      "CN -> C",
    ];

  expect(resultAfterStepsProcessed(1, input)).toBe(1);
});

test('Day Fourteen, Part One: can process two steps and return most common - least common element', () => {

  const input =
    [
      "NNCB",
      "",
      "CH -> B",
      "HH -> N",
      "CB -> H",
      "NH -> C",
      "HB -> C",
      "HC -> B",
      "HN -> C",
      "NN -> C",
      "BH -> H",
      "NC -> B",
      "NB -> B",
      "BN -> B",
      "BB -> N",
      "BC -> B",
      "CC -> N",
      "CN -> C",
    ];

  expect(resultAfterStepsProcessed(2, input)).toBe(5);
});

test('Day Fourteen, Part One: can process three steps and return most common - least common element', () => {

  const input =
    [
      "NNCB",
      "",
      "CH -> B",
      "HH -> N",
      "CB -> H",
      "NH -> C",
      "HB -> C",
      "HC -> B",
      "HN -> C",
      "NN -> C",
      "BH -> H",
      "NC -> B",
      "NB -> B",
      "BN -> B",
      "BB -> N",
      "BC -> B",
      "CC -> N",
      "CN -> C",
    ];

  expect(resultAfterStepsProcessed(3, input)).toBe(7);
});

test('Day Fourteen, Part One: can solve simple example', () => {

  const input =
    [
      "NNCB",
      "",
      "CH -> B",
      "HH -> N",
      "CB -> H",
      "NH -> C",
      "HB -> C",
      "HC -> B",
      "HN -> C",
      "NN -> C",
      "BH -> H",
      "NC -> B",
      "NB -> B",
      "BN -> B",
      "BB -> N",
      "BC -> B",
      "CC -> N",
      "CN -> C",
    ];

  expect(resultAfterStepsProcessed(10, input)).toBe(1588);
});

test('Day Fourteen, Part One: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(resultAfterStepsProcessed(10, input)).toBe(3118);
});

test('Day Fourteen, Part Two: can solve simple example', () => {

  const input =
    [
      "NNCB",
      "",
      "CH -> B",
      "HH -> N",
      "CB -> H",
      "NH -> C",
      "HB -> C",
      "HC -> B",
      "HN -> C",
      "NN -> C",
      "BH -> H",
      "NC -> B",
      "NB -> B",
      "BN -> B",
      "BB -> N",
      "BC -> B",
      "CC -> N",
      "CN -> C",
    ];

  expect(resultAfterStepsProcessed(40, input)).toBe(2188189693529);
});

test('Day Fourteen, Part Two: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(resultAfterStepsProcessed(40, input)).toBe(4332887448171);
});