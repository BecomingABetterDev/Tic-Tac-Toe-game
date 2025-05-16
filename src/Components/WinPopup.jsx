import React, { useState } from "react";
import "../Popup.css";

const WinPopup = ({ resetGame, startNewGame, winner }) => {
  let isDraw = winner === "NoONe";
  return (
    <>
      <div className="popup">
        <h1 className="game-over">Game Over!!!</h1>
        <p className="win-statement">
          {isDraw ? (
            "It's a Draw!"
          ) : (
            <>
              <span className="winner-span">{winner}</span> Won the game
            </>
          )}{" "}
        </p>
        <div className="btn-container">
          <button
            className="btn btn-over"
            onClick={resetGame}
          >
            Reset
          </button>
          <button
            className=" btn btn-new"
            onClick={startNewGame}
          >
            New game
          </button>
        </div>
      </div>
    </>
  );
};

export default WinPopup;
