import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import PoupupName from '../PoupupName/PoupupName';
import "./start.css";

export default function Start() {
  const navigate = useNavigate();
  const [activePlayer, setActivePlayer] = useState("X");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [players, setPlayers] = useState([
    { symbol: "X", name: "" },
    { symbol: "O", name: "" }
  ]);

  const handlePlayerClick = (player) => {
    setActivePlayer(player);
  };

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleAddName = (name) => {
    const updatedPlayers = players.map((player) =>
      player.symbol === activePlayer ? { ...player, name } : player
    );
    
    setPlayers(updatedPlayers);

    if (activePlayer === "X") {
      handlePlayerClick("O");
    }

    handleTogglePopup();
  };
  const handleButtonClick = () => {
    navigate("/board", { state: { players } });
  };

  return (
    <div className="parent">
      <div className="container">
        <div className="start">
          <div className="start_header">
            <Xicon />
            <Oicon />
          </div>
          <div className="card shadow-gray">
            <h1 className="text-lg">Pick player 1'st mark</h1>
            <div className="start_players">
              <span
                className={activePlayer === "X" ? "start_players--active" : ""}
                onClick={() => handlePlayerClick("X")}
              >
                <Xicon color={activePlayer === "X" ? "dark" : "light"} />
              </span>
              <span
                className={activePlayer === "O" ? "start_players--active" : ""}
                onClick={() => handlePlayerClick("O")}
              >
                <Oicon color={activePlayer === "O" ? "dark" : "light"} />
              </span>
            </div>
            <p className="text-light text-normal">remember: x goes first</p>
          </div>
          <div className="start_btns">
            <button className="btn btn-yellow" onClick={handleTogglePopup}>
              Enter the name for player
              <span style={{ margin: "0 5px", fontSize: "20px" }}>
                {" "}
                {activePlayer}{" "}
              </span>
            </button>
            {players.every(player => player.name !== "") && (
              <button className="btn btn-blue" onClick={handleButtonClick}>Start Game</button>
            )}
          </div>
          {isPopupOpen && (
            <PoupupName
              togglePopup={handleTogglePopup}
              activePlayer={activePlayer}
              addName={handleAddName}
            />
          )}
        </div>
      </div>
    </div>
  );
}
