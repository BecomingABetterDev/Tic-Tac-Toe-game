import React, { useState } from "react";
import "../starter.css";

const Starter = ({ onEnter }) => {
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  const handleEnter = () => {
    if (playerX.trim() && playerO.trim()) {
      onEnter(playerX, playerO);
    } else {
      alert("Please enter names for both players");
    }
  };

  return (
    <div className="start-container">
      <header>Let's play</header>
      <h1 className="game-name">Tic-Tac-Toe</h1>
      <hr />
      <div className="name-input">
        <label>
          Player <span className="symbol">X</span>
        </label>
        <input
          type="text"
          placeholder="Enter the Player name"
          value={playerX}
          onChange={(e) => setPlayerX(e.target.value)}
        />
        <label>
          Player <span className="symbol">O</span>
        </label>
        <input
          type="text"
          placeholder="Enter the Player name"
          value={playerO}
          onChange={(e) => setPlayerO(e.target.value)}
        />
      </div>
      <button
        className="btn-enter"
        onClick={handleEnter}
      >
        Enter <span className="enter-game">GAME</span>
      </button>
    </div>
  );
};

export default Starter;
