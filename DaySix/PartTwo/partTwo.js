
function numberOfFish(fishState) {
  return fishState.reduce((acc, v) => acc + v );
}

function nextDay(fishState) {
  let nextFishState = [...fishState];
  
  for (let fishTimerValue = 0; fishTimerValue < fishState.length; fishTimerValue++) {
    let numberOfFishWithTimerValue = fishState[fishTimerValue];

    if (numberOfFishWithTimerValue === 0) continue;

    if (fishTimerValue === 0) {
      nextFishState[0] -= numberOfFishWithTimerValue;
      nextFishState[6] += numberOfFishWithTimerValue;     
      nextFishState[8] += numberOfFishWithTimerValue;
    } else {
      nextFishState[fishTimerValue] -= numberOfFishWithTimerValue;
      nextFishState[fishTimerValue-1] += numberOfFishWithTimerValue;
    }
  }

  return nextFishState;
}

function createInitialFishStateStore(initialFishString) {
  let fishState = Array(9).fill(0);

  initialFishString.split(",").forEach(fish => {
    let fishNumber = parseInt(fish, 10);
    fishState[fishNumber]++;
  });

  return fishState;
}

function solve(input) {
  let fishState = createInitialFishStateStore(input[0]);
  for (let i = 0; i < 256; i++) {
    fishState = nextDay(fishState);
    console.log(i);
  }

  return numberOfFish(fishState);
}

module.exports = { solve };