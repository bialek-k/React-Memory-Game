import React from 'react'

import "./Card.css";

const Card = ({ color, onClick, flipped }) => {

 
  return (
    <div className="card"
          style={{backgroundColor: flipped ? color : 'gray'}}
          color={color}
          onClick={onClick}
          >{color}
    </div>
  )
}


export default Card;