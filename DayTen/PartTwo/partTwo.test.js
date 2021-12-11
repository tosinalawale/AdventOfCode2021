const { test } = require('@jest/globals');
const { checkSyntax, calculateScoreForClosingCharacters, solve } = require('./partTwo');

test('Day Ten, Part Two: checkSyntax on a valid (and complete) line of input returns empty expected/found pair', () => {

  const input =
    [
"([])"
    ];

  expect(checkSyntax(input[0])).toStrictEqual({ expected: "", found: ""});
});

test('Day Ten, Part Two: can find incorrect closing character for a line of input', () => {

  const input =
    [
"{([(<{}[<>[]}>{[]{[(<()>"
    ];

  expect(checkSyntax(input[0])).toStrictEqual({ expected: "]", found: "}"});
});

test('Day Ten, Part Two: can find closing characters for an incomplete line of input', () => {

  const input =
    [
"[(()[<>])]({[<{<<[]>>("
    ];

  expect(checkSyntax(input[0])).toStrictEqual({ expected: ")}>]})", found: ""});
});


test('Day Ten, Part Two: can calculate score for a sequence of closing characters', () => {

  const input =
    [
"}}]])})]"
    ];

  expect(calculateScoreForClosingCharacters(input[0])).toEqual(288957);
});


test('Day Ten, Part Two: solve simple example', () => {

  const input =
    [
"[({(<(())[]>[[{[]{<()<>>",
"[(()[<>])]({[<{<<[]>>(",
"{([(<{}[<>[]}>{[]{[(<()>",
"(((({<>}<{<{<>}{[]{[]{}",
"[[<[([]))<([[{}[[()]]]",
"[{[{({}]{}}([{[{{{}}([]",
"{<[[]]>}<{[{[{[]{()[[[]",
"[<(<(<(<{}))><([]([]()",
"<{([([[(<>()){}]>(<<{{",
"<{([{{}}[<[[[<>{}]]]>[]]"
    ];

  expect(solve(input)).toBe(288957);
});

test('Day Ten, Part Two: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(2165057169);
});