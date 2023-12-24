import React, { useState } from "react";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import "./start.css";

export default function Start() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handlePlayerClick = (player) => {
    setActivePlayer(player);
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
            <button className="btn btn-yellow">
              Enter the name for player
              <span style={{ margin: "0 5px", fontSize: "20px" }}>
                {" "}
                {activePlayer}{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
