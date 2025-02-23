const item = document.querySelector('.tic-tac-toes__item')
// const x = document.querySelector('.tic-tac-toes__x')
// const o = document.querySelector('tic-tac-toes__o')
const buttons = document.querySelectorAll(".tic-tac-toes__button");
const items = [
    ...document.querySelectorAll('.tic-tac-toes__item'),
  ];
const text = document.querySelector('.tic-tac-toes__article')
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
const coumputerScoreText = document.querySelector('#computerScore')
const userScore = document.querySelector('#userScore')

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
buttons.forEach(function(button, index) {
  button.addEventListener("click", () => {
        if (userMove === true){
            if (indexList.includes(index)){
                text.innerHTML = 'Ви не можете туди походити'
            } else {
                moves += 1
                button.closest('.tic-tac-toes__item').firstElementChild.style.display = 'inherit';
                userMove = false;
                computerMove = true;
                indexList.push(index)
                userMoves.push(index);
            }

            if (checkWin(userMoves)){
                text.innerHTML = 'Ви виграли раунд'
                userScore.innerHTML = Number(userScore.innerHTML) + 1;
                console.log(userScore)
                resetGame()

            }

        }

        if (computerMove === true && moves < 9){
            let computerIndex;  
            do {
                computerIndex = Math.floor(Math.random() * 9);
                console.log(computerIndex)
                if (moves >= 8){
                    break
                }
            } while (indexList.includes(computerIndex));
            if (moves === 8){
                return;
            } else {
                items[computerIndex].lastElementChild.style.display = 'inherit';
                indexList.push(computerIndex);
                computerMoves.push(computerIndex);
            }
            userMove = true;
            computerMove = false;
            console.log(`Computer moved at index: ${computerIndex}`);
            moves += 1
            console.log(`Ходи зроблені: ${moves}`)

            if (checkWin(computerMoves)){
                text.innerHTML = 'Ви програли раунд'
                computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
                resetGame()
 
            }
        }

        if (moves === 9){
            text.innerHTML = 'Нічія'
            for (let i = 0; i < items.length; i++){
                setTimeout(function(){
                    items[i].lastElementChild.style.display = 'none'
                    items[i].firstElementChild.style.display = 'none'
                }, 700);
            }
            moves = 0;
            indexList = []
            userMove = true;
            computerMove = false;
            userMoves = []
            computerMoves = []
            text.innerHTML = 'Нічія'
        }



  });
});