import React, {useState} from 'react';

import Card from "./Components/Card";
import './App.css';

function App() {

  const [cards, setCards] = useState([
    { id: 1, color: "red", flipped: false },
    { id: 2, color: "blue", flipped: false },
    { id: 3, color: "red", flipped: false },
    { id: 4, color: "blue", flipped: false }
  ]);



  return (
    <div className="App">
      {cards.map(card => (
        <Card
          key={card.id} 
          color={card.color}
          flipped={card.flipped}
          setCard={setCards}
          cards={cards}/>
      ))}
    </div>
  );
}

export default App;
