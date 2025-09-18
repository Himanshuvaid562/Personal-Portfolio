let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const msg=document.querySelector("#msg");

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return option[ranIdx];
    //rock,paper,scissor

}

const playGame=(userChoice)=>{
    //Generate computer choice
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame=()=>{
    msg.innerText="Game was Draw. Play Again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}