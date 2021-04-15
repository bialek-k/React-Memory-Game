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
  import EndModal from "./Components/EndModal/EndModal";

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

    const [cards, setCards] = useState(initialCards.sort(() => Math.random() - 0.4));
    const [frontCard, setFrontCard] = useState([]);
    const [cardFound, setCardFound] = useState([]);
    const [finalCards, setFinalCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [ time, setTime ] = useState(0);
    const [ timeOn, setTimeOn ] = useState(false);
    const [startModal, setStartModal] = useState(true);
    const [playerName, setPlayerName] = useState("IGORAS");
    const [endGame, setEndGame] = useState(false);

    const startDiv = (
      <NewPlayer 
        startModal={startModal}
        setStartModal={setStartModal}
        playerName={playerName}
        setPlayerName={setPlayerName}/>
    );

    const endModal = (
      <EndModal 
        moves={moves}
        time={time}
        endGame={endGame}
        playerName={playerName}
        />
    );

    const gameBoard = (
      <div className={endGame ? "app end-game" : "app"}>
        <Player
          time={time}
          setTime={setTime}
          timeOn={timeOn}
          setTimeOn={setTimeOn}
          frontCard={frontCard}
          playerName={playerName}
          setPlayerName={setPlayerName}
          moves={moves}/>
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
          setTimeOn={setTimeOn}
          moves={moves}
          setMoves={setMoves}
          setEndGame={setEndGame}/>
      </div>
    );
  
    return (
      <div>
        {endGame ? endModal : null}
        {startModal ? gameBoard : startDiv}
      </div>
    );
  }

  export default App;
