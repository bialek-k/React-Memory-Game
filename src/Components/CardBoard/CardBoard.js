import React, { useEffect } from 'react'
import Card from '../Card/Card';
import './CardBoard.css'

const CardBoard = ({ cards, setCards, frontCard, setFrontCard, cardFound, setCardFound, finalCards, setFinalCards, initialCards, endGame, setEndGame}) => {
	// shuffle the cards at the start of the game
	initialCards.sort(() => Math.random() - 0.5);

	if(frontCard.length > 1){
		if(frontCard[0].photo === frontCard[1].photo && frontCard[0].id !== frontCard[1].id){
			setCardFound([...frontCard]);
			setFrontCard([]);
			setFinalCards([...cards])
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

	if(cardFound.length === 12){
		alert("Koniec Gry!")
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
