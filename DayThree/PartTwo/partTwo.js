
function getInputDigits(input) {
  return input.map(e => e.split("").map(str => parseInt(str)));
}

function getMostCommonValues(inputDigits) {
  let sumDigits = inputDigits.reduce((acc, val) => acc.map((el, i) => el + val[i] ));
  return sumDigits.map(e => e < inputDigits.length/2 ? 0 : 1 );
}

function getLeastCommonValues(inputDigits) {
  let sumDigits = inputDigits.reduce((acc, val) => acc.map((el, i) => el + val[i] ));
  return sumDigits.map(e => e < inputDigits.length/2 ? 1 : 0 );
}

function calculateOxygenGeneratorRating(inputDigits) {
  let result = inputDigits;

  for (let i = 0; i < inputDigits[0].length; i++) { // for each digit
    let mostCommonValues = getMostCommonValues(result);
    result = result.filter(e => e[i] === mostCommonValues[i]);
    if (result.length === 1) return result[0].join("");
  }

  return undefined;
}

function calculateCo2ScrubberRating(inputDigits) {
  let result = inputDigits;

  for (let i = 0; i < inputDigits[0].length; i++) { // for each digit
    let leastCommonValues = getLeastCommonValues(result);
    result = result.filter(e => e[i] === leastCommonValues[i]);
    if (result.length === 1) return result[0].join("");
  }

  return undefined;
}

function solve(input) {
  let inputDigits = getInputDigits(input);

  let oxygenGeneratorRating = calculateOxygenGeneratorRating(inputDigits);
  let co2ScrubberRating = calculateCo2ScrubberRating(inputDigits);
  console.log(oxygenGeneratorRating);
  console.log(co2ScrubberRating);

  return parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);
}

module.exports = { solve };