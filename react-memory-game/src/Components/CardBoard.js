import React from 'react'

import Card from './Card';

export const CardBoard = ({ cards, setCards }) => {

    return (
        <div className="App">
            {cards.map(card => (
                <Card
                key={card.id} 
                color={card.color}
                flipped={card.flipped}
                setCard={setCards}
                cards={cards}/>
      ))}
        </div>
    )
}

export default CardBoard;
