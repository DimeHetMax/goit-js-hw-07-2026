const button = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleClick = () =>{
  let color = getRandomHexColor();
  text.textContent = `${color}`;
  body.style.background = `${color}`;

}

button.addEventListener("click", handleClick)