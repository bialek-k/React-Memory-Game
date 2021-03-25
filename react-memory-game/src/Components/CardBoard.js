import React from 'react'

import Card from './Card';

export const CardBoard = ({ cards, setCards, id }) => {


    return (
        <div className="App">
            {cards.map(card => (
                <Card
                id={card.id}
                key={card.id} 
                color={card.color}
                flipped={card.flipped}
                setCards={setCards}
                cards={cards}/>
      ))}
        </div>
    )
}

export default CardBoard;
