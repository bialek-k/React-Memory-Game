import React from 'react'

import Card from './Card';

const CardBoard = ({ cards, setCards, id }) => {
    
	return (
		<div className="App">
			{cards.map(card => (
				<Card
				key={card.id} 
				color={card.color}
				flipped={card.flipped}
				setCards={setCards}
				cards={cards}
				id={card.id}/>
				))}
		</div>
	)
}

export default CardBoard;
