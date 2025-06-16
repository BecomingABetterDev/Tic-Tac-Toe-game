import React from "react";
import "../Game.css";

const Game = ({ toggle, data, player, turn, firstPlayer, winPattern }) => {
  const currentPlayer = turn % 2 === 0 ? "X" : "O";
  const playerName = currentPlayer === "X" ? player.X : player.O;
  const isFirstMove = data.every((cell) => cell === null);

  const getLineClass = (pattern) => {
    const patterns = {
      "0,1,2": "horizontal top",
      "3,4,5": "horizontal middle",
      "6,7,8": "horizontal bottom",
      "0,3,6": "vertical left",
      "1,4,7": "vertical center",
      "2,5,8": "vertical right",
      "0,4,8": "diagonal main",
      "2,4,6": "diagonal anti",
    };
    return patterns[pattern.join(",")];
  };

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

          {/* Game board */}
          <div
            className="grid-wrapper"
            style={{ position: "relative", width: "332px", height: "332px" }}
          >
            {[0, 1, 2].map((row) => (
              <div
                key={row}
                className="row"
              >
                {[0, 1, 2].map((col) => {
                  const index = row * 3 + col;
                  return (
                    <div
                      key={index}
                      className="boxes"
                      onClick={(e) => toggle(e, index)}
                    >
                      <span className="symbols">{data[index]}</span>
                    </div>
                  );
                })}
              </div>
            ))}
            {winPattern && (
              <div className={`win-line ${getLineClass(winPattern)}`}></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
