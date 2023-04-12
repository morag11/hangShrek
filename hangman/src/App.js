import React, { useState } from 'react';
import Shrek from './components/Shrek';
import WrongLetters from './components/WrongLetters';
import randomWord from './components/RandomWord';
import Word from './components/Word';
import Result from './components/Result';
import Info from './components/Help';
import './App.css';

//get random word using function and assign it to word
let word = randomWord();

function App() {
  //required states
  const [playable, setPlayable] = useState(true);
  const [correct, setCorrect] = useState([]);
  const [wrong, setWrong] = useState([]);

  //event for click of letter button
  const clickLetter = event => {
    let letter = event.target.value;
    //if the clicked letter is in the word add to correct letters
    if (word.includes(letter)) {
      setCorrect(clickedLetter => [...clickedLetter, letter]);
      } 
    //if not then add to wrong letters
    else {
      setWrong(clickedLetter => [...clickedLetter, letter]);
    }
};
  //this function creates all the alphabet as buttons
  function createAlphabetButtons(){
    //maps through alphabet and creates a button for each letter
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        className='alphabet'
        key={letter}
        value={letter}
        //on click it performs above function to determine if it's correct or wrong
        onClick={clickLetter}
        //once it has been clicked (and added to correct or wrong) the button is disabled
        disabled={correct.includes(letter) ||  wrong.includes(letter) ? true : false}
      >
        {letter}
      </button>
    ));
  };

  //if user clicks play again it resets the game
  function playAgain() {
    //make playable again
    setPlayable(true);
    //empty arrays of correct/incorrect letters
    setCorrect([]);
    setWrong([]);
    //gets a new random word 
    word = randomWord();
  }
  //sets variable containing buttons
  let buttons = createAlphabetButtons();

  //returns all components as UI
  return (
    <>
      <h1>HangShrek</h1>
      <Info className='Info'></Info>
      <div className="container">
        <Shrek wrong={wrong} />
        <WrongLetters wrong={wrong} />
        <Word word={word} correct={correct} />
      </div>
      <div>
      <p className='buttonContainer'>{buttons}</p>
      </div>
      <Result correct={correct} wrong={wrong} word={word} setPlayable={setPlayable} playAgain={playAgain}/>
    </>
  );
}

export default App;
