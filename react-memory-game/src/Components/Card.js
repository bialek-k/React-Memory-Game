import React from 'react'

import "./Card.css";

const Card = ({ color, card, flipped, setCards, cards, id, frontCard, setFrontCard }) => {


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
    compareHandler(newState)
  }
  
  // Add Card to new Array for compare


  const compareHandler = (newState) => {
    newState.map((changedCard) => {
      if(changedCard.id === id){
        return { changedCard }
      }
      return newState;
    });

    setFrontCard([
      ...frontCard,
      newState
    ]);
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