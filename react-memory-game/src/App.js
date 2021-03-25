import React, {useState} from 'react';

// import CardBoard from "./Components/CardBoard";
import './App.css';
import Card from './Components/Card';

function App() {

  const initialCards = [
    { id: 1, color: "red", flipped: false },
    { id: 2, color: "blue", flipped: false },
    { id: 3, color: "red", flipped: false },
    { id: 4, color: "blue", flipped: false }
  ] 

  const [cards, setCards] = useState(initialCards);

  //Functions

  const flipCard = (id) => {
    const newState = cards.map((item) => {
      if(item.id === id){
        const updateItem = {
          ...item,
          flipped: !item.flipped,
        }
        return updateItem;
      }
      return item;
    });
    setCards(newState);

  }

  return (
    <div>
      {cards.map(card => (
				<Card
          key={card.id}
          cards={cards}
          color={card.color}
          setCards={setCards}
          flipped={card.flipped}
          onClick={() => flipCard(card.id) }
				/>
				))}
    </div>
    


    // <div className="App">
    //   <CardBoard
    //     onClick={flipCard}
    //     cards={cards}
    //     id={cards}
    //     setCards={setCards} />
    // </div>
  );
}

export default App;
