import React, {useState} from 'react';

import CardBoard from "./Components/CardBoard";
import './App.css';

function App() {

  const [cards, setCards] = useState([
    { id: 1, color: "red", flipped: false },
    { id: 2, color: "blue", flipped: false },
    { id: 3, color: "red", flipped: false },
    { id: 4, color: "blue", flipped: false }
  ]);

  //Functions

  return (
    <div className="App">
      <CardBoard
        cards={cards}
        setCards={setCards} />
    </div>
  );
}

export default App;
