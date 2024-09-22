const projectContainer = document.getElementById("project");
const backButton = document.getElementById("back");
const frontButton = document.getElementById("front");
const scrollAmount = 405;

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
