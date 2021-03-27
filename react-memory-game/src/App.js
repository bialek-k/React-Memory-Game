import React, { useState, useEffect} from 'react';

import CardBoard from "./Components/CardBoard";
import './App.css';

function App() {

  const initialCards = [
    { id: 1, color: "red", flipped: false },
    { id: 2, color: "blue", flipped: false },
    { id: 3, color: "red", flipped: false },
    { id: 4, color: "blue", flipped: false }
  ];
  
  const [cards, setCards] = useState(initialCards);
  const [ frontCard, setFrontCard ] = useState([]);

  useEffect(() => {
    if(frontCard.length > 1){
      let color = 
    }
  },[frontCard])

  return (
    <div className="App">
      <CardBoard
        cards={cards}
        setCards={setCards}
        frontCard={frontCard}
        setFrontCard={setFrontCard} />
    </div>
  );
}

export default App;
