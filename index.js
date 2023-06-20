let background = document.getElementById("bg");
let button = document.getElementById("btn");
let colorCode = document.getElementById("colorCode");

const backgroundColor = () => {
  let randomColor = Math.floor(Math.random() * 1000);
  background.style.backgroundColor = "#" + randomColor;
  colorCode.innerHTML = "#" + randomColor;
};
button.addEventListener("click", backgroundColor);
