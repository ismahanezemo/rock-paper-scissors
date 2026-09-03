function getComputerChoice (max){
    return Math.floor(Math.random()*max);
}
const choice = getComputerChoice(3);
if (choice=0){
    console.log("computer chose Rock");
}else if (choice=1){
    console.log("computer chose Paper");
}else {
    console.log("computer chose Scissors");
}

function getHumanChoice (){
    let choice = prompt("please enter rock, paper or scissors","");
    if (choice="rock"){
        return "rock";
    }else if (choice="paper"){
        return "paper";
    }else {
        return "scissors";
    }
}
console.log(getHumanChoice());

let humanScore = 0 ;
let computerScore = 0 ;

function PlayRound (ComputerChoice,HumanChoice){
    
}