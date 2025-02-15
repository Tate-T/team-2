const gameField = document.querySelector(".football__field");
const gameBall = document.querySelector(".football__img");

gameField.addEventListener("click", (event) => {
  const fieldRect = gameField.getBoundingClientRect();
  const ballSize = gameBall.offsetWidth;

  let newX = event.clientX - fieldRect.left - ballSize / 2;
  let newY = event.clientY - fieldRect.top - ballSize / 2;

  newX = Math.max(0, Math.min(newX, gameField.clientWidth - ballSize));
  newY = Math.max(0, Math.min(newY, gameField.clientHeight - ballSize));

  gameBall.style.transform = `translate(${newX}px, ${newY}px)`;
});
