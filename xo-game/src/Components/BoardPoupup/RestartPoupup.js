import React from "react";
import "./boardPoupup.css";

export default function RestartPoupup({ togglePopup, onClick }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="container">
          <div className="restart">
            <h3 className="restart__title">Restart Game?</h3>
            <div className="restart__btns">
              <button className="btn btn-sm" onClick={togglePopup}>
                no, cancel
              </button>
              <button className="btn btn-yellow btn-sm" onClick={onClick}>
                yes, restart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
