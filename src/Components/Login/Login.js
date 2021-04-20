import React from "react";
import "./Login.css";

const Login = ({ playerName, setLogin, setPlayerName }) => {
  const name = React.createRef();

  // const inputName = (e) => {
  //   e.preventDefault();
  // };

  const submitName = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Write your name, or press button below");
    } else {
      console.log(name);
      // setLogin(false);
    }
  };

  const guestName = () => {
    setPlayerName("Great Player");
    setLogin(false);
  };

  return (
    <div className='login-wrapper'>
      <form className='login-modal' onSubmit={submitName}>
        <p>Write your name</p>
        <input type='text' ref={name} />
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
