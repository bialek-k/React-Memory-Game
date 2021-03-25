import React from 'react'

import "./Card.css";

const Card = ({ color, onClick, flipped, setCards, cards, id }) => {


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
    compareCard();
  }

  // Add Card to compare
  const compareCard = () => {
    console.log('dziala')
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