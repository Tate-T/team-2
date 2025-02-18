const field = document.querySelector(".football__field");
const ball = document.querySelector(".football__img");

field.addEventListener("click", (event) => {
  const fieldRect = field.getBoundingClientRect();
  const ballSize = ball.offsetWidth;

  let x = event.clientX - fieldRect.left - ballSize / 2;
  let y = event.clientY - fieldRect.top - ballSize / 2;

  x = Math.max(0, Math.min(x, field.clientWidth - ballSize));
  y = Math.max(0, Math.min(y, field.clientHeight - ballSize));

  ball.style.transform = `translate(${x}px, ${y}px)`;
});
