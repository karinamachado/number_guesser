let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


function generateTarget(){
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;

}

function compareGuesses(humanGuess, computerGuess, secretNumber){

  if(humanGuess === computerGuess){
       return true;
  }

  else if (Math.abs(secretNumber - humanGuess) > Math.abs(secretNumber - computerGuess)) { 
       return false; 
  }
  
  else if (Math.abs(secretNumber - humanGuess) < Math.abs(secretNumber - computerGuess)){ 
     return true;
  }  
}   

function updateScore (winner) {
  if(winner === 'human') {
    ++humanScore;
  } else if(winner === 'computer') {
    ++computerScore;
  }
}

advanceRound = () => {
  currentRoundNumber++;
}




