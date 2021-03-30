import React, { useState } from 'react';

import Rocky from './photos/Rocky.png';
import Chase from './photos/Chase.png';
import Marshall from './photos/Marshall.png';
import Rubble from './photos/Rubble.png';
import Skye from './photos/Skye.png';
import Zuma from './photos/Zuma.png';


import CardBoard from "./Components/CardBoard";
import './App.css';

function App() {

  const initialCards = [
    { id: 1, color: Rocky, flipped: false },
    { id: 2, color: Chase, flipped: false },
    { id: 3, color: Marshall, flipped: false },
    { id: 4, color: Rubble, flipped: false },
    { id: 5, color: Skye, flipped: false },
    { id: 6, color: Zuma, flipped: false },
    { id: 7, color: Rocky, flipped: false },
    { id: 8, color: Chase, flipped: false },
    { id: 9, color: Marshall, flipped: false },
    { id: 10, color: Rubble, flipped: false },
    { id: 11, color: Skye, flipped: false },
    { id: 12, color: Zuma, flipped: false },
  ];

  
  // initialCards.sort(() => Math.random() - 0.5);
  
  const [ cards, setCards ] = useState(initialCards);
  const [ frontCard, setFrontCard ] = useState([]);
  const [ cardFound, setCardFound ] = useState([]);
  const [ finalCards, setFinalCards ] = useState([]);

  return (
    <div className="app">
      <CardBoard
        cards={cards}
        setCards={setCards}
        frontCard={frontCard}
        setFrontCard={setFrontCard}
        cardFound={cardFound}
        initialCards={initialCards}
        setCardFound={setCardFound}
        finalCards={finalCards}
        setFinalCards={setFinalCards} />
    </div>
  );
}

export default App;
