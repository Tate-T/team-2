const button1 = document.querySelector("#header-button1");
const button2 = document.querySelector("#header-button2");
const allTags = document.querySelectorAll(
  "h1, h2, h3, h4, h5, h6, a, p, input, button, svg, section"
);
const sections = document.querySelectorAll("section");
const header = document.querySelector("header");
const alternateStyles = document.querySelector("#alternate-styles");
const toggleButton = document.querySelector(".header__svg-button");
const interactiveLink = document.querySelector("#interactive-link");
const popupBox = document.querySelector(".header__box");

button1.addEventListener("click", () => {
  button1.style.display = "none";
  button2.style.display = "inherit";
  document.body.classList.add("dark-mode");
  if (alternateStyles) {
    alternateStyles.disabled = !alternateStyles.disabled;
  }
});

button2.addEventListener("click", () => {
  button2.style.display = "none";
  button1.style.display = "inherit";
  document.body.classList.remove("dark-mode");
  if (alternateStyles) {
    alternateStyles.disabled = !alternateStyles.disabled;
  }
});

function togglePopup(event) {
  event.preventDefault();
  event.stopPropagation();
  popupBox.classList.toggle("active");
}


toggleButton.addEventListener("click", togglePopup);
interactiveLink.addEventListener("click", togglePopup);
