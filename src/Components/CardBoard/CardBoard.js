import React, { useEffect } from 'react'
import Card from '../Card/Card';

import './CardBoard.css'

const CardBoard = ({ cards, setCards, frontCard, setFrontCard, cardFound, setCardFound,
finalCards, setFinalCards, initialCards, endGame, setEndGame}) => {

	initialCards.sort(() => Math.random() - 0.5);

	// Save finalCards;
	const saveFinalCards = () => {
		console.log(cards)
		setFinalCards([...cards])
	}
	
	if(frontCard.length > 1){
		if(frontCard[0].photo === frontCard[1].photo && frontCard[0].id !== frontCard[1].id){
			setCardFound([ ...frontCard]);
			setFrontCard([]);
			saveFinalCards();
			setCardFound([...cardFound, ...frontCard]);
		}else{
			setFrontCard([]);
		}
	}


	
	// Flip Card Back
	if(frontCard.length === 2 && frontCard[0].photo !== frontCard[1].photo ){
		setTimeout(() => {
			setCards([...finalCards])
		},500)
	}

	if(cardFound.length === finalCards.length){
		console.log("koniec gry")
	}

	// First board load
	useEffect(() => {
		setFinalCards([...cards]);
	},[]);

	return (
		<div className="cardBoard">
			{cards.map((card) => (
				<Card
					key={card.id}
					card={card} 
					photo={card.photo}
					flipped={card.flipped}
					setCards={setCards}
					frontCard={frontCard}
					setFrontCard={setFrontCard}
					cards={cards}
					id={card.id}
					cardFound={cardFound}
        	setCardFound={setCardFound}
					/>
			))}
		</div>
	)
}

export default CardBoard;
