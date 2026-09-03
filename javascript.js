function getComputerChoice (){
    let max = 3;
    let choice = Math.floor(Math.random()*max);
    if (choice===0){
        return ("rock");
    }else if (choice===1){
        return ("paper");
    }else{
        return ("scissors");
    }
}
(getComputerChoice());

let choice = prompt("please enter rock, paper or scissors","");
function getHumanChoice (){
    
    if (choice==="rock"){
        return "rock";
    }else if (choice==="paper"){
        return "paper";
    }else {
        return "scissors";
    }
}
console.log(getHumanChoice());


let humanScore=0;
let computerScore=0;

function playGame(){   
    function PlayRound (humanChoice,computerChoice){
       humanChoice=humanChoice.toLowerCase();
       if ((humanChoice==="rock"&&computerChoice==="paper")||(humanChoice==="paper"&&computerChoice==="scissors")||(humanChoice==="scissors"&&computerChoice==="rock")){
        return "you lose!"+" "+computerChoice+" "+"beats"+" "+humanChoice ;
    }else if (humanChoice===computerChoice){
        return "It's a tie! you both chose " + " " +humanChoice ;
    }else{
        return "you won!"+" "+humanChoice+" "+"beats"+" "+computerChoice ;
    }
    
}
console.log (PlayRound ( getHumanChoice(), getComputerChoice()));  
}
playGame(1);
playGame(2);
playGame(3);
playGame(4);
playGame(5);


function score (humanChoice,computerChoice){
    if (((humanChoice==="rock"&&computerChoice==="paper")||(humanChoice==="paper"&&computerChoice==="scissors")||(humanChoice==="scissors"&&computerChoice==="rock"))){
        return humanScore++;
    }else if (((computerChoice==="rock"&&humanChoice==="paper")||(computerChoice==="paper"&&humanChoice==="scissors")||(computerChoice==="scissors"&&humanChoice==="rock"))){
        return computerScore++;
    }else{
        return 
    } 
}   
console.log(score()) ;