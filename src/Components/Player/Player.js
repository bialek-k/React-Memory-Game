import React, { useEffect } from 'react'
import './Player.css'

export const Player = ({time, timeOn, setTime, setTimeOn, frontCard, cardFound }) => {

    useEffect(() => {
        setTimeOn(true);
        let interval = null;
        if(timeOn){
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval);
        }
        if(cardFound.length === 12){
            setTimeOn(false);
        }
    },[frontCard])

    

    return (
        <div className="container">
            <div className="player">IGOR</div>
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