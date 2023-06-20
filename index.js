let background = document.getElementById("bg");
let button = document.getElementById("btn");
let colorCode = document.getElementById("colorCode");
// console.log(colorCode);
let colours = [
  "#ff9966",
  "#631919",
  "#3B185A",
  "#656666",
  "#008000",
  "#000080",
  "#008080",
];
button.addEventListener("click", function () {
  let randomColor = (background.style.backgroundColor =
    colours[Math.floor(Math.random() * colours.length)]);
  colorCode.innerHTML = randomColor;
});
