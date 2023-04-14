import React, { useEffect } from 'react';

//function to check if player wins or loses
function gameOutcome(correct, wrong, word) {
  let outcome = 'win';
  // if all correct letters aren't guessed yet outcome is not yet determined
  word.split('').forEach(letter => {
    //if this condition is true then it's a win
    if(!correct.includes(letter)){
      outcome = '';
    }
  });
  // if there are 6 wrong guesses it's a loss
  if(wrong.length === 6) outcome = 'lose';
  return outcome
}

//This is the final result of the game
const Result = ({correct, wrong, word, setPlayable, playAgain}) => {
  //the outcome (win or lose)
  let outcomeText = '';
  //what the word actually is
  let actualWord = '';
  //if game can be played or not (is over = not)
  let playable = true;

  //outputs the player won and ends game by setting playable to false
  if( gameOutcome(correct, wrong, word) === 'win' ) {
    outcomeText = 'You win';
    playable = false;
  //same as above but outputs loss
  } else if( gameOutcome(correct, wrong, word) === 'lose' ) {
    outcomeText = 'You lose';
    actualWord = `The word was '${word}'`;
    playable = false;
  }

  //makes playable again & starts game again
  useEffect(() => {
    setPlayable(playable);
  });
  
  //returns UI for final outcome 
  return (
    //hides if there's no outcome yet
    <div className="outcome-container" style={outcomeText !== '' ? {display:'flex'} : {}}>
      <div className="outcome">
        <h1>{outcomeText}</h1>
        <h2>{actualWord}</h2>
        {/* on click will restart game */}
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Result
