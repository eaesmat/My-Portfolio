function displayContent() {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".mobile-menu").style.display = "block";
}
function closeMenu() {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".mobile-menu").style.display = "none";
}
function portfolioSection() {
  closeMenu();
  window.location = `${window.location.pathname}#portfolio`;
}
function aboutSection() {
  closeMenu();
  window.location = `${window.location.pathname}#about`;
}
function contactSection() {
  closeMenu();
  window.location = `${window.location.pathname}#contact`;
}

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".hamburger > img")
    .addEventListener("click", displayContent);
  document.querySelector(".close").addEventListener("click", closeMenu);
  document
    .querySelector(".portfolio")
    .addEventListener("click", portfolioSection);
  document.querySelector(".about").addEventListener("click", aboutSection);
  document.querySelector(".contact").addEventListener("click", contactSection);
});
