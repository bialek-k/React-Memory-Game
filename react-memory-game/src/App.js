import React, { useState } from 'react';

import Rocky from './photos/Rocky.png';
import Chase_2 from './photos/Chase_2.png';
import Marshall_2 from './photos/Marshall_2.png';
import Rubble from './photos/Rubble.png';
import Skye_2 from './photos/Skye_2.png';
import Zuma_2 from './photos/Zuma_2.png';


import CardBoard from "./Components/CardBoard";
import './App.css';

function App() {

  const initialCards = [
    { id: 1, photo: Rocky, flipped: false },
    { id: 2, photo: Chase_2, flipped: false },
    { id: 3, photo: Marshall_2, flipped: false },
    { id: 4, photo: Rubble, flipped: false },
    { id: 5, photo: Skye_2, flipped: false },
    { id: 6, photo: Zuma_2, flipped: false },
    { id: 7, photo: Rocky, flipped: false },
    { id: 8, photo: Chase_2, flipped: false },
    { id: 9, photo: Marshall_2, flipped: false },
    { id: 10, photo: Rubble, flipped: false },
    { id: 11, photo: Skye_2, flipped: false },
    { id: 12, photo: Zuma_2, flipped: false },
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
