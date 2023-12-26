import React, { useState } from "react";
import "./poupupName.css";

export default function PoupupName({ togglePopup, activePlayer, addName }) {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddName = () => {
    addName(name);
    togglePopup();
  };

  return (
    <div className="Popup-overlay">
      <div className="Popup-content">
        <label htmlFor="">
          Enter player{" "}
          <span style={{ margin: "0 5px", fontSize: "20px" }}>
            {activePlayer}
          </span>
          name :
        </label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="Name-input"
        />
        <div>
          <button className="name-btn" onClick={togglePopup}>
            Cancel
          </button>
          <button className="name-btn" onClick={handleAddName}>
            add name
          </button>
        </div>
      </div>
    </div>
  );
}
