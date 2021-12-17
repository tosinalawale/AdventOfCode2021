
function parseInput(input) {

  const coordinates = [];
  const instructions = [];

  let lineNumber = 0;

  while (lineNumber < input.length && !(input[lineNumber].trim() === "")) {
    let lineParts = input[lineNumber].split(",");
    coordinates.push( {
      x: parseInt(lineParts[0], 10),
      y: parseInt(lineParts[1], 10)
    });

    lineNumber++;
  }

  for (let i = lineNumber; i < input.length; i++) {
    if (input[i].trim() === "") continue;

    const lineParts = input[i].replace("fold along ", "").split("=");

    instructions.push( {
      axis: lineParts[0],
      value: parseInt(lineParts[1], 10)
    });
  }

  return {
    coordinates: coordinates,
    instructions
  };
}

function buildGrid(input) {
  const { coordinates } = parseInput(input);

  let largestX = coordinates.reduce((acc, coords) => coords.x > acc ? coords.x : acc, 0);
  let largestY = coordinates.reduce((acc, coords) => coords.y > acc ? coords.y : acc, 0);

  const grid = [...Array(largestY + 1)].map(e => Array(largestX + 1).fill("."));

  for (const coord of coordinates) {
    grid[coord.y][coord.x] = "#";
  }

  return grid;
}

function displayGrid(grid) {
  let gridDisplay = "";

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      const cellValue = grid[y][x];
      gridDisplay += cellValue;
    }
    gridDisplay += "\n";
  }

  return gridDisplay.trimEnd();
}

function processFoldInstruction(instruction, grid) {
  let newGrid = [];

  if (instruction.axis === "y") {
    newGrid = grid.slice(0, instruction.value + 1);

    for (let y = instruction.value + 1; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x] === "#") {
          newGrid[instruction.value - (y - instruction.value)][x] = grid[y][x];
        }
      }  
    }
  }
  else {
    newGrid = grid.slice().map(row => row.slice(0, instruction.value + 1));

    for (let y = 0; y < grid.length; y++) {
      for (let x = instruction.value + 1; x < grid[0].length; x++) {
        if (grid[y][x] === "#") {
          newGrid[y][instruction.value - (x - instruction.value)] = grid[y][x];
        }
      }  
    }
  }

  return newGrid;
}

function countVisibleDots(grid) {
  return grid.reduce((acc, row) => {
    return acc + row.reduce((acc, cell) => acc + (cell === "#" ? 1 : 0), 0)
  },
  0);
}

function solve(input) {
  const { coordinates, instructions } = parseInput(input);

  const grid = buildGrid(input);

  const newGrid = processFoldInstruction(instructions[0], grid);

  return countVisibleDots(newGrid);
}

module.exports = { buildGrid, displayGrid, solve };