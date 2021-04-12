import React from 'react'

import "./NewPlayer.css"

const NewPlayer = ({playerName ,setStartModal, setPlayerName}) => {

	const inputName = (e) => {
		e.preventDefault();
		setPlayerName(e.target.value);
	}

	const submitName = (e) => {
		e.preventDefault();
		if(playerName === ""){
			alert("Write your name, or press button below")
		}else{
			setStartModal(true);
		}
	}

	const guestName = () => {
		setPlayerName("Great Player");
		setStartModal(true);
	}
	
	return (
		<div className="login-container">
			<form className="login-modal" onSubmit={submitName}>
				<p>Write your name</p>
				<div>
					<input type="text" name="name" onChange={inputName}/>
			 		<button type="submit" className="play">Play!</button>
				</div>
				<button onClick={guestName}>Play as a guest</button>
			</form>
		</div>
	)
}

export default NewPlayer;
