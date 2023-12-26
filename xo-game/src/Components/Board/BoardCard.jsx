import React from "react";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import "./board.css";
export default function BoardCard({ user, active, index , onClick  }) {
  return (
    <div
      className={`card ${active && user === "X" && "shadow-blue"} ${
        active && user === "O" && "shadow-yellow"
      } ${!active ? "shadow-gray" : "active"}`}
      onClick={onClick}
    >
      {user === "X" && <Xicon color={active ? "dark" : undefined} size="lg" />}
      {user === "O" && <Oicon color={active ? "dark" : undefined} size="lg" />}
    </div>
  );
}
