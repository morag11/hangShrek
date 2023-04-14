import React from 'react';

//returns the word being guessed
const Word = ({ word, correct }) => {
  return (
    <div className="word">
      {/* map through word and split into letters */}
      {word.split('').map((letter, i) => {
        return (
          //print each letter in a span
          <span className="letter" key={i}>
            {/* if the letter is guessed correctly then it;s displayed, if not it's blank but still underscored in CSS */}
            {correct.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}
export default Word
