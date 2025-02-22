document.addEventListener("DOMContentLoaded", () => {
  const choices = ["rock", "scissors", "paper"];
  let scores = { user: 0, computer: 0 };

  const resultText = document.querySelector(".r-p-s__result");
  const userScoreEl = document.querySelector("#user-score");
  const computerScoreEl = document.querySelector("#computer-score");
  const computerChoiceBtn = document.querySelector(".r-p-s__computer-choice");

  const buttons = document.querySelectorAll(".r-p-s__button");

  buttons.forEach((button) => {
    const img = button.querySelector("img");
    button.dataset.choice = img.alt;
    button.addEventListener("click", () => {
      playRound(button.dataset.choice)
      console.log('test')
  });
  });

  

  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "Нічия!";

    const winConditions = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock",
    };

    return winConditions[userChoice] === computerChoice
      ? "Ви виграли раунд!"
      : "Комп'ютер виграв раунд!";
  }

  function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    if (result === "Ви виграли раунд!") scores.user++;
    if (result === "Комп'ютер виграв раунд!") scores.computer++;

    updateUI(result, computerChoice);
  }

  function updateUI(result, computerChoice) {
    resultText.textContent = result;
    userScoreEl.textContent = scores.user;
    computerScoreEl.textContent = scores.computer;
    computerChoiceBtn.textContent = `Комп'ютер вибрав: ${computerChoice}`;
  }
});
