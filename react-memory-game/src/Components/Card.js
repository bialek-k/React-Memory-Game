import React from 'react'

import "./Card.css";

const Card = ({ color, cards, setCards}) => {
  
  const flipCard = () => {
    setCards(cards.map((item) => {
      
    }))
  }
  
  return (
    <div 
      className="card" 
      onClick={flipCard}
      color={color}>{color}
     </div>
  )
}


export default Card;