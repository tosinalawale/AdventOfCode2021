
function parseInput(input) {

  const polymerTemplate = input[0];
  const pairInsertionRules = {};

  for (let i = 2; i < input.length; i++) {
    const lineParts = input[i].split(" -> ");
    pairInsertionRules[lineParts[0]] = lineParts[1];
  }

  return {
    polymerTemplate,
    pairInsertionRules
  };
}

function resultAfterStepsProcessed(numOfSteps, input) {
  const { polymerTemplate, pairInsertionRules } = parseInput(input);
  const polymerTemplateElements = polymerTemplate.split("");
  
  let elementPairCountsDict = {};
  let elementCountsDict = {};
  for (let i = 0; i < polymerTemplateElements.length - 1; i++) {
    const elementPair = polymerTemplateElements[i] + polymerTemplateElements[i+1];

    addToValueInDictionaryAddingKeyIfNecessary(elementCountsDict, polymerTemplateElements[i], 1);
    if (i === polymerTemplateElements.length - 2) addToValueInDictionaryAddingKeyIfNecessary(elementCountsDict, polymerTemplateElements[i+1], 1);
    addToValueInDictionaryAddingKeyIfNecessary(elementPairCountsDict, elementPair, 1);
  }

  let previousElementPairCountsDict = elementPairCountsDict;
  let previousElementCountsDict = elementCountsDict;
  let nextElementPairCountsDict = {};
  let nextElementCountsDict = {};
  for (let i = 0; i < numOfSteps; i++) {
    ({ nextElementPairCountsDict, nextElementCountsDict } = processStep(previousElementPairCountsDict, previousElementCountsDict, pairInsertionRules));
    previousElementPairCountsDict = nextElementPairCountsDict;
    previousElementCountsDict = nextElementCountsDict;
  }

  const countOfMostCommonElement = Object.values(nextElementCountsDict).reduce((acc, v) => Math.max(acc, v), 0);
  const countOfLeastCommonElement = Object.values(nextElementCountsDict).reduce((acc, v) => Math.min(acc, v), Number.MAX_SAFE_INTEGER);
  
  return countOfMostCommonElement - countOfLeastCommonElement;
}

function processStep(elementPairCountsDict, elementCountsDict, pairInsertionRules) {
  let nextElementPairCountsDict = Object.assign({}, elementPairCountsDict);
  let nextElementCountsDict = Object.assign({}, elementCountsDict);

  Object.keys(elementPairCountsDict).forEach(elementPair => {
    const elementToInsert = pairInsertionRules[elementPair];
    const elementPairCount = elementPairCountsDict[elementPair];

    addToValueInDictionaryAddingKeyIfNecessary(nextElementPairCountsDict, elementPair, -(elementPairCount));
    if (nextElementPairCountsDict[elementPair] === 0)
      delete nextElementPairCountsDict[elementPair];

    const elementPairChars = elementPair.split("");
    const firstNewPair = elementPairChars[0] + elementToInsert;
    const secondNewPair = elementToInsert + elementPairChars[1];

    addToValueInDictionaryAddingKeyIfNecessary(nextElementPairCountsDict, firstNewPair, elementPairCount);
    addToValueInDictionaryAddingKeyIfNecessary(nextElementPairCountsDict, secondNewPair, elementPairCount);

    addToValueInDictionaryAddingKeyIfNecessary(nextElementCountsDict, elementToInsert, elementPairCount);
  });

  return { nextElementPairCountsDict, nextElementCountsDict };
}

function addToValueInDictionaryAddingKeyIfNecessary(dict, key, valueToAdd) {
  if (!dict[key]) dict[key] = 0;
  dict[key] += valueToAdd;
}

module.exports = { resultAfterStepsProcessed };