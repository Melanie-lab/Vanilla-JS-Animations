const middleBtn = document.querySelector(".middlebtn");
const buttons = document.querySelectorAll(".circle button");

for (i = 1; i < buttons.length + 1; i++) {
  let angle = ((2 * Math.PI) / buttons.length) * i;
  let radius = 180;
  let topP = 180 + Math.cos(angle) * radius;
  let leftP = 180 + Math.sin(angle) * radius;
  buttons[i - 1].style.top = topP + "px";
  buttons[i - 1].style.left = leftP + "px";
}

middleBtn.addEventListener("click", () => {});
