import React from 'react'

import "./Card.css";

const Card = ({ color, flipped, setCards, cards, id, frontCard, setFrontCard }) => {

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
    compareHandler(newState, id)
    
  }
  
  // Add Card to new Array for compare
  const compareHandler = (newState, id) => {
    const clickedCard = newState.filter((card) => card.id === id);
    setFrontCard([ ...frontCard, ...clickedCard]);
  }

  return (
    <div className="card"
      onClick={() => flipCard(id)}
      style={{backgroundColor: flipped ? color : 'gray'}}
      color={color}>{flipped ? color : null}
    </div>
  )
}


export default Card;