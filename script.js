let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    // array rock paper scissor
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const drawGame = () => {
   
    msg.innerText = "Game Drawed Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) =>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor ="green"
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Loose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    //Generate Computer Choice 

    const compChoice =  genCompChoice();
    console.log("comp choice=", compChoice);

    if(userChoice === compChoice){
         drawGame();
    } else {
        let userWin = true;
        if(userChoice === rock){
            //scissor paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === paper){
            //rock scissor
            userWin = compChoice === "scissor" ? false : true;
        } else{
            //rock paper
           userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});