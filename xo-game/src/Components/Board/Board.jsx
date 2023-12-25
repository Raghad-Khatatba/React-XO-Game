import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import "./board.css";
import BoardCard from "./BoardCard";

const Board = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const players = location.state?.players || [];
  const squares = ["", "O", "X", "", "O", "X", "", "", ""];

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleReload = useCallback(() => {
    window.location.reload();
  }, []);

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
              <Xicon color="light" size="sm" />
              <span style={{ color: `#30c4be` }}>-{players[0].name}- </span>turn
            </div>
            <div>
              <button
                className="btn btn-sm board__restart"
                onClick={handleReload}
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
              <BoardCard key={ix} user={sq} index={ix} active={ix === 5} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
