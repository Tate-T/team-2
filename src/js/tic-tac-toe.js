const buttons = document.querySelectorAll(".tic-tac-toes__button");
const items = [...document.querySelectorAll('.tic-tac-toes__item')];
const text = document.querySelector('.tic-tac-toes__article');
let computerMove = false;
let userMove = true;
let moves = 0;
let indexList = [];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const userMoves = [];
const computerMoves = [];
const userScore = document.querySelector('#userScore');
const computerScore = document.querySelector('#computerScore');

function checkWin(playerMoves) {
    for (const combination of winningCombinations) {
        if (combination.every(index => playerMoves.includes(index))) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    setTimeout(() => {
        for (let i = 0; i < items.length; i++) {
            items[i].lastElementChild.style.display = 'none';
            items[i].firstElementChild.style.display = 'none';
        }
        moves = 0;
        indexList = [];
        userMoves.length = 0;
        computerMoves.length = 0;
    }, 700);
}

const getPointsBoard = () => {
    const gameState = store.getState().get('gameState'); // Get the current game state
    const board = gameState.get('board'); // Get the board (List or Array of cells)
    return board.map(cell => {
      if (cell === gameState.get('friend')) return friendPts; // Friend's cell
      if (cell === gameState.get('foe')) return foePts; // Foe's cell
      return blankPts; // Blank cell
    });
  };

  const pointsBoardToRowScores = pointsBoard => List([
    pointsBoard.get(0) * pointsBoard.get(1) * pointsBoard.get(2), // Row 1 (top row)
    pointsBoard.get(3) * pointsBoard.get(4) * pointsBoard.get(5), // Row 2 (middle row)
    pointsBoard.get(6) * pointsBoard.get(7) * pointsBoard.get(8), // Row 3 (bottom row)
    pointsBoard.get(0) * pointsBoard.get(3) * pointsBoard.get(6), // Column 1 (left column)
    pointsBoard.get(1) * pointsBoard.get(4) * pointsBoard.get(7), // Column 2 (middle column)
    pointsBoard.get(2) * pointsBoard.get(5) * pointsBoard.get(8), // Column 3 (right column)
    pointsBoard.get(0) * pointsBoard.get(4) * pointsBoard.get(8), // Diagonal (top-left to bottom-right)
    pointsBoard.get(2) * pointsBoard.get(4) * pointsBoard.get(6), // Diagonal (top-right to bottom-left)
  ]);

  const fixMixedRows = rowScores =>
    rowScores.map(rowPts => (rowPts === friendPts * foePts * blankPts ? mixedPts : rowPts));

  const calculateRowScores = () => fixMixedRows(pointsBoardToRowScores(getPointsBoard()));

function computerTurn() {
    if (computerMove && moves < 9) {
        let computerIndex;
        do {
            computerIndex = Math.floor(Math.random() * 9);
            if (moves >= 8) break;
        } while (indexList.includes(computerIndex));

        if (moves < 8) {
            items[computerIndex].lastElementChild.style.display = 'inherit';
            indexList.push(computerIndex);
            computerMoves.push(computerIndex);
            moves += 1;
            console.log(`Computer moved at index: ${computerIndex}`);
            console.log(`Ходи зроблені: ${moves}`);

            if (checkWin(computerMoves)) {
                text.innerHTML = 'Ви програли раунд';
                computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
                resetGame();
            } else if (moves === 9) {
                text.innerHTML = 'Нічія';
                resetGame();
            }
        }

        userMove = true;
        computerMove = false;
    }
}

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (userMove) {
            if (indexList.includes(index)) {
                text.innerHTML = 'Ви не можете туди походити';
            } else {
                moves += 1;
                button.closest('.tic-tac-toes__item').firstElementChild.style.display = 'inherit';
                userMove = false;
                computerMove = true;
                indexList.push(index);
                userMoves.push(index);
                
                if (checkWin(userMoves)) {
                    text.innerHTML = 'Ви виграли раунд';
                    userScore.innerHTML = Number(userScore.innerHTML) + 1;
                    computerMove = true;
                    userMove = true
                    resetGame();
                } else if (moves === 9) {
                    text.innerHTML = 'Нічія';
                    computerMove = true;
                    userMove = true
                    resetGame();
                } else {
                    setTimeout(computerTurn, 1000); 
                }
                
            }
        }
    });
});