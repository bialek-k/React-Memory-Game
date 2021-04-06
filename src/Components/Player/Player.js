import React  from 'react'
import './Player.css'

export const Player = ({time, timeOn, setTime, setTimeOn, frontCard, cardFound }) => {

	return (
		<div className="container">
			<div className="player">Player</div>
			<div className="stats">
				<div className="time">
					<span>Time: </span> 
					<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
					<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
				</div>
			</div>
		</div>
	)
}

export default Player;