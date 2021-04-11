import React from 'react'

import "./NewPlayer.css"

const NewPlayer = ({setStartModal}) => {
	
	const inputName = (e) => {
		console.log(e.target.value)
	}

	const submitName = (e) => {
		e.preventDefault();
		console.log(e)
	}
	
	return (
		<div className="login-container">
			<form className="login-modal">
				<p>Write your name</p>
				<div>
					<input type="text" onChange={inputName}/>
			 		<button onClick={submitName} type="submit">Play!</button>
				</div>
				<button>Or play as a guest</button>
			</form>
		</div>
	)
}

export default NewPlayer;
