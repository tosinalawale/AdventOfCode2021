const solve = require('./partOne');

test('Day One, Part One: solve simple example', () => {

  const input =
    [
      "199",
      "200",
      "208",
      "210",
      "200",
      "207",
      "240",
      "269",
      "260",
      "263"
    ];

  expect(solve(input)).toBe(7);
});