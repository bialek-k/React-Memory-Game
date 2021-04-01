import React, { useEffect } from 'react'
import Card from './Card';

import './CardBoard.css'

const CardBoard = ({ cards, setCards, frontCard, setFrontCard, cardFound, setCardFound, initialCards,
finalCards, setFinalCards}) => {

	useEffect(() => {
	if(frontCard.length > 1){
		if(frontCard[0].photo === frontCard[1].photo){
			// console.log("znalazłeś");
			setCardFound([ ...frontCard]);
			setFrontCard([]);
			saveFinalCards();
			setCardFound([...cardFound, ...frontCard]);
		}else{
			// console.log("szukaj dalej")
			setTimeout(() => {
				setFrontCard([]);
				// setCardFound([]);
			},500)
		}
	}
	if(cardFound.length === 12){
		alert("Wygrałeś!!!");
	}
	
}	,[frontCard]);

useEffect(() => {
	setFinalCards([...cards]);
},[])

// Save finalCards;
const saveFinalCards = () => {
	console.log(cards)
	setFinalCards([...cards])
	// setFinalCards([...finalCards, ...frontCard])
}

const flipCardBack = () => {
	setCards([...finalCards])
	}
	
	if(frontCard.length === 2 && frontCard[0].photo !== frontCard[1].photo ){
		setTimeout(() => {
			flipCardBack();		
		},1000)
	}


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
