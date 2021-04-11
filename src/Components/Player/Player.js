import React, {useEffect}  from 'react'
import './Player.css'

export const Player = ({time, setTime, timeOn}) => {
	
	useEffect(() => {
		let interval = null;
		if(timeOn){
			interval = setInterval(() => {
				setTime(prevTime => prevTime + 10)
			},10) 
		}else{
			clearInterval(interval);
		}
		return () => clearInterval(interval)
	},[timeOn]);

	const getSec = (base) => (Math.floor((time / base) % 60));
	
	return (
		<div className="container">
			<div className="player">Guest</div>
			<div className="stats">
				<div className="time">
					<span>Time: </span> 
					<span></span>
					<span>{getSec(1000)} sec</span>
				</div>
			</div>
		</div>
	)
}

export default Player;
