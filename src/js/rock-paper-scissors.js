document.addEventListener("DOMContentLoaded", () => {
  const choices = ["rock", "scissors", "paper"];
  let scores = { user: 0, computer: 0 };

  const resultText = document.querySelector(".r-p-s__result");
  const userScoreEl = document.querySelector("#user-score");
  const computerScoreEl = document.querySelector("#computer-score");
  const computerChoiceBtn = document.querySelector(".r-p-s__computer-choice");

  document.querySelectorAll(".r-p-s__button").forEach((button, index) => {
    button.addEventListener("click", () => playRound(choices[index]));
  });

  function playRound(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "Нічия!";

    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      result = "Ви виграли раунд!";
      scores.user++;
    } else if (userChoice !== computerChoice) {
      result = "Комп'ютер виграв раунд!";
      scores.computer++;
    }

    computerChoiceBtn.textContent = `Комп'ютер вибрав: ${computerChoice}`;

    resultText.textContent = result;
    userScoreEl.textContent = scores.user;
    computerScoreEl.textContent = scores.computer;
  }
});
