import React, { useState } from 'react';

import CardBoard from "./Components/CardBoard";
import './App.css';

function App() {

  const initialCards = [
    { id: 1, color: "red", flipped: false },
    { id: 2, color: "blue", flipped: false },
    { id: 3, color: "green", flipped: false },
    { id: 4, color: "yellow", flipped: false },
    { id: 5, color: "red", flipped: false },
    { id: 6, color: "blue", flipped: false },
    { id: 7, color: "green", flipped: false },
    { id: 8, color: "yellow", flipped: false },
    { id: 9, color: "red", flipped: false },
    { id: 10, color: "blue", flipped: false },
    { id: 11, color: "green", flipped: false },
    { id: 12, color: "yellow", flipped: false },
  ];

  // initialCards.sort()
  
  const [ cards, setCards ] = useState(initialCards);
  const [ frontCard, setFrontCard ] = useState([]);
  const [ cardFound, setCardFound ] = useState([]);

  return (
    <div className="wrap">
      <CardBoard
        cards={cards}
        setCards={setCards}
        frontCard={frontCard}
        setFrontCard={setFrontCard}
        cardFound={cardFound}
        initialCards={initialCards}
        setCardFound={setCardFound} />
    </div>
  );
}

export default App;
