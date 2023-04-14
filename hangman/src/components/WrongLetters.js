import React from 'react'

//component to display all wrong letter guesses to player
const WrongLetters = ({ wrong }) => {
  return (
    <div className="wrongLetters">
      <div>
        {/* visable when at least one wrong letter is guessed */}
        {wrong.length > 0 && 
          <p>Wrong Letters</p>
        }
        {/* prints each wrong letter in a span with a space between */}
        {wrong
          .map((letter, i) => <span key={i}>{letter} </span>)
        }
      </div>
    </div>
  )
}
export default WrongLetters