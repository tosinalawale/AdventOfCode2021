

function getNeighbouringCells(grid, i, j, height, width) {
  let neighbouringCells = [];
  if (i > 0) {
    neighbouringCells.push({ row: i-1, col: j });
  }
  if (i < height - 1) {
    neighbouringCells.push({ row: i+1, col: j });
  }
  if (j > 0) {
    neighbouringCells.push({ row: i, col: j-1 });
  }
  if (j < width - 1) {
    neighbouringCells.push({ row: i, col: j+1 });
  }
  return neighbouringCells;
}

function getNeighbouringBasinCells(grid, i, j, height, width) {
  let neighbouringBasinCells = [];
  if (i > 0) {
    if (grid[i-1][j].height !== 9 && !(grid[i-1][j].inBasin)) neighbouringBasinCells.push({ row: i-1, col: j });
  }
  if (i < height - 1) {
    if (grid[i+1][j].height !== 9 && !(grid[i+1][j].inBasin)) neighbouringBasinCells.push({ row: i+1, col: j });
  }
  if (j > 0) {
    if (grid[i][j-1].height !== 9 && !(grid[i][j-1].inBasin)) neighbouringBasinCells.push({ row: i, col: j-1 });
  }
  if (j < width - 1) {
    if (grid[i][j+1].height !== 9 && !(grid[i][j+1].inBasin)) neighbouringBasinCells.push({ row: i, col: j+1 });
  }
  return neighbouringBasinCells;
}

function findBasinAroundPoint(grid, i, j, height, width) {
  const point = grid[i][j];
  let basin = [{ row: i, col: j }];
  point.inBasin = true;

  const neighbouringBasinCells = getNeighbouringBasinCells(grid, i, j, height, width);  
  if (neighbouringBasinCells.length > 0 ) {
    neighbouringBasinCells.forEach(v => {
      if (!(basin.find(e => e.row === v.row && e.col === v.col))) {
        basin = basin.concat(findBasinAroundPoint(grid, v.row, v.col, height, width));
      }
    });
  }
  
  return basin;
}

function solve(input) {

  const height = input.length;
  const width = input[0].length;
  const grid = Array(height);

  for (let i = 0; i < height; i++) {
    grid[i] = input[i].split("").map(e => { return {height: parseInt(e), inBasin: false} });
  }

  let basins = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const pointHeight = grid[i][j].height;
      const neighbouringCells = getNeighbouringCells(grid, i, j, height, width);
      if (neighbouringCells.length > 0 && neighbouringCells.every(v => pointHeight < grid[v.row][v.col].height)) {
        basins.push(findBasinAroundPoint(grid, i, j, height, width));
      }
    }
  }

  let sortedBasinSizes = basins.map(basin => basin.length).sort((a, b) => b - a);
  
  return sortedBasinSizes[0] * sortedBasinSizes[1] * sortedBasinSizes[2];
}

module.exports = { solve };