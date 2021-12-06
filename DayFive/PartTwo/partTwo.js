

// function displayBoard(board) {
//   let displayBoard = board.map( function(row) {
//     return row.map(function (cell) {
//       return `${cell.number} ${cell.marked}`;
//     });
//   });
//   console.log(displayBoard);
// }

function parseInputIntoLines(input) {
  const lines = input.map(e => {
    const coords = e.split(" -> ");
    const startCoordArr = coords[0].split(",");
    const endCoordArr = coords[1].split(",");
    return {
      start: { x: parseInt(startCoordArr[0], 10), y: parseInt(startCoordArr[1], 10) },
      end: { x: parseInt(endCoordArr[0], 10), y: parseInt(endCoordArr[1], 10) }, 
    }
  })

  return lines;
}

function buildLineDiagram(input) {
  const lines = parseInputIntoLines(input);
  const { largestX, largestY } = findLargestCoords(lines);
  
  const pointsArray = [...Array(largestY + 1)].map(e => Array(largestX + 1).fill("."));

  lines.forEach(line => {
   //if (line.start.x === line.end.x || line.start.y === line.end.y) {
      drawLine(line, pointsArray);
    //}
  });

  return pointsArray;
}

function displayLineDiagram(input) {
  const diagram = buildLineDiagram(input);
  return diagram.map(row => row.join("")).join("\n");
}

function drawLine(line, diagram) {
  let nextPoint = {
    x: line.start.x,
    y: line.start.y
  };

  drawPoint(nextPoint, diagram);

  while (nextPoint.x != line.end.x || nextPoint.y != line.end.y ) {
    
    if (nextPoint.x < line.end.x) nextPoint.x++;
    else if (nextPoint.x > line.end.x) nextPoint.x--;

    if (nextPoint.y < line.end.y) nextPoint.y++;
    else if (nextPoint.y > line.end.y) nextPoint.y--;

    drawPoint(nextPoint, diagram);
  }
}

function drawPoint(point, diagram) {
  if (diagram[point.y][point.x] == ".") {
    diagram[point.y][point.x] = 1;
  } else {
    diagram[point.y][point.x]++;
  }
}

function findLargestCoords(lines) {
  const result = {
    largestX: 0,
    largestY: 0
  }

  for (const line of lines) {
    if (line.start.x > result.largestX) result.largestX = line.start.x;
    if (line.end.x > result.largestX) result.largestX = line.end.x;
    if (line.start.y > result.largestY) result.largestY = line.start.y;
    if (line.end.y > result.largestY) result.largestY = line.end.y;
  }

  return result;
}

function solve(input) {
  let diagram = buildLineDiagram(input);
  let counter = 0;

  diagram.forEach(row => {
    row.forEach(cell => {
      if (cell !== "." && cell > 1) counter++;
    });
  });

  return counter;
}

module.exports = { parseInputIntoLines, findLargestCoords, displayLineDiagram, solve };