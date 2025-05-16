import { useState } from "react";
import "./App.css";
import Game from "./Components/Game";
import Starter from "./Components/Starter";
import WinPopup from "./Components/WinPopup";

function App() {
  const [page, setPage] = useState("starter");
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");
  const [players, setPlayers] = useState({ X: "", O: "" });
  const [selectingFirstPlayer, setSelectingFirstPlayer] = useState(false);
  const [firstPlayer, setFirstPlayer] = useState("");

  const handleEnterGame = (playerX, playerO) => {
    setPlayers({ X: playerX, O: playerO });
    setSelectingFirstPlayer(true);
    setPage("game");
    setTimeout(() => {
      const randomCount = Math.floor(Math.random() * 2);
      setCount(randomCount);
      setFirstPlayer(randomCount === 0 ? playerX : playerO);
      setSelectingFirstPlayer(false);
    }, 2000);
  };

  const checkWin = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winPatterns) {
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        handleWin(board[a]);
        return;
      }
    }
    if (!board.includes(null)) {
      handleWin("NoOne");
    }
  };

  const handleWin = (player) => {
    if (player === "NoOne") {
      setWinner("NoOne");
    } else {
      setWinner(player === "X" ? players.X : players.O);
    }
    setLock(true);
    setPage("winPopup");
  };

  const toggle = (e, num) => {
    if (lock || data[num]) return;
    const newData = [...data];
    newData[num] = count % 2 === 0 ? "X" : "O";
    setData(newData);
    setCount(count + 1);
    checkWin(newData);
  };

  const resetGame = () => {
    setData(Array(9).fill(null));
    setCount(0);
    setLock(false);
    setWinner("");
    setPage("game");
    const randomCount = Math.floor(Math.random() * 2); // 0 or 1
    setCount(randomCount);
    setFirstPlayer(randomCount === 0 ? players.X : players.O);
  };

  const startNewGame = () => {
    setData(Array(9).fill(null));
    setCount(0);
    setLock(false);
    setWinner("");
    setPage("starter");
  };

  return (
    <div className="app-container">
      {page === "starter" && <Starter onEnter={handleEnterGame} />}
      {page === "game" &&
        (selectingFirstPlayer ? (
          <div className="selection-message">Selecting first player...</div>
        ) : (
          <Game
            toggle={toggle}
            data={data}
            turn={count}
            player={players}
            firstPlayer={firstPlayer}
          />
        ))}
      {page === "winPopup" && (
        <WinPopup
          winner={winner}
          resetGame={resetGame}
          startNewGame={startNewGame}
        />
      )}
    </div>
  );
}

export default App;
