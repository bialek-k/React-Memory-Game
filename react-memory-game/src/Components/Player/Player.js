import React from 'react'

import './Player.css'

export const Player = () => {
    return (
        <div className="container">
            <div className="player">IGOR</div>
            <div className="stats">
                <div className="points">100/100 points</div>
                <div className="time">Time: 00:22:35</div>
            </div>
        </div>
    )
}

export default Player;