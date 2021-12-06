function calculateGammaRate(input) {
  inputDigits = input.map(e => e.split("").map(str => parseInt(str)));
  let sumDigits = inputDigits.reduce((acc, val) => acc.map((el, i) => el + val[i] ));
  const gammaRateBinary = sumDigits.map(e => e <= input.length/2 ? "0" : "1" ).join("");
  return parseInt(gammaRateBinary, 2);
}

function calculateEpsilonRate(input) {
  inputDigits = input.map(e => e.split("").map(str => parseInt(str)));
  let sumDigits = inputDigits.reduce((acc, val) => acc.map((el, i) => el + val[i] ));
  const epsilonRateBinary = sumDigits.map(e => e <= input.length/2 ? "1" : "0" ).join("");
  return parseInt(epsilonRateBinary, 2);
}

function solve(input) {
  return calculateGammaRate(input) * calculateEpsilonRate(input);
}

module.exports = { solve, calculateGammaRate, calculateEpsilonRate };