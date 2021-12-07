
function countCrabsInEachPosition(crabPositions) {
  let crabPositionInts = crabPositions.split(",").map(str => parseInt(str, 10));
  let maxCrabPosition = crabPositionInts.reduce((acc, v) => v > acc ? v : acc);
  let crabsInEachPosition = Array(maxCrabPosition + 1).fill(0);

  crabPositionInts.forEach(crabPosition => {
    crabsInEachPosition[crabPosition]++;
  });

  return crabsInEachPosition;
}

function calculateFuelCost(num)
{
    return num * (num + 1) /2;
}

function calculateFuelCostForAligningInPosition(position, crabsInEachPosition) {
  let totalFuelCost = 0;

  for (let pos = 0; pos < crabsInEachPosition.length; pos++) {
    const crabsInPosition = crabsInEachPosition[pos];

    if (pos === position || crabsInPosition === 0) continue;

    let numberOfMoves = Math.abs(pos - position);

    totalFuelCost += calculateFuelCost(numberOfMoves) * crabsInPosition;
  }

  return totalFuelCost;
}

function solve(input) {
  let crabsInEachPosition = countCrabsInEachPosition(input[0]);
  let currentBestTotalFuelCost = Number.MAX_SAFE_INTEGER;
  let currentBestPosition = 0;

  for (let i = 0; i < crabsInEachPosition.length; i++) {
    let totalFuelCost = calculateFuelCostForAligningInPosition(i, crabsInEachPosition);
    if (totalFuelCost < currentBestTotalFuelCost) {
      currentBestTotalFuelCost = totalFuelCost;
      currentBestPosition = i;
    }
  }

  return { horizonalPos: currentBestPosition, totalFuelCost: currentBestTotalFuelCost };
}

module.exports = { solve };