import React from 'react';
import "./FinishRound.css";

const EndModal = ({moves, time, playerName, setReset, setEndGame, setCards, initialCards, setStartGame}) => {
  
  const getSec = (base) => (Math.floor((time / base) % 60));

  const resetGame = () => {
    // reset game:
    setTimeout(() => {
      setReset(true);
      setEndGame(false);
      setCards([initialCards]);
      setStartGame(true);
    },500)

  }
  return (
    <div className="end-container">
      <div className="end-modal">
        <h1>Well done {playerName}!</h1>
        <div className="stats">
          <span>Your time is: {getSec(1000)} sec</span>
          <span>You make: {moves} moves</span>
        </div>
        <div className="btn">
          <button onClick={resetGame}>Play Again</button>
        </div>
      </div>
    </div>
  )
}

export default EndModal;