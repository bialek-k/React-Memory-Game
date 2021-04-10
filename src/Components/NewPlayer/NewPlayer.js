import React from 'react'

import "./NewPlayer.css"

const NewPlayer = ({startModal, setStartModal}) => {

	const guestHandler = () => {
		setStartModal(true)

	}
	
	return (
		<div className="login-container">
			<form className="login-modal">
				<p>Write your name</p>
				<input type="text"/>
				<button onClick={guestHandler}>Or play as a guest</button>
			</form>
		</div>
	)
}

export default NewPlayer;
