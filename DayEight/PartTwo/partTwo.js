
function findSetDifference(a, b) {
  let diff = [...a].filter(x => !b.has(x));
  return diff;
}

function deduceOutputDigitsAndCalculateTotalSum(parsedInput) {
  let totalSum = 0;

  parsedInput.forEach(inputLine => {
    let mappedSignalPatterns = deduceSignalPatternsForEachDigit(inputLine);

    const patternMappingDictionary = createPatternMappingDictionary(mappedSignalPatterns);
    
    let outputDigits = inputLine.fourDigitOutputValues.map(p => {
      return patternMappingDictionary[p.split("").sort().join("")];
    });

    totalSum += parseInt(outputDigits.join(""));
  });

  return totalSum;
}

function deduceSignalPatternsForEachDigit(inputLine) {
  const segments = {
    top: "",
    middle: "",
    bottom: "",
    topLeft: "",
    topRight: "",
    bottomLeft: "",
    bottomRight: ""
  };

  let mappedSignalPatterns = Array(10).fill("");
  inputLine.tenSignalPatterns.forEach(pattern => {
    switch (pattern.length) {
      case 2:
        mappedSignalPatterns[1] = new Set(pattern);
        break;
      case 3:
        mappedSignalPatterns[7] = new Set(pattern);
        break;
      case 4:
        mappedSignalPatterns[4] = new Set(pattern);
        break;
      case 7:
        mappedSignalPatterns[8] = new Set(pattern);
        break;
    }
  });

  inputLine.tenSignalPatterns.filter(pattern => pattern.length === 6)
    .forEach(
      pattern => {
        let lettersInPattern = new Set(pattern);
        let middleAndTopLeft = findSetDifference(mappedSignalPatterns[4], mappedSignalPatterns[1]);
        if (findSetDifference(mappedSignalPatterns[1], lettersInPattern).length > 0) {
          mappedSignalPatterns[6] = lettersInPattern;
        }
        else if (findSetDifference(lettersInPattern, new Set(middleAndTopLeft)).length === 4) {
          mappedSignalPatterns[9] = lettersInPattern;
        } else {
          mappedSignalPatterns[0] = lettersInPattern;
        }
      }
    );

  segments.topRight = findSetDifference(mappedSignalPatterns[1], mappedSignalPatterns[6]);
  segments.top = findSetDifference(mappedSignalPatterns[7], mappedSignalPatterns[1]);
  segments.bottomRight = findSetDifference(mappedSignalPatterns[1], new Set(segments.topRight));

  segments.bottomLeft = findSetDifference(mappedSignalPatterns[8], mappedSignalPatterns[9]);
  segments.middle = findSetDifference(mappedSignalPatterns[8], mappedSignalPatterns[0]);

  let middleAndTopLeft = findSetDifference(mappedSignalPatterns[4], mappedSignalPatterns[1]);
  segments.topLeft = findSetDifference(new Set(middleAndTopLeft), new Set(segments.middle));

  mappedSignalPatterns[3] = new Set(findSetDifference(mappedSignalPatterns[9], new Set(segments.topLeft)));
  mappedSignalPatterns[5] = new Set(findSetDifference(mappedSignalPatterns[9], new Set(segments.topRight)));

  let bottomAndTop = findSetDifference(mappedSignalPatterns[5], mappedSignalPatterns[4]);
  segments.bottom = findSetDifference(new Set(bottomAndTop), new Set(segments.top));

  mappedSignalPatterns[2] = new Set([...segments.top, ...segments.topRight, ...segments.middle, ...segments.bottomLeft, ...segments.bottom]);
  return mappedSignalPatterns;
}

function createPatternMappingDictionary(mappedSignalPatterns) {
  const mappedPatternsDictionary = {};
  for (let i = 0; i < mappedSignalPatterns.length; i++) {
    const key = [...mappedSignalPatterns[i]].sort().join("");
    mappedPatternsDictionary[key] = i;
  }
  return mappedPatternsDictionary;
}

function solve(input) {
  let parsedInput = input.map(inputLine => {
    let splitInputLine = inputLine.split("|");
    return {
      tenSignalPatterns: splitInputLine[0].trimEnd().split(" "),
      fourDigitOutputValues: splitInputLine[1].trimStart().split(" ")
    }
  });

  return deduceOutputDigitsAndCalculateTotalSum(parsedInput);
}

module.exports = { solve };