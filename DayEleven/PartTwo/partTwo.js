
function parseInputIntoGrid(input) {
  let grid = new Array(input.length);

  for (let i = 0; i < input.length; i++) {
    grid[i] = input[i].split("").map(e => {
      return { energy: parseInt(e), hasFlashedThisStep: false };
    });
  }

  return grid;
}

function flash(i, j, result) {
  result.grid[i][j].hasFlashedThisStep = true;
  result.grid[i][j].energy = 0;
  result.flashes++;

  updateNeighbouringOctopuses(i, j, result);
}

function updateNeighbouringOctopuses(i, j, result) {
  if (i > 0) {
    let octopus = result.grid[i - 1][j];
    if (!octopus.hasFlashedThisStep) {
      octopus.energy++;
      if (octopus.energy > 9) flash(i - 1, j, result);
    }

    if (j > 0) {
      let octopus = result.grid[i - 1][j - 1];
      if (!octopus.hasFlashedThisStep) {
        octopus.energy++;
        if (octopus.energy > 9) flash(i - 1, j - 1, result);
      }
    }

    if (j < result.grid[0].length - 1) {
      let octopus = result.grid[i - 1][j + 1];
      if (!octopus.hasFlashedThisStep) {
        octopus.energy++;
        if (octopus.energy > 9) flash(i - 1, j + 1, result);
      }
    }
  }

  if (i < result.grid.length - 1) {
    let octopus = result.grid[i + 1][j];
    if (!octopus.hasFlashedThisStep) {
      octopus.energy++;
      if (octopus.energy > 9) flash(i + 1, j, result);
    }

    if (j > 0) {
      let octopus = result.grid[i + 1][j - 1];
      if (!octopus.hasFlashedThisStep) {
        octopus.energy++;
        if (octopus.energy > 9) flash(i + 1, j - 1, result);
      }
    }

    if (j < result.grid[0].length - 1) {
      let octopus = result.grid[i + 1][j + 1];
      if (!octopus.hasFlashedThisStep) {
        octopus.energy++;
        if (octopus.energy > 9) flash(i + 1, j + 1, result);
      }
    }
  }

  if (j > 0) {
    let octopus = result.grid[i][j - 1];
    if (!octopus.hasFlashedThisStep) {
      octopus.energy++;
      if (octopus.energy > 9) flash(i, j - 1, result);
    }
  }

  if (j < result.grid[0].length - 1) {
    let octopus = result.grid[i][j + 1];
    if (!octopus.hasFlashedThisStep) {
      octopus.energy++;
      if (octopus.energy > 9) flash(i, j + 1, result);
    }
  }
}

function processStep(previousResult) {
  let result = {};
  result.grid = previousResult.grid.slice();
  result.flashes = previousResult.flashes;

  for (let i = 0; i < result.grid.length; i++) {
    result.grid[i] = result.grid[i].map(v => {
      return { energy: v.energy + 1, hasFlashedThisStep: false }
    });
  }

  for (let i = 0; i < result.grid.length; i++) {
    for (let j = 0; j < result.grid[0].length; j++) {
      if (result.grid[i][j].energy > 9) {
        flash(i, j, result);
      }
    }
  }

  return result;
}

function showResultAfterSteps(steps, input) {
  let grid = parseInputIntoGrid(input);
  let result = {};
  result.grid = grid;
  result.flashes = 0;

  for (let i = 0; i < steps; i++) {
    result = processStep(result);
  }

  return {
    grid: result.grid.map(row => row.map(octopus => octopus.energy).join("")),
    flashes: result.flashes
  };
}

function allFlashed(grid) {
  let result = true;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!grid[i][j].hasFlashedThisStep) {
        result = false;
      }
    }
  }

  return result;
}

function processStepsUntilAllFlashed(input) {
  let grid = parseInputIntoGrid(input);
  let result = {};
  result.grid = grid;
  result.flashes = 0;

  let stepsCompleted = 0;

  while (!allFlashed(result.grid)) {
    result = processStep(result);
    stepsCompleted++;
  }

  return stepsCompleted;
}

function solve(input) {
  return processStepsUntilAllFlashed(input);
}

module.exports = { showResultAfterSteps, solve };