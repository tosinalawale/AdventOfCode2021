
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

function checkForWinningBoards(boards) {
  let winningBoardNumbers = [];
  for (let boardNum = 0; boardNum < boards.length; boardNum++) {
    const board = boards[boardNum];
    let continueToNextBoard = false;
    
    //check rows
    for (let row = 0; row < boardSize; row++) {
      if (board[row].every(e => e.marked === true)) {
        winningBoardNumbers.push(boardNum);
        continueToNextBoard = true;
        break;
      }   
    }

    if (continueToNextBoard) {
      continue;
    }
    
    //check columns
    for (let col = 0; col < boardSize; col++) {
      let allMarked = true;
      
      for (let row = 0; row < boardSize; row++) {
        const cell = board[row][col];
        if (!cell.marked) {
          allMarked = false;
          break;
        }
      }

      if (allMarked) {
        winningBoardNumbers.push(boardNum);
        break;
      }
    }
  }

  return winningBoardNumbers;
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
  let boards = getBoards(input);
  let winningBoards = [];
  let lastWinningNumber = -1;
  
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

    const winningBoardNumbers = checkForWinningBoards(boards);
    
    if (winningBoardNumbers !== []) {
      // console.log('--------------------------' + winningBoardNumber);
      // console.log('----------------number drawn' + currentNumber);
      // boards.forEach(element => {
      //   displayBoard(element);
      // });

      winningBoards = boards[winningBoardNumbers[winningBoardNumbers.length-1]];
      lastWinningNumber = currentNumber;
      // console.log('--------------------------' + winningBoardNumbers);
      // console.log('----------------number drawn' + currentNumber);
      // displayBoard(winningBoards);
      
      if (boards.length === 1) {
        break;
      }

      boards = boards.filter((_, index) => winningBoardNumbers.indexOf(index) === -1);
    };
    //console.log(winningBoardNumber);
  }

  if (winningBoards !== []) {
    const sum = getSumOfAllUnmarkedSquares(winningBoards);
    return sum * lastWinningNumber;
  }
  return -1;
}

module.exports = { solve };