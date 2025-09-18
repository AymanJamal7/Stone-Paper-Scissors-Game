
let userScore = 0;
let compScore = 0;
let icon = document.querySelectorAll(".icon");
let box = document.querySelector("#changer");
let bg = document.querySelector("body");
let user = document.querySelector("#userscore");
let comp = document.querySelector("#compscore");
let msgBar = document.querySelector("#msgBar");


const getCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner = (userWin) => {
    if(userWin) {
        console.log("You win!");
        user.innerText = "Your Score : " + (userScore + 1);
        userScore ++;
        msgBar.innerText = "You Win!"
    } else {
        console.log("Computer Wins.");
        comp.innerText = "Computer Score : " + (compScore + 1);
        compScore ++;
        msgBar.innerText = "You lose. Try again."
    }
}

const drawGame = () => {
    console.log("Game Drawn");
    msgBar.innerText = "Game drawn";
}
const play =  (userChoice) => {
    console.log("User choice: ", userChoice);
    const compChoice = getCompChoice();
    console.log("Computer Choice: ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
           userWin = compChoice === "scissors" ? false: true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

icon.forEach((ic) => {
   ic.addEventListener("click" , () =>{
    const userChoice = ic.getAttribute("id");
     play(userChoice);
    });
});



function random(number){
    return Math.floor(Math.random()*(number+1));
}

box.addEventListener("click", () => {
        bg.style.backgroundColor = `rgb(${random(255)} , ${random(255)} , ${random(255)})`
        bg.style.color = "white";
        msgBar.style.color = "#340068"
});