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


function getHumanChoice (){
    let choice = prompt("please enter rock, paper or scissors","");
    
    if (choice==="rock"){
        return "rock";
    }else if (choice==="paper"){
        return "paper";
    }else {
        return "scissors";
    }
}


function playGame(){
    let humanScore=0;
    let computerScore=0;
  
 
    function PlayRound (humanChoice,computerChoice){
       humanChoice=humanChoice.toLowerCase();
       if ((humanChoice==="rock"&&computerChoice==="paper")||(humanChoice==="paper"&&computerChoice==="scissors")||(humanChoice==="scissors"&&computerChoice==="rock")){
        computerScore = computerScore + 1;
        return "you lose!"+" "+computerChoice+" "+"beats"+" "+humanChoice ;
        
    }else if (humanChoice===computerChoice){
        return "It's a tie! you both chose " + " " +humanChoice ;
    }else{ 
        humanScore = humanScore + 1;
        return "you won!"+" "+humanChoice+" "+"beats"+" "+computerChoice ;
    }
    
}

for (let i=0; i<5 ; i++){
    console.log(`Round ${i+1}`);
    console.log(PlayRound(getHumanChoice(), getComputerChoice()));
    console.log ("Current score"+":"+" "+"you"+" "+"==>"+humanScore+" " ,"computer"+" "+"==>"+ computerScore) ;
} 
}
playGame();
