const colors = ["bg-blue-500", "bg-blue-300", "bg-red-300"];
const colorName = ["Blue", "Red", "Black"]

const btn = document.getElementById("button");
const color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
    randomNumber = getRandomNumber();
    document.body.className = colors[randomNumber];
    color.textContent = colorName[randomNumber];
})