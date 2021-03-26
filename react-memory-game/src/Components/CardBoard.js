import React from 'react'
import Card from './Card';

const CardBoard = ({ cards, setCards, frontCard, setFrontCard}) => {
	return (
		<div className="App">
			{cards.map((card) => (
				<Card
					key={card.id}
					card={card} 
					color={card.color}
					flipped={card.flipped}
					setCards={setCards}
					frontCard={frontCard}
					setFrontCard={setFrontCard}
					cards={cards}
					id={card.id}
				/>
			))}
		</div>
	)
}

export default CardBoard;
