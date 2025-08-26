const button = document.getElementById("my-btn");
button.style.position = "absolute";

button.addEventListener("mouseenter", () => {
  const width = window.innerWidth - button.offsetWidth;
  const height = window.innerHeight - button.offsetHeight;

  const x = Math.random() * width;
  const y = Math.random() * height;

  button.style.left = x + "px";
  button.style.top = y + "px";
});
function buttonWasClicked() {
  button.innerText = "NOT FUN";
}

button.addEventListener("click", buttonWasClicked);
