import React from 'react'

import "./NewPlayer.css"

const NewPlayer = () => {

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submit");
	}

	const inputName = (e) => {
		console.log(e.target.value)
	}
	
    return (
        <div className="login-container">
					<div className="login-modal">
						<form onSubmit={(event) => handleSubmit(event)}>
							<p>Write your name</p>
							<input onChange={inputName} type="text" placeholder="name"/>
							<button>Or play as a quest</button>
						</form>
					</div>
				</div>
    )
}

export default NewPlayer;
