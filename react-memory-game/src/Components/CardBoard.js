import React, { useEffect } from 'react'
import Card from './Card';

import './CardBoard.css'

const CardBoard = ({ cards, setCards, frontCard, setFrontCard, cardFound, setCardFound, initialCards,
finalCards, setFinalCards}) => {

	useEffect(() => {
	if(frontCard.length > 1){
		if(frontCard[0].color === frontCard[1].color){
			console.log("znalazłeś");
			setCardFound([ ...frontCard, ...cardFound]);
			setFrontCard([]);
			saveFinalCards();
		}else{
			console.log("szukaj dalej")
			setTimeout(() => {
				setFrontCard([]);
			},1000)
		}
	}
	// endGame();
}	,[frontCard]);

	// Save finalCards;
	const saveFinalCards = () => {
		setFinalCards([...finalCards, ...frontCard])
	}

	const flipCardBack = () => {

		const newSet = finalCards.map((card) => card.flipped === true);
		setCards([...initialCards]);

	}
	
	if(frontCard.length === 2 && frontCard[0].color !== frontCard[1].color ){
		setTimeout(() => {
			flipCardBack();		
		},1000)
	}

	

	const endGame = () =>{
		if(cardFound.length === cards.length){
			alert("Wygrałeś, odbierz darmowego iPhone!");
			setCards([...initialCards]);
			setCardFound([]);
		}
	}

	return (
		<div className="cardBoard">
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
					cardFound={cardFound}
        	setCardFound={setCardFound}
					/>
			))}
		</div>
	)
}

export default CardBoard;


/* Flip Back Cards backup

	const flipCardBack = () => {
		const newState = cards.filter((card) => card.flipped === true);
		newState.map((card) => card.flipped = false);
	}

*/
	