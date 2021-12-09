
function countDigitsWithUniqueNumberOfSegments(parsedInput) {
  let counter = 0;

  parsedInput.forEach(inputLine => {
    inputLine.fourDigitOutputValues.forEach(outputValue => {
      if (outputValue.length === 2
        || outputValue.length === 3
        || outputValue.length === 4
        || outputValue.length === 7) counter++;
    });
  });

  return counter;
}

function solve(input) {
  let parsedInput = input.map(inputLine => {
    let splitInputLine = inputLine.split("|");
    return {
      tenSignalPatterns: splitInputLine[0].trimEnd().split(" "),
      fourDigitOutputValues: splitInputLine[1].trimStart().split(" ")
    }
  });

  return countDigitsWithUniqueNumberOfSegments(parsedInput);
}

module.exports = { solve };