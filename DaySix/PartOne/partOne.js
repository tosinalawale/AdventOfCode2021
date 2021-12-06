

function numberOfFish(strFishState) {
  return strFishState.length - (strFishState.length/2) + 1;
}

// function setCharAt(str,index,chr) {
//   if(index > str.length-1) return str;
//   return str.substring(0,index) + chr + str.substring(index+1);
// }

function nextDay(strFishState) {
  let nextFishStateForCurrentFish = "";
  let newFish = "";
  for (let i = 0; i < strFishState.length; i += 2) {
    let fishNumber = parseInt(strFishState.charAt(i), 10);
    if (fishNumber === 0) {
      nextFishStateForCurrentFish += "6,";
      newFish += "8,";
    } else {
      nextFishStateForCurrentFish += (fishNumber - 1).toString() + ",";
    }
  }

  return newFish.length === 0 ? nextFishStateForCurrentFish.substring(0, nextFishStateForCurrentFish.length - 1) : nextFishStateForCurrentFish +  newFish.substring(0, newFish.length - 1);
}

function solve(input) {
  let fishState = input[0];
  for (let i = 0; i < 80; i++) {
    fishState = nextDay(fishState);
  }

  return numberOfFish(fishState);
}

const readInputFile = require('../../readInputFile');

const input = readInputFile(__dirname);

console.log(solve(input));

module.exports = { solve };