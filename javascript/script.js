const seachbar__menu = document.getElementById("seachbar__menu");
const mobileMenu = document.getElementById("mobile__menu");
const projectContainer = document.getElementById("project");
const backButton = document.getElementById("back");
const frontButton = document.getElementById("front");
const scrollAmount = 405;

seachbar__menu.onclick = function () {
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
  }
};

function back() {
  projectContainer.scrollBy({
    top: 0,
    left: -scrollAmount,
    behavior: "smooth",
  });
}

function front() {
  projectContainer.scrollBy({
    top: 0,
    left: scrollAmount,
    behavior: "smooth",
  });
}
