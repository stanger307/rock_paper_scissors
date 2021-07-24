const buttonsIn = document.querySelector(".choices");
const rockIn = document.querySelector("#rock");
const paperIn = document.querySelector("#paper");
const scissorsIn = document.querySelector("#scissors");
let userScoreIn = document.querySelector("#user");
let cpuScoreIn = document.querySelector("#cpu");
let updateIn = document.querySelector("#update");

let userScore = 0;
let cpuScore = 0;


let list = ["rock", "paper", "scissors"];

function main () {
    rockIn.addEventListener("click", () => game("rock"));
    paperIn.addEventListener("click", () => game("paper"));
    scissorsIn.addEventListener("click", () => game("scissors"));
}

function game (userChoice) {
    const comPlay = cpuPlay();
    switch (userChoice + comPlay){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;    
    }
        

}

function cpuPlay() {
    return list[Math.floor(Math.random() * 3)];
}




// game logic


function win () {
    updateIn.innerHTML = "WIN!";
    userScore++;
    userScoreIn.innerHTML = userScore;
}
function lose () {
    updateIn.innerHTML = "LOSE!";
    cpuScore++;
    cpuScoreIn.innerHTML = cpuScore;
}
function draw () {
    updateIn.innerHTML = "DRAW!";
}

main();