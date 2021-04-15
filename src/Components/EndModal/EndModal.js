import React from 'react';
import "./EndModal.css";

const EndModal = ({moves, time, playerName}) => {
  
const getSec = (base) => (Math.floor((time / base) % 60));

  return (
    <div className="end-container">
      <div className="end-modal">
        <h1>Well done {playerName}!</h1>
        <div className="stats">
          <span>Your time is: {getSec(1000)} sec</span>
          <span>You make: {moves} moves</span>
        </div>
        <div className="btn">
          <button>Play Again</button>
          <button>More about me</button>
        </div>
      </div>
    </div>
  )
}

export default EndModal;