import React from 'react'

import "./Card.css";

const Card = ({ color, cards, setCards }) => {

    // Flip Card
    const flipCard = () => {
      
      setCards(cards.map(card => {
        return {
          ...cards,
          flipped: !card.flipped
        }
        return card;
      }))

    }

  return (
    <div className="card"
          onClick={flipCard}
          color={color}>{color}
    </div>
  )
}


export default Card;