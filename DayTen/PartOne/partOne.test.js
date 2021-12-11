const { test } = require('@jest/globals');
const { checkSyntax, solve } = require('./partOne');

test('Day Ten, Part One: checkSyntax on a valid line of input returns empty expected/found pair', () => {

  const input =
    [
"([])"
    ];

  expect(checkSyntax(input[0])).toStrictEqual({ expected: "", found: ""});
});

test('Day Ten, Part One: can find incorrect closing character for a line of input', () => {

  const input =
    [
"{([(<{}[<>[]}>{[]{[(<()>"
    ];

  expect(checkSyntax(input[0])).toStrictEqual({ expected: "]", found: "}"});
});


test('Day Ten, Part One: solve simple example', () => {

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

  expect(solve(input)).toBe(26397);
});

test('Day Ten, Part One: Calculate result', () => {

  const readInputFile = require('../../readInputFile');

  const input = readInputFile(__dirname);

  expect(solve(input)).toBe(216297);
});