import React from 'react'

import "./Card.css";

const Card = ({ color, cards, setCards,id }) => {

    // Flip Card
    const flipCard = (e) => {
      
      setCards(cards.map((card)=>{
        return cards
      }))

    }

  return (
    <div className="card"
          onClick={flipCard}
          color={color}
          id={id}>{color}
    </div>
  )
}


export default Card;