const colors = ["bg-blue-800", "bg-blue-300", "bg-red-300"];
const colorName = ["Blue", "Red", "Black"]

const filterName = document.getElementById("filterName");
const filterLayer = document.getElementById("filterLayer");
const button = document.querySelectorAll(".btn");

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

let latestColor = 0;

button.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterLayer.classList.remove(filterLayer.classList[filterLayer.classList.length - 1]);
    if (this.id < 3){
      filterLayer.classList.add(colors[this.id]);
      filterName.textContent = colorName[this.id];
      latestColor = this.id;
    }
    else {
      let random = getRandomNumber()
      while (latestColor == random){
        random = getRandomNumber();
      }
      filterLayer.classList.add(colors[random]);
      filterName.textContent = colorName[random];
      latestColor = random;
    }
  });
});