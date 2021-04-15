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
		<div className="login-wrapper">
			<div className="title">
				<h1>Memory Game</h1>
				<h3>made by Krzysztof Białek</h3>
			</div>
			<form className="login-modal" onSubmit={submitName}>
				<p>Write your name</p>
					<input type="text" name="name" onChange={inputName}/>
			 		<button type="submit" className="play">Play!</button>
					 <h3 className="login-guest" onClick={guestName}>or play as a guest</h3>
			</form>
		</div>
	)
}

export default NewPlayer;
