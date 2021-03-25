import React from 'react'

import "./Card.css";

const Card = ({ color, id }) => {

 
  return (
    <div className="card"
          color={color}
          id={id}>{color}
    </div>
  )
}


export default Card;