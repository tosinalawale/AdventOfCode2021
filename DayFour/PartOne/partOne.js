
const boardSize = 5;

function getBoards(input) {
  let boards = [];
  const processedInput = input.map(e => e.trimStart().split(/\s+/).map(e => parseInt(e)));

  for (let i = 2; i < input.length; i+=6) {
    let board = [ processedInput[i], processedInput[i+1], processedInput[i+2], processedInput[i+3], processedInput[i+4] ];

    board = board.map( function(row) {
      return row.map(function (cell) {
        return {
          number: cell,
          marked: false
        };
      });
    });

    boards.push(board);
  }
  
  return boards;
}

function checkForWinningBoard(boards) {
  for (let boardNum = 0; boardNum < boards.length; boardNum++) {
    const board = boards[boardNum];
    
    //check rows
    for (let row = 0; row < boardSize; row++) {
      if (board[row].every(e => e.marked === true)) {
        return boardNum;
      }   
    }
    
    //check columns
    for (let col = 0; col < boardSize; col++) {
      let allMarked = true;
      
      for (let row = 0; row < boardSize; row++) {
        const cell = board[row][col];
        if (!cell.marked) allMarked = false;
      }

      if (allMarked) {
        return boardNum;
      }
    }
  }

  return -1;
}

function getSumOfAllUnmarkedSquares(board) {
  let sum = 0;
  board.forEach(row => {
    row.forEach(cell => {
      if(!cell.marked) sum += cell.number;
    });
  });
  return sum;
}

function displayBoard(board) {
  let displayBoard = board.map( function(row) {
    return row.map(function (cell) {
      return `${cell.number} ${cell.marked}`;
    });
  });
  console.log(displayBoard);
}

function solve(input) {
  const numbersToDraw = input[0].split(",").map(e => parseInt(e));
  const boards = getBoards(input);
  
  for (let i = 0; i < numbersToDraw.length; i++) {
    const currentNumber = numbersToDraw[i];

    boards.forEach(board => {
      for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
          let cell = board[row][col];
          if (cell.number === currentNumber) {
            cell.marked = true;
          }
        }
      } 
    });

    // if (numbersToDraw[i] = 4) {
    //   console.log(`-----------number drawn: ${numbersToDraw[i]}`)
    //   boards.forEach(board => {
    //     displayBoard(board);
    //   });
    //   return 'x';
    // }

    const winningBoardNumber = checkForWinningBoard(boards);
    
    if (winningBoardNumber !== -1) {
      const sum = getSumOfAllUnmarkedSquares(boards[winningBoardNumber]);
      return sum * currentNumber;
    };
    //console.log(winningBoardNumber);
  }

  return 0;
}

module.exports = { solve };