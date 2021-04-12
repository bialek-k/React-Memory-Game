import React, { useState } from 'react';

// Import photos
import Rocky from './photos/Rocky.png';
import Chase from './photos/Chase.png';
import Marshall from './photos/Marshall.png';
import Rubble from './photos/Rubble.png';
import Skye from './photos/Skye.png';
import Zuma from './photos/Zuma.png';

// Import components
import CardBoard from "./Components/CardBoard/CardBoard";
import Player from "./Components/Player/Player"
import NewPlayer from "./Components/NewPlayer/NewPlayer";
import './App.css';

function App() {

  const initialCards = [
    {id: 1, photo: Rocky, flipped: false},
    {id: 2, photo: Chase, flipped: false},
    {id: 3, photo: Marshall, flipped: false},
    {id: 4, photo: Rubble, flipped: false},
    {id: 5, photo: Skye, flipped: false},
    {id: 6, photo: Zuma, flipped: false},
    {id: 7, photo: Rocky, flipped: false},
    {id: 8, photo: Chase, flipped: false},
    {id: 9, photo: Marshall, flipped: false},
    {id: 10, photo: Rubble, flipped: false},
    {id: 11, photo: Skye, flipped: false},
    {id: 12, photo: Zuma, flipped: false},
  ];

  const [cards, setCards] = useState(initialCards);
  const [frontCard, setFrontCard] = useState([]);
  const [cardFound, setCardFound] = useState([]);
  const [finalCards, setFinalCards] = useState([]);
  const [ time, setTime ] = useState(0);
  const [ timeOn, setTimeOn ] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [playerName, setPlayerName] = useState("");

  const login = (
    <NewPlayer 
      startModal={startModal}
      setStartModal={setStartModal}
      playerName={playerName}
      setPlayerName={setPlayerName} />
  );
 
  const gameBoard = (
    <div className="app">
      <Player
        time={time}
        setTime={setTime}
        timeOn={timeOn}
        setTimeOn={setTimeOn}
        frontCard={frontCard}
        playerName={playerName}
        setPlayerName={setPlayerName}/>
      <CardBoard
        cards={cards}
        setCards={setCards}
        frontCard={frontCard}
        setFrontCard={setFrontCard}
        cardFound={cardFound}
        initialCards={initialCards}
        setCardFound={setCardFound}
        finalCards={finalCards}
        setFinalCards={setFinalCards}
        timeOn={timeOn}
        setTimeOn={setTimeOn}/>
    </div>
  );
  
  return (
    <div>
      {startModal ? gameBoard : login}
    </div>
  );
}

export default App;
