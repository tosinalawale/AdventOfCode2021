

function getNeighbouringCells(grid, i, j, height, width) {
  let neighbouringCells = [];
  if (i > 0) {
    neighbouringCells.push(grid[i-1][j]);
  }
  if (i < height - 1) {
    neighbouringCells.push(grid[i+1][j]);
  }
  if (j > 0) {
    neighbouringCells.push(grid[i][j-1]);
  }
  if (j < width - 1) {
    neighbouringCells.push(grid[i][j+1]);
  }
  return neighbouringCells;
}

function solve(input) {

  const height = input.length;
  const width = input[0].length;
  const grid = Array(height);

  for (let i = 0; i < height; i++) {
    grid[i] = input[i].split("").map(e => parseInt(e));
  }

  let riskLevelsSum = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const pointHeight = grid[i][j];
      const neighbouringCells = getNeighbouringCells(grid, i, j, height, width);
      if (neighbouringCells.length > 0 && neighbouringCells.every(v => pointHeight < v)) {
        riskLevelsSum += pointHeight + 1;
      }
    } 
  }


  return riskLevelsSum;
}

module.exports = { solve };