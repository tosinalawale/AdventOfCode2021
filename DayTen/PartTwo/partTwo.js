
bracesDictionary = {
  "(" : ")",
  "[" : "]",
  "{" : "}",
  "<" : ">",
  "" : ""
}

illegalCharacterPointsDictionary = {
  ")" : 3,
  "]" : 57,
  "}" : 1197,
  ">" : 25137
}

autoCompleteCharacterPointsDictionary = {
  ")" : 1,
  "]" : 2,
  "}" : 3,
  ">" : 4
}

function checkSyntax(inputLine) {
  let stack = [];

  for (const char of inputLine.split("")) {
    const isOpeningBrace = Object.keys(bracesDictionary).includes(char);
    if (isOpeningBrace) {
      stack.push(char);
    }
    else {
      let lastOpenedBrace = "";
      
      if (stack.length > 0) { lastOpenedBrace = stack.pop(); }
    
      let expectedClosingBrace = bracesDictionary[lastOpenedBrace];

      if (char !== expectedClosingBrace) {
        return { expected: expectedClosingBrace, found: char };
      }
    }
  }

  let expectedClosingBraces = "";

  expectedClosingBraces = stack.reduceRight((acc, v) => acc + bracesDictionary[v], "");

  return { expected: expectedClosingBraces, found: "" };
}

function calculateScoreForClosingCharacters(closingCharacters) {
  let totalScore = 0;
  
  for (const char of closingCharacters.split("")) {
    totalScore *= 5;
    totalScore += autoCompleteCharacterPointsDictionary[char];
  }

  return totalScore;
}

function solve(input) {
  let syntaxCheckingResults = input.map(line => checkSyntax(line));
  let resultsForIncompleteLines = syntaxCheckingResults.filter(result => result.found !== result.expected && result.found === "");
  let scoresForClosingCharacters = resultsForIncompleteLines.map(r => calculateScoreForClosingCharacters(r.expected));
  
  return scoresForClosingCharacters.sort((a, b) => a - b)[(scoresForClosingCharacters.length -1)/2];
}

module.exports = { checkSyntax, calculateScoreForClosingCharacters, solve };