const button = document.querySelectorAll('.startButton');
const userChoiceHTML = document.getElementById("userChoice");
const computerChoiceHTML = document.getElementById("computerChoice");
const resultHTML = document.getElementById('result');

let choices = ['Paper', 'Rock', 'Scissors'];

let computerChoice = 'Scissors';
let userChoice = 'Paper';

function getResult(){
  switch (userChoice) {
    case "Scissors":
      switch (computerChoice) {
        case "Rock":
          return "Computer";
          break;
        case "Paper":
          return "User";
          break;
        case "Scissors":
          return "Draw";
          break;
      }

    case "Paper":
      switch (computerChoice) {
        case "Rock":
          return "User";
          break;
        case "Paper":
          return "Draw";
          break;
        case "Scissors":
          return "Computer";
          break;
      }

    case "Rock":
      switch (computerChoice) {
        case "Rock":
          return "Draw";
          break;
        case "Paper":
          return "Computer";
          break;
        case "Scissors":
          return "User";
          break;
      }
  }
}

function getRandomChoice(){
  randomNumber = Math.floor(Math.random()*choices.length);
  randomChoice = choices[randomNumber];
  return randomChoice
}

function startGame(selectedOption){
  userChoice = selectedOption;
  computerChoice = getRandomChoice();
  switch (getResult()) {
    case "Draw":
      console.log('Draw');
      resultHTML.innerHTML = "Draw";
      userChoiceHTML.classList.remove("text-[#B8B9B9]");
      userChoiceHTML.classList.remove("text-[#C43B3B]");
      userChoiceHTML.classList.remove("text-[#84BC58]");
      computerChoiceHTML.classList.remove("text-[#C43B3B]");
      computerChoiceHTML.classList.remove("text-[#84BC58]");
      computerChoiceHTML.classList.remove("text-[#B8B9B9]");
      userChoiceHTML.classList.add("text-[#B8B9B9]");
      computerChoiceHTML.classList.add("text-[#B8B9B9]");
      break;
    case "Computer":
      console.log('Computer');
      userChoiceHTML.classList.remove("text-[#B8B9B9]");
      userChoiceHTML.classList.remove("text-[#C43B3B]");
      userChoiceHTML.classList.remove("text-[#84BC58]");
      computerChoiceHTML.classList.remove("text-[#C43B3B]");
      computerChoiceHTML.classList.remove("text-[#84BC58]");
      computerChoiceHTML.classList.remove("text-[#B8B9B9]");
      userChoiceHTML.classList.add("text-[#C43B3B]");
      computerChoiceHTML.classList.add("text-[#84BC58]");
      resultHTML.innerHTML = "Lose";
      break;
    case "User":
      console.log('User');
      userChoiceHTML.classList.remove("text-[#B8B9B9]");
      userChoiceHTML.classList.remove("text-[#C43B3B]");
      userChoiceHTML.classList.remove("text-[#84BC58]");
      computerChoiceHTML.classList.remove("text-[#C43B3B]");
      computerChoiceHTML.classList.remove("text-[#84BC58]");
      computerChoiceHTML.classList.remove("text-[#B8B9B9]");
      userChoiceHTML.classList.add("text-[#84BC58]");
      computerChoiceHTML.classList.add("text-[#C43B3B]");
      resultHTML.innerHTML = "Win";
      break;
  }
  userChoiceHTML.innerHTML = userChoice;
  computerChoiceHTML.innerHTML = computerChoice;
}

button.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.id === "Scissors") {
      startGame('Scissors')
    } else if (this.id === "Paper") {
      startGame("Paper");
    } else if (this.id === "Rock") {
      startGame("Rock");
    }
  });
});