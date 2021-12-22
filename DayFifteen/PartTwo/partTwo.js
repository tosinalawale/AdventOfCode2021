
// find lowest total risk for path from (0,0) to opposite end of grid using Dijkstra's algorithm
function findTotalRiskForShortestPath(input) {

  const gridHeight = input.length * 5;
  const gridWidth = input[0].length * 5;

  const grid = getExtendedGrid(input);

  grid[0][0].distance = 0;

  // build queue that will hold all nodes in descending order of distance 
  // (start node will be at the end to start with as it has smallest distance)
  let queue = [];
  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      queue.push({ x, y });
    }
  }
  queue = queue.slice(1);
  queue.push({ x: 0, y: 0 });

  let node = queue.pop();

  while (node && grid[node.y][node.x].distance !== Number.MAX_SAFE_INTEGER) {
    const currentNode = grid[node.y][node.x];
    let distance = currentNode.distance;
    let children = getNeighbouringNodes(node.x, node.y, gridHeight, gridWidth);

    for (let child of children) {

      let childNode = grid[child.y][child.x];
      let newDistance = distance + childNode.weight;

      if (childNode.distance > newDistance) {
        childNode.distance = newDistance;
      }
    }

    currentNode.visited = true;

    // sort queue in descending order so node with shortest distance is at the end
    queue.sort((a, b) => {
      return grid[b.y][b.x].distance - grid[a.y][a.x].distance;
    });

    node = queue.pop();
  }

  return grid[gridHeight - 1][gridWidth - 1].distance;
}

function getNeighbouringNodes(x, y, gridHeight, gridWidth) {
  let neighbouringNodes = [];

  if (x === gridWidth - 1 && y === gridHeight - 1) return neighbouringNodes;

  if (x < gridWidth - 1) neighbouringNodes.push({ x: x + 1, y: y });
  if (x > 0) neighbouringNodes.push({ x: x - 1, y: y });
  if (y < gridHeight - 1) neighbouringNodes.push({ x: x, y: y + 1 });
  if (y > 0) neighbouringNodes.push({ x: x, y: y - 1 });

  return neighbouringNodes;
}

function getExtendedGrid(input) {
  const gridHeight = input.length;
  const gridWidth = input[0].length;
  const grid = Array(gridHeight * 5);

  for (let y = 0; y < gridHeight; y++) {
    grid[y] = input[y].split("").map(c => ({ weight: parseInt(c, 10), distance: Number.MAX_SAFE_INTEGER, visited: false }));
  }

  for (let y = 0; y < gridHeight; y++) {
    grid[y] = grid[y].concat(new Array(gridWidth * 4));

    for (let x = 0; x < gridWidth; x++) {

      for (let i = 1; i < 5; i++) {

        let originalCell = grid[y][x];
        const temp = (originalCell.weight + i) % 9;
        const newWeight = temp === 0 ? 9 : temp;

        grid[y][x + gridWidth * i] = {
          weight: newWeight,
          distance: originalCell.distance,
          visited: originalCell.visited
        };
      }
    }
  }

  for (let y = 0; y < gridHeight; y++) {

    for (let i = 1; i < 5; i++) {

      let currentRow = y + gridHeight * i;
      grid[currentRow] = new Array(gridWidth * 5);

      for (let x = 0; x < gridWidth * 5; x++) {

        let originalCell = grid[y][x];
        const temp = (originalCell.weight + i) % 9;
        const newWeight = temp === 0 ? 9 : temp;

        grid[currentRow][x] = {
          weight: newWeight,
          distance: originalCell.distance,
          visited: originalCell.visited
        };
      }
    }
  }

  return grid;
}

module.exports = { findTotalRiskForShortestPath, getExtendedGrid };