import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import "./board.css";
import BoardCard from "./BoardCard";
import RestartPoupup from "../BoardPoupup/RestartPoupup";

const Board = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const players = location.state?.players || [];
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [isRestartPopupOpen, setIsRestartPopupOpen] = useState(false);
  const [xnext, setXnext] = useState(true);

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleToggleRestartPopup = () => {
    setIsRestartPopupOpen(!isRestartPopupOpen);
  };
  const handleToggleRestartPopupCallback = useCallback(() => {
    setSquares(new Array(9).fill(""));
    setXnext(true)
    handleToggleRestartPopup();
  }, [handleToggleRestartPopup]);

  const handleSquareClick = (ix) => {
    const currentUser = xnext ? "X" : "O";
    let copySquares = [...squares];
    copySquares[ix] = currentUser;
    setSquares(copySquares);
    setXnext(!xnext);
  };

  return (
    <div className="parent" style={{ position: "relative" }}>
      <button className="btn btn-sm btn-top-left" onClick={handleGoBack}>
        <i
          class="fa-solid fa-arrow-left"
          style={{ fontSize: "30px", fontWeight: "bold" }}
        ></i>
      </button>
      <div className="container">
        <div className="board">
          <div className="board__header">
            <div>
              <Xicon />
              <Oicon />
            </div>
            <div className="board__turn">
              {xnext ? (
                <Xicon color="light" size="sm" />
              ) : (
                <Oicon color="light" size="sm" />
              )}
              <span style={{ color: `${xnext ? "#30c4be" : "#f2b238"}` }}>
                -{xnext ? players[0].name : players[1].name}-{" "}
              </span>
              turn
            </div>
            <div>
              <button
                className="btn btn-sm board__restart"
                onClick={handleToggleRestartPopup}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="redo"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"
                  ></path>
                </svg>{" "}
              </button>
            </div>
          </div>
          <div className="board__body">
            {squares.map((sq, ix) => (
              <BoardCard
                key={ix}
                user={sq}
                index={ix}
                active={ix === 5}
                onClick={() => handleSquareClick(ix)}
              />
            ))}
          </div>
        </div>
      </div>
      {isRestartPopupOpen && (
        <RestartPoupup
          toggleRestartPopup={handleToggleRestartPopup}
          onClick={handleToggleRestartPopupCallback}
        />
      )}
    </div>
  );
};

export default Board;
