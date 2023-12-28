import React from "react";
import { useNavigate } from "react-router-dom";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import Lottie from "lottie-react";
import winAnimation from "../animation/win.json"

export default function WinPoupup({ PoupupMode, winner, winnerName ,onClick }) {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
      };
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="container">
            <div className="container2">
            {PoupupMode === "win" && (
                <div className="animation">
                    <Lottie style={{height:150}} loop={false} animationData={winAnimation} />
                </div>
            )}
          <div className="score">
            <p className="scoreP"> <span style={{color:`${ winner === "X" ? "#30c4be" : "#f2b238"}`}}>{winnerName}</span> win!</p>
            {PoupupMode === "win" && (
              <h3 className="score__title">
                {winner === "X" ? <Xicon /> : <Oicon />} Takes the round
              </h3>
            )}

            {PoupupMode === "Tie" && (
              <h3 className="score__title">The Game Result is Tie</h3>
            )}
            <div className="score__btns">
              <button className="btn btn-sm" onClick={handleGoBack}>Quit</button>
              <button className="btn btn-sm btn-yellow" onClick={onClick}>Restart</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
