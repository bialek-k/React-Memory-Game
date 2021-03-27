import React, { useEffect } from 'react'
import Card from './Card';

const CardBoard = ({ cards, setCards, frontCard, setFrontCard, cardFound, setCardFound}) => {

    useEffect(() => {
		if(frontCard.length > 1){
		  if(frontCard[0].color === frontCard[1].color){
			console.log("znalazłeś");
			setCardFound([ ...frontCard, ...cardFound]);
			setFrontCard([]);
			
		  } else {
			console.log("szukaj dalej");
		  }
		}
	  },[frontCard]);


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
					cardFound={cardFound}
        			setCardFound={setCardFound}
				/>
			))}
		</div>
	)
}

export default CardBoard;
