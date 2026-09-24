const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const results = document.querySelector(".results")
const score_ = document.querySelector(".score_")


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
    
function score (human,computer){
    if (human > computer){
       return "Congratulation ! YOU won the game ";
    }else if (computer > human){
       return "YOU lose ! computer won the game";
    }else {
       return "IT'S A TIE ! wanna play again ?";
        
    }
}

rock.addEventListener("click",()=>{
    
    results.textContent=PlayRound("rock",getComputerChoice())
     score_.textContent="You"+" "+">"+" "+humanScore+" "+"|"+" "+"computer"+" "+">"+" "+computerScore


    if ((humanScore===5)||(computerScore===5)){
        return score_.textContent=score(humanScore,computerScore)
    }
    
})

paper.addEventListener("click",()=>{
    
    results.textContent=PlayRound("paper",getComputerChoice())
    score_.textContent="You"+" "+">"+" "+humanScore+" "+"|"+" "+"computer"+" "+">"+" "+computerScore


    if ((humanScore===5)||(computerScore===5)){
        return score_.textContent=score(humanScore,computerScore)
    }
})

scissors.addEventListener("click",()=>{
    
    results.textContent=PlayRound("scissors",getComputerChoice())
    score_.textContent="You"+" "+">"+" "+humanScore+" "+"|"+" "+"computer"+" "+">"+" "+computerScore

    if ((humanScore===5)||(computerScore===5)){
        return score_.textContent=score(humanScore,computerScore)
    }
});













