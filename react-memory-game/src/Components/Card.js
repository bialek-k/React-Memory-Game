import React from 'react'

import "./Card.css";



const Card = ({ color, flipped, setCards, cards, id, frontCard, setFrontCard }) => {

   //Functions Flip Card
   const flipCard = (id) => {
    const newState = cards.map((item) => {
      if(item.id === id){
        const updateItem = {
          ...item,
          flipped: true,
        }
        return updateItem;
      }
      
      return item;
    });
    setCards(newState);
    compareHandler(newState, id);
  }

  // Add Card to new Array for compare
  const compareHandler = (newState, id) => {
    const clickedCard = newState.filter((card) => card.id === id)
    setFrontCard([ ...frontCard, ...clickedCard]);
  }

  const cardFront = {
    background: `url(${color})`,
    backgroundSize: '90%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  const cardBack = {
    background: "rgba(192, 192, 192, 0.596)",
  }

  return (
    <div className="card"
      onClick={() => flipCard(id)}
      style={flipped ? cardFront : cardBack}
      color={color}>
        {/* <div className="cardID">{flipped ? id : null}</div> */}
    </div>
  )
}


export default Card;