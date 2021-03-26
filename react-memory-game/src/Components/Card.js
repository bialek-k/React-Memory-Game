import React from 'react'

import "./Card.css";

const Card = ({ color, onClick, flipped, setCards, cards, id, frontCard, setFrontCard }) => {


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
    compareCard(id, newState);
  }

  // Add Card to compare
  const compareCard = (id, newState) => {
    let newArr = newState[id -1];
    setFrontCard([
      ...frontCard,
      newArr
    ]);
  }
  
  return (
    <div className="card"
      onClick={() => flipCard(id)}
      style={{backgroundColor: flipped ? color : 'gray'}}
      color={color}
      >{flipped ? color : null}
    </div>
  )
}


export default Card;