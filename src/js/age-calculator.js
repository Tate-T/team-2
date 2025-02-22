const inputField = document.querySelector(".age-calculator__input");
const button = document.querySelector(".age-calculator__button");
const outputText = document.querySelector(".age-calculator__text");

function convertMinutes() {
  let totalMinutes = parseInt(inputField.value, 10);

  if (isNaN(totalMinutes) || totalMinutes < 0) {
    outputText.textContent = "Будь ласка, введіть коректне додатне число!";
    return;
  }

  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  
  outputText.textContent = `Результат: ${hours}:${minutes}`;
}

button.addEventListener("click", convertMinutes);
