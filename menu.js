const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegacion");
hamburger.addEventListener("click", () => {
  menu.classList.add("show");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("show") &&
    e.target != menu &&
    e.target != hamburger
  ) {
    menu.classList.remove("show");
  }
});
