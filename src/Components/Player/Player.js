import React  from 'react'
import './Player.css'

export const Player = ({time}) => {
	const timer = (base) => (`0${Math.floor((time / base) % 60)}`).slice(-2);

	return (
		<div className="container">
			<div className="player">Player</div>
			<div className="stats">
				<div className="time">
					<span>Time: </span> 
					<span>{timer(60000)}:</span>
					<span>{timer(1000)}:</span>
				</div>
			</div>
		</div>
	)
}

export default Player;