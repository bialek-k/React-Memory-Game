import React from 'react'

import "./Card.css";

const Card = ({ color, cards, setCards,id }) => {

    // Flip Card
    const flipCard = (e) => {
      
        cards.map(item => 
            item.id === cards.id 
            ? console.log('działa')
            : null
    )

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