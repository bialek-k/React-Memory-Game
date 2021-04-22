import React from "react";
import "./Login.css";

const Login = ({ playerName, setLogin, setPlayerName, setStartGame}) => {

  const inputName = (e) => {
    e.preventDefault();
    setPlayerName(e.target.value)
  };

  const submitName = (e) => {
    e.preventDefault();
    if (playerName === "") {
      alert("Write your name, or press button below");
    } else {
      setLogin(false);
      setStartGame(true);
    }
  };
  
  const guestName = () => {
    setPlayerName("Great Player");
    setLogin(false);
    setStartGame(true);
  };

  return (
    <div className='login-wrapper'>
      <form className='login-modal' onSubmit={submitName}>
        <p>Write your name</p>
        <input type='text' onChange={inputName} />
        <button type='submit' className='play'>
          Play!
        </button>
        <h3 className='login-guest' onClick={guestName}>
          or play as a guest
        </h3>
      </form>
    </div>
  );
};

export default Login;
