import React, { useRef } from "react";
import "../Game.css";

const Game = ({ toggle, data, player, turn, firstPlayer }) => {
  const currentPlayer = turn % 2 === 0 ? "X" : "O";
  const playerName = currentPlayer === "X" ? player.X : player.O;
  const isFirstMove = data.every((cell) => cell === null);

  return (
    <>
      <h1 className="game-title">Game started!</h1>
      <div className="game-container">
        <div className="game-border">
          <h1 className="title-name">
            {isFirstMove
              ? `First Player: ${firstPlayer}`
              : `Current Turn: ${playerName}`}
          </h1>

          {/* Loop through rows dynamically */}
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className={`row row${row + 1}`}
            >
              {[0, 1, 2].map((col) => {
                const index = row * 3 + col;
                return (
                  <div
                    key={index}
                    className={`boxes ${col}`}
                    onClick={(e) => toggle(e, index)}
                  >
                    <span className="symbols">{data[index]}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
