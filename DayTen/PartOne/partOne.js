
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

function checkSyntax(inputLine) {
  let stack = [];
  for (const char of inputLine.split("")) {
    const isOpeningBrace = Object.keys(bracesDictionary).includes(char);
    if (isOpeningBrace) {
      stack.push(char);
    }
    else {
      let currentOpenedBrace = "";
      
      if (stack.length > 0) { currentOpenedBrace = stack.pop(); }
    
      let expectedClosingBrace = bracesDictionary[currentOpenedBrace];

      if (char !== expectedClosingBrace) {
        return { expected: expectedClosingBrace, found: char };
      }
    }
  };

  return { expected: "", found: "" };
}


function solve(input) {
  let syntaxCheckingResults = input.map(line => checkSyntax(line));
  let resultsIgnoringValidOrIncompleteLines = syntaxCheckingResults.filter(result => result.found !== result.expected && result.found !== "");
  
  return resultsIgnoringValidOrIncompleteLines.reduce((acc, result) => acc + illegalCharacterPointsDictionary[result.found], 0);   
}

module.exports = { checkSyntax, solve };