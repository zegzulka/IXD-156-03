const button = document.getElementById("button");
const color = document.querySelector(".color");

let colorClasses = {
  Orange: "bg-orange-200",
  Blue: "bg-blue-200",
  Green: "bg-green-200",
  Black: "bg-black-200",
  Red: "bg-red-200",
  Yellow: "bg-yellow-200",
};

let randomColor = function (obj) {
  let keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

function assignRandomColor() {
  color.innerHTML = randomColor(colorClasses);
  document.body.className = randomColor(colorClasses);
}

button.addEventListener("click", assignRandomColor);

console.log(randomColor())
